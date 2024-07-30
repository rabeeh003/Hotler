'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image } from "@nextui-org/react";
import FileInput from './FileInput';

const AddItem: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <Button onPress={handleOpen} className='min-w-0 my-2' variant='ghost' color='secondary'>Add Products</Button>
            </div>
            <Modal
                size="5xl"
                isOpen={isOpen}
                onClose={handleClose}
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Add product</ModalHeader>
                        <ModalBody className='flex justify-center items-center w-full'>
                            <div>
                                {selectedImage ? (
                                    <>
                                        <Image
                                            isBlurred
                                            width={240}
                                            src={URL.createObjectURL(selectedImage)}
                                            alt="NextUI Album Cover"
                                            className="m-5"
                                        />
                                        <Button variant='bordered' color='danger' onClick={()=> setSelectedImage(null)}>Remove</Button>
                                    </>

                                ) : (
                                    <FileInput setSelectedFile={setSelectedImage} />
                                )}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={handleClose}>
                                Cancel
                            </Button>
                            <Button color="primary" onPress={handleClose}>
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
