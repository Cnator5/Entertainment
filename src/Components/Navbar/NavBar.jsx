"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "StarLink", path: "/starlink" },
    { name: "Canal+", path: "/canalplus" },
    { name: "DStv", path: "/dstv" },
  ];

  return (
    <>
      {/* Viewport meta tag for responsive scaling */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <nav
        className={`${styles.navbar} ${
          scrolled ? styles.navbarScrolled : styles.navbarTransparent
        }`}
      >
        <div className={styles.container}>
          <div className={styles.navbarInner}>
            <Link href="/" className={styles.brand}>
              <span
                className={
                  scrolled ? styles.brandScrolled : styles.brandTransparent
                }
              >
                AbaSatellite
              </span>
            </Link>

            <div className={styles.navLinks}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`${styles.navLink} ${
                    scrolled ? styles.navLinkScrolled : styles.navLinkTransparent
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className={styles.menuButton} onClick={toggleMenu}>
              <svg
                className={`h-6 w-6 ${
                  scrolled ? styles.menuButtonScrolled : styles.menuButtonTransparent
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className={styles.mobileMenu} onClick={toggleMenu}>
            <div className={styles.mobileMenuContent}>
              <nav>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={styles.mobileNavLink}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
