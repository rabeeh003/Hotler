'use client'
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Input, Textarea, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import FileInput from './FileInput';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Trash } from 'lucide-react';
import shopAPI from '../../../lib/axios/shop';
import { useAppSelector } from '../../../lib/redux/hooks';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '@/config/firbase';
import { z } from 'zod';

const schema = z.object({
    name: z.string().min(2, "Name is required"),
    category: z.string().min(1, "Category is required"),
    price: z.string().min(1, "Price is required"),
    offerPrice: z.string().optional(),
    description: z.string().min(10, "Description is required"),
    quantity: z.string().min(1, "Quantity is required"),
    quantityType: z.array(z.string()).min(1, "Quantity Type is required"),
});

const AddItem: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["count"]));
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        offerPrice: '',
        description: '',
        quantity: '',
        quantityType: Array.from(selectedKeys),
    });
    const [errors, setErrors] = useState<any>({});

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

    const shopId = useAppSelector((state) => state.shop.id);
    const categoryData = useAppSelector((state) => state.categoryAndProducts.categories);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const validateForm = () => {
        try {
            schema.parse({
                ...formData,
                quantityType: Array.isArray(formData.quantityType) ? formData.quantityType : [formData.quantityType],
            });
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorObj = error.format();
                setErrors(errorObj);
            }
            return false;
        }
    }

    const submit = () => {
        if (!validateForm()) return;

        if (selectedImage) {
            const imageRef = ref(storage, `files/product/${v4()}`);
            uploadBytes(imageRef, selectedImage).then((value) => {
                getDownloadURL(value.ref).then((url) => {
                    const imageUrl = url;
                    const validatedData = {
                        ...formData,
                        quantityType: Array.isArray(formData.quantityType) ? formData.quantityType : [formData.quantityType],
                    };
                    shopAPI.post("api/products/create-product", {
                        ...validatedData,
                        shop: shopId,
                        image: imageUrl
                    }).then((response) => {
                        console.log(response, "Product Successfully Added");
                        handleClose();
                    }).catch((error) => {
                        console.log(error);
                    });
                }).catch((error) => {
                    console.log(error);
                });
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <>
            <div className="">
                <Button onPress={handleOpen} className='min-w-0' variant='ghost' color='secondary'>Add New</Button>
            </div>
            <Modal
                size="xl"
                isOpen={isOpen}
                onClose={handleClose}
                scrollBehavior='inside'
            >
                <ModalContent>
                    <>
                        <ModalHeader>Add product</ModalHeader>
                        <ModalBody>
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
                                    <Input size='sm' label="Item name" type='text' className='w-full' name='name' value={formData.name} onChange={handleChange} />
                                    <p className='text-red-500'>{errors.name?.[0]}</p>
                                    <Textarea size='md' label="Description" placeholder='write about this product' className='w-full' name='description' value={formData.description} onChange={handleChange} />
                                    <p className='text-red-500'>{errors.description?.[0]}</p>
                                    <Autocomplete
                                        name='category'
                                        label="Select category"
                                        placeholder="Search a category"
                                        variant="bordered"
                                        defaultItems={categoryData}
                                        className="max-w-xs"
                                        onSelectionChange={(key) => {
                                            if (key) {
                                                setFormData({ ...formData, category: key.toString() });
                                            }
                                        }}
                                    >
                                        {(item) => <AutocompleteItem key={item._id}>{item.name}</AutocompleteItem>}
                                    </Autocomplete>



                                    <p className='text-red-500'>{errors.category?.[0]}</p>
                                    <div className='w-full'>
                                        <p className='text-gray-400 text-sm'>Select quantity type</p>
                                        <Dropdown>
                                            <DropdownTrigger>
                                                <Button
                                                    className="bg-zinc-800 w-full items-start text-left mt-1 p-3 text-gray-400 border-none rounded-lg"
                                                >
                                                    {selectedValue ? selectedValue : "Select quantity type"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Multiple selection for quantity type"
                                                variant="flat"
                                                closeOnSelect={false}
                                                disallowEmptySelection
                                                selectionMode="multiple"
                                                selectedKeys={selectedKeys}
                                                onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
                                            >
                                                <DropdownItem description="ex : 1, 2, 3" key="count">Count</DropdownItem>
                                                <DropdownItem description="ex : 1kg, 2kg" key="kg">KG</DropdownItem>
                                                <DropdownItem description="ex : Quarter, Half, full" key="custom">Custom</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-1 md:py-0'>
                                    <div className='flex md:grid flex-wrap justify-between md:justify-end w-full gap-1 h-0'>
                                        <Input size='sm' type='number' label="Quantity" className='w-full sm:max-w-[80px]' name='quantity' value={formData.quantity} onChange={handleChange} />
                                        <p className='text-red-500'>{errors.quantity?.[0]}</p>
                                        <Input size='sm' type='number' label="Price" className='w-full sm:max-w-[80px]' name='price' value={formData.price} onChange={handleChange} />
                                        <p className='text-red-500'>{errors.price?.[0]}</p>
                                        <Input size='sm' type='number' label="Offer Price" className='w-full sm:max-w-[80px]' name='offerPrice' value={formData.offerPrice} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={handleClose}>
                                Cancel
                            </Button>
                            <Button color="secondary" onPress={submit}>
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