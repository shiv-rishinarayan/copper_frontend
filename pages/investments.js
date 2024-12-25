import Footer from "@/components/Footer";
import InvestmentHero from "@/components/Investment/InvestmentHero";
import TabsSection from "@/components/Investment/TabsSection";
import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/router";
import ISnapshot from "@/components/Investment/ISnapshot";
import IETF from "@/components/Investment/IETF";
import IInsiderTransactions from "@/components/Investment/IInsiderTransactions";
import IStockScreener from "@/components/Investment/IStockScreener";

const investments = () => {
  const { query } = useRouter();
  const currentTab = query.tab || "snapshot"; // Default to "snapshot"

  return (
    <div>
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
