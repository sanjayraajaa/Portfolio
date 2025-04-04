import React from "react";
import { FaHeart, FaCoffee } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-800 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <p className="text-sm md:text-base flex items-center gap-2">
          Made with
          <FaHeart className="text-red-400 hover:text-red-500 transition-colors duration-300" />
          and
          <FaCoffee className="text-[#C69C72] hover:text-[#7a5538] transition-colors duration-300" />
          by Sanjay Raja S
        </p>
        <p className="text-xs md:text-sm">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
