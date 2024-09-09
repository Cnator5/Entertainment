import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentImageIndex ? 1 : 0,
            scale: isTransitioning ? 1.05 : 1,
          }}
          transition={{ duration: 1 }}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            style={{
              objectFit: "cover",
              filter: "brightness(1.2)", // Increase brightness
            }}
            quality={100}
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}
