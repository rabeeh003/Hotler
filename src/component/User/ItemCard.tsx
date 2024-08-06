// this is selected item card
import React from 'react'
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { IndianRupee } from 'lucide-react';

function ItemCard() {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="flex-none p-2 dark:border-1 dark:border-gray-700 "
        >
            <Image
                alt="Woman listing to music"
                className="object-cover rounded-lg m-auto max-w-[100px] max-h-[100px]"
                height={300}
                src="https://t3.ftcdn.net/jpg/05/66/68/36/360_F_566683667_BeBecGFABNQYkZhquqJxhSj7UOcCY7ZJ.jpg"
                width={200}
            />
            <div className='p-2 block'>
                <p className='font-bold'>Biriyani</p>
                <span className='text-center flex text-success-500'><IndianRupee size={15} className='my-auto' />120</span>
            </div>
        </Card>
    )
}

export default ItemCard
