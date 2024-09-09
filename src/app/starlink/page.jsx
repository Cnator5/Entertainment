// pages/Starlink.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import WhyChooseStarLink from "@/Components/WhyChooseStarLink/WhyChooseStarLink";

const Page = () => {
  return (
    <>
      <Head>
        <title>StarLink - Fastest Internet Connection | AbaSatellite</title>
        <meta
          name="description"
          content="Experience lightning-fast internet with StarLink. AbaSatellite offers professional installation and support for StarLink satellite internet."
        />
      </Head>

      <div className="bg-gray-100 mt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/star_link_accessories_actuated_short_wall_mount top.webp"
              alt="StarLink Satellite"
              layout="fill"
              quality={100}
            />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-4">
              StarLink: The Future of Internet
            </h1>
            <p className="text-2xl mb-8">
              Experience lightning-fast speeds anywhere on Earth
            </p>
            <Link href="/Contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
                Get Started Today
              </button>
            </Link>
          </div>
        </section>

        {/* What is StarLink? */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              What is StarLink?
            </h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/starlink-satellite.jpg"
                  alt="StarLink Satellite in Orbit"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <p className="text-lg mb-6">
                  StarLink is a revolutionary satellite internet constellation
                  that provides high-speed, low-latency internet access to users
                  around the globe. Developed by SpaceX, StarLink uses a network
                  of advanced satellites in low Earth orbit to deliver internet
                  connectivity to areas where traditional internet
                  infrastructure is unavailable or unreliable.
                </p>
                <p className="text-lg">
                  With StarLink, you can enjoy seamless video streaming, online
                  gaming, and video conferencing, even in remote locations. It&apos;s
                  changing the way we connect, work, and communicate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <WhyChooseStarLink />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              How StarLink Works
            </h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/Starlink_StandardActuated_500x500.png"
                  alt="StarLink Network Diagram"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <ol className="list-decimal list-inside space-y-4 text-lg">
                  <li>
                    A network of satellites orbits the Earth in low Earth orbit
                    (LEO)
                  </li>
                  <li>Your StarLink dish communicates with these satellites</li>
                  <li>
                    Satellites relay your internet traffic to ground stations
                  </li>
                  <li>
                    Ground stations connect to the broader internet
                    infrastructure
                  </li>
                  <li>
                    This process happens in milliseconds, providing you with
                    high-speed, low-latency internet
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* StarLink for Different Users */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              StarLink for Every Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Image
                  src="/images/home_a_roam_d starlink.webp"
                  alt="StarLink for Residential"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Residential</h3>
                <p className="text-lg">
                  Bring high-speed internet to your home, no matter where you
                  live. Perfect for streaming, gaming, and remote work.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Image
                  src="/images/Starlink_StandardActuated_500x500.png"
                  alt="StarLink for Business"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Business</h3>
                <p className="text-lg">
                  Empower your business with reliable, high-speed internet.
                  Ideal for video conferencing, cloud services, and more.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Image
                  src="/images/starlink_up.jpg"
                  alt="StarLink for RV"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">RV</h3>
                <p className="text-lg">
                  Stay connected on the road. Perfect for digital nomads and
                  long-distance travelers.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Image
                  src="/images/starlink_on_water_residential_boats_d.webp"
                  alt="StarLink for Maritime"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Maritime</h3>
                <p className="text-lg">
                  High-speed internet for vessels at sea. Ideal for commercial
                  ships, luxury yachts, and offshore operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-lg mb-4">
                 StarLink has transformed our rural life. We finally have
                  internet speeds that rival urban areas!
                </p>
                <p className="font-semibold">- John D., Farmer</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-lg mb-4">
                 As a remote worker, StarLink has been a game-changer. Video
                  calls are smooth, and I can access cloud services without any
                  lag.
                </p>
                <p className="font-semibold">- Sarah M., Software Developer</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-lg mb-4">
                 Our small business in a remote area now operates as
                  efficiently as any city-based company, thanks to StarLink.
                </p>
                <p className="font-semibold">
                  - Robert L., Small Business Owner
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Easy Installation Process
            </h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/starlink_accessories_ethernet_adapter.webp"
                  alt="StarLink Installation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <ol className="list-decimal list-inside space-y-4 text-lg">
                  <li>Order your StarLink kit from AbaSatellite</li>
                  <li>
                    Our team of experts will contact you to schedule
                    installation
                  </li>
                  <li>
                    We&apos;ll arrive at your location with all necessary equipment
                  </li>
                  <li>We&apos;ll find the optimal spot for your StarLink dish</li>
                  <li>
                    Professional installation and setup of your StarLink system
                  </li>
                  <li>
                    We&apos;ll ensure everything is working perfectly before we leave
                  </li>
                  <li>Enjoy your new high-speed internet connection!</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-gray-100 rounded-lg shadow-lg p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">StarLink Standard</h3>
                  <p className="text-5xl font-bold mb-6">$99<span className="text-2xl">/mo</span></p>
                  <ul className="text-left mb-8">
                    <li className="mb-2">✓ Up to 150 Mbps download</li>
                    <li className="mb-2">✓ Unlimited data</li>
                    <li className="mb-2">✓ 24/7 customer support</li>
                    <li className="mb-2">✓ Easy self-installation</li>
                  </ul>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center transform scale-105">
                  <h3 className="text-2xl font-semibold mb-4">StarLink Premium</h3>
                  <p className="text-5xl font-bold mb-6">$199<span className="text-2xl">/mo</span></p>
                  <ul className="text-left mb-8">
                    <li className="mb-2">✓ Up to 500 Mbps download</li>
                    <li className="mb-2">✓ Unlimited data</li>
                    <li className="mb-2">✓ Priority 24/7 support</li>
                    <li className="mb-2">✓ Professional installation included</li>
                    <li className="mb-2">✓ Static IP address</li>
                  </ul>
                  <button className="bg-white text-blue-600 hover:bg-gray-200 font-bold py-2 px-4 rounded-full transition duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Experience the Future of Internet?
            </h2>
            <p className="text-xl mb-8">
              Join the StarLink revolution today and unlock limitless
              possibilities with high-speed internet, anywhere on Earth.
            </p>
            <Link href="/Contact">
              <button className="bg-white text-blue-600 hover:bg-gray-200 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                Get Started with StarLink
              </button>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                  How fast is StarLink internet?
                </h3>
                <p className="text-lg">
                  StarLink typically offers download speeds between 50-150 Mbps
                  and upload speeds between 10-30 Mbps. However, as the
                  satellite constellation expands, these speeds are expected to
                  increase.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Is StarLink available in my area?
                </h3>
                <p className="text-lg">
                  StarLink is rapidly expanding its coverage. Contact us to
                  check availability in your specific location.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                  How much does the equipment cost?
                </h3>
                <p className="text-lg">
                  The StarLink kit, which includes the satellite dish, router,
                  and mounting hardware, is a one-time purchase. Contact us for
                  the most current pricing information.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Can I install StarLink myself?
                </h3>
                <p className="text-lg">
                  While self-installation is possible, we recommend professional
                  installation to ensure optimal performance and safety. Our
                  expert team can handle the entire process for you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
