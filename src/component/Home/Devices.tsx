"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Phone & Tabs",
        description:
            "We developed responseve applicaation. so this tool you can use in your Phone or tablets. every one can simply understand the working and manage this tool. we focus for user experiance so that help simpe handeling.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Phone & Tabs
            </div>
        ),
    },
    {
        title: "Laptop",
        description:
            "Hotler is responcive and simple order and billing management tool. every one can simple handile this. its developed responcively so that esayle manage in your laptop or computer. we follow simple user interface for using every one.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Laptop
            </div>
        ),
    },
    {
        title: "Windows & Macos",
        description:
            "Hotler is a web application. its run in browser. so that OS (operating system) is not matter. its can use in any latest browseres. its also PWA application ( progresive web application ).",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Windows & Macos
            </div>
        ),
    },
    {
        title: "Ios & Android",
        description:
            "The mobail application is under construction. currently any one can use our PWA (prograsive web application) application. its run in browser. so any os ( android or ios ) can use this if a browser is installed.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Ios & Android
            </div>
        ),
    },
];
export function DevicesPage() {
    return (
        <div className="lg:p-10">
            <StickyScroll content={content} />
        </div>
    );
}
