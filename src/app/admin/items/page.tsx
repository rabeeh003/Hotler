'use client'
import React from 'react';
import BoxCard from '@/component/Dashboard/BoxCard';
import { Accordion, AccordionItem, Avatar, Button } from '@nextui-org/react';
import { Edit, PlusCircle } from 'lucide-react';
import ItemTable from '@/component/Items/ItemTable';

export default function ItemsPage() {
    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2",
    };

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <main className='w-full text-md font-semibold'>
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
                            <PlusCircle
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
                        <Button className='min-w-0 my-2' variant='ghost' color='secondary' >Add Products</Button>
                       <ItemTable/>
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
                            <PlusCircle
                                className='text-secondary-400'
                            />
                        }
                        title="Categores"
                        subtitle={
                            <p className="flex">
                                Categores help to <span className="text-secondary ml-1">group and list</span>
                            </p>
                        }
                    >
                        <div className="">
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
    );
}
