'use client'
import React, { useEffect } from 'react';
import { Accordion, AccordionItem, Avatar, Button, Spinner } from '@nextui-org/react';
import { BadgePercent, Edit, Layers3, PlusCircle, Puzzle, RefreshCcw, ShoppingBasket } from 'lucide-react';
import ItemTable from '@/component/Items/ItemTable';
import AddItem from '@/component/Items/AddItem';
import BottumBar from '@/component/Bars/BottumBar';
import AddCategory from '@/component/Items/AddCategory';
import AddCombo from '@/component/Items/AddCombo';
import { useAppDispatch, useAppSelector } from '../../../../lib/redux/hooks';
import { fetchCategoryData, fetchProductData } from '../../../../lib/redux/reduceres/categoryAndProduct';

export default function ItemsPage() {
    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2",
    };

    const dispatch = useAppDispatch();
    const shopId = useAppSelector((state) => state.shop.id);
    const { categories, products, loading, error, productError, productLoading } = useAppSelector((state) => state.categoryAndProducts);

    useEffect(() => {
        if (shopId && categories.length == 0) {
            dispatch(fetchCategoryData(shopId));
        }
        if (shopId && products.length == 0) {
            dispatch(fetchProductData(shopId));
        }
    }, [dispatch, shopId]);

    return (
        <main className='w-full text-md font-semibold'>
            <div className="md:invisible md:hidden w-full ">
                <div className="w-[80vw] m-auto px-3 py-2 rounded-xl">
                    <BottumBar />
                </div>
            </div>
            <div className='flex justify-between mb-3 py-2 px-3 bg-content1 overflow-visible shadow-small rounded-medium'>
                <h2>Items and Category</h2>
            </div>
            <div className='flex flex-col-reverse lg:flex-row gap-2'>
                {/* <div className='flex-1 lg:basis-3/4 drop-shadow-md p-2 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium'>

                </div> */}
                <Accordion
                    defaultExpandedKeys={["1"]}
                    showDivider={false}
                    className="p-2 flex-1 flex flex-col gap-1 w-full drop-shadow-md overflow-visible shadow-small"
                    variant="shadow"
                    itemClasses={itemClasses}
                >
                    <AccordionItem
                        key="1"
                        aria-label="Category"
                        startContent={
                            <ShoppingBasket
                                className='text-secondary-400'
                            />
                        }
                        title="Products"
                        subtitle={
                            <p className="flex">
                                Add & edit products
                            </p>
                        }
                    >
                        {productLoading ? (
                            <div className="flex items-center justify-center h-full">
                                <Spinner />
                            </div>
                        ) : productError ? (
                            <div className="grid items-center justify-center h-full">
                                <p className="text-red-500">Sorry, Try again.</p>
                                <Button className='max-w-0 m-auto border-none' variant='bordered'>
                                    <RefreshCcw />
                                </Button>
                            </div>
                        ) : (
                            <>
                            {products.length > 0 ?(
                                <ItemTable data={products} />
                            ) : <p className='text-center'>no data found</p> } 
                            </>
                        )}
                    </AccordionItem>
                </Accordion>
                <Accordion
                    defaultExpandedKeys={["1"]}
                    showDivider={false}
                    className="p-2 flex-2 flex flex-col gap-1 w-full xl:max-w-[300px]"
                    variant="shadow"
                    itemClasses={itemClasses}
                >
                    <AccordionItem
                        key="1"
                        aria-label="Category"
                        startContent={
                            <Layers3
                                className='text-secondary-400'
                            />
                        }
                        title="Categores"
                        subtitle={
                            <p className="">
                                For grouping &<span className="text-secondary ml-1">manage</span>
                            </p>
                        }
                    >
                        <AddCategory />
                        {loading ? (
                            <div className="flex items-center justify-center h-full">
                                <Spinner />
                            </div>
                        ) : error ? (
                            <div className="grid items-center justify-center h-full">
                                <p className="text-red-500">Sorry, Try again.</p>
                                <Button className='max-w-0 m-auto border-none' variant='bordered'>
                                    <RefreshCcw />
                                </Button>
                            </div>
                        ) : (
                            <div className="">
                                {categories.map((category) => (
                                    <div key={category._id} className="flex items-center justify-between py-3 border-b-1 dark:border-gray-800 border-gray-300">
                                        <div className="flex gap-4">
                                            <Avatar isBordered color="default" radius='full' src={category.image} />
                                            <span className="text-md font-sans font-semibold">{category.name}</span>
                                        </div>
                                        <div className="flex gap-4">
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </AccordionItem>
                    <AccordionItem
                        key="2"
                        aria-label="Combo"
                        startContent={
                            <Puzzle
                                className='text-secondary-400'
                            />
                        }
                        title="Combo"
                        subtitle={
                            <p className="flex">
                                Create compo <span className="text-secondary ml-1">best taste</span>
                            </p>
                        }
                    >
                        <div className="">
                            <AddCombo />
                            <div className='flex w-full justify-between items-center py-3 border-b-1 dark:border-gray-800 border-gray-300'>
                                <div className='flex gap-4'>
                                    <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <span className='text-md font-sans font-semibold'>Biriyani</span>
                                </div>
                                <Edit className='text-secondary' size="20" />
                            </div>
                            <div className='flex w-full justify-between items-center py-3 border-b-1 dark:border-gray-800 border-gray-300'>
                                <div className='flex gap-4'>
                                    <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <span className='text-md font-sans font-semibold'>Biriyani</span>
                                </div>
                                <Edit className='text-secondary' size="20" />
                            </div>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    )
}