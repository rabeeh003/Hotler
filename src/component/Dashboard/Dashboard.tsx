"use client";
import React from "react";
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
  ChipProps,
} from "@nextui-org/react";
import { EllipsisVertical } from "lucide-react";

function Dashboard() {
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      products: [
        { name: "Tea", count: 2 },
        { name: "Coffee", count: 1 },
        { name: "Juice", count: 3 },
      ],
      status: "ordered",
    },
    {
      key: "2",
      name: "Zoey Lang",
      products: [
        { name: "Tea", count: 1 },
        { name: "Juice", count: 2 },
      ],
      status: "pending",
    },
    {
      key: "3",
      name: "Jane Fisher",
      products: [
        { name: "Coffee", count: 2 },
        { name: "Juice", count: 1 },
      ],
      status: "delivery",
    },
    {
      key: "4",
      name: "William Howard",
      products: [
        { name: "Tea", count: 3 },
        { name: "Coffee", count: 2 },
      ],
      status: "canceled",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "products",
      label: "PURCHASED ITEMS",
    },
    {
      key: "status",
      label: "STATUS",
    },
    {
      key: "actions",
      label: "ACTIONS",
    },
    {
      key: "moreActions",
      label: "",
    },
  ];

  const statusColorMap: Record<string, ChipProps["color"]> = {
    pending: "success",
    canceled: "danger",
    delivery: "warning",
    ordered: "secondary",
    paid: "primary",
  };

  const renderCell = (item: any, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof typeof item];
    switch (columnKey) {
      case "products":
        return (
          <div>
            {cellValue.map((product: { name: string; count: number }, index: number) => (
              <div key={index}>
                {product.name} ({product.count})
              </div>
            ))}
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[item.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="flex gap-2">
            {item.status === "ordered" && (
              <Button size="sm" variant="ghost" color="warning" onClick={() => handleAction(item.key, "delivered")}>
                Delivered
              </Button>
            )}
            {item.status === "pending" && (
              <Button size="sm" variant="ghost" color="secondary" onClick={() => handleAction(item.key, "paid")}>
                Paid
              </Button>
            )}
            {item.status === "delivery" && <Button size="sm" variant="ghost" color="success">Delivered</Button>}
            {item.status === "canceled" && <Button size="sm" variant="ghost" color="danger">Canceled</Button>}
          </div>
        );
      case "moreActions":
        return (
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly size="sm" variant="light">
              <EllipsisVertical />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem onClick={() => handleAction(item.key, "edit")}>Edit</DropdownItem>
              <DropdownItem onClick={() => handleAction(item.key, "cancel")} className="text-danger">Cancel</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      default:
        return cellValue;
    }
  };

  const handleAction = (key: string, action: string) => {
    console.log(`Action "${action}" on row with key "${key}"`);
    // Implement the action logic here
  };

  return (
    <div className="w-full">
      <Table aria-label="Example table with products and actions" selectionMode="none" style={{ width: "100%" }}>
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody emptyContent={"No rows to display."} items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Dashboard;
