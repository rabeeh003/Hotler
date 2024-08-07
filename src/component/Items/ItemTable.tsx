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
import AddItem from "./AddItem";

// Define types for sort descriptor and table key
type Key = string | number;

type SortDescriptor = {
  column: string;
  direction: "ascending" | "descending";
};

type RowType = {
  key: string;
  product: string;
  price: number;
  offer?: number;
  count: number;
  category: string;
};



const INITIAL_VISIBLE_COLUMNS = ["product", "price", "offer", "count", "category", "actions"];

const ItemTable: React.FC = () => {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  const rows: RowType[] = [
    { key: "1", product: "Vada", price: 10, count: 24, category: "Snacks" },
    { key: "2", product: "Light tea", price: 10, count: 100, category: "Drinks" },
    { key: "3", product: "Mandi", price: 130, offer: 100, count: 94, category: "Mandi & alfahm" },
    { key: "4", product: "Chicken biriyani", price: 120, offer: 100, count: 200, category: "Biriyani" },
    { key: "11", product: "Vada", price: 10, count: 24, category: "Snacks" },
    { key: "21", product: "Light tea", price: 10, count: 100, category: "Drinks" },
    { key: "31", product: "Mandi", price: 130, offer: 100, count: 94, category: "Mandi & alfahm" },
    { key: "41", product: "Chicken biriyani", price: 120, offer: 100, count: 200, category: "Biriyani" },
    { key: "12", product: "Vada", price: 10, count: 24, category: "Snacks" },
    { key: "23", product: "Light tea", price: 10, count: 100, category: "Drinks" },
    { key: "33", product: "Mandi", price: 130, offer: 100, count: 94, category: "Mandi & alfahm" },
    { key: "43", product: "Chicken biriyani", price: 120, offer: 100, count: 200, category: "Biriyani" },
    { key: "11", product: "Vada", price: 10, count: 24, category: "Snacks" },
    { key: "23", product: "Light tea", price: 10, count: 100, category: "Drinks" },
    { key: "31", product: "Mandi", price: 130, offer: 100, count: 94, category: "Mandi & alfahm" },
    { key: "45", product: "Chicken biriyani", price: 120, offer: 100, count: 200, category: "Biriyani" },
  ];

  const columns = [
    { key: "product", label: "PRODUCT" },
    { key: "price", label: "PRICE" },
    { key: "offer", label: "OFFER PRICE" },
    { key: "count", label: "STOCK" },
    { key: "category", label: "CATEGORY" },
    { key: "actions", label: "" },
  ];

  const statusOptions = [
    { name: "Snacks", uid: "Snacks" },
    { name: "Drinks", uid: "Drinks" },
    { name: "Biriyani", uid: "Biriyani" },
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
        row.product.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((row) => row.category === statusFilter);
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
    if (columnKey === "actions") {
      return (
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly size="sm" variant="light">
              <EllipsisVertical />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem onClick={() => handleAction(item.key, "edit")}>Edit</DropdownItem>
            <DropdownItem onClick={() => handleAction(item.key, "delete")} className="text-danger">Delete</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
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
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} color="secondary" variant="flat">
                  Category
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={new Set([statusFilter])}
                selectionMode="single"
                onSelectionChange={(keys) => setStatusFilter(Array.from(keys).join(","))}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} color="secondary" variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={(keys) => setVisibleColumns(new Set(Array.from(keys) as string[]))}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.key} className="capitalize">
                    {capitalize(column.label)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <AddItem/>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {rows.length} items</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, statusFilter, visibleColumns, onRowsPerPageChange, rows.length, onSearchChange, onClear]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">Showing {items.length} of {filteredItems.length}</span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="secondary"
          page={page}
          total={pages}
          initialPage={1}
          onChange={(p) => setPage(p)}
        />
      </div>
    );
  }, [page, pages, items.length, filteredItems.length]);

  return (
    <Table
      isHeaderSticky
      aria-label="Example table with dynamic content"
      classNames={{
        wrapper: "min-h-[60vh]",
        table: "overflow-visible",
      }}
      topContent={topContent}
      bottomContent={bottomContent}
      selectedKeys={selectedKeys}
      // onSelectionChange={(keys: Key[]) => setSelectedKeys(keys)}
      sortDescriptor={sortDescriptor}
      // onSortChange={(descriptor: SortDescriptor) => setSortDescriptor(descriptor)}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn key={column.key} allowsSorting>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody className="flex items-start " items={sortedItems}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{renderCell(item,columnKey.toString())}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ItemTable;
