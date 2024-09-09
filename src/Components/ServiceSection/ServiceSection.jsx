// pages/services.js
import React from "react";
import Head from "next/head";
import Image from "next/image";

const ServiceSection = ({ title, description, imageUrl, reverse }) => (
  <div
    className={`flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-between py-16 px-4 md:px-0`}
  >
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="md:w-1/2">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
);

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services - AbaSatellite</title>
        <meta
          name="description"
          content="Explore our range of satellite and solar services including Starlink, Canal+, DStv, and Solar Panel installations."
        />
      </Head>

      <main className="min-h-screen">
        {/* Services Overview */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Starlink", "Canal+", "DStv", "Solar Panels"].map((service) => (
                <div
                  key={service}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                  <p className="text-gray-600">
                    Professional installation and support for {service}{" "}
                    services.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Starlink Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <ServiceSection
              title="Starlink: High-Speed Internet Anywhere"
              description="Experience lightning-fast internet speeds with Starlink satellite technology. Perfect for remote locations and areas with limited connectivity options."
              imageUrl="/images/Starlink_StandardActuated_500x500.png"
              reverse={false}
            />
          </div>
        </section>

        {/* Starlink Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
              Starlink Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Low Latency", "Global Coverage", "Easy Setup"].map(
                (feature) => (
                  <div
                    key={feature}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h4 className="text-xl font-semibold mb-2">{feature}</h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Canal+ Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <ServiceSection
              title="Canal+: Premium Entertainment"
              description="Enjoy a wide range of international channels, movies, sports, and exclusive content with Canal+ satellite TV services."
              imageUrl="/images/canalplus.webp"
              reverse={true}
            />
          </div>
        </section>

        {/* Canal+ Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
              Canal+ Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Access", "Family", "Premium"].map((pkg) => (
                <div key={pkg} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-2">{pkg} Package</h4>
                  <p className="text-gray-600">
                    Tailored content for every viewer. Enjoy movies, sports, and
                    more.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DStv Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <ServiceSection
              title="DStv: Diverse Entertainment Options"
              description="Access a vast selection of local and international channels with DStv&apos;s satellite television services. From sports to movies, there&apos;s something for everyone."
              imageUrl="/images/dstv_first.jpg"
              reverse={false}
            />
          </div>
        </section>

        {/* DStv Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
              DStv Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                "Local Content",
                "International Channels",
                "HD Quality",
                "On-Demand Content",
              ].map((feature) => (
                <div
                  key={feature}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <h4 className="text-lg font-semibold mb-2">{feature}</h4>
                  <p className="text-sm text-gray-600">
                    Enhancing your viewing experience.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solar Panels Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <ServiceSection
              title="Solar Panels: Sustainable Energy Solutions"
              description="Harness the power of the sun with our high-efficiency solar panel installations. Reduce your carbon footprint and save on energy costs."
              imageUrl="/images/solar.webp"
              reverse={true}
            />
          </div>
        </section>

        {/* Solar Panel Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
              Benefits of Solar Energy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Cost Savings",
                "Environmentally Friendly",
                "Energy Independence",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-semibold mb-2">{benefit}</h4>
                  <p className="text-gray-600">
                    Embrace a sustainable future with solar energy.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Installation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                "Consultation",
                "Site Survey",
                "Installation",
                "After-care Support",
              ].map((step, index) => (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step}</h3>
                  <p className="text-gray-600">
                    We ensure a smooth and efficient installation process.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean euismod bibendum laoreet."
                  </p>
                  <p className="font-semibold">- Happy Customer {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and quote.
            </p>
            <button className="bg-white text-indigo-600 py-3 px-8 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              {[
                {
                  q: "How long does installation typically take?",
                  a: "Installation times vary depending on the service, but most can be completed within a day.",
                },
                {
                  q: "Do you offer maintenance services?",
                  a: "Yes, we provide ongoing maintenance and support for all our installed systems.",
                },
                {
                  q: "Can I combine multiple services?",
                  a: "Absolutely! We offer package deals for customers interested in multiple services.",
                },
              ].map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
