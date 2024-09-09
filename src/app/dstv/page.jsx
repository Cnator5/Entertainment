// pages/dstv.js
import React from "react";
import Head from "next/head";
import Image from "next/image";
// import HeroSection from &apos;@/components/HeroSection/page&apos;;
import HeroSection from "../../Components/Hero/HeroSection";

const Section = ({ title, children, bgColor = "bg-white" }) => (
  <section className={`py-16 ${bgColor}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      {children}
    </div>
  </section>
);

const ImageSection = ({ src, alt, title, description, reverse = false }) => (
  <div
    className={`flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center mb-16`}
  >
    <div className="md:w-1/2 mb-8 md:mb-0">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </div>
    <div className="md:w-1/2 md:px-8">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Page = () => {
  return (
    <>
      <Head className="bg-yellow mt-60">
        <title>DStv - Premium Entertainment at Your Fingertips</title>
        <meta
          name="description"
          content="Discover the world of DStv - high-quality entertainment, sports, news, and more. Find the perfect package for your home."
        />
      </Head>

      <main className="min-h-screen mt-20">
        <HeroSection />

        {/* What is DStv */}
        <Section title="What is DStv?">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-600 mb-4">
              DStv is a leading digital satellite television service, offering a
              wide range of channels and content to suit every taste and
              preference. With crystal-clear picture quality and immersive
              sound, DStv brings the world of entertainment right into your
              living room.
            </p>
            <Image
              src="/images/dstv-logo.png"
              alt="DStv Logo"
              width={200}
              height={100}
              className="mx-auto"
            />
          </div>
        </Section>

        {/* Why Choose DStv */}
        <Section title="Why Choose DStv?" bgColor="bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Unparalleled Content Variety",
              "High-Definition Quality",
              "Exclusive Sports Coverage",
              "Family-Friendly Entertainment",
              "Local and International Channels",
              "On-Demand Viewing",
            ].map((feature) => (
              <div key={feature} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Experience the best in television with DStv&apos;s exceptional
                  features.
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* DStv Packages */}
        <Section title="DStv Packages">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Premium",
              "Compact Plus",
              "Compact",
              "Family",
              "Access",
              "Easy View",
            ].map((pkg) => (
              <div
                key={pkg}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-2xl font-semibold mb-4">{pkg}</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for{" "}
                  {pkg === "Premium"
                    ? "the ultimate entertainment experience"
                    : "families looking for great value"}
                  .
                </p>
                <ul className="text-gray-600 mb-6">
                  <li>✓ {pkg === "Premium" ? "200+" : "100+"} channels</li>
                  <li>✓ HD channels included</li>
                  <li>✓ Access to DStv Now</li>
                </ul>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </Section>

        {/* Premium Channels Showcase */}
        <Section title="Premium Channels" bgColor="bg-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "M-Net",
              "SuperSport",
              "Discovery Channel",
              "National Geographic",
              "CNN",
              "BBC World News",
              "Cartoon Network",
              "MTV",
            ].map((channel) => (
              <div
                key={channel}
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                <Image
                  src={`/images/channels/${channel
                    .toLowerCase()
                    .replace(" ", "-")}.png`}
                  alt={channel}
                  width={100}
                  height={100}
                  className="mx-auto mb-2"
                />
                <p className="font-semibold">{channel}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Sports Coverage */}
        <Section title="Unrivaled Sports Coverage">
          <ImageSection
            src="/images/sports-coverage.jpg"
            alt="DStv Sports Coverage"
            title="Your Front-Row Seat to Global Sports"
            description="With DStv, you&apos;ll never miss a moment of your favorite sports. Enjoy live coverage of Premier League, UEFA Champions League, Formula 1, NBA, and much more!"
          />
        </Section>

        {/* Movie Experience */}
        <Section title="Blockbuster Movie Experience" bgColor="bg-gray-100">
          <ImageSection
            src="/images/movie-experience.jpg"
            alt="DStv Movie Experience"
            title="Hollywood at Home"
            description="Immerse yourself in the latest blockbusters, timeless classics, and exclusive premieres. DStv brings the cinema experience right to your living room."
            reverse={true}
          />
        </Section>

        {/* Kids Entertainment */}
        <Section title="Kids Entertainment">
          <ImageSection
            src="/images/kids-entertainment.jpg"
            alt="DStv Kids Entertainment"
            title="Safe and Engaging Content for Kids"
            description="Keep your children entertained and educated with DStv&apos;s wide range of kid-friendly channels, featuring popular shows, cartoons, and educational programming."
          />
        </Section>

        {/* News and Documentaries */}
        <Section title="Stay Informed" bgColor="bg-gray-100">
          <ImageSection
            src="/images/news-documentaries.jpg"
            alt="DStv News and Documentaries"
            title="24/7 News and Thought-Provoking Documentaries"
            description="Stay up-to-date with current events and explore the world through DStv&apos;s comprehensive news coverage and captivating documentaries."
            reverse={true}
          />
        </Section>

        {/* Local Content */}
        <Section title="Celebrating Local Content">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-gray-600">
              DStv is committed to showcasing the best of local talent and
              stories. Enjoy a wide range of locally produced shows, movies, and
              series that reflect our rich culture and heritage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Drama", "Comedy", "Reality Shows"].map((genre) => (
              <div key={genre} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{genre}</h3>
                <p className="text-gray-600">
                  Discover local {genre.toLowerCase()} that will keep you
                  entertained and connected to your roots.
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* DStv Now */}
        <Section title="DStv Now - TV on the Go" bgColor="bg-gray-100">
          <ImageSection
            src="/images/dstv-now.jpg"
            alt="DStv Now"
            title="Your Favorite Shows, Anytime, Anywhere"
            description="With DStv Now, you can stream live TV, catch up on missed shows, and access a vast library of on-demand content on your smartphone, tablet, or computer."
          />
        </Section>

        {/* Box Office */}
        <Section title="DStv Box Office">
          <ImageSection
            src="/images/box-office.jpg"
            alt="DStv Box Office"
            title="Latest Movies at Your Fingertips"
            description="Rent the latest Hollywood blockbusters and popular movies from the comfort of your home with DStv Box Office. New titles added regularly!"
            reverse={true}
          />
        </Section>

        {/* Catch Up */}
        <Section title="Never Miss a Show with Catch Up" bgColor="bg-gray-100">
          <ImageSection
            src="/images/catch-up.jpg"
            alt="DStv Catch Up"
            title="Your Personal Time Machine"
            description="Missed your favorite show? No problem! With DStv Catch Up, you can watch a wide selection of programs at your convenience."
          />
        </Section>

        {/* DStv App */}

        <Section title="DStv App - Your Personal TV Guide">
          <ImageSection
            src="/images/dstv-app.jpg"
            alt="DStv App"
            title="Smart TV Control in Your Pocket"
            description="Download the DStv app to easily manage your account, set reminders for upcoming shows, and even use your phone as a remote control."
            reverse={true}
          />
        </Section>

        {/* Installation Process */}
        <Section title="Easy Installation Process" bgColor="bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Schedule",
              "Professional Visit",
              "Quick Setup",
              "Enjoy DStv",
            ].map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-gray-600">
                  We ensure a smooth and efficient installation process.
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Customer Support */}
        <Section title="24/7 Customer Support">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8">
              Our dedicated support team is always ready to assist you with any
              queries or issues. Experience peace of mind with DStv&apos;s excellent
              customer service.
            </p>
            <button className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300">
              Contact Support
            </button>
          </div>
        </Section>

        {/* Testimonials */}
        <Section title="What Our Customers Say" bgColor="bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "DStv has transformed our family&apos;s entertainment experience.
                  The variety of channels and the picture quality are simply
                  amazing!"
                </p>
                <p className="font-semibold">- Happy Customer {i}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ Section */}
        <Section title="Frequently Asked Questions">
          <div className="max-w-3xl mx-auto">
            {[
              {
                q: "How do I upgrade my DStv package?",
                a: "You can easily upgrade your package through our website, mobile app, or by contacting our customer support.",
              },
              {
                q: "Can I watch DStv on multiple devices?",
                a: "Yes, with DStv Now, you can stream content on multiple devices, including smartphones, tablets, and computers.",
              },
              {
                q: "Is there a contract for DStv subscriptions?",
                a: "We offer both month-to-month and annual subscription options to suit your preferences.",
              },
              {
                q: "How often are new channels added?",
                a: "We regularly update our channel lineup to bring you the best and latest content.",
              },
              {
                q: "Can I pause my subscription when I&apos;m away?",
                a: "Yes, you can pause your subscription for a limited time if you&apos;re going to be away.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Special Offers */}
        <Section title="Limited Time Offers" bgColor="bg-blue-100">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Get 2 Months Free!</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to any DStv package for 12 months and get 2 months
              absolutely free. Don&apos;t miss out on this amazing offer!
            </p>
            <button className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300">
              Claim Offer
            </button>
          </div>
        </Section>

        {/* DStv for Business */}
        <Section title="DStv for Business">
          <ImageSection
            src="/images/dstv-for-business.jpg"
            alt="DStv for Business"
            title="Elevate Your Business with DStv"
            description="From hotels to restaurants, DStv offers tailored packages to enhance your customers&apos; experience and keep them entertained."
          />
        </Section>

        {/* Comparison with Competitors */}
        <Section title="Why DStv Stands Out" bgColor="bg-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">DStv</th>
                  <th className="p-3">Competitor A</th>
                  <th className="p-3">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Channel Variety</td>
                  <td className="p-3 border">200+</td>
                  <td className="p-3 border">150</td>
                  <td className="p-3 border">100</td>
                </tr>
                <tr>
                  <td className="p-3 border">HD Channels</td>
                  <td className="p-3 border">✓</td>
                  <td className="p-3 border">✓</td>
                  <td className="p-3 border">Limited</td>
                </tr>
                <tr>
                  <td className="p-3 border">Local Content</td>
                  <td className="p-3 border">Extensive</td>
                  <td className="p-3 border">Limited</td>
                  <td className="p-3 border">Moderate</td>
                </tr>
                <tr>
                  <td className="p-3 border">Sports Coverage</td>
                  <td className="p-3 border">Comprehensive</td>
                  <td className="p-3 border">Basic</td>
                  <td className="p-3 border">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* Awards and Recognition */}
        <Section title="Awards and Recognition">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-gray-600">
              DStv has been recognized for its excellence in providing
              top-quality entertainment and customer service.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Best TV Service Provider 2023",
              "Customer Choice Award 2022",
              "Innovation in Broadcasting 2023",
              "Africa Leading Pay-TV Service",
            ].map((award) => (
              <div
                key={award}
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                <Image
                  src="/images/award-icon.png"
                  alt="Award Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-2"
                />
                <p className="font-semibold text-sm">{award}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Community Initiatives */}
        <Section title="Supporting Our Community" bgColor="bg-gray-100">
          <ImageSection
            src="/images/community-initiative.jpg"
            alt="DStv Community Initiative"
            title="Making a Difference Beyond Entertainment"
            description="DStv is committed to giving back to the community. Learn about our initiatives in education, healthcare, and environmental conservation."
          />
        </Section>

        {/* Technology Behind DStv */}
        <Section title="Cutting-Edge Technology">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                State-of-the-Art Satellite Technology
              </h3>
              <p className="text-gray-600 mb-4">
                DStv utilizes advanced satellite technology to deliver
                crystal-clear picture and sound quality to your home.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>High-bandwidth satellite transmission</li>
                <li>Advanced signal compression</li>
                <li>Weather-resistant equipment</li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/satellite-tech.jpg"
                alt="Satellite Technology"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Section>

        {/* Upcoming Features */}
        <Section title="Coming Soon to DStv" bgColor="bg-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "4K Ultra HD Channels",
              "Enhanced Voice Control",
              "Personalized AI Recommendations",
            ].map((feature) => (
              <div
                key={feature}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Stay tuned for exciting new features coming to elevate your
                  DStv experience.
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Referral Program */}
        <Section title="Refer a Friend">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Share the Joy of DStv
            </h3>
            <p className="text-gray-600 mb-6">
              Refer a friend to DStv and both of you can enjoy a month of free
              Premium subscription!
            </p>
            <button className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300">
              Start Referring
            </button>
          </div>
        </Section>

        {/* Sustainability Efforts */}
        <Section
          title="Our Commitment to Sustainability"
          bgColor="bg-green-100"
        >
          <ImageSection
            src="/images/sustainability.jpg"
            alt="DStv Sustainability Efforts"
            title="Entertaining Responsibly"
            description="Discover how DStv is working towards reducing our environmental impact and promoting sustainable practices in our operations."
          />
        </Section>

        {/* Customer Stories */}
        <Section title="Real Customer Stories">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "DStv has brought our family closer together. We love our
                  movie nights and cheering for our favorite teams during live
                  sports events."
                </p>
                <div className="flex items-center">
                  <Image
                    src={`/images/customer-${i}.jpg`}
                    alt={`Customer ${i}`}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">
                      DStv Premium Subscriber
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* DStv App Features */}
        <Section title="Explore DStv App Features" bgColor="bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Remote Recording",
              "Personalized Watchlist",
              "Live TV Streaming",
              "Download for Offline Viewing",
              "Parental Controls",
              "Multi-device Support",
            ].map((feature) => (
              <div key={feature} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Enhance your viewing experience with the DStv app&apos;s powerful
                  features.
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Price Calculator */}
        <Section title="Find Your Perfect Package">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              DStv Package Calculator
            </h3>
            <p className="text-gray-600 mb-6 text-center">
              Use our calculator to find the best DStv package for your needs
              and budget.
            </p>
            {/* Add your calculator component here */}
            <button className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300 w-full">
              Calculate Now
            </button>
          </div>
        </Section>

        {/* Installation Partners */}
        <Section
          title="Our Trusted Installation Partners"
          bgColor="bg-gray-100"
        >
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-gray-600">
              We work with certified installation partners to ensure you get the
              best setup for your DStv experience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Partner A", "Partner B", "Partner C", "Partner D"].map(
              (partner) => (
                <div
                  key={partner}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <Image
                    src={`/images/partner-${partner
                      .toLowerCase()
                      .replace(" ", "-")}.png`}
                    alt={partner}
                    width={100}
                    height={100}
                    className="mx-auto mb-2"
                  />
                  <p className="font-semibold">{partner}</p>
                </div>
              )
            )}
          </div>
        </Section>

        {/* Contact CTA
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">Ready to Experience DStv?</h2>
            <p className="text-xl mb-8">Contact us today to get started with your DStv journey!</p>
            <button className="bg-white text-blue-600 py-3 px-8 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300">Get DStv Now</button>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default Page;
