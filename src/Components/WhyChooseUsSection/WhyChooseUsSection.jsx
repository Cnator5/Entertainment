import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: 'Unmatched Expertise',
      description: 'Our team of elite professionals brings decades of combined experience in cutting-edge network solutions.',
      icon: '/icons/expertise.svg',
    },
    {
      title: 'Innovative Technology',
      description: 'We leverage state-of-the-art technologies to deliver unparalleled performance and ironclad security.',
      icon: '/icons/technology.png',
    },
    {
      title: '24/7 Dedicated Support',
      description: 'Our round-the-clock support team ensures your network runs smoothly, addressing issues before they arise.',
      icon: '/image/support.svg',
    },
    {
      title: 'Tailor-Made Solutions',
      description: 'We craft bespoke network architectures that align perfectly with your unique business objectives.',
      icon: '/icons/custom.svg',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
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
              <div className="p-8">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6"
                >
                  <Image
                    src={reason.icon}
                    alt={reason.title}
                    width={40}
                    height={40}
                    className="text-blue-600"
                  />
                </motion.div>
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