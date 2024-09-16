"use client";

import { FC } from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

const PricingCard: FC<PricingCardProps> = ({ title, price, features }) => (
  <CardContainer className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <CardBody className="bg-white p-6 border border-gray-200 rounded-lg">
      <CardItem className="text-3xl font-semibold text-gray-800 text-center mb-2">
        {title}
      </CardItem>
      <CardItem className="text-4xl font-bold text-teal-500 text-center mb-4">
        {price}
      </CardItem>
      <ul className="text-gray-600 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="mr-2 text-teal-500">✔️</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-6">
        <Link
          href="/booking"
          className="bg-teal-500 text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-teal-600 transition-colors"
        >
          Choose Plan
        </Link>
      </div>
    </CardBody>
  </CardContainer>
);

const VerticalEventPricingCards: FC = () => {
  const pricingData = [
    {
      title: "Marriage Package",
      price: "$3000",
      features: [
        "Venue Decoration",
        "Catering for 200 people",
        "DJ and Music Setup",
        "Photography and Videography",
        "Wedding Planner Assistance",
      ],
    },
    {
      title: "Birthday Package",
      price: "$1000",
      features: [
        "Themed Decoration",
        "Catering for 50 people",
        "Cake and Dessert Table",
        "Entertainment (Clown/Magician)",
        "Photography",
      ],
    },
    {
      title: "Family Party Package",
      price: "$1500",
      features: [
        "Venue Setup and Decoration",
        "Catering for 100 people",
        "Games and Activities",
        "Live Music or DJ",
        "Photo Booth",
      ],
    },
  ];

  return (
    <div className="relative bg-transparent">
      <div className="absolute inset-0 bg-greenBlur backdrop-blur-md"></div>
      <div className="relative container mx-auto px-4 z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Choose Your Perfect Package
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {pricingData.map((item, index) => (
            <PricingCard
              key={index}
              title={item.title}
              price={item.price}
              features={item.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalEventPricingCards;
