// next-seo-config.js
import { DefaultSeo } from 'next-seo';

const SEO = {
  title: 'Your Company Name | Starlink, Canal+, DStv Installation',
  description: 'Expert installation services for Starlink, Canal+, and DStv. Get high-speed internet and premium entertainment solutions tailored for you.',
  canonical: 'https://www.yourwebsite.com/',
  openGraph: {
    url: 'https://www.yourwebsite.com/',
    title: 'Your Company Name | Starlink, Canal+, DStv Installation',
    description: 'Expert installation services for Starlink, Canal+, and DStv. Get high-speed internet and premium entertainment solutions tailored for you.',
    images: [
      {
        url: 'https://www.yourwebsite.com/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Starlink, Canal+, DStv Installation',
      },
    ],
    site_name: 'Your Company Name',
  },
  twitter: {
    handle: '@yourtwitterhandle',
    site: '@yourtwitterhandle',
    cardType: 'summary_large_image',
  },
};

export default SEO;