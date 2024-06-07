import LineChart from '@/component/Analytics/LineChart'
import React from 'react'

export default function analytics() {
    return (
        <main className='w-full text-md font-semibold h-screen'>
            <h2 className='mb-3 py-2 px-3 bg-content1 overflow-visible shadow-small rounded-medium'>Analytics</h2>
            <div className='w-full md:w-[50vw] p-2 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium'>
            <LineChart/>
            </div>
        </main>
    )
}

