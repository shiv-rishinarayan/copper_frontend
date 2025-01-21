import React, { useState } from "react";
import ETFNavigationNav from "./ETFNavigationNav";
import AsiaETF from "./AsiaETF";
import EuropeETF from "./EuropeETF";
import NorthAmericaETF from "./NorthAmericaETF";
import SouthAfricaETF from "./SouthAfricaETF";

const IETF = () => {
  const [selectedRegion, setSelectedRegion] = useState("asia");

  const handleRegionSelect = (region) => {
    setSelectedRegion(region.toLowerCase());
  };

  const renderETFComponent = () => {
    switch (selectedRegion) {
      case "asia":
        return <AsiaETF />;
      case "europe":
        return <EuropeETF />;
      case "north america":
        return <NorthAmericaETF />;
      case "south africa":
        return <SouthAfricaETF />;
      default:
        return <AsiaETF />;
    }
  };

  return (
    <div className="px-3 md:px-12 py-5 md:py-5">
      <h1 className="cambay text-[22px] sm:text-3xl font-semibold mb-8">
        ETF/Trust Holding
      </h1>

      <div className="mt-1 md:mt-7 ">
        <div className="w-full rounded-md">
          <ETFNavigationNav
            onRegionSelect={handleRegionSelect}
            selectedRegion={selectedRegion}
          />
          <div className="mt-16">{renderETFComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default IETF;
