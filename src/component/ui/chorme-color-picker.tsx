"use client";
import { Button } from '@nextui-org/react';
import React, { useState, useCallback } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

const ChormeColorPicker: React.FC<{ setSelectedColor: (color: string) => void }> = ({ setSelectedColor }) => {
    const [background, setBackground] = useState<string>('#fff');

    const handleChangeComplete = useCallback((color: ColorResult) => {
        setBackground(color.hex);
    }, []);

    return (
        <div className='grid'>
            <div className='m-1'>
                <ChromePicker color={background} onChangeComplete={handleChangeComplete} />
            </div>
            <Button size='sm' variant='ghost' className='border-none text-gray-500' style={{ background: background }} onClick={() => setSelectedColor(background)}>Change</Button>
        </div>
    );
};

export default ChormeColorPicker;
