import React from "react";
import * as styles from "./styles";

const GlobalStyles = () => (
  <style>{`
    @keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes ld { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    @media (max-width: 1024px) {
      .macro-strip-res { grid-template-columns: repeat(3, 1fr) !important; }
    }
    @media (max-width: 768px) {
      .g2-res { grid-template-columns: 1fr !important; }
      .macro-strip-res { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 480px) {
      .macro-strip-res { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const MacroIndicators = () => {
  const macroStats = [
    {
      label: "Global PMI (Mfg)",
      val: "50.4",
      sub: "Barely expansionary Apr 2026",
    },
    { label: "China PMI", val: "49.8", sub: "Slightly contractionary" },
    { label: "US 10yr yield", val: "4.42%", sub: "FRED DGS10" },
    {
      label: "DXY (USD index)",
      val: "99.84",
      sub: "Down 7.8% YTD — cu positive",
    },
    { label: "Cu/Au ratio", val: "0.001228", sub: "Copper÷gold · Risk gauge" },
  ];

  return (
    <>
      <GlobalStyles />
      <section style={styles.sec} id="macro">
        <div style={styles.w} className="w-res">
          <p style={styles.slbl}>Section D · Dr. Copper & macro indicators</p>
          <h2 style={styles.stitle}>
            Dr. Copper: Economic Diagnostic & Key Macro Drivers
          </h2>
          <p style={styles.sdesc}>
            Copper earned its “Dr. Copper” nickname because its price reliably
            foreshadows global economic turning points. It accurately predicted
            the 2008 recession, the 2020 COVID crash, and both recoveries.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1px",
              background: styles.tokens.bdr,
              border: `1px solid ${styles.tokens.bdr}`,
              borderRadius: styles.tokens.rl,
              overflow: "hidden",
              marginBottom: "24px",
            }}
            className="macro-strip-res"
          >
            {macroStats.map((s, i) => (
              <div key={i} style={styles.sc}>
                <p style={styles.sl}>{s.label}</p>
                <p style={styles.sv}>{s.val}</p>
                <p style={styles.ss2}>{s.sub}</p>
              </div>
            ))}
          </div>

          <div style={{ ...styles.g2, ...styles.gap }} className="g2-res">
            <div style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>
                    FRED PCOPPUSDM + China NBS PMI · Monthly
                  </p>
                  <p style={styles.ct}>
                    Copper Price vs Global Manufacturing PMI
                  </p>
                  <p style={styles.cm}>
                    Copper has led PMI turning points by 1–3 months across 5
                    cycles
                  </p>
                </div>
              </div>
              <canvas
                id="drCopperChart"
                height="220"
                style={{
                  width: "100%",
                  background: "rgba(26,26,46,0.02)",
                  borderRadius: "8px",
                }}
              ></canvas>
              <div style={styles.ib}>
                <div style={styles.ii}>🏥</div>
                <div>
                  <p style={styles.ix}>
                    <strong>The 2026 diagnostic:</strong> Copper is up 28% YoY
                    despite a global PMI hovering near 50. This strength without
                    demand confirmation is the tariff distortion at work. Dr.
                    Copper’s prognosis is ambiguous, reflecting high fiscal risk
                    and industrial caution.
                  </p>
                </div>
              </div>
              <p style={styles.csrc}>
                Source: FRED PCOPPUSDM + JP Morgan Global Manufacturing PMI
              </p>
            </div>

            <div style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>
                    Calculated: COMEX HG ÷ COMEX GC · Daily
                  </p>
                  <p style={styles.ct}>
                    Copper/Gold Ratio — Risk Appetite Gauge
                  </p>
                  <p style={styles.cm}>
                    High ratio = risk-on · Currently: <strong>0.00123</strong> —
                    below neutral
                  </p>
                </div>
              </div>
              <canvas
                id="cuAuChart"
                height="220"
                style={{
                  width: "100%",
                  background: "rgba(26,26,46,0.02)",
                  borderRadius: "8px",
                }}
              ></canvas>
              <div style={styles.ib}>
                <div style={styles.ii}>📈</div>
                <div>
                  <p style={styles.ix}>
                    The ratio’s trend often foreshadows US Treasury yields.
                    Currently the ratio is compressed — gold has outperformed
                    copper sharply, suggesting markets are pricing in
                    inflationary fiscal risk while remaining cautious on growth.
                  </p>
                </div>
              </div>
              <p style={styles.csrc}>
                Source: COMEX HG ÷ COMEX GC · Calculated daily
              </p>
            </div>
          </div>

          <div style={{ ...styles.cb, ...styles.gap }}>
            <div style={styles.ch}>
              <div>
                <p style={styles.cl}>
                  CME Group + LME · Calculated daily · Key 2026 signal
                </p>
                <p style={styles.ct}>
                  COMEX Premium Over LME — The Tariff Signal
                </p>
                <p style={styles.cm}>
                  The premium surged to over $2,000/t in January 2026, then
                  compressed to roughly parity by April. The arbitrage closing
                  signals trader appetite for shipping metal to the US has
                  peaked.
                </p>
              </div>
              <span style={{ ...styles.bdg, ...styles.bWarn }}>
                Watch this closely
              </span>
            </div>
            <canvas
              id="comexPremChart"
              height="150"
              style={{
                width: "100%",
                background: "rgba(26,26,46,0.02)",
                borderRadius: "8px",
              }}
            ></canvas>
            <div style={{ ...styles.ins, ...styles.iw }}>
              <div style={styles.ii}>⚠️</div>
              <div>
                <p style={styles.ix}>
                  <strong>The arb unwind risk:</strong> When the premium narrows
                  to zero, the incentive to send copper to US warehouses
                  disappears. If COMEX stocks start draining rapidly, it signals
                  actual US industrial consumption—extremely bullish.
                </p>
              </div>
            </div>
            <p style={styles.csrc}>
              Source: COMEX HG spot vs LME 3-month converted to $/lb · Updated
              daily
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MacroIndicators;
