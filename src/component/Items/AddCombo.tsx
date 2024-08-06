'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Input, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import FileInput from './FileInput';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Trash } from 'lucide-react';

const AddCombo: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["count"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    // foods selection
    const foods = [
        {label: "Biriyani", value: "biriyani"},
        {label: "7up", value: "7up"},
    ] 

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <Button onPress={handleOpen} size='sm' className='min-w-0 w-full my-2' variant='ghost' color='secondary'>Add Combo</Button>
            </div>
            <Modal
                size="md"
                isOpen={isOpen}
                onClose={handleClose}
                scrollBehavior='inside'
            >
                <ModalContent>
                    <>
                        <ModalHeader >Add combo</ModalHeader>
                        <ModalBody >
                            <div className='grid w-full justify-around gap-1'>
                                <div className='flex-1 text-center p-2 grid justify-center gap-2 '>
                                    {selectedImage ? (
                                        <>
                                            <Image
                                                isBlurred
                                                width={240}
                                                src={URL.createObjectURL(selectedImage)}
                                                alt="NextUI Album Cover"
                                                className="max-w-20"
                                            />
                                            <Button variant='bordered' color='danger' className='border-none' onClick={() => setSelectedImage(null)}><Trash /></Button>
                                        </>
                                    ) : (
                                        <FileInput setSelectedFile={setSelectedImage} />
                                    )}
                                </div>
                                <div className='grid justify-center gap-2'>
                                    <Input size='sm' label="Combo name" className='w-full' />
                                    <Input size='sm' label="Description" className='w-full' />
                                    <div className='mt-4'>

                                        <div className='grid sm:flex gap-1'>
                                            <Autocomplete
                                                label="Item"
                                                placeholder="Search an item"
                                                variant="bordered"
                                                defaultItems={foods}
                                                className="max-w-xs"
                                            >
                                                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                                            </Autocomplete>
                                            <Autocomplete
                                                label="Qantity"
                                                placeholder="Count, KG, Custom"
                                                variant="bordered"
                                                defaultItems={foods}
                                                className="max-w-xs"
                                            >
                                                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                                            </Autocomplete>
                                        </div>
                                        <Button variant='solid' className='w-full mt-2'> Add item</Button>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={handleClose}>
                                Cancel
                            </Button>
                            <Button color="secondary" onPress={handleClose}>
                                Add
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddCombo;
