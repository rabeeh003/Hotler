"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./hero.module.css";
import { ChevronDown } from "lucide-react";
import { HeroHighlight } from "../ui/hero-highlight";
import Image from "next/image";
import { DevicesPage } from "./Devices";
import SparklesText from "../ui/SparklesText";
import PricingPlans from "./Pricing";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        if (component.current && slider.current) {
            let ctx = gsap.context(() => {
                let panels = gsap.utils.toArray(`.${styles.panel}`);
                gsap.to(panels, {
                    xPercent: -100 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: slider.current,
                        pin: true,
                        scrub: 1,
                        markers: false,
                    }
                });
            }, component);

            return () => ctx.revert();
        }
    }, []);

    const words = [
        { text: "What we", className: "text-[40px]" },
        { text: "provide?", className: "text-[40px]" },
        { text: "features?", className: "text-[40px] text-blue-500 dark:text-blue-500" },
    ];

    return (
        <div className={`${styles.hero} sticky top-0 z-50`}>
            <div className={styles.subhero}>
                <div ref={component}>
                    <div ref={slider} className="flex w-full h-screen">
                        <div className={`${styles.panel} flex-shrink-0 overflow-hidden`}>
                            <HeroHighlight>
                                <SparklesText className="text-[40px]" text={"What we provide?"} />
                            </HeroHighlight>
                        </div>
                        <div className={`${styles.panel} flex-shrink-0 min-w-full`}>
                            <HeroHighlight>
                                <div className="flex md:min-w-[100vw] h-[80vh] items-center gap-3 md:justify-around">
                                    <div className="m-2 min-w-[80%] sm:min-w-[40%] max-w-[500px]">
                                        <div className="h-10 sm:h-20 md:h-32 lg:h-40">   </div>
                                        <div style={{ background: "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))" }} className="p-3 rounded-3xl max-w-5/6 sm:max-w-[200px] md:max-w-[300px]">
                                            <Image src="/images/feacheres/1.png" alt="hero" height={100} width={300} className="mx-auto rounded-2xl object-cover h-full object-left-top" draggable={false} />
                                        </div>
                                        <div className="max-w-screen mt-10">
                                            <h1 className="text-[20px] lg:text-[30px] font-bold">Order management system</h1>
                                            <p className="text-[15px] lg:text-[20px] font-mono">Simplify ordering and enhance customer satisfaction with HOTLER. Effortlessly manage orders, update menus, and analyze performance.</p>
                                        </div>
                                    </div>
                                    <div className="m-2 min-w-[80%] sm:min-w-[40%] max-w-[500px]">
                                        <div className="max-w-screen mt-10">
                                            <h1 className="text-[20px] lg:text-[30px] font-bold">Effortless Ordering</h1>
                                            <p className="text-[15px] lg:text-[20px] font-mono">Customers can easily scan a QR code to place and pay for orders. Enjoy seamless billing and efficient service with HOTLER.</p>
                                        </div>
                                        <div style={{ background: "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))" }} className="mt-10 p-3 rounded-3xl max-w-5/6 sm:max-w-[200px] md:max-w-[300px]">
                                            <Image src="/images/feacheres/2.png" alt="hero" height={100} width={300} className="     rounded-2xl object-contain h-full object-left-top max-h-[200px]" draggable={false} />
                                        </div>
                                        <div className="h-10 sm:h-20 md:h-32 lg:h-40">   </div>
                                    </div>
                                </div>
                            </HeroHighlight>
                        </div>
                        <div className={`${styles.panel} flex-shrink-0 min-w-full`}>
                            <HeroHighlight>
                                <div className="flex md:min-w-[100vw] h-screen items-center gap-3 md:justify-around">
                                    <div className="m-2 min-w-[80%] sm:min-w-[40%] max-w-[500px]">
                                        <div className="h-10 sm:h-20 md:h-32 lg:h-40">   </div>
                                        <div style={{ background: "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))" }} className="mt-10 p-3 rounded-3xl max-w-5/6 sm:max-w-[200px] md:max-w-[300px]">
                                            <Image src="/images/feacheres/1.png" alt="hero" height={100} width={300} className="mx-auto rounded-2xl object-cover h-full object-left-top" draggable={false} />
                                        </div>
                                        <div className="max-w-screen mt-10">
                                            <h1 className="text-[20px] lg:text-[30px] font-bold">Order management system</h1>
                                            <p className="text-[15px] lg:text-[20px] font-mono">Simplify ordering and enhance customer satisfaction with HOTLER. Effortlessly manage orders, update menus, and analyze performance.</p>
                                        </div>
                                    </div>
                                    <div className="m-2 min-w-[80%] sm:min-w-[40%] max-w-[500px]">
                                        <div className="max-w-screen mt-10">
                                            <h1 className="text-[20px] lg:text-[30px] font-bold">Order management system</h1>
                                            <p className="text-[15px] lg:text-[20px] font-mono">Simplify ordering and enhance customer satisfaction with HOTLER. Effortlessly manage orders, update menus, and analyze performance.</p>
                                        </div>
                                        <div style={{ background: "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))" }} className="mt-10 p-3 rounded-3xl max-w-5/6 sm:max-w-[200px] md:max-w-[300px]">
                                            <Image src="/images/feacheres/1.png" alt="hero" height={100} width={300} className="mx-auto rounded-2xl object-cover h-full object-left-top" draggable={false} />
                                        </div>
                                        <div className="h-10 sm:h-20 md:h-32 lg:h-40">   </div>
                                    </div>
                                </div>
                            </HeroHighlight>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
