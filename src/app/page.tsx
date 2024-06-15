import Image from "next/image";
import { Button } from '@nextui-org/button';
import DefualtNavbar from "@/component/Bars/DefualtNavbar";
import HeroSection from "@/component/Home/HeroSection";

export default function Home() {
  return (
    <>
      <DefualtNavbar/>
      <main className="flex flex-col items-center justify-between px-12 lg:px-24">
        <HeroSection/>
      </main>
    </>
  );
}
