"use client";

import React from 'react';

const CafeMenu: React.FC = () => {
  return (
    <div id="CafeMenu" className="min-h-screen bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
      <div className="w-full max-w-6xl mx-auto bg-white bg-opacity-80 rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Cafe Menu</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Breakfast Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">🍳 Breakfast</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Masala Omelette</span>
                <span className="text-gray-600">₹120</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Aloo Paratha with Curd</span>
                <span className="text-gray-600">₹150</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Paneer Bhurji</span>
                <span className="text-gray-600">₹180</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Veg Sandwich</span>
                <span className="text-gray-600">₹90</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Poha</span>
                <span className="text-gray-600">₹80</span>
              </li>
            </ul>
          </section>

          {/* Snacks Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">🥪 Snacks</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Chilli Cheese Toast</span>
                <span className="text-gray-600">₹130</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Pav Bhaji</span>
                <span className="text-gray-600">₹160</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Veg Samosa (per piece)</span>
                <span className="text-gray-600">₹40</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Paneer Pakora</span>
                <span className="text-gray-600">₹150</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Hakka Noodles</span>
                <span className="text-gray-600">₹200</span>
              </li>
            </ul>
          </section>

          {/* Salads Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">🥗 Salads</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Greek Salad</span>
                <span className="text-gray-600">₹220</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Caesar Salad</span>
                <span className="text-gray-600">₹250</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Fruit Chaat</span>
                <span className="text-gray-600">₹100</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Sprouts Salad</span>
                <span className="text-gray-600">₹130</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Kachumber Salad</span>
                <span className="text-gray-600">₹80</span>
              </li>
            </ul>
          </section>

          {/* Pizzas Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">🍕 Pizzas</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Margherita Pizza</span>
                <span className="text-gray-600">₹250</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Veggie Delight Pizza</span>
                <span className="text-gray-600">₹300</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Paneer Tikka Pizza</span>
                <span className="text-gray-600">₹350</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>BBQ Chicken Pizza</span>
                <span className="text-gray-600">₹400</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Hawaiian Pizza</span>
                <span className="text-gray-600">₹370</span>
              </li>
            </ul>
          </section>

          {/* Main Course Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">🍽️ Main Course</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Butter Chicken</span>
                <span className="text-gray-600">₹350</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Paneer Butter Masala</span>
                <span className="text-gray-600">₹320</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Dal Tadka</span>
                <span className="text-gray-600">₹250</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Veg Biryani</span>
                <span className="text-gray-600">₹270</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Chicken Biryani</span>
                <span className="text-gray-600">₹320</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Palak Paneer</span>
                <span className="text-gray-600">₹280</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Rogan Josh</span>
                <span className="text-gray-600">₹350</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Shahi Paneer</span>
                <span className="text-gray-600">₹300</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Chole Bhature</span>
                <span className="text-gray-600">₹260</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Fish Curry</span>
                <span className="text-gray-600">₹340</span>
              </li>
            </ul>
          </section>

          {/* Desserts Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">🍰 Desserts</h2>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Gulab Jamun (2 pieces)</span>
                <span className="text-gray-600">₹80</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Rasgulla (2 pieces)</span>
                <span className="text-gray-600">₹90</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Kheer</span>
                <span className="text-gray-600">₹100</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Jalebi</span>
                <span className="text-gray-600">₹70</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 py-2">
                <span>Chocolate Brownie</span>
                <span className="text-gray-600">₹150</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CafeMenu;
