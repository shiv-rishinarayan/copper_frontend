import React from "react";
import * as styles from "./styles";

const GlobalStyles = () => (
  <style>{`
    .scroll-table::-webkit-scrollbar { height: 6px; }
    .scroll-table::-webkit-scrollbar-thumb { background: var(--cu-glow); border-radius: 10px; }
    .tr-highlight { background: rgba(184, 115, 51, 0.08); transition: background 0.3s; }
    .tr-highlight:hover { background: rgba(184, 115, 51, 0.12); }
  `}</style>
);

const HistoryTable = () => {
  const priceData = [
    {
      yr: "2000",
      avgLb: "$0.82",
      avgT: "$1,813",
      high: "$0.91",
      low: "$0.72",
      driver: "Post-dot-com slowdown; China demand not yet dominant",
    },
    {
      yr: "2001",
      avgLb: "$0.72",
      avgT: "$1,578",
      high: "$0.84",
      low: "$0.60",
      driver: "9/11 recession fears; copper near 15-year lows",
    },
    {
      yr: "2002",
      avgLb: "$0.71",
      avgT: "$1,559",
      high: "$0.78",
      low: "$0.64",
      driver: "Near cycle bottom; China industrialization beginning",
    },
    {
      yr: "2003",
      avgLb: "$0.81",
      avgT: "$1,779",
      high: "$0.96",
      low: "$0.70",
      driver: "China demand surges; commodity supercycle ignites",
    },
    {
      yr: "2004",
      avgLb: "$1.30",
      avgT: "$2,866",
      high: "$1.49",
      low: "$1.06",
      driver: "China GDP +9.5%; copper breaks $1/lb barrier",
    },
    {
      yr: "2005",
      avgLb: "$1.67",
      avgT: "$3,679",
      high: "$2.11",
      low: "$1.39",
      driver: "Chilean supply disruptions; demand accelerating",
    },
    {
      yr: "2006",
      avgLb: "$3.05",
      avgT: "$6,722",
      high: "$4.08",
      low: "$2.06",
      driver: "ATH $4.08/lb; Supercycle peak; fund speculation",
    },
    {
      yr: "2007",
      avgLb: "$3.23",
      avgT: "$7,118",
      high: "$3.77",
      low: "$2.53",
      driver: "Subprime cracks; copper supported by China",
    },
    {
      yr: "2008",
      avgLb: "$3.16",
      avgT: "$6,955",
      high: "$4.08",
      low: "$1.26",
      driver: "Financial crisis: 70% crash in 6 months",
    },
    {
      yr: "2009",
      avgLb: "$2.34",
      avgT: "$5,150",
      high: "$3.33",
      low: "$1.38",
      driver: "China stimulus ($586bn); rapid recovery",
    },
    {
      yr: "2010",
      avgLb: "$3.42",
      avgT: "$7,535",
      high: "$4.42",
      low: "$2.77",
      driver: "Global recovery; structural supply deficits",
    },
    {
      yr: "2011",
      avgLb: "$4.00",
      avgT: "$8,828",
      high: "$4.60",
      low: "$3.05",
      driver: "New ATH $4.60/lb (Feb); Eurozone crisis caps rally",
      bold: true,
    },
    {
      yr: "2012",
      avgLb: "$3.61",
      avgT: "$7,959",
      high: "$3.92",
      low: "$3.30",
      driver: "Chinese slowdown fears; European recession",
    },
    {
      yr: "2013",
      avgLb: "$3.33",
      avgT: "$7,332",
      high: "$3.77",
      low: "$2.97",
      driver: "Fed Taper Tantrum; EM sell-off",
    },
    {
      yr: "2014",
      avgLb: "$3.11",
      avgT: "$6,863",
      high: "$3.43",
      low: "$2.84",
      driver: "Strong USD; China property slowdown begins",
    },
    {
      yr: "2015",
      avgLb: "$2.49",
      avgT: "$5,494",
      high: "$2.93",
      low: "$2.01",
      driver: "China devaluation; commodity bear market",
    },
    {
      yr: "2016",
      avgLb: "$2.21",
      avgT: "$4,868",
      high: "$2.68",
      low: "$1.96",
      driver: "Cycle low ($1.96); Trump election rally",
    },
    {
      yr: "2017",
      avgLb: "$2.80",
      avgT: "$6,166",
      high: "$3.32",
      low: "$2.46",
      driver: "Chinese credit expansion; synchronized growth",
    },
    {
      yr: "2018",
      avgLb: "$2.96",
      avgT: "$6,530",
      high: "$3.29",
      low: "$2.60",
      driver: "US-China trade war; tariff uncertainty",
    },
    {
      yr: "2019",
      avgLb: "$2.72",
      avgT: "$6,000",
      high: "$2.96",
      low: "$2.50",
      driver: "Trade resolution hopes; copper range-bound",
    },
    {
      yr: "2020",
      avgLb: "$2.80",
      avgT: "$6,174",
      high: "$3.63",
      low: "$2.08",
      driver: "COVID crash & V-recovery; Green stimulus",
    },
    {
      yr: "2021",
      avgLb: "$4.23",
      avgT: "$9,317",
      high: "$4.76",
      low: "$3.52",
      driver: "Energy transition; new ATH $4.76/lb (May)",
      bold: true,
    },
    {
      yr: "2022",
      avgLb: "$3.98",
      avgT: "$8,773",
      high: "$4.94",
      low: "$3.13",
      driver: "Ukraine war; Fed hikes; Zero-COVID drag",
    },
    {
      yr: "2023",
      avgLb: "$3.85",
      avgT: "$8,478",
      high: "$4.26",
      low: "$3.55",
      driver: "China reopening settles; consolidation",
    },
    {
      yr: "2024",
      avgLb: "$4.27",
      avgT: "$9,409",
      high: "$5.20",
      low: "$3.62",
      driver: "New ATH $5.20/lb (May); Tariff front-running",
      bold: true,
    },
    {
      yr: "2025",
      avgLb: "$5.63",
      avgT: "$12,400",
      high: "$5.94",
      low: "$4.33",
      driver: "50% semi-copper tariffs; TC/RCs collapse",
      bold: true,
    },
    {
      yr: "2026 YTD",
      avgLb: "$5.80",
      avgT: "$12,780",
      high: "$6.61",
      low: "$5.41",
      driver: "ATH $6.61/lb (Jan 29); Geopolitical risk; AI demand surge",
      highlight: true,
    },
  ];

  return (
    <>
      <GlobalStyles />
      <section
        style={{ ...styles.sec, ...styles.secAlt }}
        id="copper-price-history"
      >
        <div style={styles.w}>
          <p style={styles.slbl}>Copper price history</p>
          <h2 style={styles.stitle}>
            Copper Price History: Year by Year (2000–2026)
          </h2>
          <p style={styles.sdesc}>
            From a multi-decade low of $0.82/lb in 2002 to an all-time high of
            $6.61/lb in early 2026. Every major move in the "Doctor Copper"
            market maps to a global macro shift.
          </p>

          <div
            style={{ overflowX: "auto", marginBottom: "20px" }}
            className="scroll-table"
          >
            <table style={styles.dt}>
              <thead>
                <tr>
                  <th style={styles.dtTh}>Year</th>
                  <th style={styles.dtTh}>Avg ($/lb)</th>
                  <th style={styles.dtTh}>Avg ($/t)</th>
                  <th style={styles.dtTh}>High</th>
                  <th style={styles.dtTh}>Low</th>
                  <th style={styles.dtTh}>Key Driver</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((d, i) => (
                  <tr key={i} className={d.highlight ? "tr-highlight" : ""}>
                    <td style={styles.dtTd}>
                      <strong>{d.yr}</strong>
                    </td>
                    <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                      {d.avgLb}
                    </td>
                    <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                      {d.avgT}
                    </td>
                    <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                      {d.bold ? (
                        <strong style={{ color: styles.tokens.cuD }}>
                          {d.high}
                        </strong>
                      ) : (
                        d.high
                      )}
                    </td>
                    <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                      {d.low}
                    </td>
                    <td
                      style={{
                        ...styles.dtTd,
                        fontSize: "12px",
                        color: d.highlight ? styles.tokens.cuD : "inherit",
                      }}
                    >
                      {d.driver}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: "11px", color: styles.tokens.muted }}>
            Sources: IMF Primary Commodity Prices (FRED PCOPPUSDM) · LME
            Historical Data · USGS · Benchmark Mineral Intelligence. 2026 YTD
            reflects data through April 13, 2026.
          </p>

          <div
            style={{
              ...styles.cb,
              background: "rgba(184, 115, 51, 0.05)",
              border: `1px solid ${styles.tokens.cuGlow}`,
              display: "flex",
              gap: "16px",
              marginTop: "24px",
            }}
          >
            <div style={{ fontSize: "24px", opacity: 0.8 }}>📊</div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: styles.tokens.cuD,
                  marginBottom: "4px",
                }}
              >
                The Long-Run Perspective
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: styles.tokens.ink,
                  lineHeight: "1.6",
                }}
              >
                Since 2000, copper has compounded at ~10% annually. However, the
                volatility is legendary: the $1.96/lb low (2016) to the $6.61/lb
                high (2026) marks a 237% range in a single decade. While the S&P
                500 often outperforms in disinflationary growth, copper remains
                the ultimate hedge for industrial inflationary booms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryTable;
