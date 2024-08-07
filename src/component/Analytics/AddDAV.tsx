'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";

const AddDAV: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
            <Button onPress={handleOpen}  className='min-w-0' variant='ghost' color='primary'>Add</Button>
            </div>
            <Modal
                size="md"
                isOpen={isOpen}
                onClose={handleClose}
                scrollBehavior='inside'
            >
                <ModalContent>
                    <>
                        <ModalHeader >Cash Register</ModalHeader>
                        <ModalBody >
                            <div className='md:flex flex-wrap w-full justify-around gap-1'>
                                <Input size='sm' label="Category name" className='w-full md:max-w-[300px]' />
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

export default AddDAV;
