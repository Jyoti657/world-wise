import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const AppNav = () => {
  return (
    <nav className="w-full bg-black bg-opacity-70 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-red-300">
        WorldWise
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-base lg:text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-red-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-red-300 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="hover:text-red-300 transition">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/product" className="hover:text-red-300 transition">
            Product
          </Link>
        </li>
      </ul>

      {/* Right Section: Login Button + Hamburger */}
      <div className="flex items-center gap-4">
        <Link to="/login">
          <button className="hidden md:block px-6 py-2 bg-slate-800 text-red-300 rounded-md hover:bg-slate-700 transition">
            Login
          </button>
        </Link>

        {/* Hamburger Menu (Mobile only) */}
        <IoMdMenu className="text-3xl cursor-pointer md:hidden hover:text-red-300 transition" />
      </div>
    </nav>
  );
};

export default AppNav;
