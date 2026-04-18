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
  return (
    <>
      <GlobalStyles />
      <section style={styles.hero} className="">
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
            <div style={styles.hpc}>
              <p style={styles.hpcL}>COMEX (HG) $/lb</p>
              <p style={{ ...styles.hpcV, color: styles.tokens.cuL }}>$5.80</p>
              <p style={{ ...styles.hpcC, ...styles.dn }}>▼ −$0.06 -1.1%</p>
              <p style={styles.hpcS}>Apr 13, 2026 · 9:05 am ET</p>
            </div>

            <div style={styles.hpc}>
              <p style={styles.hpcL}>LME 3-month $/t</p>
              <p style={styles.hpcV}>$12,780</p>
              <p style={{ ...styles.hpcC, ...styles.dn }}>▼ −$118 -0.9%</p>
              <p style={styles.hpcS}>ATH: $14,580/t · Jan 29, 2026</p>
            </div>

            <div style={styles.hpc}>
              <p style={styles.hpcL}>COMEX stocks</p>
              <p style={{ ...styles.hpcV, color: "#f59e0b" }}>503k t</p>
              <p style={{ ...styles.hpcC, ...styles.up }}>▲ All-time high</p>
              <p style={styles.hpcS}>Up from &lt;100k a year ago</p>
            </div>

            <div style={styles.hpc}>
              <p style={styles.hpcL}>LME stocks</p>
              <p style={{ ...styles.hpcV, color: "#f44336" }}>68k t</p>
              <p style={{ ...styles.hpcC, ...styles.dn }}>▼ 8-year low</p>
              <p style={styles.hpcS}>Down from 256k — Jan 2025</p>
            </div>

            <div style={styles.hpc}>
              <p style={styles.hpcL}>TC/RC (benchmark)</p>
              <p style={{ ...styles.hpcV, color: "#f44336" }}>$0/t</p>
              <p style={{ ...styles.hpcC, ...styles.dn }}>
                ▼ Concentrate scarce
              </p>
              <p style={styles.hpcS}>Was $80/t in 2022</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataHero;
