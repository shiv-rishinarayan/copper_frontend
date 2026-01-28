import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/router";
import DataHero from "@/components/Data/DataHero";
import DPricePremium from "@/components/Data/DPricePremium";
import DDemandDatabase from "@/components/Data/DDemandDatabase";
import TabsSection from "@/components/Data/TabSection";
import Footer from "@/components/Footer";
import DSupply from "@/components/Data/DSupply";
import DWPICSupply from "@/components/Data/DWPICSupply";
import SEO from "@/components/SEO";

const Data = () => {
  const { query } = useRouter();
  const currentTab = query.tab || "priceandpremiums";

  return (
    <div>
      <SEO
        title="Copper Market Data - Price Trends, Supply & Demand Insights"
        description="Access comprehensive Copper market data, including price trends, supply and demand metrics, and industry analysis. Our detailed datasets provide the insights you need for informed decision-making in the Copper market."
        keywords="Copper market data, price trends, Copper supply and demand, industry analysis, Copper research, market insights, Copper and Copper Alloys, data analytics"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/data"
      />
      <Navbar />
      <DataHero />
      {/* tabs  */}
      <div>
        <TabsSection />
        <div className="mt-6">
          {currentTab === "priceandpremiums" && <DPricePremium />}
          {currentTab === "demanddatabase" && <DDemandDatabase />}
          {currentTab === "supply" && <DSupply />}
          {currentTab === "wpicsupply" && <DWPICSupply />}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Data;
