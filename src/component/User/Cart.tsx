'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Input } from "@nextui-org/react";
import { Donut, User } from 'lucide-react';

const Cart: React.FC = () => {
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
                <span onClick={handleOpen} className="fixed bottom-3 right-3 z-50 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-500 text-white" ><Donut size={30} /></span>
            </div>
            <Modal
                size="md"
                isOpen={isOpen}
                onClose={handleClose}
                scrollBehavior='inside'
            >
                <ModalContent>
                    <>
                        <ModalHeader >Cart</ModalHeader>
                        <ModalBody >
                            <div className='grid gap-2'>
                                <Input size='sm' type='text' label="Name" className='w-full' />
                                <Input size='sm' type='number' label="Phone" className='w-full' />
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

export default Cart;
