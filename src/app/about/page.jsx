import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>About Us - Your Company Name</title>
        <meta
          name="description"
          content="Learn about our innovative technology and entertainment solutions"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="font-[Poppins] bg-gray-50">
        {/* Our Mission */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Our Mission
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              At Your Company Name, we&apos;re committed to bridging the digital
              divide and bringing cutting-edge technology and entertainment to
              every home. Our mission is to empower individuals and communities
              through innovative connectivity solutions and unparalleled content
              delivery.
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Connecting You to the Future
            </h1>
            <p className="text-xl mb-8">
              Discover how we&apos;re revolutionizing technology and entertainment
              solutions
            </p>
            <a
              href="#"
              className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Our Innovative Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Starlink",
                  icon: "🛰️",
                  description:
                    "Experience lightning-fast internet anywhere with Starlink&apos;s cutting-edge satellite technology.",
                },
                {
                  title: "Canal+",
                  icon: "📺",
                  description:
                    "Enjoy premium content and exclusive shows with Canal+ subscription and installation services.",
                },
                {
                  title: "DStv",
                  icon: "🎭",
                  description:
                    "Access a wide range of channels and on-demand content with our DStv installation and support.",
                },
                {
                  title: "Solar Panels",
                  icon: "☀️",
                  description:
                    "Harness the power of the sun with our eco-friendly and cost-effective solar panel solutions.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="text-4xl mb-4 text-blue-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Our Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="border-l-2 border-blue-500">
                {[
                  {
                    year: "2010",
                    event:
                      "Company founded with a vision to revolutionize connectivity",
                  },
                  {
                    year: "2015",
                    event:
                      "Expanded services to include satellite TV installations",
                  },
                  {
                    year: "2018",
                    event: "Introduced solar panel solutions to our portfolio",
                  },
                  {
                    year: "2021",
                    event:
                      "Partnered with Starlink to provide high-speed satellite internet",
                  },
                  {
                    year: "2024",
                    event:
                      "Celebrating a decade of innovation and customer satisfaction",
                  },
                ].map((item, index) => (
                  <div key={index} className="ml-6 mb-10">
                    <div className="flex items-center">
                      <div className="bg-blue-500 rounded-full h-4 w-4 -ml-[9px]"></div>
                      <div className="ml-4 font-semibold text-lg">
                        {item.year}
                      </div>
                    </div>
                    <div className="ml-6 mt-2">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Meet Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  role: "CEO",
                  image: "https://via.placeholder.com/150",
                },
                {
                  name: "Jane Smith",
                  role: "CTO",
                  image: "https://via.placeholder.com/150",
                },
                {
                  name: "Mike Johnson",
                  role: "Head of Operations",
                  image: "https://via.placeholder.com/150",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Customer-Centric",
                  description:
                    "We put our customers first, ensuring their needs are met with tailored solutions.",
                },
                {
                  title: "Innovation-Driven",
                  description:
                    "We stay at the forefront of technology to provide cutting-edge services.",
                },
                {
                  title: "Quality Assurance",
                  description:
                    "We maintain high standards in all our installations and services.",
                },
                {
                  title: "Sustainable Practices",
                  description:
                    "We&apos;re committed to eco-friendly solutions that benefit both our customers and the planet.",
                },
                {
                  title: "Continuous Improvement",
                  description:
                    "We constantly seek ways to enhance our services and customer experience.",
                },
                {
                  title: "Expert Support",
                  description:
                    "Our team of skilled professionals is always ready to assist our customers.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah L.",
                  quote:
                    "The Starlink installation was quick and the internet speed is amazing!",
                },
                {
                  name: "Mark T.",
                  quote:
                    "Canal+ has transformed our family&apos;s entertainment experience. Great service!",
                },
                {
                  name: "Emily R.",
                  quote:
                    "The solar panel installation has significantly reduced our energy bills. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Coverage */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Our Coverage
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 text-center mb-8">
                We&apos;re proud to serve customers across multiple regions, bringing
                innovative technology and entertainment solutions to both urban
                and rural areas.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {[
                  "North Region",
                  "North-West Region",
                  "South-West Region",
                  "Litorial Region",
                  "South Region",
                  "East Region",
                  "West Region",
                  "Central Region",
                  "Coastal Areas",
                ].map((region, index) => (
                  <div key={index} className="bg-blue-100 rounded-lg p-4">
                    <p className="font-semibold text-blue-700">{region}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Experience the Future?
            </h2>
            <p className="mb-8">
              Contact us today to learn more about our services and how we can
              help you stay connected.
            </p>
            <a
              href="#"
              className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Our Partners */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Our Trusted Partners
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                "Starlink",
                "Canal+",
                "DStv",
                "SolarEdge",
                "LG Solar",
                "Huawei",
              ].map((partner, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                  <p className="font-semibold text-xl">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
