"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// Jungle Cafe images and data
const cardData = [
  {
    title: "Tropical Paradise",
    description: "Relax in our lush, green tropical paradise.",
    imageUrl: "https://images.unsplash.com/photo-1553514029-c10ec7ed88a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Tropical jungle image from Unsplash
  },
  {
    title: "Rainforest Retreat",
    description: "Experience the serenity of the rainforest.",
    imageUrl: "https://images.unsplash.com/photo-1589830031666-12d0f3a4a32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Rainforest image from Unsplash
  },
  {
    title: "Jungle Feast",
    description: "Indulge in a feast inspired by the jungle.",
    imageUrl: "https://images.unsplash.com/photo-1598454449315-ec19aa3e4a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Jungle feast image from Unsplash
  }
];

function ThreeDCardDemo() {
  return (
    <div className="p-6 bg-black flex flex-wrap justify-center gap-6">
      {cardData.map((card, index) => (
        <CardContainer key={index} className="inter-var w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
          <CardBody className="bg-gray-800 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.3] w-full h-auto rounded-xl p-4 border border-gray-700 transition-transform transform-gpu hover:scale-105">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-emerald-400 dark:text-emerald-300"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-emerald-300 text-sm mt-2 dark:text-emerald-200"
            >
              {card.description}
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={15}
              rotateZ={-5}
              className="w-full mt-4"
            >
              <Image
                src={card.imageUrl}
                height={400}
                width={400}
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-300"
                alt={card.title}
              />
            </CardItem>
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-emerald-300 dark:text-emerald-200 bg-transparent border border-emerald-300 dark:border-emerald-200 transition-colors hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400"
              >
                Explore →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white text-xs font-bold transition-transform transform hover:scale-105"
              >
                Book Now
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

export default ThreeDCardDemo;
