// components/Footer.js
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const SocialIcon = ({ href, Icon }) => (
  <Link href={href} className="text-white hover:text-blue-400 transition-colors">
    <Icon className="w-6 h-6" />
  </Link>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className="hover:text-blue-400 transition-colors">
      {children}
    </Link>
  </li>
);

const FooterSection = ({ title, children }) => (
  <div className="mb-8 md:mb-0">
    <h4 className="text-xl font-semibold mb-4 text-blue-400">{title}</h4>
    {children}
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="About Us">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">AbaSatellite</h3>
            <p className="mb-4">Bringing cutting-edge connectivity and entertainment solutions to your doorstep.</p>
            <div className="flex space-x-4">
              <SocialIcon href="https://facebook.com" Icon={FaFacebookF} />
              <SocialIcon href="https://twitter.com" Icon={FaTwitter} />
              <SocialIcon href="https://instagram.com" Icon={FaInstagram} />
              <SocialIcon href="https://linkedin.com" Icon={FaLinkedinIn} />
            </div>
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="Our Services">
            <ul className="space-y-2">
              <FooterLink href="/services/starlink-installation">Starlink Installation</FooterLink>
              <FooterLink href="/services/canal-plus-subscription">Canal+ Subscription</FooterLink>
              <FooterLink href="/services/dstv-setup">DStv Setup</FooterLink>
              <FooterLink href="/services/solar-panel-installation">Solar Panel Installation</FooterLink>
            </ul>
          </FooterSection>

          <FooterSection title="Contact Us">
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-400" />
                <span>237 Connectivity Street, Molyko, Buea</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-blue-400" />
                <span>(237) 681 326 315</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" />
                <span>info@abasatellite.com</span>
              </li>
            </ul>
          </FooterSection>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} AbaSatellite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}