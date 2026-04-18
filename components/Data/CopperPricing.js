import React from "react";
import * as styles from "./styles";

const GlobalStyles = () => (
  <style>{`
    @media (max-width: 768px) {
      .grid-stack { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const CopperPricing = () => {
  const drivers = [
    {
      icon: "🇨🇳",
      title: "1. China demand — 52% of global use",
      text: "China’s economy is the dominant driver. When China announces infrastructure stimulus, copper moves before the concrete is poured. The 2009 $586bn stimulus was the most powerful single demand catalyst in copper history. Today, Chinese property weakness (historically 30% of copper demand) is partially offset by state grid investment ($120bn planned in 2026) and EV manufacturing. Watch China PMI, property sales data, and State Grid capital expenditure announcements as leading indicators.",
    },
    {
      icon: "⛏️",
      title: "2. Mine supply disruptions",
      text: "Chile and Peru together supply ~35% of mined copper. Labor strikes, water shortages, permitting delays, and ore grade deterioration all restrict output. In 2025: Grasberg (Indonesia) suffered a September mud-rush flood, removing an estimated 270,000 tonnes of 2026 production. Kamoa-Kakula (DRC) flood disruption cut 2026 guidance from 520–580kt to 380–420kt. Chile’s national output fell 1.6% in 2025. These events compound — they remove copper from the system faster than new mines can replace it.",
    },
    {
      icon: "💵",
      title: "3. US dollar and real interest rates",
      text: "Like all dollar-denominated commodities, copper moves inversely with the DXY. A weaker dollar makes copper cheaper in other currencies, stimulating demand. Real interest rates matter too: higher rates raise the cost of holding inventory (copper sits in warehouses), depressing demand and prices. The DXY is currently at 99.84 — down 7.8% YTD in 2026 — providing a meaningful tailwind for copper prices denominated in USD.",
    },
    {
      icon: "⚡",
      title: "4. Energy transition demand",
      text: "EV production, solar and wind installation, grid modernisation, and AI data center construction are all copper-intensive and all growing. These are not cyclical — they are policy-mandated structural trends. IEA projects copper demand growing 30% by 2035 under current stated policies. Unlike property or infrastructure demand, which fluctuates with credit cycles, energy transition copper demand grows regardless of interest rates because it is driven by regulation, net-zero commitments, and technology adoption curves that respond to long-run costs, not short-run financing rates.",
    },
  ];

  return (
    <>
      <GlobalStyles />
      <section style={styles.sec} id="what-drives-copper-price">
        <div style={styles.w}>
          <p style={styles.slbl}>Key price drivers</p>
          <h2 style={styles.stitle}>What Drives the Copper Price?</h2>
          <p style={styles.sdesc}>
            Copper price moves are driven by a different set of factors than
            gold or silver. Four variables explain most of the movement in the
            modern market.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
              marginBottom: "20px",
            }}
            className="grid-stack"
          >
            {drivers.map((d, i) => (
              <div
                key={i}
                style={{
                  background: styles.tokens.white,
                  border: `1px solid ${styles.tokens.bdr}`,
                  borderRadius: styles.tokens.rl,
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: styles.tokens.cuD,
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>{d.icon}</span>
                  {d.title}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: styles.tokens.ink,
                    lineHeight: "1.65",
                  }}
                >
                  {d.text}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "rgba(184, 115, 51, 0.05)",
              border: `1px solid ${styles.tokens.cuGlow}`,
              borderRadius: styles.tokens.r,
              padding: "16px 20px",
              display: "flex",
              gap: "14px",
            }}
          >
            <div style={{ fontSize: "18px", flexShrink: 0 }}>&#x26A0;</div>
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: styles.tokens.cuD,
                  marginBottom: "4px",
                }}
              >
                2026 Specific: The Tariff Distortion
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--ink3)",
                  lineHeight: "1.65",
                }}
              >
                A fifth factor unique to 2026: US trade policy. The Trump
                administration imposed 50% tariffs on semi-finished copper
                products in August 2025, and a review of refined copper tariffs
                is due June 30, 2026. This has created a massive COMEX-LME
                arbitrage: traders shipped ~500,000 tonnes of copper to US
                warehouses to get ahead of potential duties. The result is the
                widest divergence between US and global copper inventory on
                record &mdash; distorting price signals in both directions and
                making 2026 copper uniquely difficult to read using historical
                frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CopperPricing;
