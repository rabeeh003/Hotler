'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Input } from "@nextui-org/react";

const Banner: React.FC<{label:String}> = ({label}) => {
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
                <Button onPress={handleOpen} size='sm' className='min-w-0 w-full my-2' variant='ghost' color='warning'>{label}</Button>
            </div>
            <Modal
                size="md"
                isOpen={isOpen}
                onClose={handleClose}
                scrollBehavior='inside'
            >
                <ModalContent>
                    <>
                        <ModalHeader >Banner</ModalHeader>
                        <ModalBody >
                            <div className='md:flex flex-wrap w-full justify-around gap-1'>
                                <div className='flex-1 text-center p-2 grid justify-center gap-2 '>
                                    <Input
                                        type="file"
                                        label="Banner"
                                        labelPlacement="outside"
                                        description="outside"
                                    />
                                </div>
                            </div>
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Banner;
