"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import "./Showcase.css";

const categories = [
  {
    name: 'StarLink',
    image: '/images/starlink_good.jpg',
    description: 'High-speed satellite internet for global connectivity',
    products: [
      { image: '/images/starlink_help_center_resources_specifications.jpeg', name: 'StarLink Standard' },
      { image: '/images/starlink_up.jpg', name: 'StarLink Premium' },
      { image: '/images/starlink-installation.jpg', name: 'StarLink RV' },
      { image: '/images/Starlink-Mini-cover.jpg', name: 'StarLink Maritime' },
    ]
  },
  {
    name: 'Canal+',
    image: '/images/placeholder-installation.webp',
    description: 'Premium French TV packages with exclusive content',
    products: [
      { image: '/images/gettyimages-1230967337-612x612.jpg', name: 'Canal+ Basic' },
      { image: '/images/canalplus.webp', name: 'Canal+ Family' },
      { image: '/images/IS20_M170310_PP_med.jpg', name: 'Canal+ Cinema' },
      { image: '/images/cover-web (1).webp', name: 'Canal+ Sport' },
    ]
  },
  {
    name: 'DStv',
    image: '/images/Dstv_good.jpg',
    description: 'Leading satellite TV service in Africa',
    products: [
      { image: '/images/dstv_first.jpg', name: 'DStv Access' },
      { image: '/images/dstv.jpg', name: 'DStv Family' },
      { image: '/images/placeholder-movie.jpg', name: 'DStv Compact' },
      { image: '/images/Dstv-Now-App.jpg', name: 'DStv Premium' },
    ]
  },
  {
    name: 'Accessories',
    image: '/images/satellite-accessories.jpg',
    description: 'Essential accessories for your satellite services',
    products: [
      { image: '/images/satellite-dish.jpg', name: 'Satellite Dish' },
      { image: '/images/hdmi-cable.avif', name: 'HDMI Cable' },
      { image: '/images/remote-control.jpg', name: 'Universal Remote' },
      { image: '/images/signal-amplifier.jpg', name: 'Signal Amplifier' },
    ]
  },
];

const CategoryBanner = ({ category }) => (
  <div className="category-banner">
    <div className="category-info">
      <div>        
        <h2 className="category-title">{category.description}</h2>
      </div>
      <button className="explore-button">
        Explore {category.name}
      </button>
    </div>
    <div className="category-image">
      <Image
        src={category.image}
        alt={category.name}
        layout="fill"
        objectFit="contain"
      />
    </div>
  </div>
);

const CarCard = ({ car }) => (
  <div className="car-image">
  <Image
    src={car.image}
    alt={car.name}
    layout="fill"
    objectFit="cover"
  />
</div>
);

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="showcase">
      <div className="container">
        <h1 className="showcase-title">Satellite Services</h1>
        <div className="category-buttons">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-button ${
                activeCategory === index
                  ? 'category-button-active'
                  : 'category-button-inactive'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <CategoryBanner category={categories[activeCategory]} />
        <div className="car-grid">
          {categories[activeCategory].products.map((product, index) => (
            <CarCard key={index} car={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;