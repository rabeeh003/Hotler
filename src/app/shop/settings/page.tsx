import BottumBar from '@/component/Bars/BottumBar'
import Banner from '@/component/settings/Banner'
import ColorCard from '@/component/settings/ColorCard'
import { Button, Image, Popover, PopoverContent, PopoverTrigger, Tooltip } from '@nextui-org/react'
import { Download, ImageIcon, QrCode } from 'lucide-react'
import React from 'react'

export default function analytics() {
    return (
        <main className='w-full text-md font-semibold'>
            <div className="md:invisible md:hidden w-full ">
                <div className="w-[80vw] m-auto px-3 py-2 rounded-xl">
                    <BottumBar />
                </div>
            </div>
            <h2 className='mb-3 py-2 px-3 bg-content1 text-lg overflow-visible shadow-small rounded-medium'>Settings</h2>
            <div className='grid sm:grid-cols-2 gap-2 '>
                <div className='bg-content1 p-3 grid gap-1 rounded-xl shadow-small'>
                    <h1 className='font-semibold text-md'>Qr and Table management</h1>
                    <Tooltip
                        placement='bottom'
                        content={
                            <div className="px-1 py-2 grid">
                                <div className="text-small font-bold text-center">Custom</div>
                                <QrCode size={140} />
                            </div>
                        }
                    >
                        <div className='bg-content2 p-3 m-1 flex justify-between rounded-md'>
                            <div className='flex'>
                                <QrCode size={30} className='m-auto text-warning-500' />
                                <span className="mx-2 flex text-medium items-center font-bold text-center">Custom</span>
                            </div>
                            <Button variant='bordered' color='warning' className='border-none min-w-0'><Download /></Button>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement='bottom'
                        content={
                            <div className="px-1 py-2 grid">
                                <div className="text-small font-bold text-center">Custom</div>
                                <QrCode size={140} />
                            </div>
                        }
                    >
                        <div className='bg-content2 p-3 m-1 flex justify-between rounded-md'>
                            <div className='flex'>
                                <QrCode size={30} className='m-auto text-warning-500' />
                                <span className="mx-2 flex text-medium items-center font-bold text-center">Custom</span>
                            </div>
                            <Button variant='bordered' color='warning' className='border-none min-w-0'><Download /></Button>
                        </div>
                    </Tooltip>
                </div>
                <div className='bg-content1 p-2 rounded-xl shadow-small'>
                    <h1 className='font-semibold text-md'>Options</h1>
                </div>
                <div className='bg-content1 p-2 rounded-xl shadow-small'>
                    <h1 className='font-semibold text-md'>Personalize</h1>
                    <p className='text-small font-thin'>Upload your banner image</p>
                    <div className='flex justify-between items-center'>
                        <ImageIcon/> 
                        <Banner label="Add Banner"/>
                    </div>
                    <p className='text-small font-thin'>Select color theam for customer order page</p>
                    <ColorCard/>
                    <ColorCard/>
                    <ColorCard/>
                </div>
            </div>
        </main>
    )
}

