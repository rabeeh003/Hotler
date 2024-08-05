import React from 'react';
import PricingCard from '../ui/pricingTag';

interface PricingPlan {
  title: string;
  price: number;
  originalPrice?: number;
  features: string[];
}

interface PricingPlansProps {
  plans: PricingPlan[];
}

const PricingPlans: React.FC<PricingPlansProps> = ({ plans }) => {
  return (
    <div className="h-screen w-screen p-10">
      <div className="flex flex-wrap items-center justify-center  mx-auto gap-4 sm:gap-0">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            originalPrice={plan.originalPrice}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
