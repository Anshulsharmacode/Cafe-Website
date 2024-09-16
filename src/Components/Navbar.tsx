"use client";

import React, { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaUtensils,
  FaEnvelope,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", icon: FaHome, path: "/" },
    { name: "Event", icon: FaCalendarAlt, path: "/event-page" },
    { name: "Menu", icon: FaUtensils, path: "/cafe-menu" },
    { name: "Contact-us", icon: FaEnvelope, path: "/contact" },
    { name: "About-us", icon: FaInfoCircle, path: "/about" },
  ];

  return (
    <div className={`fixed top-0 inset-x-0 max-w-7xl mx-auto z-50 ${className}`}>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg rounded-b-3xl">
        <div className="flex space-x-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`relative group cursor-pointer transition-colors duration-200 ${
                active === item.name ? "text-yellow-300" : "hover:text-yellow-300"
              }`}
              onClick={() => setActive(item.name)}
            >
              <Link href={item.path}>
                <div className="flex items-center">
                  <item.icon className="mr-2 inline-block" /> {item.name}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Book Button */}
        <Link href="/booking">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full transition duration-300 shadow-lg">
            Book Now
          </button>
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg rounded-b-3xl">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <span className="text-lg font-semibold">Cafe</span>
        <Link href="/book">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full transition duration-300 shadow-lg">
            Book
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg transform transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40 p-8`}
      >
        <div className="flex flex-col space-y-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="cursor-pointer transition-colors duration-200"
              onClick={handleMenuClick}
            >
              <Link href={item.path}>
                <div className="flex items-center">
                  <item.icon className="mr-2 inline-block" /> {item.name}
                </div>
              </Link>
            </div>
          ))}

          {/* Book Button in Mobile Menu */}
          <Link href="/booking">
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full transition duration-300 shadow-lg"
              onClick={handleMenuClick}
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
