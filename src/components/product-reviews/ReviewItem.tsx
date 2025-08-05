"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

interface ReviewItemProps {
  product: string;
  reviewer: string;
  rating: number;
  text: string;
  date: string;
  action: string;
}

export default function ReviewItem({ 
  product, 
  reviewer, 
  rating, 
  text, 
  date, 
  action 
}: ReviewItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-gray-800">{product}</h3>
          <p className="text-sm text-gray-500">by {reviewer}</p>
        </div>
        <span className="flex items-center gap-1 flex-shrink-0 ml-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <FaStar 
              key={i} 
              className={i <= rating ? "text-yellow-500" : "text-gray-300"} 
            />
          ))}
        </span>
      </div>
      <p className="text-gray-700 my-3 text-sm italic">&ldquo;{text}&rdquo;</p>
      <div className="flex justify-between items-center text-sm text-gray-500 pt-3 border-t border-gray-100">
        <span>{date}</span>
        <span className="font-semibold text-gray-800">{action}</span>
      </div>
    </div>
  );
} 