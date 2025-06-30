// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../src/Navbar"; // Import Navbar
import Footer from "../src/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BASH Website",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
