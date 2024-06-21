"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./hero.module.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const component = useRef();
    const slider = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(`.${styles.panel}`);
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    // end: () => "+=" + slider.current.offsetWidth,
                    markers: false
                }
            });
        }, component);
        return () => ctx.revert();
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.subhero}>

                <div className={styles.App} ref={component}>
                    <div className={styles.firstContainer}>
                        <h1>Testing horizontal scrolling w/ three sections</h1>
                        <h2>First Container</h2>
                    </div>
                    <div ref={slider} className={styles.slider}>
                        <div className={`${styles.panel} ${styles.blue}`}>
                            <div>
                                SCROLL DOWN
                                <div className={styles.scrollDown}>
                                    <div className={styles.arrow}></div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.panel} ${styles.red}`}>ONE</div>
                        <div className={`${styles.panel} ${styles.orange}`}>TWO</div>
                        <div className={`${styles.panel} ${styles.purple}`}>THREE</div>
                    </div>
                    <div className={styles.lastContainer}>Last Container</div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
