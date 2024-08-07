import { Globe } from 'lucide-react';
import React from 'react'

interface BoxCardInter {
  title: string;
  data: number;
  icon: string;
}

export default function CashCard({ title, data, icon }: BoxCardInter) {
  return (
    <div dir="ltr" className='flex text-gray-500 md:border-l-2 justify-center drop-shadow-lg  mb-2 p-2 w-full bg-content1 shadow-small rounded-medium'>
      <div className='flex flex-col justify-center'>
        <div className='w-fit mx-auto p-1 rounded-t-xl'>
          <Globe size={30} />
        </div>
        <div className='p-1 min-w-20 rounded-r-xl rounded-l-xl'>
          <p className='m-auto p-2 text-center md:w-min'>{data}</p>
        </div>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='w-fit mx-auto p-1 rounded-t-xl'>
          <Globe size={30} />
        </div>
        <div className='p-1 min-w-20 rounded-r-xl rounded-l-xl'>
          <p className='m-auto p-2 text-center md:w-min'>{data}</p>
        </div>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='w-fit mx-auto p-1 rounded-t-xl'>
          <Globe size={30} />
        </div>
        <div className='p-1 min-w-20 rounded-r-xl rounded-l-xl'>
          <p className='m-auto p-2 text-center md:w-min'>{data}</p>
        </div>
      </div>
    </div>
  )
}


