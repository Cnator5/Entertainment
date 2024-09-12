"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TestimonialCarousel from '@/Components/TestimonialCarousel/TestimonialCarousel';
import WhyChooseUsSection from '@/Components/WhyChooseUsSection/WhyChooseUsSection';
import ProductsSection from '@/Components/ProductsSection/ProductsSection';
import Services from '@/Components/ServiceSection/ServiceSection';


export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Fast Internet. Endless Entertainment.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const services = [
    { name: 'Starlink', description: 'High-speed satellite internet', icon: '/starlink-icon.svg' },
    { name: 'Canal+', description: 'Premium TV entertainment', icon: '/canal-plus-icon.svg' },
    { name: 'DStv', description: 'Diverse satellite TV options', icon: '/dstv-icon.svg' },
    { name: 'Solar Panels', description: 'Sustainable energy solutions', icon: '/solar-panel-icon.svg' },
  ];

  const images = [
    '/images/space-cosmic-illustration-with-planets-scene-created-with-generative-ai_115122-119500.avif',
    '/images/star_link_accessories_actuated_short_wall_mount top.webp',
    '/images/solar.avif',
    '/images/dstv.jpg',
    '/images/sport-football-arena-photography_1409-4807.avif',
    '/images/family-bonding-couch-watching-comedy-eating-popcorn_1111209-125749.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 1000); // Transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);  
  return (
<main>
<div className="relative h-[80vh] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } ${isTransitioning ? 'scale-1' : 'scale-1'}`}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            layout="fill"
            quality={100}
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-5000 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in-up shadow-text">
          Welcome to AbaSatellite
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl animate-fade-in-up animation-delay-300 shadow-text">
          Your one-stop solution for Satellite, Canal+, DStv, Solar, and Network Services.
        </p>
        <Link href="/contact" >
          <span className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up animation-delay-600 cursor-pointer">
            Get in Touch
          </span>
        </Link>
      </div>
      <div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              }
              }
              
              .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          }

          .animation-delay-300 {
            animation-delay: 0.3s;
            }
            
            .animation-delay-600 {
              animation-delay: 0.6s;
              }
              
              .shadow-text {
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                `}</style>
    
    </div>
     <ProductsSection />
<WhyChooseUsSection/>
<Services/>
<TestimonialCarousel/>
</main>
  );
}
