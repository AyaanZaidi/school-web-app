import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-center md:text-left">
        
        {/* Left Side - Logo / Name */}
        <div className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} School Name. All rights reserved.
        </div>

        {/* Center - Social Media Icons */}
        <div className="flex space-x-4 my-3 md:my-0">
          <a href="#" className="hover:text-blue-400 transition">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Linkedin size={24} />
          </a>
        </div>

        {/* Right Side - Links */}
        <div className="space-x-4 text-sm">
          <a href="/about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="/contact" className="hover:text-blue-400 transition">
            Contact
          </a>
          <a href="/privacy" className="hover:text-blue-400 transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
