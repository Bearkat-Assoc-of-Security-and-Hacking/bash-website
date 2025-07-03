// components/Navbar.js
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo wrapped in a Link to go home */}
        <Link
          href="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          {/* Using the Image component for optimization */}
          <Image
            src="/bash-logo-nobg.png" // The path starts from the `public` folder
            alt="BASH Logo"
            width={100} // Specify width
            height={20} // Specify height
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
