import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - AbaSatellite</title>
        <meta
          name="description"
          content="Learn about our innovative technology and entertainment solutions"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="font-[Poppins] bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen mt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Connecting You to the Future
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Discover how we're revolutionizing technology and entertainment solutions
              </p>
              <Link
                href="/Contact"
                className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-block"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#fff" fillOpacity="1" d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-semibold text-center mb-8 text-blue-800">
                Our Mission
              </h2>
              <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg">
                At Your Company Name, we're committed to bridging the digital
                divide and bringing cutting-edge technology and entertainment to
                every home. Our mission is to empower individuals and communities
                through innovative connectivity solutions and unparalleled content
                delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12 text-blue-800">
              Our Innovative Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Starlink",
                  icon: "🛰️",
                  description:
                    "Experience lightning-fast internet anywhere with Starlink's cutting-edge satellite technology.",
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
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="text-4xl mb-4 text-blue-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12 text-blue-800">
              Our Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
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
                  <div
                    key={index}
                    className="mb-10 relative animate-fade-in-left"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className="absolute -left-10 top-0 bg-blue-500 rounded-full h-6 w-6"></div>
                    <div className="font-semibold text-lg text-blue-800">
                      {item.year}
                    </div>
                    <div className="mt-2 text-gray-700">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}