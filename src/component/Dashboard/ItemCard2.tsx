// this is search item card
import React from 'react'
import { Card, CardFooter, Image, Button, Input } from "@nextui-org/react";
import { IndianRupee } from 'lucide-react';

function ItemCard2() {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none flex-none"
        >
            <Image
                alt="Woman listing to music"
                className="object-cover"
                height={300}
                src="https://myfoodstory.com/wp-content/uploads/2021/09/karahi-chicken-kadai-chicken-1.jpg"
                width={200}
            />
            <CardFooter className="m-1 py-3 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden  before:rounded-xl rounded-large bottom-1 ">
                <p className="flex justify-center text-center align-middle text-white/80"><IndianRupee size={15} className='font-semibold m-auto' /> <span className='text-center align-middle mx-1 text-xl font-semibold'>11</span></p>
                <Input size={"sm"} className='w-10' value={String(200)} />

                <div>
                    <Button className="text-tiny text-balance min-w-0" variant="flat" color="success" radius="sm" size="sm">
                        Add
                    </Button>
                </div>

            </CardFooter>
        </Card>
    )
}

export default ItemCard2
