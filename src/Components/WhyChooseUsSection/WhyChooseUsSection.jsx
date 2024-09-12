import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: 'Unmatched Expertise',
      description: 'Our team of elite professionals brings decades of combined experience in cutting-edge network solutions.',
      image: '/images/satellite.jpg',
    },
    {
      title: 'Innovative Technology',
      description: 'We leverage state-of-the-art technologies to deliver unparalleled performance and ironclad security.',
      image: '/images/global-coverage.jpg',
    },
    {
      title: '24/7 Dedicated Support',
      description: 'Our round-the-clock support team ensures your network runs smoothly, addressing issues before they arise.',
      image: '/images/support.png',
    },
    {
      title: 'Tailor-Made Solutions',
      description: 'We craft bespoke network architectures that align perfectly with your unique business objectives.',
      image: '/images/star_link_accessories_actuated_short_wall_mount top.webp',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6 bg-blue-50">
                <h3 className="text-xl font-semibold text-blue-800 text-center mb-4">{reason.title}</h3>
                <p className="text-gray-600 text-center">{reason.description}</p>
              </div>
              <div className="bg-blue-600 h-2 w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;