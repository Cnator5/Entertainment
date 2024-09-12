import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar/navBar";
import Footer from "@/Components/Footer/footer";
import "./globals.css";
import 'tailwindcss/tailwind.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Amazing Network App',
  description: 'Cutting-edge network solutions for modern businesses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}