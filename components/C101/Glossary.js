import { useState } from "react";
import * as style from "./styles";

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const glossaryItems = [
    {
      term: "AISC (All-In Sustaining Cost)",
      def: "The full cost of producing one pound of copper, including direct mining, processing, royalties, sustaining capital, and G&A. Does not include growth capital for new mines. FCX: ~$1.60–$1.80/lb. SCCO: ~$0.85–$1.00/lb. It is the primary metric for assessing miner profitability.",
    },
    {
      term: "Backwardation",
      def: "When the spot copper price (or nearby futures) trades above longer-dated futures. This signals extreme physical tightness: buyers are paying a premium for immediate delivery. LME cash-to-3-month backwardation is the industry's 'red alert' signal for scarcity.",
    },
    {
      term: "Cathode (Grade A)",
      def: "99.99% pure copper produced by electrolytic refining. This is the LME delivery standard and the starting material for all copper fabricators. 'Copper price' almost always refers to the price for Grade A cathode.",
    },
    {
      term: "Concentrate",
      def: "The intermediate product from mines: a dry powder roughly 25–30% copper. Mines ship concentrate to smelters. The mine’s revenue is the LME price minus TC/RCs—low TC/RCs benefit miners, while high TC/RCs benefit smelters.",
    },
    {
      term: "COPX (Global X Copper Miners ETF)",
      def: "The dominant US-listed copper mining ETF. Holds ~40 global companies. It typically moves 1.5–2x the copper price due to underlying operating leverage. It is the most liquid vehicle for equity-based copper exposure.",
    },
    {
      term: "Dr. Copper",
      def: "The nickname for copper as an economic leading indicator. Because it is used in almost all manufacturing and construction, price moves often predict recessions or expansions months before official GDP data is released.",
    },
    {
      term: "Grade Decline",
      def: "The secular decline in the concentration of copper in ore globally (from ~1.18% in 1991 to ~0.68% today). This increases the energy, water, and cost required to produce every pound of copper, creating a rising 'cost floor' for the metal.",
    },
    {
      term: "Operating Leverage",
      def: "The amplification of profit changes relative to copper price moves. Because miners have high fixed costs, a 10% move in copper can result in a 30% move in earnings. This makes mining stocks more volatile than the metal itself.",
    },
    {
      term: "Social Licence",
      def: "The informal community acceptance of a mining project. Cobre Panama and Tia Maria are prime examples where a mine has legal permits but cannot operate due to local protests. This is now a primary risk factor for global supply.",
    },
    {
      term: "TC/RC (Treatment & Refining Charges)",
      def: "Fees miners pay smelters to process concentrate into cathode. Near $0/t for 2026—an extreme signal of concentrate scarcity. When TC/RCs are low, it means smelters are desperate for ore to keep furnaces running.",
    },
  ];

  const filteredItems = glossaryItems.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.def.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="glossary">
      <p style={style.secLabel}>Section 19 &middot; Reference</p>
      <h2 style={style.h2}>Copper Glossary</h2>
      <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "18px" }}>
        Key copper market terms defined for the 2026 landscape. For precious
        metals terms, see the{" "}
        <a
          href="/gold-investing-101/#glossary"
          style={{ color: "#B45309", fontWeight: "600" }}
        >
          Gold Investing 101 Glossary &rarr;
        </a>
      </p>

      <input
        type="text"
        placeholder="Search terms (e.g. TC/RC, AISC)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "24px",
          borderRadius: "8px",
          border: "1px solid #D1D5DB",
          fontSize: "16px",
        }}
      />

      <div style={{ display: "grid", gap: "24px" }}>
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            style={{ borderBottom: "1px solid #F3F4F6", paddingBottom: "16px" }}
          >
            <dt
              style={{
                fontWeight: "bold",
                color: "#111827",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              {item.term}
            </dt>
            <dd style={{ color: "#4B5563", lineHeight: "1.6", margin: 0 }}>
              {item.def}
            </dd>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "32px",
          padding: "20px",
          backgroundColor: "#F9FAFB",
          borderRadius: "12px",
        }}
      >
        <h4
          style={{ margin: "0 0 12px 0", fontSize: "16px", color: "#111827" }}
        >
          Copper Purity Standards
        </h4>
        <p style={{ fontSize: "14px", color: "#4B5563", margin: 0 }}>
          <strong>Concentrate:</strong> 25-30% Cu (The powder sent to smelters)
          <br />
          <strong>Blister/Anode:</strong> 98-99% Cu (The intermediate result of
          smelting)
          <br />
          <strong>Cathode (Grade A):</strong> 99.99% Cu (The global industrial
          standard)
        </p>
      </div>
    </section>
  );
}
