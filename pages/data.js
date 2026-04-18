import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/router";
import DataHero from "@/components/Data/DataHero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SubNav from "@/components/Data/SubNav";
import PriceSection from "@/components/Data/PriceSection";
import InventorySection from "@/components/Data/InventorySection";
import MacroSection from "@/components/Data/MacroSection";
import SupplySection from "@/components/Data/SupplySection";
import DemandSection from "@/components/Data/DemandSection";
import HistoryTable from "@/components/Data/HistoryTable";
import CopperPricing from "@/components/Data/CopperPricing";
import ScrapCopperPrice from "@/components/Data/ScrapCopperPrice";
import TCRC from "@/components/Data/TCRC";
import PriceForecastSection from "@/components/Data/CopperPriceForcast";
import DeficitOutlookSection from "@/components/Data/DeficitOutlookSection";
import StocksSection from "@/components/Data/CopperMiningStocksSection";
import CopperCalculator from "@/components/Data/CopperCalculator";
import FAQSection from "@/components/Data/FAQ";
import TickerTape from "@/components/Data/TickerTape";
import Breadcrumbs from "@/components/Data/BreadCrumb";

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
      <Breadcrumbs />
      <TickerTape />
      <DataHero />
      <SubNav />
      <PriceSection />
      <InventorySection />
      <TCRC />
      <MacroSection />
      <SupplySection />
      <DemandSection />
      <HistoryTable />
      <CopperPricing />
      <ScrapCopperPrice />
      <PriceForecastSection />
      <DeficitOutlookSection />
      <StocksSection />
      <CopperCalculator />
      <FAQSection />
      {/* tabs  */}
      {/* <div>
        <TabsSection />
        <div className="mt-6">
          {currentTab === "priceandpremiums" && <DPricePremium />}
          {currentTab === "demanddatabase" && <DDemandDatabase />}
          {currentTab === "supply" && <DSupply />}
          {currentTab === "wpicsupply" && <DWPICSupply />}
        </div>
      </div> */}

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Data;
