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
import styles from "./Footer.module.css";

const SocialIcon = ({ href, Icon }) => (
  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
    <Link href={href} className={styles.socialIcon}>
      <Icon className={styles.icon} />
    </Link>
  </motion.div>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className={styles.footerLink}>
      <motion.span whileHover={{ x: 5 }} className={styles.linkText}>
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
    className={styles.footerSection}
  >
    <h4 className={styles.sectionTitle}>{title}</h4>
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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <FooterSection title="About Us">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.companyName}
            >
              AbaSatellite
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={styles.companyDescription}
            >
              Bringing cutting-edge connectivity and entertainment solutions to your doorstep. Experience the future of communication with AbaSatellite.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={styles.socialIcons}
            >
              <SocialIcon href="https://facebook.com" Icon={FaFacebookF} />
              <SocialIcon href="https://twitter.com" Icon={FaTwitter} />
              <SocialIcon href="https://instagram.com" Icon={FaInstagram} />
              <SocialIcon href="https://linkedin.com" Icon={FaLinkedinIn} />
            </motion.div>
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className={styles.linkList}>
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="Our Services">
            <ul className={styles.linkList}>
              <FooterLink href="/services/starlink-installation">Starlink Installation</FooterLink>
              <FooterLink href="/services/canal-plus-subscription">Canal+ Subscription</FooterLink>
              <FooterLink href="/services/dstv-setup">DStv Setup</FooterLink>
              <FooterLink href="/services/solar-panel-installation">Solar Panel Installation</FooterLink>
              <FooterLink href="/services/internet-troubleshooting">Internet Troubleshooting</FooterLink>
              <FooterLink href="/services/smart-home-setup">Smart Home Setup</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="Contact Us">
            <ul className={styles.contactList}>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={styles.contactItem}
              >
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>237 Connectivity Street, Molyko, Buea</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={styles.contactItem}
              >
                <FaPhone className={styles.contactIcon} />
                <span>(237) 681 326 315</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={styles.contactItem}
              >
                <FaEnvelope className={styles.contactIcon} />
                <span>info@abasatellite.com</span>
              </motion.li>
            </ul>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.quoteButton}
              >
                Get a Quote
              </motion.button>
            </Link>
          </FooterSection>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={styles.bottomBar}
        >
          <p>&copy; {currentYear} AbaSatellite. All rights reserved.</p>
          <p className={styles.bottomLinks}>
            Designed with ❤️ by AbaSatellite Team | 
            <Link href="/privacy-policy" className={styles.bottomLink}>
              Privacy Policy
            </Link> | 
            <Link href="/terms-of-service" className={styles.bottomLink}>
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
            className={styles.scrollTopButton}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}