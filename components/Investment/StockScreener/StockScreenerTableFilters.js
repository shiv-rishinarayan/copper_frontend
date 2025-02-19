import React from "react";

const StockScreenerTableFilters = ({
  filters,
  uniqueOptions,
  onFilterChange,
}) => {
  return (
    <div className="overflow-x-auto pb-2 custom-scrollbar-hidden">
      <div className="flex gap-x-4  mt-3">
        {Object.keys(uniqueOptions).map((key) => (
          <div key={key} className="relative w-28 flex flex-col mb-6">
            <label
              htmlFor={key}
              className="absolute top-[-8px] left-[8px] px-1 bg-white text-accent text-[0.7rem] rounded-lg"
            >
              {key.replace(/_/g, " ").toUpperCase()}
            </label>
            <select
              id={key}
              value={filters[key]}
              onChange={(e) => onFilterChange(key, e.target.value)}
              className="p-2 bg-white text-black1 rounded border border-date/10 focus:outline-none"
            >
              {uniqueOptions[key].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockScreenerTableFilters;
