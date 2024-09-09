import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <Image
        src="/images/dstv_first.jpg"
        alt="DStv Banner"
        layout="fill"
        quality={100}
        priority
      />
      <div className="absolute  bg-black bg-opacity-50"></div>
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-down">
          Welcome to DStv
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Your gateway to premium entertainment, sports, news, and more.
          Experience television like never before!
        </p>
        <button className="bg-white text-blue-600 py-3 px-8 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 animate-fade-in">
          Explore Packages
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
