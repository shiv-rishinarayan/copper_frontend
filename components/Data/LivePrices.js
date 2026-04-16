import React from "react";
import * as styles from "./styles";

const GlobalStyles = () => (
  <style>{`
    @keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes ld { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    @media (max-width: 1024px) {
      .stat-strip-res { grid-template-columns: repeat(3, 1fr) !important; }
    }
    @media (max-width: 768px) {
      .g2-res { grid-template-columns: 1fr !important; }
      .stat-strip-res { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 480px) {
      .stat-strip-res { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const LivePrices = () => {
  const stats = [
    {
      label: "COMEX spot",
      val: "$5.80/lb",
      sub: "Apr 13, 2026",
      color: styles.tokens.cuD,
    },
    { label: "LME 3-month", val: "$12,780/t", sub: "Official settlement" },
    {
      label: "52-week high",
      val: "$6.58/lb",
      sub: "Jan 29, 2026 (ATH)",
      color: styles.tokens.grn,
    },
    { label: "52-week low", val: "$4.33/lb", sub: "Apr 2025" },
    {
      label: "1-year return",
      val: "+28%",
      sub: "vs S&P 500: −8% YTD",
      status: "up",
    },
    { label: "$/lb to $/t", val: "×2,204.6", sub: "Conversion factor" },
  ];

  const unitRows = [
    {
      unit: "Per pound (lb)",
      price: "$5.80",
      notes: "COMEX HG primary quote",
      use: "US wire mills, scrap dealers",
      strong: true,
      up: true,
    },
    {
      unit: "Per metric tonne",
      price: "$12,780",
      notes: "lb × 2,204.62",
      use: "LME contracts, global trade",
    },
    {
      unit: "Per short ton (2,000 lb)",
      price: "$11,600",
      notes: "lb × 2,000",
      use: "US industrial contracts",
    },
    {
      unit: "Per kilogram",
      price: "$12.78",
      notes: "$/t ÷ 1,000",
      use: "Small quantity reference",
    },
    {
      unit: "Per gram",
      price: "$0.0128",
      notes: "Far below gold ($152) and silver ($2.35/g)",
      use: "Collector rounds reference",
    },
    {
      unit: "Per troy ounce",
      price: "$0.40",
      notes: "lb ÷ 14.583",
      use: "Comparison vs precious metals",
    },
    {
      unit: "Bare bright wire (scrap)",
      price: "~$5.51–$5.51",
      notes: "~95% of COMEX spot",
      use: "Highest-grade copper scrap",
    },
    {
      unit: "#1 copper scrap",
      price: "~$5.22–$5.51",
      notes: "~90–95% of spot",
      use: "Clean pipe, solids",
    },
    {
      unit: "#2 copper scrap",
      price: "~$4.64–$5.22",
      notes: "~80–90% of spot",
      use: "Mixed wire, miscellaneous",
    },
  ];

  return (
    <>
      <GlobalStyles />
      <section style={{ ...styles.sec, ...styles.secAlt }} id="prices">
        <div style={styles.w} className="w-res">
          <p style={styles.slbl}>Section A · Live prices & charts</p>
          <h2 style={styles.stitle}>
            Copper Price Today Per Pound — COMEX (HG) & LME Live Charts
          </h2>
          <p style={styles.sdesc}>
            COMEX HG futures quote in USD per pound (North American benchmark).
            LME quotes in USD per metric tonne (global benchmark). Prices
            maintain 99%+ correlation through continuous arbitrage. Current
            spread: COMEX $5.80/lb ≡ $12,785/t — vs LME at $12,780/t — near
            convergence.
          </p>

          <p
            style={{
              fontSize: "14px",
              color: styles.tokens.ink3,
              lineHeight: 1.75,
              marginBottom: "20px",
              maxWidth: "760px",
            }}
          >
            The <strong>copper price today</strong> is{" "}
            <strong>$5.80 per pound</strong> on COMEX (symbol: HG), equivalent
            to <strong>$12,780 per metric tonne</strong> on the London Metal
            Exchange (LME). Copper is up 28% year-over-year and hit an all-time
            high of $6.61/lb on January 29, 2026.
            <a
              href="#inventory"
              style={{
                color: styles.tokens.cuD,
                fontWeight: 600,
                marginLeft: "8px",
              }}
            >
              See the inventory paradox explained ↓
            </a>
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "1px",
              background: styles.tokens.bdr,
              border: `1px solid ${styles.tokens.bdr}`,
              borderRadius: styles.tokens.rl,
              overflow: "hidden",
              marginBottom: "24px",
            }}
            className="stat-strip-res"
          >
            {stats.map((s, i) => (
              <div key={i} style={styles.sc}>
                <p style={styles.sl}>{s.label}</p>
                <p
                  style={{
                    ...styles.sv,
                    color: s.color || styles.tokens.ink,
                    ...(s.status === "up" ? styles.up : {}),
                  }}
                >
                  {s.val}
                </p>
                <p style={styles.ss2}>{s.sub}</p>
              </div>
            ))}
          </div>

          <div style={{ ...styles.g2, ...styles.gap }} className="g2-res">
            <div style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>TradingView · COMEX:HG1! · Real-time</p>
                  <p style={styles.ct}>COMEX Copper (HG) — USD per pound</p>
                  <p style={styles.cm}>
                    Full interactive chart — all timeframes
                  </p>
                </div>
                <div style={styles.trng}>
                  <button style={{ ...styles.tb, ...styles.tbOn }}>1D</button>
                  <button style={styles.tb}>1W</button>
                  <button style={styles.tb}>1M</button>
                </div>
              </div>
              <div style={{ ...styles.tvph, height: "280px" }}>
                <div style={styles.tvic}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect
                      x="2"
                      y="10"
                      width="3"
                      height="8"
                      rx="1"
                      fill="#B87333"
                    />
                    <rect
                      x="7"
                      y="6"
                      width="3"
                      height="12"
                      rx="1"
                      fill="#B87333"
                      opacity=".7"
                    />
                    <rect
                      x="12"
                      y="3"
                      width="3"
                      height="15"
                      rx="1"
                      fill="#B87333"
                      opacity=".5"
                    />
                    <rect
                      x="17"
                      y="7"
                      width="3"
                      height="11"
                      rx="1"
                      fill="#B87333"
                      opacity=".4"
                    />
                  </svg>
                  <span>TradingView COMEX:HG1!</span>
                </div>
              </div>
              <p style={styles.csrc}>
                Source: CME Group COMEX · 25,000 lbs/contract
              </p>
            </div>

            <div style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>
                    TradingView · OANDA:COPPER · Real-time
                  </p>
                  <p style={styles.ct}>LME Copper — USD per metric tonne</p>
                  <p style={styles.cm}>3-month contract · World benchmark</p>
                </div>
                <div style={styles.trng}>
                  <button style={{ ...styles.tb, ...styles.tbOn }}>1D</button>
                  <button style={styles.tb}>1W</button>
                </div>
              </div>
              <div style={{ ...styles.tvph, height: "280px" }}>
                <div style={styles.tvic}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M2 16 L5 10 L8 12 L12 5 L16 8 L20 3"
                      stroke="#B87333"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>TradingView LME Copper</span>
                </div>
              </div>
              <p style={styles.csrc}>
                Source: LME · 25-tonne lots · Official price 12:30 London
              </p>
            </div>
          </div>

          <div style={{ ...styles.cb, ...styles.gap }}>
            <div style={styles.ch}>
              <div>
                <p style={styles.cl}>FRED PCOPPUSDM · Monthly</p>
                <p style={styles.ct}>Copper Price History — 2000 to 2026</p>
                <p style={styles.cm}>
                  USD per metric tonne · Key events annotated
                </p>
              </div>
              <span style={styles.bCu}>26-year view</span>
            </div>
            <canvas
              id="cuHistChart"
              height="160"
              style={{
                width: "100%",
                background: "rgba(26,26,46,0.02)",
                borderRadius: "8px",
              }}
            ></canvas>
            <p style={styles.csrc}>
              Source: FRED series PCOPPUSDM (IMF monthly averages)
            </p>
          </div>

          <div style={{ ...styles.cb, ...styles.gap }}>
            <div style={styles.ch}>
              <div>
                <p style={styles.cl}>
                  Calculated from COMEX HG spot · Updated 60s
                </p>
                <p style={styles.ct}>Copper Price Per Unit — All Formats</p>
                <p style={styles.cm}>At $5.80/lb COMEX spot · Apr 13, 2026</p>
              </div>
              <span style={styles.bCu}>$5.80/lb</span>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={styles.dt}>
                <thead>
                  <tr>
                    <th style={styles.dtTh}>Unit</th>
                    <th style={styles.dtTh}>Price</th>
                    <th style={styles.dtTh}>Notes</th>
                    <th style={styles.dtTh}>Common use</th>
                  </tr>
                </thead>
                <tbody>
                  {unitRows.map((row, i) => (
                    <tr key={i}>
                      <td style={styles.dtTd}>
                        {row.strong ? <strong>{row.unit}</strong> : row.unit}
                      </td>
                      <td
                        style={{
                          ...styles.dtTd,
                          ...styles.dtMono,
                          ...(row.up ? styles.up : {}),
                          ...(row.strong ? styles.dtStrong : {}),
                        }}
                      >
                        {row.price}
                      </td>
                      <td style={styles.dtTd}>{row.notes}</td>
                      <td style={styles.dtTd}>{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LivePrices;
