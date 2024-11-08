import { Button } from "@/components/ui/button";
import React from "react";

function Card({ plan, price, type }) {
  return (
    <div className="border-2 border-gray-200 bg-slate-100 rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-sm mx-4">
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
        {plan}
      </h3>
      <div className="text-3xl flex items-baseline justify-center mb-4">
        <h1 className="text-2xl font-extrabold">{price}</h1>
        <span className="ml-1">/{type}</span>
      </div>

      <ul className="mb-4 list-disc list-inside text-lg md:text-xl leading-6 md:leading-6">
        <li className="mb-2">
          {" "}
          <span className="font-semibold">🚀</span> Access to AI-Powered Course
          Generation
        </li>
        <li className="mb-2">
          <span className="font-semibold">✨</span> Unlimited Course Creation
        </li>
        <li className="mb-2">
          <span className="font-semibold">📊</span> Advanced Analytics and
          Insights
        </li>
        <li className="mb-2">
          <span className="font-semibold">🤝</span> Priority Support and
          Resources
        </li>
        <li className="mb-2">
          <span className="font-semibold">👥</span> Collaborative Tools for Team
          Projects
        </li>
      </ul>

      <Button className="rounded-2xl w-full p-4 md:p-6  text-white text-lg hover:bg-blue-800">
        Get Started
      </Button>
    </div>
  );
}

export default Card;
