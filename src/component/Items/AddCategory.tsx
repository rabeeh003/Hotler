'use client'
import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Input } from "@nextui-org/react";
import FileInput from './FileInput';
import { Trash } from 'lucide-react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/config/firbase';
import { v4 } from 'uuid'
import shopAPI from '../../../lib/axios/shop';
import { useAppDispatch, useAppSelector } from '../../../lib/redux/hooks';
import { RootState } from '../../../lib/redux/store';
import { fetchCategoryData } from '../../../lib/redux/reduceres/categoryAndProduct';

const AddCategory: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [category, setCategory] = React.useState('');
    const { id } = useAppSelector(
        (state: RootState) => state.shop
    );

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const dispatch = useAppDispatch();
    const shopId = useAppSelector((state) => state.shop.id);

    const submit = () => {
        if (selectedImage && category && id) {
            const imageRef = ref(storage, `files/category/${v4()}`)
            uploadBytes(imageRef, selectedImage).then((value) => {
                console.log("image uploaded", value)
                getDownloadURL(value.ref).then((url) => {
                    console.log(url)
                    let imageUrl = url
                    console.log(
                        {
                            shop: id,
                            name: category,
                            image: imageUrl
                        }
                    );
                    if (imageUrl) {
                        shopAPI.post('/api/category/add-category', {
                            shop: id,
                            name: category,
                            image: imageUrl
                        }).then((response) => {
                            console.log(response, "Category Successfully Added")
                            if (shopId !== null) {
                                dispatch(fetchCategoryData(shopId));
                            }
                            handleClose()
                        }).catch((error) => {
                            console.log(error)
                        })
                    }
                })
            }).catch((error) => {
                console.log(error)
            })
        }
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
                                    <Input size='sm' onChange={(e) => setCategory(e.target.value)} label="Category name" className='w-full md:max-w-[300px]' />
                                </div>

                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={handleClose}>
                                Cancel
                            </Button>
                            <Button color="secondary" onPress={() => submit()}>
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
