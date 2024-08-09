"use client"

import { Listbox, ListboxItem } from '@nextui-org/react';
import React, { ReactNode } from 'react';
import { cn } from "@nextui-org/react";
import { BarChartBig, BugIcon, LayoutDashboard, QrCodeIcon, Utensils } from 'lucide-react';
import Link from 'next/link';

interface IconWrapperProps {
    children: ReactNode;
    className?: string;
}

const IconWrapper = ({ children, className }: IconWrapperProps) => (
    <div className={cn(className, "flex items-center rounded-small justify-center w-7 h-7")}>
        {children}
    </div>
);

function SideBar() {
    return (
        <aside className='pb-4'>
            <div className='hidden md:flex'>
                <div className="bg-content1 shadow-small rounded-medium p-3 grid gap-2">
                    <Link
                        href='/shop'
                        key="Dashboard"
                        className='flex gap-1 items-center'
                    >
                        <IconWrapper className="bg-success/10 text-success">
                            <LayoutDashboard className="text-lg " />
                        </IconWrapper>
                        Dashboard
                    </Link>
                    <Link
                        href='/shop/analytics'
                        key="Analytics"
                        className='flex gap-1 items-center'
                    >
                        <IconWrapper className="bg-primary/10 text-primary">
                            <BarChartBig className="text-lg " />
                        </IconWrapper>
                        Analytics
                    </Link>
                    <Link
                        href='/shop/items'
                        key="Items"
                        className='flex gap-1 items-center'
                    >
                        <IconWrapper className="bg-secondary/10 text-secondary">
                            <Utensils className="text-lg " />
                        </IconWrapper>
                        Items
                    </Link>
                    <Link
                        key="settings"
                        href='/shop/settings'
                        className='flex gap-1 items-center'
                    >
                        <IconWrapper className="bg-warning/10 text-warning">
                            <QrCodeIcon className="text-lg " />
                        </IconWrapper>
                        settings
                    </Link>
                </div>
            </div>
        </aside >
    );
}

export default SideBar;
