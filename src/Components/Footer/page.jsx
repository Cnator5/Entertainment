"use client";
// components/Footer.js
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaSatelliteDish,
} from "react-icons/fa";

const MotionLink = motion(Link);

const IconButton = ({ Icon }) => {
  return (
    <motion
      href="#"
      className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-5 h-5" />
    </motion>
  );
};

const Satellite = () => {
  return (
    <motion.div
      className="absolute top-0 right-0 text-blue-300 opacity-20"
      initial={{ rotate: -45, y: -100 }}
      animate={{ rotate: 0, y: 0 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <FaSatelliteDish className="w-32 h-32" />
    </motion.div>
  );
};

export default function Footer() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <Satellite />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-blue-400">AbaSatellite</h3>
            <p className="text-gray-300">
              Bringing cutting-edge connectivity and entertainment solutions to
              your doorstep.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <IconButton key={index} Icon={Icon} />
                )
              )}
            </div>
          </motion.div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MotionLink
                      href={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="hover:text-blue-400 transition-colors flex items-center"
                      whileHover={{ x: 10 }}
                    >
                      <span className="mr-2">›</span> {item}
                    </MotionLink>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                "Starlink Installation",
                "Canal+ Subscription",
                "DStv Setup",
                "Solar Panel Installation",
              ].map((service, index) => (
                <motion.li
                  key={index}
                  onHoverStart={() => setHoveredService(service)}
                  onHoverEnd={() => setHoveredService(null)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MotionLink
                    href={`/services/${service
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="hover:text-blue-400 transition-colors flex items-center"
                    whileHover={{ x: 10 }}
                  >
                    <span className="mr-2">›</span> {service}
                  </MotionLink>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              Contact Us
            </h4>
            <ul className="space-y-2">
              {[
                {
                  icon: FaMapMarkerAlt,
                  text: "237 Connectivity Street, Molyko, Buea",
                },
                { icon: FaPhone, text: "(237) 681 326 315" },
                { icon: FaEnvelope, text: "info@abasallite.com" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="mr-2 text-blue-400" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <motion.div
        className="border-t border-gray-800 py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} AbaSatellite. All rights reserved.
          </p>
        </div>
      </motion.div>
      {hoveredService && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
          layoutId="serviceUnderline"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
        />
      )}
    </footer>
  );
}
