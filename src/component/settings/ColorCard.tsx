"use client"
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import React, { useState } from 'react'
import ChormeColorPicker from '../ui/chorme-color-picker'

function ColorCard() {
    const [selectedColor, setSelectedColor] = useState<string>('#000000')
    return (
        <div className='w-full flex my-2 justify-between'>
            <div className="flex gap-1">
                <div className='w-10 h-10 rounded-lg' style={{ background: selectedColor }}></div>
                <span>Main Color</span>
            </div>
            <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger>
                    <Button>change</Button>
                </PopoverTrigger>
                <PopoverContent className='dark:bg-foreground text-black'>
                    <div className="px-1 py-2">
                        <div className="text-small font-bold">Popover Content</div>
                        <ChormeColorPicker setSelectedColor={setSelectedColor} />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default ColorCard
