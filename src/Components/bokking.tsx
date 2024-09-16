"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaHome, FaCalendarAlt, FaUser, FaCalendarCheck, FaClock, FaUsers } from 'react-icons/fa';

const CafeBookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    event: '',
    date: '',
    time: '',
    guests: '',
  });

  // Typing the handleChange function
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Typing the handleSubmit function
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book Your Café Event</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <FaUser className="inline mr-2 text-gray-500" /> Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Event Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <FaCalendarAlt className="inline mr-2 text-gray-500" /> Event Type
            </label>
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>Select an event</option>
              <option value="Birth-Day">Birth-Day</option>
              <option value="Marriage">Marriage</option>
              <option value="Family">Family</option>
              <option value="Party">Party</option>
            </select>
          </div>

          {/* Date Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <FaCalendarCheck className="inline mr-2 text-gray-500" /> Event Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Time Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <FaClock className="inline mr-2 text-gray-500" /> Event Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Guests Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <FaUsers className="inline mr-2 text-gray-500" /> Number of Guests
            </label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter number of guests"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CafeBookingForm;
