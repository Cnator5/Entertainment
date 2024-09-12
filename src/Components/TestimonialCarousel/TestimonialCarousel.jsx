"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaStarHalf,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "StarLink Customer",
    image: "https://picsum.photos/200/200?random=1",
    quote:
      "AbaSatellite's StarLink installation was flawless. I now have high-speed internet in my rural home!",
    rating: 5,
    product: "StarLink",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Canal+ Subscriber",
    image: "https://picsum.photos/200/200?random=2",
    quote:
      "The variety of channels on Canal+ is amazing. AbaSatellite made the subscription process so easy!",
    rating: 4.5,
    product: "Canal+",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "DStv User",
    image: "https://picsum.photos/200/200?random=3",
    quote:
      "I'm loving my DStv setup from AbaSatellite. The picture quality is outstanding!",
    rating: 5,
    product: "DStv",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Solar Panel Owner",
    image: "https://picsum.photos/200/200?random=4",
    quote:
      "AbaSatellite's solar panel installation has significantly reduced my electricity bills. Highly recommended!",
    rating: 4.5,
    product: "Solar Panels",
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-2xl p-8 mx-4 my-8 transform transition-all duration-300 ${
        isActive ? "scale-105 border-2 border-blue-500" : "scale-95 opacity-70"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800">{testimonial.name}</h3>
          <p className="text-lg text-blue-600 font-semibold">{testimonial.role}</p>
        </div>
      </div>
      <div className="mb-6">
        <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
        <p className="text-gray-700 italic text-lg leading-relaxed">{testimonial.quote}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {testimonial.rating >= i + 1 ? (
                <FaStar className="text-yellow-400 text-xl" />
              ) : testimonial.rating > i ? (
                <FaStarHalf className="text-yellow-400 text-xl" />
              ) : (
                <FaStar className="text-gray-300 text-xl" />
              )}
            </span>
          ))}
        </div>
        <span className="text-lg font-semibold text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
          {testimonial.product}
        </span>
      </div>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setAutoplay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>
          <button
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-blue-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-blue-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleNext}
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full mx-2 transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 hover:bg-blue-300"
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setAutoplay(false);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;