import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto py-8 flex justify-center items-center">
        <div className="flex flex-wrap justify-center space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="bg-gray-200 text-center py-4">
        <p className="text-sm text-gray-600">
          &copy; 2023 Drinks. All rights reserved.
        </p>
        <p className="text-xs text-gray-600">
          Designed and developed by Ferdous_Rahman.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
