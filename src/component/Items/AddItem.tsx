'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Input } from "@nextui-org/react";
import FileInput from './FileInput';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Trash } from 'lucide-react';

const AddItem: React.FC = () => {
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

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <Button onPress={handleOpen} size='sm' className='min-w-0 w-full my-2' variant='ghost' color='secondary'>Add Products</Button>
            </div>
            <Modal
                size="xl"
                isOpen={isOpen}
                onClose={handleClose}
                scrollBehavior='inside'
            >
                <ModalContent>
                    <>
                        <ModalHeader >Add product</ModalHeader>
                        <ModalBody >
                            <div className='md:flex flex-wrap w-full justify-around gap-1'>
                                <div className='grid justify-center text-center p-2'>
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
                                <div className='flex-1 flex flex-wrap gap-1 justify-between py-1 md:py-0'>
                                    <Input size='sm' label="Item name" className='w-full' />
                                    <Input size='sm' label="Category" className='w-full' />
                                    <div className='w-full'>
                                            <p className='text-gray-400 text-sm' >Select quantity type</p>
                                            <Dropdown>
                                                <DropdownTrigger>
                                                    <Button
                                                        className="bg-zinc-800 w-full items-start text-left mt-1  p-3 text-gray-400 border-none rounded-lg"
                                                    >
                                                        {selectedValue ? selectedValue : "Select quantity type"}
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu
                                                    aria-label="Multiple selection for quantity type"
                                                    variant="flat"
                                                    closeOnSelect={false}
                                                    // defaultSelectedKeys={'all'}
                                                    disallowEmptySelection
                                                    selectionMode="multiple"
                                                    selectedKeys={selectedKeys}
                                                    onSelectionChange={setSelectedKeys}
                                                >
                                                    <DropdownItem description="ex : 1, 2, 3" key="count">Count</DropdownItem>
                                                    <DropdownItem description="ex : 1kg, 2kg" key="kg">KG</DropdownItem>
                                                    <DropdownItem description="ex : Quater, Half, full" key="custom">Custom</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                </div>
                                <div className=' flex flex-wrap gap-1 md:py-0'>
                                    <div className='flex md:grid flex-wrap justify-between md:justify-end w-full gap-1 h-0'>
                                        <Input size='sm' label="Quantity" className='w-full sm:max-w-[80px]' />
                                        <Input size='sm' label="Price" className='w-full  sm:max-w-[80px]' />
                                        <Input size='sm' label="Offer Price" className='w-full sm:max-w-[80px]' />
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

export default AddItem;
