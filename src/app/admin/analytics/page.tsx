import LineChart from '@/component/Analytics/LineChart'
import PieChart from '@/component/Analytics/PieChart'
import BoxCard from '@/component/Dashboard/BoxCard'
import React from 'react'

export default function analytics() {
    return (
        <main className='w-full text-md font-semibold'>
            <h2 className='mb-3 py-2 px-3 bg-content1 overflow-visible shadow-small rounded-medium'>Analytics</h2>
            <div className='flex flex-col-reverse lg:flex-row gap-2'>
                <div className='lg:basis-3/4 drop-shadow-md  p-2 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium'>
                    <LineChart />
                    <PieChart />
                </div>
                <div className='flex gap-2 lg:block lg:basis-1/4   '>
                    <BoxCard title={'Sales'} data={28} />
                    <BoxCard title={'Cash'} data={2680} />
                </div>
            </div>
        </main>
    )
}

