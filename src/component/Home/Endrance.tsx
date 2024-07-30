"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function Endrance() {
    const words = ["restaurant", "food shop", "coffee shop", "cool bar", "hotel", "tea shop", "cafeteria"];
    return (
        <HeroHighlight className="flex flex-col overflow-hidden">
            <div className="md:pt-96">
                <ContainerScroll
                    titleComponent={
                        <>
                            <span className="m-0 text-4xl font-semibold text-black dark:text-white">
                                Upgrade Your
                            </span>
                            <h1 className="text-4xl mt-5 font-semibold text-black dark:text-white">
                                <Highlight ><FlipWords words={words} /> </Highlight><br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Streamline Orders with HOTLER
                                </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/images/hotler.png`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </HeroHighlight>
    );
}
