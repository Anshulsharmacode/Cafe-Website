"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Elegant Wedding Celebration",
    date: "December 25, 2024",
    time: "5:00 PM - 11:00 PM",
    description:
      "Celebrate love with an elegant wedding reception. Enjoy exquisite dining, live music, and unforgettable moments in a romantic atmosphere.",
    image: "https://source.unsplash.com/random/800x600/?wedding,celebration",
  },
  {
    title: "Luxury Birthday Bash",
    date: "November 12, 2024",
    time: "7:00 PM - 12:00 AM",
    description:
      "Throw a lavish birthday party with gourmet catering, custom cakes, and live entertainment. Perfect for milestone celebrations.",
    image: "https://source.unsplash.com/random/800x600/?birthday,party",
  },
  {
    title: "Corporate Gala Night",
    date: "October 20, 2024",
    time: "6:00 PM - 10:00 PM",
    description:
      "Join us for an exclusive corporate gala. Network with professionals, enjoy a formal dinner, and dance the night away in style.",
    image: "https://source.unsplash.com/random/800x600/?gala,corporate,event",
  },
  {
    title: "Anniversary Celebration",
    date: "September 30, 2024",
    time: "4:00 PM - 9:00 PM",
    description:
      "Celebrate your anniversary with a cozy and intimate evening. Enjoy personalized service, fine dining, and a beautiful setting.",
    image: "https://source.unsplash.com/random/800x600/?anniversary,party",
  },
  {
    title: "Private Engagement Party",
    date: "August 18, 2024",
    time: "5:00 PM - 10:00 PM",
    description:
      "Host a stylish engagement party with friends and family. Sip champagne, enjoy curated menus, and dance under the stars.",
    image: "https://source.unsplash.com/random/800x600/?engagement,party",
  },
];

const EventPage: React.FC = () => {
  const [fallbackImage, setFallbackImage] = useState<string>("");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        Special Events at Our Cafe
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Event Image */}
            <div className="relative h-48 w-full">
              <Image
                src={fallbackImage === event.image ? "/fallback.jpg" : event.image} // Use fallback image if the primary image fails
                alt={event.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
                onError={() => setFallbackImage(event.image)} // Set fallback image if the primary image fails
              />
            </div>
            {/* Event Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {event.title}
              </h2>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Date:</span> {event.date}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Time:</span> {event.time}
              </p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              {/* CTA Button */}
              <Link href="/booking">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
