import React from 'react';

interface PricingCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, originalPrice, features }) => {
  return (
    <div className="w-full max-w-sm m-2 p-6 rounded-lg shadow-xl sm:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 sm:p-8">
      <div className="flex flex-col items-start justify-between gap-4 mb-6 lg:flex-row">
        <div>
          <h3 className="text-2xl font-semibold text-white jakarta sm:text-4xl">{title}</h3>
        </div>
        <span className="order-first inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-black rounded-full lg:order-none bg-opacity-20">Go Pro</span>
      </div>
      <div className="mb-4 space-x-2">
        <span className="text-4xl font-bold text-white">${price}/mo</span>
        {originalPrice && <span className="text-2xl text-indigo-100 line-through">${originalPrice}/mo</span>}
      </div>
      <ul className="mb-6 space-y-2 text-indigo-100">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-white rounded-lg outline-none bg-opacity-20 hover:bg-opacity-30 md:text-base">
        Get Started for Free
      </a>
    </div>
  );
};

export default PricingCard;
