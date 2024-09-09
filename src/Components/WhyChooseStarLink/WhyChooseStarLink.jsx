"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faGlobe,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseStarLink = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "/icons/speed.svg",
      title: "High-Speed Internet",
      description:
        "Experience download speeds up to 150 Mbps and upload speeds up to 30 Mbps, rivaling or surpassing many terrestrial broadband options.",
      image: "/images/starlink_accessories_actuated_pipe_adapter_mount.webp",
    },
    {
      icon: "/icons/globe.svg",
      title: "Global Coverage",
      description:
        "StarLink satellite constellation provides internet access to even the most remote locations on Earth, bridging the digital divide.",
      image: "/images/global-coverage.jpg",
    },
    {
      icon: "/icons/clock.svg",
      title: "Low Latency",
      description:
        "With latency as low as 20ms, StarLink enables seamless online gaming, video calls, and real-time applications.",
      image: "/images/low-latency.avif",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-12 text-gray-800 transition-all duration-500 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          Why Choose StarLink?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg  overflow-hidden transition-all duration-500 ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseStarLink;
