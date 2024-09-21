// pages/api/products.js

export default function handler(req, res) {
    // Mock data for the products
    const products = [
      {
        id: 1,
        name: 'StarLink Satellite Internet',
        description: 'High-speed, low-latency broadband internet across the globe.',
        price: 499,
        image: '/images/starlink_good.jpg'
      },
      {
        id: 2,
        name: 'Canal+ Subscription',
        description: 'Premium French TV channels and exclusive content.',
        price: 19.99,
        image: '/images/canalplus.jpg'
      },
      {
        id: 3,
        name: 'DStv Premium Package',
        description: 'The ultimate entertainment experience with over 130 channels.',
        price: 29.99,
        image: '/images/Dstv_good.jpg'
      }
    ];
  
    res.status(200).json(products);
  }