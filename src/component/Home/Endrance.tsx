"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import SparklesText from "../ui/SparklesText";

export function Endrance() {
    const words = ["restaurant", "food shop", "coffee shop", "cool bar", "hotel", "tea shop", "cafeteria"];
    return (
        <HeroHighlight className="flex flex-col overflow-hidden">
            <div className="mt-24 md:mt-96">
                <ContainerScroll
                    titleComponent={
                        <>
                            <span className="m-0 text-4xl font-semibold text-black dark:text-white">
                                Upgrade Your
                            </span>
                            <h1 className="text-4xl my-5 font-semibold text-black dark:text-white">
                            <Highlight ><FlipWords words={words} /> </Highlight><br />
                            </h1>
                            <h1 className="text-4xl my-5 font-semibold text-black dark:text-white">
                                
                                <span className="text-4xl md:text-[6rem] font-bold mt-3 leading-none">
                                    Streamline Orders with HOTLER
                                </span>
                            </h1>
                            <SparklesText className="text-center text-[25px]" text={"Start"} />
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
