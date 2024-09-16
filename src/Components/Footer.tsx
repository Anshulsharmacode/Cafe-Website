import { FC } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <li><a href="#home" className="hover:text-yellow-500 transition-colors">Home</a></li>
            <li><a href="#event" className="hover:text-yellow-500 transition-colors">Event</a></li>
            <li><a href="#menu" className="hover:text-yellow-500 transition-colors">Menu</a></li>
            <li><a href="#contact-us" className="hover:text-yellow-500 transition-colors">Contact Us</a></li>
            <li><a href="#about-us" className="hover:text-yellow-500 transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition-colors">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition-colors">
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
