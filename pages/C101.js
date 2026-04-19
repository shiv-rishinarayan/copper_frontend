import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import C101Hero from "@/components/C101/C101Hero";
import React from "react";
import SEO from "@/components/SEO";
import DataBanner from "@/components/C101/DataBanner";
import NewsletterBanner from "@/components/C101/NewsLetter";
import KeyTakeaways from "@/components/C101/KeyTakeaways";
import ComparisonCallout from "@/components/C101/ComparisonCallout";
import TOC from "@/components/C101/TOC";
import CopperInfo from "@/components/C101/CopperInfo";
import CopperPriceMechanics from "@/components/C101/CopperPriceMechanics";
import CopperPriceUnits from "@/components/C101/CopperPriceUnits";
import DrCopper from "@/components/C101/DrCopper";
import BullMarket from "@/components/C101/BullMarket";
import Electrification from "@/components/C101/Electrification";
import SupplyCrisis from "@/components/C101/SupplyCrises";
import InventoryParadox from "@/components/C101/InventoryParadox";
import TCRC from "@/components/C101/TCRC";
import InvestInCopper from "@/components/C101/InvestInCopper";
import MiningStocks from "@/components/C101/MiningStocks";
import PriceHistory from "@/components/C101/PriceHistory";
import CopperAsInvestment from "@/components/C101/CopperAsInvestment";
import Taxes from "@/components/C101/Taxes";
import ScrapCopper from "@/components/C101/ScrapCopper";
import Forecast from "@/components/C101/Forecast";
import MonitorSignals from "@/components/C101/MonitorSignals";
import Glossary from "@/components/C101/Glossary";
import FAQ from "@/components/C101/FAQ";
import Editorial from "@/components/C101/Editorial";
import Guide from "@/components/C101/Guide";

const C101 = () => {
  return (
    <div className="bg-yellow-200/10">
      <SEO
        title="Copper 101 - Copper Alloys Guide & Glossary"
        description="Explore the world of Copper and its alloys with our comprehensive guide. Learn about copper, brass, bronze, aluminum bronze, nickel silver, and beryllium copper, their properties, uses, and market significance."
        keywords="Copper 101, Copper Alloys, copper, brass, bronze, aluminum bronze, nickel silver, beryllium copper, metal properties, copper glossary, industrial metals"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/C101"
      />
      <Navbar />
      <C101Hero />
      <div className="flex flex-col xl:flex-row px-3 xl:gap-5 xl:justify-around 2xl:justify-center 2xl:gap-12 mb-4">
        <DataBanner />
        <NewsletterBanner />
      </div>
      <KeyTakeaways />
      <ComparisonCallout />
      <TOC />
      <CopperInfo />
      <CopperPriceMechanics />
      <CopperPriceUnits />
      <DrCopper />
      <BullMarket />
      <Electrification />
      <SupplyCrisis />
      <InventoryParadox />
      <TCRC />
      <InvestInCopper />
      <MiningStocks />
      <PriceHistory />
      <CopperAsInvestment />
      <Taxes />
      <ScrapCopper />
      <Forecast />
      <MonitorSignals />
      <Glossary />
      <FAQ />
      <Editorial />
      <Guide />
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default C101;
