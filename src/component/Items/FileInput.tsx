'use client'
import { Input } from '@nextui-org/react';
import React, { useRef, ChangeEvent, MouseEvent } from 'react';

interface FileInputProps {
    setSelectedFile: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ setSelectedFile }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    const onChooseFile = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        inputRef.current?.click();
    };

    return (
        <div className='h-fit m-auto'>
            <Input
                className='md:hidden'
                type="file"
                ref={inputRef}
                onChange={handleOnChange}
                // style={{ display: "none" }}
                accept="image/*"
            />
            <button
                type="button"
                className="hidden md:flex w-44 h-28 text-md font-medium flex-col items-center justify-center gap-4 text-green-700 bg-white border-2 border-dashed border-green-700 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-green-700"
                onClick={onChooseFile}
            >
                <span className="material-symbols-rounded text-2xl w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                    upload
                </span>
                Upload Image
            </button>
            <p className="text-[12px] text-gray-400">max image count 1.</p>
        </div>
    );
};

export default FileInput;