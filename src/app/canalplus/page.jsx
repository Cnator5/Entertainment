"use client"
import { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Canal+ Premium Installation Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-black text-white py-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <button className="text-2xl font-bold">Canal+ Experts</button>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
          <ul className={`md:flex space-x-6 md:block ${isOpen ? 'fixed left-0 top-0 w-64 bg-black p-4 h-full z-50' : 'hidden'} md:static`}>
            <li className="py-2">
              <Link href="/packages">
                <button className="hover:text-gray-300">Packages</button>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/installation">
                <button className="hover:text-gray-300">Installation</button>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/about">
                <button className="hover:text-gray-300">About Us</button>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/contact">
                <button className="hover:text-gray-300">Contact</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
 

      <main>
      {/* Hero Section */}
<section className="relative h-[60vh] flex items-center justify-center text-white bg-black">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/canalplus.jpg"
      alt="StarLink Satellite"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="opacity-70" // Added opacity to blend with the black background
    />
  </div>
  <div className="relative z-10 text-center">
    <Link href="#packages">
      <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300">
        Explore Packages
      </button>
    </Link>
  </div>
</section>
        {/* Featured Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Content on Canal+
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <img
                  src="/images/placeholder-movie.jpg"
                  alt="Latest Movies"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Blockbuster Movies
                </h3>
                <p>Watch the latest Hollywood hits and exclusive premieres</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <img
                  src="/images/placeholder-sports.jpg"
                  alt="Live Sports"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Live Sports</h3>
                <p>Never miss a game with our comprehensive sports coverage</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <img
                  src="/images/placeholder-series.avif"
                  alt="Original Series"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Original Series</h3>
                <p>
                  Dive into captivating stories with Canal+ original productions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Choose Your Perfect Package
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Basic</h3>
                <p className="text-4xl font-bold mb-4">
                  5000 FCFA<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="mb-8">
                  <li className="mb-2">✓ 50+ channels</li>
                  <li className="mb-2">✓ HD quality</li>
                  <li className="mb-2">✓ 7-day replay</li>
                </ul>
                {/* <Link href="contact">
                  <button className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Subscribe Now
                  </button>
                </Link> */}
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 border-4 border-blue-600">
                <h3 className="text-2xl font-semibold mb-4">Premium</h3>
                <p className="text-4xl font-bold mb-4">
                  10000 FCFA<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="mb-8">
                  <li className="mb-2">✓ 100+ channels</li>
                  <li className="mb-2">✓ 4K Ultra HD</li>
                  <li className="mb-2">✓ 30-day replay</li>
                  <li className="mb-2">✓ Exclusive sports events</li>
                </ul>
                {/* <Link href="contact">
                  <button className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Subscribe Now
                  </button>
                </Link> */}
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Family</h3>
                <p className="text-4xl font-bold mb-4">
                  15000 FCFA<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="mb-8">
                  <li className="mb-2">✓ 150+ channels</li>
                  <li className="mb-2">✓ 4K Ultra HD</li>
                  <li className="mb-2">✓ 30-day replay</li>
                  <li className="mb-2">✓ Multiple device streaming</li>
                  <li className="mb-2">✓ Parental controls</li>
                </ul>
                {/* <Link href="contact">
                  <button className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Subscribe Now
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Installation Services Section */}
        <section id="installation" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Professional Installation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <img
                  src="/images/placeholder-installation.webp"
                  alt="Professional Installation"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Expert Setup</h3>
                <p className="mb-4">
                  Our team of certified technicians ensures a seamless
                  installation experience for your Canal+ system.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Quick and efficient setup</li>
                  <li>Optimal positioning for the best signal</li>
                  <li>Cable management for a clean look</li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/placeholder-movie.jpg"
                  alt="Customer Support"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Ongoing Support</h3>
                <p className="mb-4">
                  We&apos;re here for you long after the installation is
                  complete.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>24/7 customer support</li>
                  <li>Regular system updates</li>
                  <li>Troubleshooting assistance</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/contact">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300">
                  Schedule Installation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">
                  The installation was quick and professional. I&apos;m loving
                  my new Canal+ experience!
                </p>
                <p className="font-semibold">- Sarah T.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">
                  Incredible selection of content. Canal+ has transformed our
                  family movie nights!
                </p>
                <p className="font-semibold">- Michael R.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">
                  The 4K quality is mind-blowing. I feel like I&apos;m right
                  there at the stadium!
                </p>
                <p className="font-semibold">- Emma L.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              About Our Company
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="/images/placeholder-team.jpeg"
                  alt="Our Team"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-semibold mb-4">
                  Your Trusted Canal+ Partner
                </h3>
                <p className="mb-4">
                  With over a decade of experience in the entertainment
                  industry, we&apos;ve helped thousands of customers elevate
                  their viewing experience with Canal+.
                </p>
                <p className="mb-4">
                  Our mission is to bring world-class entertainment to every
                  home, backed by exceptional customer service and technical
                  expertise.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Authorized Canal+ reseller and installer</li>
                  <li>Highly trained and certified technicians</li>
                  <li>Commitment to customer satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">What is Canal+?</h3>
                <p>
                  Canal+ is a premium television service offering a wide range
                  of channels, including movies, sports, and exclusive content.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  How long does installation take?
                </h3>
                <p>
                  Typical installation takes 2-3 hours, depending on your setup
                  and package choice.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Can I watch Canal+ on multiple devices?
                </h3>
                <p>
                  Yes, Canal+ offers multi-device streaming options with our
                  Premium and Family packages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Is there a contract?
                </h3>
                <p>
                  We offer both contract and no-contract options. Speak with our
                  sales team for more details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections can be added here */}
      </main>
    </div>
  );
}
