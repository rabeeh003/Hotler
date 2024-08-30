import DefualtNavbar from "@/component/Bars/DefualtNavbar";
import HeroSection from "@/component/Home/HeroSection";
import { Endrance } from "@/component/Home/Endrance";
import { DevicesPage } from "@/component/Home/Devices";
import { HeroHighlight } from "@/component/ui/hero-highlight";
import SparklesText from "@/component/ui/SparklesText";
import PricingPlans from "@/component/Home/Pricing";

export default function Home() {
  const pricingPlans = [
    {
      title: 'Monthly',
      price: 189,
      originalPrice: 200,
      features: [
        '28 days',
      ],
    },
    {
      title: 'Half Year',
      price: 1099,
      originalPrice: 1200,
      features: [
        '168 days',
      ],
    },
    {
      title: 'Year',
      price: 1799,
      originalPrice: 2400,
      features: [
        '333 days',
      ],
    },
    // Add more plans as needed
  ];
  return (
    <>
      <DefualtNavbar />
      <main className="relative">
        <Endrance />
        <div className="hidden md:flex mt-40 overflow-hidden bg-white dark:bg-black  sticky  ">
          <HeroSection />
        </div>
        
        <div className=" overflow-hidden bg-white dark:bg-black   ">
          <HeroHighlight>
            <SparklesText className="text-center text-[40px]" text={"Devices"} />
            <DevicesPage />
          </HeroHighlight>
          <HeroHighlight >
            <SparklesText className="text-center text-[40px]" text={"Pricing"} />
            <PricingPlans plans={pricingPlans} />
          </HeroHighlight>
        </div>
      </main>
    </>
  );
}
