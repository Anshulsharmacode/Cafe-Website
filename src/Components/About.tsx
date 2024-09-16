"use client";

import React from 'react';
import { FaCoffee, FaSmile, FaUsers, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-gray-100 p-8">
      <div className="w-full max-w-6xl mx-auto bg-white bg-opacity-80 rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About Us</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-700">
            Welcome to our cafe, where every cup of coffee tells a story, and every meal is a celebration of flavors.
            Our journey started with a passion for serving quality food and beverages, and today, we are a beloved
            spot for locals and visitors alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaCoffee className="text-6xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Coffee</h3>
            <p className="text-gray-600">Brewed to perfection, our coffee is made from the finest beans.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaSmile className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Ambience</h3>
            <p className="text-gray-600">A cozy and friendly environment for you to relax and enjoy.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaUsers className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Community</h3>
            <p className="text-gray-600">We are proud to be a gathering place for our local community.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaAward className="text-6xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Awards</h3>
            <p className="text-gray-600">Recognized for excellence, we strive to deliver the best.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
