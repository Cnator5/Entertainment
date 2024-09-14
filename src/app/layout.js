// app/layout.js
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer/footer";
import "./globals.css";
import 'tailwindcss/tailwind.css';
import NavBar from './../Components/Navbar/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AbaSatellite | Starlink, Canal+, DStv Installation',
  description: 'Expert installation services for Starlink, Canal+, and DStv. Get high-speed internet and premium entertainment solutions tailored for you in Buea, Cameroon.',
  keywords: 'Starlink, Canal+, DStv, installation services, high-speed internet, satellite TV',
  author: 'AbaSatellite Solutions',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}