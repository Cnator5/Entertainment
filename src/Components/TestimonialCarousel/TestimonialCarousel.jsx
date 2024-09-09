"use client";
// components/TestimonialCarousel.js
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
    image: "/images/profile1.jpg",
    quote:
      "AbaSatellite&apos;s StarLink installation was flawless. I now have high-speed internet in my rural home!",
    rating: 5,
    product: "StarLink",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Canal+ Subscriber",
    image: "/images/profile2.jpg",
    quote:
      "The variety of channels on Canal+ is amazing. AbaSatellite made the subscription process so easy!",
    rating: 4.5,
    product: "Canal+",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "DStv User",
    image: "/images/profile3.jpg",
    quote:
      "I&apos;m loving my DStv setup from AbaSatellite. The picture quality is outstanding!",
    rating: 5,
    product: "DStv",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Solar Panel Owner",
    image: "/images/profile4.jpg",
    quote:
      "AbaSatellite&apos;s solar panel installation has significantly reduced my electricity bills. Highly recommended!",
    rating: 4.5,
    product: "Solar Panels",
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-xl p-6 mx-4 my-8 ${
        isActive ? "border-2 border-blue-500" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="relative w-16 h-16 mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            layout="fill"
            className="rounded-full"
            objectFit="cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <div className="mb-4">
        <FaQuoteLeft className="text-blue-500 text-2xl mb-2" />
        <p className="text-gray-700 italic">{testimonial.quote}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {testimonial.rating >= i + 1 ? (
                <FaStar className="text-yellow-400" />
              ) : testimonial.rating > i ? (
                <FaStarHalf className="text-yellow-400" />
              ) : (
                <FaStar className="text-gray-300" />
              )}
            </span>
          ))}
        </div>
        <span className="text-sm font-semibold text-blue-500">
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
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
              isActive={true}
            />
          </AnimatePresence>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-blue-500 hover:text-white transition-colors"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-blue-500 hover:text-white transition-colors"
            onClick={handleNext}
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
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
