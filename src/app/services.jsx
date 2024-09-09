'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Services() {
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

  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-800">
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AbaSatellite
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg mb-8">
              Experience lightning-fast internet and premium entertainment with our cutting-edge satellite technology. Stream, browse, and connect like never before.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/services" passHref>
                <motion.button 
                  className="w-full md:w-auto bg-white text-indigo-800 font-bold py-3 px-8 rounded-full text-xl hover:bg-indigo-100 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Services
                </motion.button>
              </Link>
              <Link href="/packages" passHref>
                <motion.button 
                  className="w-full md:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-xl hover:bg-white hover:text-indigo-800 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Packages
                </motion.button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full h-80 md:h-96">
              <Image
                src="/satellite-dish.svg" // Replace with your actual image
                alt="Satellite Dish Illustration"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}