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
      title: 'Pro Plan',
      price: 15,
      originalPrice: 39,
      features: [
        'Unlimited Projects',
        'Unlimited API calls',
        'Advanced Project Settings',
        'Priority Support',
      ],
    },
    {
      title: 'Basic Plan',
      price: 5,
      originalPrice: 10,
      features: [
        '10 Projects',
        '1000 API calls',
        'Basic Project Settings',
        'Standard Support',
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
          <HeroHighlight>
            <SparklesText className="text-center text-[40px]" text={"Pricing"} />
            <PricingPlans plans={pricingPlans} />
          </HeroHighlight>
        </div>
      </main>
    </>
  );
}
