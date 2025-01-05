import React from "react";

const WatchlistContent = () => {
  return (
    <div className="p-4 lg:p-6">
      <h2 className="text-xl font-bold mb-4 lg:mb-6 text-gray-800">
        Stock Watch List
      </h2>
      <div className="bg-white rounded-md shadow-lg p-4 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {["AAPL", "GOOGL", "TSLA"].map((stock) => (
            <div
              key={stock}
              className="bg-gray-50 p-4 lg:p-6 rounded-md hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-medium">{stock}</h3>
                <span className="text-green-500 font-medium">+2.4%</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-medium">$156.78</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Volume</span>
                  <span className="font-medium">1.2M</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchlistContent;
