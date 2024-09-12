"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SocialIcon = ({ href, Icon }) => (
  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
    <Link href={href} className="text-white hover:text-blue-400 transition-colors">
      <Icon className="w-6 h-6" />
    </Link>
  </motion.div>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className="hover:text-blue-400 transition-colors">
      <motion.span whileHover={{ x: 5 }} className="inline-block">
        {children}
      </motion.span>
    </Link>
  </li>
);

const FooterSection = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8 md:mb-0"
  >
    <h4 className="text-xl font-semibold mb-4 text-blue-400">{title}</h4>
    {children}
  </motion.div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="About Us">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-blue-400 mb-4"
            >
              AbaSatellite
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-4"
            >
              Bringing cutting-edge connectivity and entertainment solutions to your doorstep. Experience the future of communication with AbaSatellite.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-4"
            >
              <SocialIcon href="https://facebook.com" Icon={FaFacebookF} />
              <SocialIcon href="https://twitter.com" Icon={FaTwitter} />
              <SocialIcon href="https://instagram.com" Icon={FaInstagram} />
              <SocialIcon href="https://linkedin.com" Icon={FaLinkedinIn} />
            </motion.div>
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="Our Services">
            <ul className="space-y-2">
              <FooterLink href="/services/starlink-installation">Starlink Installation</FooterLink>
              <FooterLink href="/services/canal-plus-subscription">Canal+ Subscription</FooterLink>
              <FooterLink href="/services/dstv-setup">DStv Setup</FooterLink>
              <FooterLink href="/services/solar-panel-installation">Solar Panel Installation</FooterLink>
              <FooterLink href="/services/internet-troubleshooting">Internet Troubleshooting</FooterLink>
              <FooterLink href="/services/smart-home-setup">Smart Home Setup</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="Contact Us">
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center"
              >
                <FaMapMarkerAlt className="mr-2 text-blue-400" />
                <span>237 Connectivity Street, Molyko, Buea</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center"
              >
                <FaPhone className="mr-2 text-blue-400" />
                <span>(237) 681 326 315</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center"
              >
                <FaEnvelope className="mr-2 text-blue-400" />
                <span>info@abasatellite.com</span>
              </motion.li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Get a Quote
            </motion.button>
          </FooterSection>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p>&copy; {currentYear} AbaSatellite. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Designed with ❤️ by AbaSatellite Team | 
            <Link href="/privacy-policy" className="ml-1 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link> | 
            <Link href="/terms-of-service" className="ml-1 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}