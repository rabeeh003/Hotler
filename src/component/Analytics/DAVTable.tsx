"use client";
import React, { useState, useMemo, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Chip,
  Input,
  Pagination,
} from "@nextui-org/react";
import { ChevronDownIcon, EllipsisVertical, PlusIcon, SearchIcon } from "lucide-react";
import AddDAV from "./AddDAV";

type Key = string | number;

type SortDescriptor = {
  column: string;
  direction: "ascending" | "descending";
};

type RowType = {
  key: string | number;
  label: string;
  amount: number;
  dt: string;
  type: string;
  total: number;
};

const INITIAL_VISIBLE_COLUMNS = ["label", "amount", "dt", "type", "total", "actions"];

const DAVTable: React.FC = () => {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  const columns = [
    { key: "label", label: "Label" },
    { key: "amount", label: "Amount" },
    { key: "dt", label: "Date and Time" },
    { key: "type", label: "Type" },
    { key: "total", label: "Total" },
  ];
  
  const rows = [
    { key: 1, label: "Deposit", amount: 1000, dt: "2024-08-01 10:00", type: "Credit", total: 1000 },
    { key: 2, label: "Withdrawal", amount: 200, dt: "2024-08-01 12:00", type: "Debit", total: 800 },
    { key: 3, label: "Deposit", amount: 500, dt: "2024-08-02 09:00", type: "Credit", total: 1300 },
    { key: 4, label: "Withdrawal", amount: 300, dt: "2024-08-02 14:00", type: "Debit", total: 1000 },
    { key: 5, label: "Deposit", amount: 700, dt: "2024-08-03 11:00", type: "Credit", total: 1700 },
    { key: 6, label: "Withdrawal", amount: 400, dt: "2024-08-03 15:00", type: "Debit", total: 1300 },
    { key: 7, label: "Deposit", amount: 600, dt: "2024-08-04 10:30", type: "Credit", total: 1900 },
    { key: 8, label: "Withdrawal", amount: 500, dt: "2024-08-04 13:45", type: "Debit", total: 1400 },
    { key: 9, label: "Deposit", amount: 800, dt: "2024-08-05 09:15", type: "Credit", total: 2200 },
    { key: 10, label: "Withdrawal", amount: 100, dt: "2024-08-05 16:00", type: "Debit", total: 2100 },
    { key: 11, label: "Deposit", amount: 900, dt: "2024-08-06 08:45", type: "Credit", total: 3000 },
    { key: 12, label: "Withdrawal", amount: 300, dt: "2024-08-06 11:30", type: "Debit", total: 2700 },
    { key: 13, label: "Deposit", amount: 750, dt: "2024-08-07 07:50", type: "Credit", total: 3450 },
    { key: 14, label: "Withdrawal", amount: 450, dt: "2024-08-07 14:25", type: "Debit", total: 3000 },
    { key: 15, label: "Deposit", amount: 850, dt: "2024-08-08 10:00", type: "Credit", total: 3850 },
    { key: 16, label: "Withdrawal", amount: 600, dt: "2024-08-08 12:30", type: "Debit", total: 3250 },
    { key: 17, label: "Deposit", amount: 950, dt: "2024-08-09 09:20", type: "Credit", total: 4200 },
    { key: 18, label: "Withdrawal", amount: 200, dt: "2024-08-09 15:10", type: "Debit", total: 4000 },
  ];
  
  const statusOptions = [
    { name: "Credit", uid: "Credit" },
    { name: "Debit", uid: "Debit" },
  ];

  const [filterValue, setFilterValue] = useState<string>("");
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);
  const [visibleColumns, setVisibleColumns] = useState<Set<string>>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({ column: 'defaultKey', direction: 'ascending' });
  const [page, setPage] = useState<number>(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns.has("all")) return columns;
    return columns.filter((column) => visibleColumns.has(column.key));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...rows];
    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((row) =>
        row.label.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((row) => row.type === statusFilter);
    }
    return filteredUsers;
  }, [rows, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column as keyof RowType];
      const second = b[sortDescriptor.column as keyof RowType];
      if (first && second) {
        const cmp = first < second ? -1 : first > second ? 1 : 0;
        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      }
      return 0;
    });
  }, [sortDescriptor, items]);

  const renderCell = (item: RowType, columnKey: string) => {
    const cellValue = item[columnKey as keyof typeof item];
    return cellValue;
  };

  const handleAction = (key: string, action: string) => {
    console.log(`Action "${action}" on row with key "${key}"`);
  };

  const onNextPage = useCallback(() => {
    if (page < pages) setPage(page + 1);
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) setPage(page - 1);
  }, [page]);

  const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value: string) => {
    setFilterValue(value);
    setPage(1);
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%] "
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={onClear}
            onValueChange={onSearchChange}
          />
            <AddDAV />
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <Chip
            className="capitalize"
            color={statusFilter === "all" ? "primary" : "default"}
            onClick={() => setStatusFilter("all")}
            variant={statusFilter === "all" ? "flat" : "faded"}
          >
            All
          </Chip>
          {statusOptions.map((status) => (
            <Chip
              key={status.uid}
              className="capitalize"
              color={statusFilter === status.uid ? "primary" : "default"}
              onClick={() => setStatusFilter(status.uid)}
              variant={statusFilter === status.uid ? "flat" : "faded"}
            >
              {status.name}
            </Chip>
          ))}
        </div>
      </div>
    );
  }, [statusFilter, filterValue, onClear, onSearchChange]);

  const bottomContent = useMemo(() => {
    return (
      <div className="flex w-full justify-between items-center">
        <Pagination
          showControls
          isCompact
          page={page}
          total={pages}
          onChange={(newPage) => setPage(newPage)}
          className="mt-4"
        />
        <div className="flex items-center gap-2">
          <label className="hidden sm:flex text-small">Rows per page:</label>
          <select
            className="rounded-lg bg-default-100 text-default-900"
            onChange={onRowsPerPageChange}
            value={rowsPerPage}
          >
            <option value={5}>5</option>
            <option value={7}>7</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>
    );
  }, [page, pages, rowsPerPage, onRowsPerPageChange]);

  return (
    <Table
      aria-label="Example table with custom cells"
      sortDescriptor={sortDescriptor}
      // onSortChange={setSortDescriptor}
      topContent={topContent}
      bottomContent={bottomContent}
      selectedKeys={selectedKeys}
      // onSelectionChange={setSelectedKeys}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn key={column.key} align="start">
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No items found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey.toString())}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DAVTable;
