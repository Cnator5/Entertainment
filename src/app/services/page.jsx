"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaInfoCircle, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';

const ServiceSection = ({ title, description, imageSrc, index, features, rating, detailsLink }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className={`py-16 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image 
              src={imageSrc} 
              alt={title} 
              width={500} 
              height={300} 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              priority={index === 0}
            />
          </div>
          <div className="lg:w-1/2 lg:px-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
            <div className="flex items-center mb-4" aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`} aria-hidden="true" />
              ))}
              <span className="ml-2 text-gray-600">{rating.toFixed(1)} out of 5</span>
            </div>
            <ul className="mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600 mb-2">
                  <FaInfoCircle className="mr-2 text-blue-500" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href={detailsLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center">
                  <FaExternalLinkAlt className="mr-2" aria-hidden="true" />
                  View Details
                </button>
              </Link>
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 flex items-center">
                <FaPhone className="mr-2" aria-hidden="true" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Services() {
  const services = [
    {
      title: "Starlink Installation",
      description: "Experience high-speed internet anywhere with our professional Starlink installation service. We ensure optimal setup for maximum performance and reliability.",
      imageSrc: "/images/goolwa-starlink-install.jpg",
      features: ["High-speed internet access", "Professional installation", "24/7 customer support", "Suitable for remote areas"],
      rating: 4.8,
      detailsLink: "https://www.starlink.com/satellite-installers"
    },
    {
      title: "Canal+ Subscription",
      description: "Get access to premium entertainment with Canal+. We offer hassle-free subscription services and support to enhance your viewing experience.",
      imageSrc: "/images/canal-plus-subscription.webp",
      features: ["Wide range of channels", "HD and 4K content", "Multi-device streaming", "Flexible subscription plans"],
      rating: 4.5,
      detailsLink: "https://www.canalplus.com/offres/"
    },
    {
      title: "DStv Setup",
      description: "Enjoy a wide range of channels and content with our DStv setup service. Our experts ensure you get the best signal quality and channel selection.",
      imageSrc: "/images/Dstv_good.jpg",
      features: ["Professional installation", "Channel package customization", "HD and UHD content", "On-demand streaming options"],
      rating: 4.7,
      detailsLink: "https://www.dstv.co.za/media/4272/single-view-hd-quick-guide.pdf"
    },
    {
      title: "Solar Panel Installation",
      description: "Harness the power of the sun with our solar panel installation service. We provide eco-friendly energy solutions tailored to your needs.",
      imageSrc: "/images/solar-panel-installation.jpeg",
      features: ["Eco-friendly energy solution", "Reduced electricity bills", "Government incentives available", "Professional installation and maintenance"],
      rating: 4.9,
      detailsLink: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar"
    }
  ];

  useEffect(() => {
    // Implement smooth scroll
    const smoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Our Services - AbaSatellite</title>
        <meta name="description" content="Explore our range of services including Starlink Installation, Canal+ Subscription, DStv Setup, and Solar Panel Installation." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": service.title,
              "description": service.description,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": service.rating,
                "bestRating": "5",
                "worstRating": "1"
              }
            }))
          })}
        </script>
      </Head>

      <main className="bg-gray-100">
        <section className="relative py-32 bg-cover bg-center" style={{backgroundImage: "url('/images/satellite-bg.avif')"}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">Our Services</h1>
            <p className="text-xl md:text-2xl animate-fade-in-up">Bringing cutting-edge connectivity and entertainment solutions to your doorstep.</p>
          </div>
        </section>

        {services.map((service, index) => (
          <ServiceSection 
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            index={index}
            features={service.features}
            rating={service.rating}
            detailsLink={service.detailsLink}
          />
        ))}
      </main>
    </>
  );
}