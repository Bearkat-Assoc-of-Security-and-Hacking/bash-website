// app/layout.js
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../src/Navbar";
import Footer from "../src/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata = {
  title: "BASH Website",
  description: "The official website for the BASH organization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      {/* adds a subtle gradient to the body */}
      <body
        className={`font-mono bg-gradient-to-b from-gray-900 to-slate-900 text-gray-100`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
