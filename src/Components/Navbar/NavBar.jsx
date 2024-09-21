"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from './NavBar.module.css';
import { useCart } from './../../app/lib/cartContext';// Make sure this path is correct
import { CartProvider } from './../../app/lib/cartContext';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart(); // Get cart from context

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : styles.navbarTransparent}`}>
        <div className={styles.container}>
          <div className={styles.navbarInner}>
            <Link href="/" className={styles.brand}>
              <span className={scrolled ? styles.brandScrolled : styles.brandTransparent}>
                AbaSatellite
              </span>
            </Link>

            <div className={styles.navLinks}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`${styles.navLink} ${scrolled ? styles.navLinkScrolled : styles.navLinkTransparent}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/cart" className={`${styles.navLink} ${styles.cartIcon} ${scrolled ? styles.navLinkScrolled : styles.navLinkTransparent}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cart.length > 0 && <span className={styles.cartCount}>{cart.length}</span>}
              </Link>
            </div>

            <div className={styles.menuButton} onClick={toggleMenu}>
              <svg
                className={`h-6 w-6 ${scrolled ? styles.menuButtonScrolled : styles.menuButtonTransparent}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                  <Link key={item.name} href={item.path} className={styles.mobileNavLink}>
                    {item.name}
                  </Link>
                ))}
                <Link href="/cart" className={styles.mobileNavLink}>
                  <span>Cart</span>
                  {cart.length > 0 && <span className={styles.cartCount}>{cart.length}</span>}
                </Link>
              </nav>
            </div>
          </div>
        )}
      </nav>
      <CartProvider/>
    </>
  );
};

export default NavBar;