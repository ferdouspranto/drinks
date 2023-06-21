import React, { useState } from "react";
import logo1 from "./../assets/Images/logo1.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    setActiveButton(path);
    navigate(path);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <img src={logo1} className="w-[180px]" alt="Logo" />
      </Link>
      <div className="flex items-center">
        <div className="md:hidden">
          <button
            className="text-gray-500 focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } md:block md:flex gap-4 md:gap-14`}
        >
          <li
            className={`hover:font-bold cursor-pointer ${
              activeButton === "/" ? "font-bold" : ""
            }`}
            onClick={() => handleNavigation("/")}
          >
            Home
          </li>
          <li
            className={`hover:font-bold cursor-pointer ${
              activeButton === "/about" ? "font-bold" : ""
            }`}
            onClick={() => handleNavigation("/about")}
          >
            About Us
          </li>
          <li
            className={`hover:font-bold cursor-pointer ${
              activeButton === "/contact" ? "font-bold" : ""
            }`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact Us
          </li>
        </ul>
        <div className="flex items-center ml-4 md:ml-8">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md px-4 py-2 hidden md:block"
          />
          <a href="#" className="text-gray-500 ml-2">
            <IoSearchOutline />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
