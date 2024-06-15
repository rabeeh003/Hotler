import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CountcardProps {
  data: {
    item: string;
    image: StaticImageData;
    count: number;
  };
}

export default function Countcard({ data }: CountcardProps) {
  return (
    <div className='lg:flex mb-2 p-2 w-full bg-content1 h-[200px] shadow-small rounded-medium'>
      <p className='p-2 m-auto text-center md:w-min'>{data.item}</p>
      <div className='md:flex md:justify-around '>
        <Image
          src={data.image}
          alt="Picture of the author"
          width={50}
          height={50}
          className='m-auto rounded-md bg-slate-50'
        />
        <p className='m-auto p-2 text-center md:w-min'>{data.count}</p>
      </div>
    </div>
  );
}
