// src/Footer.js
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
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
