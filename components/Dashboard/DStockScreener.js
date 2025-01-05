import React from "react";
import { FaSearch } from "react-icons/fa";

const ScreenerContent = () => {
  return (
    <div className="p-4 lg:p-6">
      <h2 className="text-xl font-bold mb-4 lg:mb-6 text-gray-800">
        Stock Screener
      </h2>
      <div className="bg-white rounded-md shadow-lg p-4 lg:p-8">
        <div className="mb-6">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search stocks..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-gray-50 p-4 lg:p-6 rounded-md">
            <h4 className="font-semibold mb-4">Price Range</h4>
            <div className="space-y-4">
              <input type="range" className="w-full" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 lg:p-6 rounded-md">
            <h4 className="font-semibold mb-4">Market Cap</h4>
            <select className="w-full p-2 border border-gray-200 rounded-md">
              <option>Large Cap</option>
              <option>Mid Cap</option>
              <option>Small Cap</option>
            </select>
          </div>
          <div className="bg-gray-50 p-4 lg:p-6 rounded-md">
            <h4 className="font-semibold mb-4">Sector</h4>
            <select className="w-full p-2 border border-gray-200 rounded-md">
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenerContent;
