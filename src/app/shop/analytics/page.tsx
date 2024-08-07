import CashCard from '@/component/Analytics/CashCard'
import DAVTable from '@/component/Analytics/DAVTable'
import LineChart from '@/component/Analytics/LineChart'
import PieChart from '@/component/Analytics/PieChart'
import BottumBar from '@/component/Bars/BottumBar'
import React from 'react'

export default function analytics() {
    return (
        <main className='w-full text-md font-semibold'>
            <div className="md:invisible md:hidden w-full ">
                <div className="w-[80vw] m-auto px-3 py-2 rounded-xl">
                    <BottumBar />
                </div>
            </div>
            <h2 className='mb-3 py-2 px-3 bg-content1 overflow-visible shadow-small rounded-medium'>Analytics</h2>
            <div className='flex flex-col-reverse lg:flex-row gap-2'>
                    <DAVTable/>
                <div className='flex gap-2 lg:block lg:basis-1/4   '>
                    <CashCard icon={''} title={'Sales'} data={28} />
                </div>
            </div>
        </main>
    )
}

