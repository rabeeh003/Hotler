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
  Input,
  Pagination,
  Image,
  Switch,
  Avatar,
} from "@nextui-org/react";
import { ChevronDownIcon, EllipsisVertical, PlusIcon, SearchIcon } from "lucide-react";
import AddItem from "./AddItem";
import { useSelector } from "react-redux"; // Assuming you have a Redux setup

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
  imageUrl: string; // Added imageUrl property
};

const INITIAL_VISIBLE_COLUMNS = ["image", "product", "price", "offer", "count", "category", "actions"];

const ItemTable: React.FC<{ data: Array<object> }> = ({ data }) => {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  // Map the incoming data to the format expected by the table
  const rows: RowType[] = data.map((item: any) => ({
    key: item._id,
    product: item.name,
    price: item.price,
    offer: item.offerPrice || undefined,
    count: item.quantity,
    category: item.category?.name,
    imageUrl: item.image, // Add imageUrl from data
  }));

  const columns = [
    { key: "image", label: "IMAGE" },
    { key: "product", label: "PRODUCT" },
    { key: "price", label: "PRICE" },
    { key: "offer", label: "OFFER PRICE" },
    { key: "count", label: "STOCK" },
    { key: "category", label: "CATEGORY" },
    { key: "actions", label: "" },
  ];

  // Fetch categories from the Redux store
  const categories = useSelector((state: any) => state.categories) || [];
  const statusOptions = [{ name: "All", uid: "all" }, ...categories];

  const [filterValue, setFilterValue] = useState<string>("");
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);
  const [visibleColumns, setVisibleColumns] = useState<Set<string>>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({ column: 'defaultKey', direction: 'ascending' });
  const [page, setPage] = useState<number>(1);
  const [highlightRows, setHighlightRows] = useState<boolean>(false);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns.has("all")) return columns;
    return columns.filter((column) => visibleColumns.has(column.key));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredRows = [...rows];
    if (hasSearchFilter) {
      filteredRows = filteredRows.filter((row) =>
        row.product.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (statusFilter !== "all") {
      filteredRows = filteredRows.filter((row) => row.category === statusFilter);
    }
    return filteredRows;
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
    } else if (columnKey === "image") {
      return <Avatar src={item.imageUrl} alt={item.product} radius="full" isBordered />;
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

  const toggleHighlight = useCallback(() => {
    setHighlightRows(!highlightRows);
  }, [highlightRows]);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[34%] "
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={onClear}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            {/* <Dropdown>
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
            </Dropdown> */}
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
            <AddItem />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {rows.length} items</span>
          <div className="flex items-center gap-2">
            <label className="flex items-center text-default-400 text-small">
              Rows per page:
              <select
                className="ml-2 bg-transparent cursor-pointer text-primary focus
"
                value={rowsPerPage}
                onChange={onRowsPerPageChange}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    );
  }, [
    rows.length,
    filterValue,
    onClear,
    onSearchChange,
    rowsPerPage,
    statusOptions,
    statusFilter,
    visibleColumns,
    columns,
    onRowsPerPageChange,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="flex justify-between items-center">
        <Pagination
          showControls
          isCompact
          isDisabled={pages <= 1}
          page={page}
          // onNext={onNextPage}
          // onPrevious={onPreviousPage}
          total={pages}
        />
        <div className="flex gap-2 items-center">
          <span className="text-default-400 text-small">Highlight rows with low stock</span>
          <Switch isSelected={highlightRows} onValueChange={toggleHighlight} />
        </div>
      </div>
    );
  }, [pages, page, highlightRows, onNextPage, onPreviousPage, toggleHighlight]);

  return (
    <Table
      aria-label="Table with custom cells, pagination, and sorting"
      bottomContent={bottomContent}
      topContent={topContent}
      selectedKeys={selectedKeys}
      // onSelectionChange={setSelectedKeys}
      sortDescriptor={sortDescriptor}
      // onSortChange={setSortDescriptor}
      // className="mt-4"
      isHeaderSticky
      bottomContentPlacement="outside" // Place outside to make sticky header
    // containerProps={{
    //   className: "max-h-[388px]",
    // }}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.key}
            allowsSorting={column.key !== "actions"}
          // width={column.key === "actions" ? "100px" : "auto"}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={sortedItems} emptyContent="No items to display.">
        {(item) => (
          <TableRow
            key={item.key}
            className={
              "mouse-pointer " +
              (highlightRows
                ? item.count <= 5
                  ? "text-red-500 "
                  : item.count <= 10
                    ? "text-yellow-500"
                    : ""
                : "")
            }
          >
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey.toString())}</TableCell>
            )}
          </TableRow>
        )}


      </TableBody>
    </Table>
  );
};

export default ItemTable;