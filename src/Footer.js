// src/Footer.js
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/bash-logo-transparent.png" // Your transparent logo
            alt="BASH Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Copyright and License notice */}
        <div className="text-sm text-gray-400 text-right">
          <p>Copyright © {currentYear} BASH</p>
          <a
            href="../liscense.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline"
          >
            Released under the MIT License
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
