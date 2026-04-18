import React from "react";
import * as styles from "./styles";

const GlobalStyles = () => (
  <style>{`
    .scroll-table::-webkit-scrollbar { height: 6px; }
    .scroll-table::-webkit-scrollbar-thumb { background: var(--cu-glow); border-radius: 10px; }
    .price-up { color: var(--grn); font-weight: bold; }
    @media (max-width: 768px) {
      .grid-stack { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const ScrapCopperPrice = () => {
  // Current market context for April 17, 2026
  const comexSpot = 6.07;

  const scrapGrades = [
    {
      name: "Bare Bright Wire (#1)",
      isri: "ISRI: Barley",
      pct: "90–95%",
      price: `$${(comexSpot * 0.92).toFixed(2)}–$${(comexSpot * 0.96).toFixed(2)}`,
      desc: "Uncoated, unalloyed copper wire, minimum 16 gauge. No solder, paint, or insulation",
      source: "Electricians, construction contractors",
    },
    {
      name: "#1 Copper",
      isri: "ISRI: Berry",
      pct: "88–93%",
      price: `$${(comexSpot * 0.88).toFixed(2)}–$${(comexSpot * 0.93).toFixed(2)}`,
      desc: "Clean, uncoated, unalloyed copper pipe, solids, and heavy wire. No fittings, solder, or foreign material.",
      source: "Plumbers, HVAC, demolition",
    },
    {
      name: "#2 Copper",
      isri: "ISRI: Cliff",
      pct: "80–88%",
      price: `$${(comexSpot * 0.82).toFixed(2)}–$${(comexSpot * 0.88).toFixed(2)}`,
      desc: "$4.64–$5.10/lb	Unalloyed copper, may have light coatings, solder, paint, or oxidation. Includes miscellaneous copper. No excessive foreign material.",
      source: "General construction, maintenance",
    },
    {
      name: "Light Copper / Roofing",
      isri: "ISRI: Dream",
      pct: "70–80%",
      price: `$${(comexSpot * 0.75).toFixed(2)}–$${(comexSpot * 0.82).toFixed(2)}`,
      desc: "Sheet copper, gutters, flashings, and light-gauge copper. Heavier oxidation acceptable.",
      source: "Roofers, sheet metal workers",
    },
    {
      name: "#1 Insulated Copper Wire",
      isri: "Priced by copper recovery %",
      pct: "55–75% of spot (copper content)",
      price: "Variable",
      desc: "Insulated wire with high copper recovery (~85–95%). Romex, THHN, and similar building wire.",
      source: "Building demolition, electricians",
    },
    {
      name: "#2 Insulated Wire / Christmas Lights",
      isri: "",
      pct: "10–40% of spot",
      price: "Low",
      desc: "Mixed insulated wire, lower copper recovery (<50%). Dealer strips and pays on copper content.",
      source: "General mixed scrap",
    },
    {
      name: "Copper radiators (auto)",
      isri: "ISRI: Radio",
      pct: "30–50% of spot",
      price: `$${(comexSpot * 0.35).toFixed(2)}–$${(comexSpot * 0.5).toFixed(2)}`,
      desc: "Copper-brass radiators. Value depends on copper content (~50%) vs brass solder and fittings.",
      source: "Auto recyclers, junkyards",
    },
  ];

  return (
    <>
      <GlobalStyles />
      <section
        style={{ ...styles.sec, ...styles.secAlt }}
        id="scrap-copper-prices"
      >
        <div style={styles.w}>
          <p style={styles.slbl}>Scrap copper prices</p>
          <h2 style={styles.stitle}>
            Scrap Copper Prices: April 2026 Market Guide
          </h2>
          <p style={styles.sdesc}>
            Scrap copper provides roughly 35% of global supply. As of mid-April
            2026, COMEX spot prices are holding strong near{" "}
            <strong>$6.07/lb</strong>. Local dealer payouts are calculated as a
            percentage of this benchmark, minus processing and transport
            spreads.
          </p>

          <div
            style={{ overflowX: "auto", marginBottom: "20px" }}
            className="scroll-table"
          >
            <table style={styles.dt}>
              <thead>
                <tr>
                  <th style={styles.dtTh}>Grade (ISRI)</th>
                  <th style={styles.dtTh}>% of COMEX</th>
                  <th style={styles.dtTh}>Price Est. ($/lb)</th>
                  <th style={styles.dtTh}>Description</th>
                  <th style={styles.dtTh}>Typical Sources</th>
                </tr>
              </thead>
              <tbody>
                {scrapGrades.map((g, i) => (
                  <tr key={i}>
                    <td style={styles.dtTd}>
                      <strong>{g.name}</strong>
                      <br />
                      <span
                        style={{ fontSize: "10px", color: styles.tokens.muted }}
                      >
                        {g.isri}
                      </span>
                    </td>
                    <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                      {g.pct}
                    </td>
                    <td
                      style={{ ...styles.dtTd, ...styles.dtMono }}
                      className="price-up"
                    >
                      {g.price}
                    </td>
                    <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                      {g.desc}
                    </td>
                    <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                      {g.source}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
            }}
            className="grid-stack"
          >
            <div
              style={{
                background: "rgba(184, 115, 51, 0.05)",
                border: `1px solid ${styles.tokens.cuGlow}`,
                borderRadius: styles.tokens.r,
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
                &#x1F4A1; How scrap dealers price copper
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--ink3)",
                  lineHeight: "1.6",
                }}
              >
                Dealers check COMEX spot (visible on this page) then apply a
                discount for their handling margin, melting costs, and the grade
                factor. The spread between what dealers pay (bid) and what they
                sell for (ask) represents their profit. When copper moves fast
                &mdash; like the January 2026 spike to $6.61/lb &mdash; dealer
                spreads widen because they can&rsquo;t hedge quickly enough.
                Check the live COMEX price before walking into any scrap dealer.
              </p>
            </div>
            <div
              style={{
                background: styles.tokens.white,
                border: `1px solid ${styles.tokens.bdr}`,
                borderRadius: styles.tokens.r,
                padding: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: styles.tokens.ink,
                  marginBottom: "8px",
                }}
              >
                &#x1F6AB; What is NOT copper scrap
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: styles.tokens.ink,
                  lineHeight: "1.6",
                }}
              >
                <strong>Brass</strong> (copper + zinc alloy) &mdash; priced
                separately, typically 60&ndash;70% of copper spot.
                <strong>Bronze</strong> (copper + tin) &mdash; lower recovery,
                separate grade. <strong>Copper-clad</strong> steel &mdash; very
                low copper content, worth much less than bare copper. Always
                check your material with a magnet: if it attracts, there&rsquo;s
                iron content. A scale and the ISRI grade spec sheet are your
                best tools before selling.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              marginTop: "16px",
            }}
          >
            Prices shown are indicative national averages. Actual dealer bids
            vary by region (Midwest vs East Coast spreads differ), current
            market conditions, and individual dealer margins. ISRI = Institute
            of Scrap Recycling Industries. Always verify with at least two
            dealers before selling large quantities.
          </p>
        </div>
      </section>
    </>
  );
};

export default ScrapCopperPrice;
