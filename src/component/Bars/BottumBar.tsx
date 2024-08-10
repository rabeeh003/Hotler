import React from 'react'
import { BarChartBig, LayoutDashboard, QrCodeIcon, Utensils } from 'lucide-react';
import Link from 'next/link';

function BottumBar() {
    return (
        <div className='flex justify-between'>
            <Link href="/shop/" className='block text-center'>
                <LayoutDashboard  className="text-success-400 m-auto text-lg"/>
                <span>Dash</span>
            </Link>
            <Link href="/shop/analytics" className='block text-center'>
                <BarChartBig  className="text-primary-400 m-auto text-lg"/>
                <span>analytics</span>
            </Link>
            <Link href="/shop/items" className='block text-center'>
                <Utensils className="m-auto text-secondary-400 text-lg"/>
                <span>Items</span>
            </Link>
            <Link href="/shop/settings" className='block text-center'>
                <QrCodeIcon  className="text-warning-400 m-auto text-lg"/>
                <span>Qr</span>
            </Link>
        </div>
    )
}

export default BottumBar
