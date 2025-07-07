// src/Navbar.js
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-transparent backdrop-blur-lg text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/bash-logo-nobg.png"
            alt=""
            width={100}
            height={20}
            className="rounded-lg"
          />
          <span className="text-3xl font-bold">
            Bearkat Association of Security and Hacking
          </span>
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/officers" className="hover:text-blue-400">
            Officers
          </Link>
          <Link href="/competitions" className="hover:text-blue-400">
            Competitions
          </Link>
          <Link href="/resources" className="hover:text-blue-400">
            Resources
          </Link>
          <Link href="/schedule" className="hover:text-blue-400">
            Schedule
          </Link>
          <Link href="/sponsors" className="hover:text-blue-400">
            Sponsors
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
