"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSatelliteDish, FaTv, FaSolarPanel, FaWifi, FaHome } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon: Icon, href }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
  >
    <Icon className="text-4xl text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href={href} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
      Learn More
    </Link>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: "Starlink Installation",
      description: "Get high-speed internet anywhere with our professional Starlink installation service.",
      icon: FaSatelliteDish,
      href: "/services/starlink-installation"
    },
    {
      title: "Canal+ Subscription",
      description: "Enjoy premium TV content with our Canal+ subscription services.",
      icon: FaTv,
      href: "/services/canal-plus-subscription"
    },
    {
      title: "DStv Setup",
      description: "Experience a world of entertainment with our DStv setup and installation service.",
      icon: FaTv,
      href: "/services/dstv-setup"
    },
    {
      title: "Solar Panel Installation",
      description: "Harness the power of the sun with our professional solar panel installation service.",
      icon: FaSolarPanel,
      href: "/services/solar-panel-installation"
    },
    {
      title: "Internet Troubleshooting",
      description: "Having internet issues? Our expert technicians are here to help resolve any connectivity problems.",
      icon: FaWifi,
      href: "/services/internet-troubleshooting"
    },
    {
      title: "Smart Home Setup",
      description: "Transform your house into a smart home with our cutting-edge automation solutions.",
      icon: FaHome,
      href: "/services/smart-home-setup"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;