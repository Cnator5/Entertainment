import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            style={{
              objectFit: "cover",
              filter: "brightness(1.2)",
            }}
            quality={100}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}