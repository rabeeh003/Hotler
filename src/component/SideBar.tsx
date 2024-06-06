"use client"

import { Listbox, ListboxItem } from '@nextui-org/react';
import React from 'react';
import { cn } from "@nextui-org/react";
import { BarChartBig, BugIcon, LayoutDashboard, QrCodeIcon, Utensils } from 'lucide-react';

const IconWrapper = ({ children, className }) => (
    <div className={cn(className, "flex items-center rounded-small justify-center w-7 h-7")}>
        {children}
    </div>
);


function SideBar() {
    return (
        <aside>
            <Listbox
                aria-label="User Menu"
                className=" p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
                itemClasses={{
                    base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                }}
            >
                <ListboxItem
                    className=''
                    key="issues"
                    startContent={
                        <IconWrapper className="bg-success/10 text-success">
                            <LayoutDashboard className="text-lg " />
                        </IconWrapper>
                    }
                >
                    Dashboard
                </ListboxItem>
                <ListboxItem
                    key="pull_requests"
                    startContent={
                        <IconWrapper className="bg-primary/10 text-primary">
                            <BarChartBig className="text-lg " />
                        </IconWrapper>
                    }
                >
                    Analytics
                </ListboxItem>
                <ListboxItem
                    key="discussions"
                    startContent={
                        <IconWrapper className="bg-secondary/10 text-secondary">
                            <Utensils className="text-lg " />
                        </IconWrapper>
                    }
                >
                    Items
                </ListboxItem>
                <ListboxItem
                    key="actions"
                    startContent={
                        <IconWrapper className="bg-warning/10 text-warning">
                            <QrCodeIcon className="text-lg " />
                        </IconWrapper>
                    }
                >
                    Qr
                </ListboxItem>
            </Listbox>
        </aside >
    );
}

export default SideBar;
