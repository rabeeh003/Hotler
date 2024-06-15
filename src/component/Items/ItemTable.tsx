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

export default function ItemTable() {
    const rows = [
        {
            key: "1",
            product: "Vada",
            price: 10,
            count: 24,
            category: 'Snaks',
        },
        {
            key: "2",
            product: "Light tea",
            price: 10,
            count: 100,
            category: 'Drinks',
        },
        {
            key: "3",
            product: "Mandi",
            price: 130,
            count: 94,
            category: 'Mandi & alfahm',
        },
        {
            key: "4",
            product: "Chicken biriyani",
            price: 120,
            count: 200,
            category: 'Biriyani',
        },
    ];

    const columns = [
        {
            key: "image",
            label: "Image",
        },
        {
            key: "product",
            label: "PRODUCT",
        },
        {
            key: "price",
            label: "PRICE",
        },
        {
            key: "count",
            label: "STOCK",
        },
        {
            key: "category",
            label: "CATEGORY",
        },
        {
            key: "actions",
            label: "",
        },
    ];


    const renderCell = (item: any, columnKey: React.Key) => {
        const cellValue = item[columnKey as keyof typeof item];
        switch (columnKey) {
            case "actions":
                return (
                    <Dropdown>
                        <DropdownTrigger>
                            <Button isIconOnly size="sm" variant="light">
                                <EllipsisVertical />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem onClick={() => handleAction(item.key, "edit")}>Edit</DropdownItem>
                            <DropdownItem onClick={() => handleAction(item.key, "cancel")} className="text-danger">Delete</DropdownItem>
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
            <Table className="border-none " aria-label="Example table with products and actions" selectionMode="single" style={{ width: "100%" }}>
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
