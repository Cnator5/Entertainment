import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImageShowcaseSection = () => {
  const images = [
    { src: '/images/starlink-installation2.jpg', alt: 'Starlink Satellite Dish', title: 'Starlink' },
    { src: '/images/Dstv-Now-App.jpg', alt: 'DStv Decoder', title: 'DStv' },
    { src: '/images/canal-plus-subscription.webp', alt: 'Canal+ Receiver', title: 'Canal+' },
    { src: '/images/cover-web (1).webp', alt: 'Canal+ Receiver', title: 'Canal+' },
    { src: '/images/img-canal-channels.webp', alt: 'Canal+ Receiver', title: 'Canal+' },
    { src: '/images/gettyimages-1230967337-612x612.jpg', alt: 'Canal+ Receiver', title: 'Canal+' },
    { src: '/images/02LcXChSEOj1be2FWBxlQ7V-1.webp', alt: 'Starlink Satellite Dish', title: 'Starlink' },
    { src: '/images/starlink-growth.png', alt: 'Starlink Satellite Dish', title: 'Starlink' },
    { src: '/images/Starlink-Mini-cover.jpg', alt: 'Starlink Satellite Dish', title: 'Starlink' },
    { src: '/images/loggedout_devices.eb77c13d871dcc8d.png', alt: 'DStv Decoder', title: 'DStv' },
    { src: '/images/loggedout_settings.a219ad0d0bb56947.png', alt: 'DStv Decoder', title: 'DStv' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Our Premium Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4"
              >
                <h3 className="text-xl font-semibold">{image.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;