// this is selected item card
import React from 'react'
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { IndianRupee } from 'lucide-react';

function ItemCard() {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none min-h-[300px] min-w-[200px]  flex-none "
        >
            <Image
                alt="Woman listing to music"
                className="object-cover"
                height={300}
                src="https://t3.ftcdn.net/jpg/05/66/68/36/360_F_566683667_BeBecGFABNQYkZhquqJxhSj7UOcCY7ZJ.jpg"
                width={200}
            />
            <CardFooter className="m-1 py-3 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden  before:rounded-xl rounded-large bottom-1 ">
                <p className="flex justify-center text-center align-middle text-white/80"><IndianRupee size={15} className='font-semibold m-auto' /> <span className='text-center align-middle mx-1 text-xl font-semibold'>11</span></p>
                <div>

                    <Button className="text-tiny text-balance min-w-0 " variant="flat" color="danger" radius="sm" size="sm">
                        -
                    </Button>
                    <span className='text-center align-middle mx-1 font-semibold'>11</span>
                    <Button className="text-tiny text-balance min-w-0" variant="flat" color="success" radius="sm" size="sm">
                        +
                    </Button>
                </div>

            </CardFooter>
        </Card>
    )
}

export default ItemCard
