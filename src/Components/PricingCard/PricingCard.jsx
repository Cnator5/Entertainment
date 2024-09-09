"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PricingCard = ({ name, price, features, isPopular }) => (
  <motion.div
    className={`bg-white rounded-lg shadow-lg p-6 flex flex-col ${
      isPopular ? "border-4 border-indigo-500" : ""
    }`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {isPopular && (
      <span className="bg-indigo-500 text-white py-1 px-4 rounded-full text-sm font-semibold self-start mb-4">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <p className="text-4xl font-bold mb-6">
      ${price}
      <span className="text-xl font-normal">/mo</span>
    </p>
    <ul className="mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <svg
            className="w-5 h-5 mr-2 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300">
      Choose Plan
    </button>
  </motion.div>
);

export default function PricingSection() {
  const [plans] = useState([
    {
      name: "Basic",
      price: 49.99,
      features: [
        "Up to 25 Mbps download speed",
        "100 GB monthly data",
        "50+ TV channels",
        "24/7 customer support",
      ],
      isPopular: false,
    },
    {
      name: "Standard",
      price: 79.99,
      features: [
        "Up to 100 Mbps download speed",
        "Unlimited data",
        "150+ TV channels",
        "HD streaming",
        "24/7 priority customer support",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      price: 129.99,
      features: [
        "Up to 200 Mbps download speed",
        "Unlimited data",
        "300+ TV channels",
        "4K Ultra HD streaming",
        "24/7 VIP customer support",
        "Multi-device streaming",
      ],
      isPopular: false,
    },
  ]);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Choose Your Perfect Plan
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Get the best satellite internet and entertainment package for your
          needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
