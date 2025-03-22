import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-orange-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-2xl font-bold cursor-pointer" to="/">
          Festival Tracker
        </Link>
        <Link
          className="text-white hover:text-gray-200 cursor-pointer"
          to="/home"
        >
          Home
        </Link>
        <Link
          className="text-white hover:text-gray-200 cursor-pointer"
          to="/festival"
        >
          Festival
        </Link>
        <Link
          className="text-white hover:text-gray-200 cursor-pointer"
          to="/signup"
        >
          SignUp
        </Link>
      </div>
    </nav>
  );
};
