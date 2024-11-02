import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Inter } from 'next/font/google'
import Footer from "@/components/Footer";
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Home",
  description: "Love and passion for the arts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body
        className={`${inter.variable} font-sans antialiased bg-transparent text-gray-800 dark:bg-black`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
