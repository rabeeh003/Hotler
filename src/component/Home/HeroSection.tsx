import React from 'react';
import Image from 'next/image'; // Using next/image for optimized images

function HeroSection() {
    
    return (
        <div className="w-full border-b border-neutral-900 pb-8 lg:pb-16">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 p-4 lg:p-8">
                    <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight">
                        Vyavasay
                    </h1>
                    <span className="block bg-gradient-to-r from-yellow-200 via-slate-50 to-yellow-800 bg-clip-text text-transparent tracking-tight text-2xl lg:text-3xl mt-4">
                        Business Partner
                    </span>
                    <p className="mt-4 text-lg">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 p-4 lg:p-8">
                    <Image 
                        src="/path/to/your/image.jpg" 
                        alt="Hero Image" 
                        width={500} 
                        height={500} 
                        className="rounded-lg" 
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
