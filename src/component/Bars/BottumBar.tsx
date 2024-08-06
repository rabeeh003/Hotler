import React from 'react'
import { BarChartBig, LayoutDashboard, QrCodeIcon, Utensils } from 'lucide-react';

function BottumBar() {
    return (
        <div className='flex justify-between'>
            <a href="/shop/" className='block text-center'>
                <LayoutDashboard  className="text-success-400 m-auto text-lg"/>
                <span>Dash</span>
            </a>
            <a href="/shop/analytics" className='block text-center'>
                <BarChartBig  className="text-primary-400 m-auto text-lg"/>
                <span>analytics</span>
            </a>
            <a href="/shop/items" className='block text-center'>
                <Utensils className="m-auto text-secondary-400 text-lg"/>
                <span>Items</span>
            </a>
            <a href="/shop/settings" className='block text-center'>
                <QrCodeIcon  className="text-warning-400 m-auto text-lg"/>
                <span>Qr</span>
            </a>
        </div>
    )
}

export default BottumBar
