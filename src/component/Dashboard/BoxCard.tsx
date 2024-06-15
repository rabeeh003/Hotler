import React from 'react'

interface BoxCardInter {
  title: string;
  data: number;
}

export default function BoxCard({ title, data }: BoxCardInter) {
  return (
    <div dir="ltr" className='lg:flex border-l-2 drop-shadow-lg  mb-2 p-2 w-full bg-content1 h-[200px] shadow-small rounded-medium'>
      <div className='md:flex md:justify-around '>
        <p className='p-2 m-auto text-center md:w-min'>{title}</p>
        <p className='m-auto p-2 text-center md:w-min'>{data}</p>
      </div>
    </div>
  )
}


