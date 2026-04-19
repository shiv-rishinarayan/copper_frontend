import React from "react";
import * as styles from "./styles";
import BalanceChart from "./Charts/BalanceChart";

/**
 * GlobalStyles component to handle scannability and custom table behaviors.
 * Ensures the table scrolls horizontally on small screens and manages
 * specific institutional text colors.
 */
const GlobalStyles = () => (
  <style>{`
    .scroll-table::-webkit-scrollbar { height: 6px; }
    .scroll-table::-webkit-scrollbar-thumb { background: var(--cu-glow); border-radius: 10px; }
    .txt-warn { color: var(--cu-d); font-weight: 600; }
    @media (max-width: 1024px) {
      .g2-res { grid-template-columns: 1fr !important; }
      .g3-res { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const DeficitOutlookSection = () => {
  return (
    <>
      <GlobalStyles />
      <section style={{ ...styles.sec, ...styles.secAlt }} id="deficit">
        <div style={styles.w}>
          <p style={styles.slbl}>Section G · Deficit & price outlook</p>
          <h2 style={styles.stitle}>
            The Structural Copper Deficit: Timeline & Analyst Forecasts
          </h2>
          <p style={styles.sdesc}>
            The short-term picture is complicated by tariff-driven inventory
            distortions. The long-term picture is unusually clear: demand is
            rising, supply growth is slowing, and the lead times for new mines
            mean the gap cannot be closed quickly regardless of price signals
            today.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 gap-x-4">
            <div className="lg:col-span-5">
              <div className="grid grid-cols-9 p-1">
                <div className="col-span-4 lg:col-span-6">
                  <p style={styles.cl}>
                    ICSG · BloombergNEF · IEA · Cochilco · Annual
                  </p>
                  <p style={styles.ct}>
                    Refined Copper Supply vs Demand Balance
                  </p>
                  <p style={styles.cm}>
                    2018–2026 actuals · Note near-balance in 2025–2026 masks
                    concentrate tightness
                  </p>
                </div>
                <span
                  className="col-span-5 lg:col-span-3 max-h-8 text-center text-xs"
                  style={{
                    ...styles.bdg,
                    background: "rgba(184, 115, 51, 0.1)",
                    color: "#7F1D1D",
                    border: "1px solid rgba(184, 115, 51, 0.3)",
                  }}
                >
                  Near-balance now → deficit later
                </span>
              </div>

              <BalanceChart />

              <div style={{ ...styles.ins, ...styles.ib, marginTop: "12px" }}>
                <div className="ii">&#x26A0;</div>
                <div>
                  <p style={styles.ix}>
                    <strong>The market balance paradox:</strong> ICSG estimates
                    a refined copper surplus of ~118k tonnes in 2026 (supply
                    28.3 Mt vs demand 28.4 Mt — nearly balanced). Yet TC/RCs are
                    at zero. The explanation: refined supply is healthy because
                    Chinese smelters are cutting refinery margins to zero to
                    keep running. The problem is upstream at the mine. This is a
                    structural condition that gets worse, not better, over time.
                  </p>
                </div>
              </div>
              <p style={styles.csrc}>
                Source: ICSG quarterly statistical bulletin (icsg.org) ·
                Cochilco annual copper market report · BloombergNEF Dec 2025 ·
                IEA 2025
              </p>
            </div>

            <div className="lg:col-span-5" style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>
                    Analyst consensus · Jan–Apr 2026 · Forward estimates
                  </p>
                  <p style={styles.ct}>
                    Copper Price Forecasts — Analyst Consensus 2026
                  </p>
                  <p style={styles.cm}>
                    Range from conservative surplus scenario to structural
                    deficit bull case
                  </p>
                </div>
              </div>
              <div style={{ overflowX: "auto" }} className="scroll-table">
                <table style={styles.dt}>
                  <thead>
                    <tr>
                      <th style={styles.dtTh}>Institution</th>
                      <th style={styles.dtTh}>2026 forecast</th>
                      <th style={styles.dtTh}>2027 view</th>
                      <th style={styles.dtTh}>Key thesis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={styles.dtTd}>
                        <strong>J.P. Morgan</strong>
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        $12,500/t avg
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        $13,000/t
                      </td>
                      <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                        Structural deficit emerging; data centers + grid upgrade
                        the upside risk
                      </td>
                    </tr>
                    <tr>
                      <td style={styles.dtTd}>
                        <strong>Goldman Sachs</strong>
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        $11,800/t avg
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        $12,500/t
                      </td>
                      <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                        Slight surplus in 2026; tariff risks moderated; bullish
                        beyond 2027
                      </td>
                    </tr>
                    <tr>
                      <td style={styles.dtTd}>
                        <strong>Citic Securities</strong>
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        $12,000/t (floor)
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        Higher
                      </td>
                      <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                        ~450k tonne deficit in 2026; price must rise to
                        incentivize new mines
                      </td>
                    </tr>
                    <tr>
                      <td style={styles.dtTd}>
                        <strong>StoneX</strong>
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        $11,490/t avg
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>—</td>
                      <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                        COMEX premium unwind risk; LME more bullish than China
                        traders
                      </td>
                    </tr>
                    <tr>
                      <td style={styles.dtTd}>
                        <strong>BloombergNEF</strong>
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        Structural deficit 2026+
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        Deepening
                      </td>
                      <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                        Deficit could reach 19 Mt by 2050 without major new
                        investment
                      </td>
                    </tr>
                    <tr>
                      <td style={styles.dtTd}>
                        <strong>Cochilco (Chile)</strong>
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        $4.25/lb ($9,370/t)
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        Above $4/lb
                      </td>
                      <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                        Conservative; expects above $4/lb for a decade
                      </td>
                    </tr>
                    <tr>
                      <td style={styles.dtTd}>
                        <strong>Benchmark Minerals</strong>
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        Surplus 2026
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                        Tightening
                      </td>
                      <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                        730–830k t “economically trapped” in US distorts
                        physical view
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ ...styles.ins, ...styles.ib, marginTop: "14px" }}>
                <div className="ii">&#x26A0;</div>
                <div>
                  <p style={styles.ix}>
                    Forecasts are widely dispersed because the near-term is
                    genuinely ambiguous (tariff timing, China restocking, US
                    recession risk) while the long-term is consensus bullish.
                    The widest disagreement is on <em>when</em> the structural
                    deficit arrives — not <em>if</em>.
                  </p>
                </div>
              </div>
              <p style={styles.csrc}>
                Sources: J.P. Morgan Commodities Research &middot; Goldman Sachs
                &middot; Citic Securities via Carbon Credits &middot; StoneX
                S&amp;P Global Jan 2026 &middot; BloombergNEF Dec 2025 &middot;
                Cochilco annual &middot; Benchmark Minerals
              </p>
            </div>
          </div>

          <div
            style={{ ...styles.g3, ...styles.gap, marginTop: "24px" }}
            className="g3-res"
          >
            <div style={{ ...styles.cb, borderTop: "3px solid #4CAF50" }}>
              <p
                style={{
                  ...styles.ct,
                  color: "#4CAF50",
                  marginBottom: "8px",
                }}
              >
                🟢 Bull Case
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--ink3)",
                  lineHeight: "1.65",
                  marginBottom: "10px",
                }}
              >
                <strong>$14,000–$16,000/t by end-2027.</strong> Triggers: US
                tariffs on refined copper (15–30%) drive further arbitrage
                flows; China restocking cycle begins as property bottoms; AI
                data center copper demand surprises to upside; Grasberg + DRC
                disruptions persist.
              </p>
              <p style={{ fontSize: "11px", color: "#8888AA" }}>
                Probability: 25% · Requires 2–3 concurrent demand/supply shocks
              </p>
            </div>

            <div style={{ ...styles.cb, borderTop: "3px solid #B87333" }}>
              <p
                style={{
                  ...styles.ct,
                  color: "#7a4a1e",
                  marginBottom: "8px",
                }}
              >
                🟠 Base Case
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--ink3)",
                  lineHeight: "1.65",
                  marginBottom: "10px",
                }}
              >
                <strong>$11,000–$13,000/t through 2026–2027.</strong>
                COMEX premium compresses; tariff uncertainty maintains elevated
                US stocks; Chinese demand flat-to-modest growth; mine supply
                gradually improves from 2025 disruption recovery; market
                near-balance.
              </p>
              <p style={{ fontSize: "11px", color: "#8888AA" }}>
                Probability: 55% · Range trade with macro volatility
              </p>
            </div>

            <div style={{ ...styles.cb, borderTop: "3px solid #F44336" }}>
              <p
                style={{
                  ...styles.ct,
                  color: "#F44336",
                  marginBottom: "8px",
                }}
              >
                🔴 Bear Case
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--ink3)",
                  lineHeight: "1.65",
                  marginBottom: "10px",
                }}
              >
                <strong>$8,000–$10,000/t.</strong> Triggers: US recession
                reduces industrial demand meaningfully; COMEX inventory unwind
                to LME adds visible supply; China property deterioration deeper
                than expected; high prices drive aluminum substitution.
              </p>
              <p style={{ fontSize: "11px", color: "#8888AA" }}>
                Probability: 20% · Requires demand destruction, not supply surge
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeficitOutlookSection;
