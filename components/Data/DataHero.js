import React from "react";
import * as styles from "./styles";

const GlobalStyles = () => (
  <style>{`
    @keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes ld { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    @media (max-width: 1024px) {
      .hpg-res { grid-template-columns: repeat(3, 1fr) !important; }
    }
    @media (max-width: 768px) {
      .w-res { padding: 0 20px !important; }
      .hpg-res { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 480px) {
      .hpg-res { grid-template-columns: 1fr 1fr !important; }
    }
  `}</style>
);

const DataHero = () => {
  const cards = [
    {
      label: "COMEX (HG) $/lb",
      val: "$5.80",
      c: "dn",
      txt: "▼ −$0.06 -1.1%",
      s: "Apr 13, 2026 · 9:05 am ET",
      color: styles.tokens.cuL,
    },
    {
      label: "LME 3-month $/t",
      val: "$12,780",
      c: "dn",
      txt: "▼ −$118 -0.9%",
      s: "ATH: $14,580/t · Jan 29, 2026",
    },
    {
      label: "COMEX stocks",
      val: "503k t",
      c: "up",
      txt: "▲ All-time high",
      s: "Up from <100k a year ago",
      color: "#f59e0b",
    },
    {
      label: "LME stocks",
      val: "68k t",
      c: "dn",
      txt: "▼ 8-year low",
      s: "Down from 256k — Jan 2025",
      color: "#f44336",
    },
    {
      label: "TC/RC (benchmark)",
      val: "$0/t",
      c: "dn",
      txt: "▼ Concentrate scarce",
      s: "Was $80/t in 2022",
      color: "#f44336",
    },
  ];

  return (
    <>
      <GlobalStyles />
      <section className="mt-14" style={styles.hero}>
        <div style={styles.heroBefore} />
        <div style={{ ...styles.w, ...styles.heroInner }} className="w-res">
          <p style={styles.hEye}>Copper market data — Updated April 13, 2026</p>
          <h1 style={styles.hTitle}>
            Live Copper Price Per Pound —<br />
            Charts, Inventory & <em style={styles.hTitleEm}>Market Data</em>
          </h1>
          <p style={styles.hSub}>
            COMEX & LME prices, warehouse inventory, treatment charges, mine
            production, sector demand, the tariff-driven inventory paradox, and
            the structural deficit thesis. All free. Updated daily.
          </p>
          <div style={styles.hUpd}>
            <span style={styles.ldot}></span>
            <span>
              Prices updated continuously during market hours · COMEX & LME
            </span>
          </div>

          <div style={styles.hpg} className="hpg-res">
            {cards.map((item, i) => (
              <div key={i} style={styles.hpc}>
                <p style={styles.hpcL}>{item.label}</p>
                <p style={{ ...styles.hpcV, color: item.color }}>{item.val}</p>
                <p style={{ ...styles.hpcC, ...styles[item.c] }}>{item.txt}</p>
                <p style={styles.hpcS}>{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DataHero;
