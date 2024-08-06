'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Input } from "@nextui-org/react";
import FileInput from './FileInput';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Trash } from 'lucide-react';

const AddCategory: React.FC = () => {
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
                <Button onPress={handleOpen} size='sm' className='min-w-0 w-full my-2' variant='ghost' color='secondary'>Add Category</Button>
            </div>
            <Modal
                size="md"
                isOpen={isOpen}
                onClose={handleClose}
                scrollBehavior='inside'
            >
                <ModalContent>
                    <>
                        <ModalHeader >Add category</ModalHeader>
                        <ModalBody >
                            <div className='md:flex flex-wrap w-full justify-around gap-1'>
                                <div className='flex-1 text-center p-2 grid justify-center gap-2 '>
                                    {selectedImage ? (
                                        <>
                                            <Image
                                                isBlurred
                                                width={240}
                                                src={URL.createObjectURL(selectedImage)}
                                                alt="NextUI Album Cover"
                                                className="max-w-20 m-auto"
                                            />
                                            <Button variant='bordered' className='border-none' color='danger' onClick={() => setSelectedImage(null)}><Trash /></Button>
                                        </>
                                    ) : (
                                        <FileInput setSelectedFile={setSelectedImage} />
                                    )}
                                    <Input size='sm' label="Category name" className='w-full md:max-w-[300px]' />
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

export default AddCategory;
