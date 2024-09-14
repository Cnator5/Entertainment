"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaSatelliteDish, FaSolarPanel, FaTv, FaWifi } from 'react-icons/fa';

const products = [
  {
    name: 'Starlink',
    icon: FaSatelliteDish,
    image: '/images/starlink_good.jpg',
    description: 'Experience lightning-fast internet anywhere with Starlink satellite technology.',
    features: [
      'High-speed internet up to 150 Mbps',
      'Low latency for seamless streaming and gaming',
      'Easy self-installation',
      'No data caps',
    ],
    price: '450 000FCFA',
  },
  {
    name: 'Canal+',
    icon: FaTv,
    image: '/images/myCANAL_16x9_Logotype_MEA_1920x1080.jpg80 (1).webp',
    description: 'Immerse yourself in a world of premium entertainment with Canal+.',
    features: [
      'Exclusive movies and TV series',
      'Live sports coverage',
      'Multiple language options',
      'On-demand content',
    ],
    price: '25 000 FCFA',
  },
  {
    name: 'DStv',
    icon: FaSatelliteDish,
    image: '/images/Dstv-Now-App.jpg',
    description: 'Enjoy a wide range of channels and content with DStv satellite television.',
    features: [
      '200+ channels available',
      'HD and 4K content',
      'PVR functionality',
      'Mobile app for on-the-go viewing',
    ],
    price: '75 000FCFA',
  },
  {
    name: 'Solar',
    icon: FaSolarPanel,
    image: '/images/solar-gettyimages-525206743.webp',
    description: 'Harness the power of the sun with our efficient solar panel systems.',
    features: [
      'Reduce electricity bills',
      'Environmentally friendly',
      '25-year warranty',
      'Smart energy monitoring',
    ],
    price: '50 000FCFA - 2 000 000FCFA',
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-6">
        <div className="flex items-center mb-4">
          <product.icon className="text-4xl text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ul className="mb-4">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700 mb-2">
              <FaWifi className="text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="text-2xl font-bold text-blue-600">{product.price}</div>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
          Get Quote
        </button>
      </div>
      <div className="lg:w-1/2">
        <div className="relative h-64 lg:h-full">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  </div>
);

const ProductCarousel = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Products</h2>
        <div className="flex justify-center mb-8">
          {products.map((product, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
                activeProduct === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 hover:bg-blue-100'
              }`}
              onClick={() => setActiveProduct(index)}
            >
              {product.name}
            </button>
          ))}
        </div>
        <div className="relative">
          <ProductCard product={products[activeProduct]} />
          <div className="absolute -top-6 left-0 right-0 flex justify-center">
            {products.map((_, index) => (
              <button
                key={index}
                className={`mx-1 w-4 h-4 rounded-full transition-colors duration-300 ${
                  activeProduct === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveProduct(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;