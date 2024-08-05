"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Kbd,
  Tooltip,
} from "@nextui-org/react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Input } from "@nextui-org/react";
import QuantityInput from "./Quality-suggetion-input";
import ItemCard from "@/component/Dashboard/ItemCard";
import { PlusCircle } from "lucide-react";

function ItemsList() {
  const rows = [
    {
      key: "1",
      product: "Black tea",
      quantity: 0.5,
      price: 50,
      quantityTypes: ["count"],
    },
    {
      key: "2",
      product: "Alfahm",
      quantity: 0.5,
      price: 50,
      quantityTypes: ["count", "kg"],
    },
    {
      key: "3",
      product: "Mandi rice",
      quantity: 0.5,
      price: 50,
      quantityTypes: ["custom", "count", "kg"],
    },
    {
      key: "4",
      product: "7up",
      quantity: 1,
      price: 50,
      quantityTypes: ["count"],
    },
  ];

  const columns = [
    {
      key: "product",
      label: "PRODUCT",
    },
    {
      key: "quantity",
      label: "QUANTITY",
    },
    {
      key: "price",
      label: "PRICE",
    },
    {
      key: "moreActions",
      label: "",
    },
  ];

  const renderCell = (item: any, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof typeof item];
    switch (columnKey) {
      case "quantity":
        return (
          <div className="flex gap-2">
            <QuantityInput quantityTypes={item.quantityTypes} />
          </div>
        );
      case "moreActions":
        return (
          <Button size="sm" variant="ghost" color="danger">
            Remove
          </Button>
        );
      default:
        return cellValue;
    }
  };

  // Model for add item
  const [isOpen, setIsOpen] = useState(false);
  const [itemSearch, setItemSearch] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'm') {
        handleOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center mb-4">
        <Tooltip showArrow={true} content={
          <div className="px-1 py-2">
            <div className="text-small font-bold">Open Menu</div>
            <div className="text-tiny">Use <Kbd>Ctrl</Kbd> + <Kbd>M</Kbd> for Shortcut</div>
          </div>
        }>
          <Button
            variant="shadow"
            onPress={handleOpen}
            color="success"
            size="sm"
            className="md:absolute md:bottom-10 md:left-16 w-full md:w-auto z-50 text-white md:min-w-16 md:min-h-16 md:rounded-full p-0 m-0 flex"
          >
            <PlusCircle className="md:size-16" />
            <span className="md:hidden">Add itemSearch</span>
          </Button>
        </Tooltip>
      </div>
      <Table aria-label="Example table with products and actions" className="mt-3 md:mt-0" selectionMode="single" style={{ width: "100%" }}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No rows to display."} items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal
        size={"5xl"}
        className="h-[80vh]"
        isOpen={isOpen}
        onClose={handleClose}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex gap-1 justify-between">
              <span className="hidden md:flex">Menu</span>
              <Input type="text" size="sm" onChange={(e) => setItemSearch(e.target.value)} className="w-full max-w-80 mx-3" label="Search" />
            </ModalHeader>
            <ModalBody>
              {itemSearch ? (
                <div className="flex my-2 flex-wrap gap-3 justify-evenly max-h-[70vh]">
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                </div>
              ) : (
                <div className="flex my-2 flex-wrap gap-3 justify-evenly max-h-[70vh]">
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                </div>
              )}
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ItemsList;
