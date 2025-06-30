import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          BASH
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/officers" className="hover:text-blue-400">
            Officers
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
