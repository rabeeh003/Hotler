'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Input } from "@nextui-org/react";
import { User } from 'lucide-react';

const Profile: React.FC = () => {
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
                <Button variant="bordered" onClick={handleOpen} className="absolute top-2 text-white right-2 min-w-0 border-none" ><User /></Button>
            </div>
            <Modal
                size="md"
                isOpen={isOpen}
                onClose={handleClose}
                scrollBehavior='inside'
            >
                <ModalContent>
                    <>
                        <ModalHeader >Profile</ModalHeader>
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

export default Profile;
