import Footer from "@/components/Footer";
import InvestmentHero from "@/components/Investment/InvestmentHero";
import TabsSection from "@/components/Investment/TabsSection";
import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/router";
import ISnapshot from "@/components/Investment/ISnapshot";
import IETF from "@/components/Investment/ETF/IETF";
import IInsiderTransactions from "@/components/Investment/IInsiderTransactions";
import IStockScreener from "@/components/Investment/IStockScreener";
import SEO from "@/components/SEO";

const investments = () => {
  const { query } = useRouter();
  const currentTab = query.tab || "snapshot"; // Default to "snapshot"

  return (
    <div>
      <SEO
        title="PGM Investment Insights - Market Trends & Stock Analysis"
        description="Explore in-depth PGM investment insights, stock analysis, and the latest market trends. Stay informed about financial updates, ETF holdings, insider transactions, and stock screening tools to make better investment decisions."
        keywords="PGM investment insights, stock market trends, ETF holdings, stock analysis, insider transactions, stock screener, market updates, investment strategies, Platinum Group Metals investments"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/investments"
      />

      <Navbar />
      <InvestmentHero />
      {/* tabs  */}
      <div>
        <TabsSection />
        <div className="mt-6">
          {currentTab === "snapshot" && <ISnapshot />}
          {currentTab === "stock-screener" && <IStockScreener />}
          {currentTab === "insider-transactions" && <IInsiderTransactions />}
          {currentTab === "etf-trust-holdings" && <IETF />}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default investments;
