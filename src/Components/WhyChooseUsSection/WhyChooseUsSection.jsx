"use client";

import React, { useState, useEffect } from "react";

const WhyChooseUsSection = () => {
  const [stats, setStats] = useState({
    customers: 0,
    reliability: 0,
    speed: 0,
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Switching to Starlink and solar panels has been a game-changer for our remote business. The internet is lightning-fast, and we&apos;re saving on energy costs!",
      author: "Sarah Johnson, Small Business Owner",
    },
    {
      text: "The entertainment package with Canal+ and DStv is unbeatable. We never run out of great content to watch!",
      author: "Michael Thompson, Family Man",
    },
    {
      text: "The customer service team went above and beyond during the installation process. Highly recommend their services!",
      author: "Emily Chen, Tech Enthusiast",
    },
  ];

  useEffect(() => {
    const animateNumber = (key, target) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        setStats((prev) => ({ ...prev, [key]: Math.round(current) }));
        if (current >= target) {
          clearInterval(timer);
          setStats((prev) => ({ ...prev, [key]: target }));
        }
      }, 20);
    };

    animateNumber("customers", 5000);
    animateNumber("reliability", 99);
    animateNumber("speed", 500);

    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialTimer);
  }, []);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 to-indigo-800 py-16 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Statistics */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{stats.customers}+</h3>
                <p className="text-blue-200">Satisfied Customers</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  {stats.reliability}%
                </h3>
                <p className="text-blue-200">Service Reliability</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{stats.speed} Mbps</h3>
                <p className="text-blue-200">Average Internet Speed</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8 relative">
            <div className="testimonial-slider">
              <div className="testimonial-slide">
                <p className="text-lg mb-4">
                  {testimonials[currentTestimonial].text}
                </p>
                <p className="font-semibold">
                  - {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
            <button
              onClick={handlePrevTestimonial}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNextTestimonial}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
