import Image from "next/image";
import { Button } from '@nextui-org/button';
import DefualtNavbar from "@/component/Bars/DefualtNavbar";
import HeroSection from "@/component/Home/HeroSection";
import { Endrance } from "@/component/Home/Endrance";

export default function Home() {
  return (
    <>
      <DefualtNavbar />
      <main className="relative">
        <Endrance />
        <div className="hidden md:flex mt-40 overflow-hidden bg-white dark:bg-black  sticky top-0 ">
          <HeroSection />
        </div>
      </main>
    </>
  );
}
