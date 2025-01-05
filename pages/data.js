import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/router";
import DataHero from "@/components/Data/DataHero";
import DPricePremium from "@/components/Data/DPricePremium";
import DDemandDatabase from "@/components/Data/DDemandDatabase";
import TabsSection from "@/components/Data/TabSection";
import Footer from "@/components/Footer";
import DSupply from "@/components/Data/DSupply";

const Data = () => {
  const { query } = useRouter();
  const currentTab = query.tab || "priceandpremiums";

  return (
    <div>
      <Navbar />
      <DataHero />
      {/* tabs  */}
      <div>
        <TabsSection />
        <div className="mt-6">
          {currentTab === "priceandpremiums" && <DPricePremium />}
          {currentTab === "demanddatabase" && <DDemandDatabase />}
          {currentTab === "supply" && <DSupply />}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Data;
