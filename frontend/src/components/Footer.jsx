import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Festival Tracker</h2>
          <p className="text-sm text-gray-400">
            Tracking Festivals with Devotion!
          </p>
        </div>

        <div className="flex space-x-6">
          <Link to="/home" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/festival" className="hover:text-gray-400">
            Festival
          </Link>
        </div>

        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Festival Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
