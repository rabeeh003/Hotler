"use client"

import { Listbox, ListboxItem } from '@nextui-org/react';
import React, { ReactNode } from 'react';
import { cn } from "@nextui-org/react";
import { BarChartBig, BugIcon, LayoutDashboard, QrCodeIcon, Utensils } from 'lucide-react';

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
                <Listbox
                    aria-label="User Menu"
                    className="p-0 gap-0 bg-content1 shadow-small rounded-medium"
                    itemClasses={{
                        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                    }}
                >
                    <ListboxItem
                        href='/admin'
                        key="Dashboard"
                        startContent={
                            <IconWrapper className="bg-success/10 text-success">
                                <LayoutDashboard className="text-lg " />
                            </IconWrapper>
                        }
                    >
                        Dashboard
                    </ListboxItem>
                    <ListboxItem
                        href='/admin/analytics'
                        key="Analytics"
                        startContent={
                            <IconWrapper className="bg-primary/10 text-primary">
                                <BarChartBig className="text-lg " />
                            </IconWrapper>
                        }
                    >
                        Analytics
                    </ListboxItem>
                    <ListboxItem
                        href='/admin/items'
                        key="Items"
                        startContent={
                            <IconWrapper className="bg-secondary/10 text-secondary">
                                <Utensils className="text-lg " />
                            </IconWrapper>
                        }
                    >
                        Items
                    </ListboxItem>
                    <ListboxItem
                        key="Qr"
                        startContent={
                            <IconWrapper className="bg-warning/10 text-warning">
                                <QrCodeIcon className="text-lg " />
                            </IconWrapper>
                        }
                    >
                        Qr
                    </ListboxItem>
                </Listbox>
            </div>
        </aside >
    );
}

export default SideBar;
