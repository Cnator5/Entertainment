"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  name,
  price,
  description,
  features,
  icon,
  image,
  slug,
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-col flex-grow md:pr-6 mb-6 md:mb-0">
      <div className="flex items-center mb-4">
        <div className="text-indigo-600 mr-4">{icon}</div>
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-3xl font-bold mb-6">{price}</p>
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
      <Link href={`/products/${slug}`} passHref>
        <motion.a
          className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </Link>
    </div>
    <div className="relative w-full md:w-1/3 h-64 md:h-auto overflow-hidden rounded-lg">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
    </div>
  </motion.div>
);

const ProductSelector = ({ products, activeProduct, setActiveProduct }) => (
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    {products.map((product) => (
      <motion.button
        key={product.name}
        className={`px-4 py-2 rounded-full ${
          activeProduct === product.name
            ? "bg-indigo-600 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveProduct(product.name)}
      >
        {product.name}
      </motion.button>
    ))}
  </div>
);

export default function ProductsSection() {
  const [products] = useState([
    {
      name: "Starlink",
      price: "500,000 FCFA",
      description: "High-speed satellite internet for seamless connectivity.",
      features: [
        "Up to 150 Mbps download speed",
        "Low latency for real-time applications",
        "Easy self-installation",
        "24/7 customer support",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      image: "/images/starlink_good.jpg",
      slug: "starlink",
    },
    {
      name: "Canal+",
      price: "25,000 FCFA/month",
      description: "Premium French and African content for your entertainment.",
      features: [
        "200+ TV channels",
        "Movies, series, and documentaries",
        "Sports coverage",
        "Multiple device streaming",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      image: "/images/canalplusnew.webp",
      slug: "canal-plus",
    },
    {
      name: "DSTV",
      price: "5,000 FCFA/month",
      description: "Diverse international content for the whole family.",
      features: [
        "150+ TV channels",
        "Live sports events",
        "Kids programming",
        "HD and Full HD channels",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      image: "/images/Dstv_good.jpg",
      slug: "dstv",
    },
    {
      name: "Solar Panels",
      price: "From 50,000 to 1,000,000 FCFA",
      description: "Sustainable energy solutions for your home or business.",
      features: [
        "Customizable system sizes",
        "Reduces electricity bills",
        "Environmentally friendly",
        "Low maintenance",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      image: "/images/solar.webp",
      slug: "solar-panels",
    },
  ]);

  const [activeProduct, setActiveProduct] = useState(products[0].name);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Products & Services
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the perfect solution for your connectivity and entertainment
          needs
        </motion.p>

        <ProductSelector
          products={products}
          activeProduct={activeProduct}
          setActiveProduct={setActiveProduct}
        />

        <AnimatePresence mode="wait">
          {products.map(
            (product) =>
              product.name === activeProduct && (
                <ProductCard key={product.name} {...product} />
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
