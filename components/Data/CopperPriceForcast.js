import React from "react";
import * as styles from "./styles";

const GlobalStyles = () => (
  <style>{`
    .scroll-table::-webkit-scrollbar { height: 6px; }
    .scroll-table::-webkit-scrollbar-thumb { background: var(--cu-glow); border-radius: 10px; }
    @media (max-width: 1024px) {
      .forecast-table { font-size: 13px; }
    }
  `}</style>
);

const PriceForecastSection = () => {
  return (
    <>
      <GlobalStyles />
      <section
        className="bg-yellow-200/10"
        style={styles.sec}
        id="copper-price-forecast"
      >
        <div style={styles.w}>
          <p style={styles.slbl}>Price outlook</p>
          <h2 style={styles.stitle}>Copper Price Forecast 2026–2027</h2>
          <p style={styles.sdesc}>
            The range of analyst forecasts for copper is unusually wide right
            now. The near-term is genuinely uncertain (tariff timing, COMEX
            inventory unwind, China restocking). The long-term structural case
            is near-consensus. Here’s what the major institutions are
            projecting.
          </p>

          <div
            style={{ overflowX: "auto", marginBottom: "18px" }}
            className="scroll-table"
          >
            <table style={styles.dt} className="forecast-table">
              <thead>
                <tr>
                  <th style={styles.dtTh}>Institution</th>
                  <th style={styles.dtTh}>2026 avg forecast</th>
                  <th style={styles.dtTh}>H2 2026 view</th>
                  <th style={styles.dtTh}>2027 view</th>
                  <th style={styles.dtTh}>Key upside risk</th>
                  <th style={styles.dtTh}>Key downside risk</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.dtTd}>
                    <strong>J.P. Morgan</strong>
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                    $12,500/t (~$5.67/lb)
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                    $13,000/t
                  </td>
                  <td
                    style={{
                      ...styles.dtTd,
                      ...styles.dtMono,
                      color: "#4CAF50",
                      //   fontWeight: "600",
                    }}
                  >
                    Bullish
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    Data centers + grid — demand surprises higher
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    US recession, Chinese demand stall
                  </td>
                </tr>

                <tr>
                  <td style={styles.dtTd}>
                    <strong>Goldman Sachs</strong>
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                    $11,800/t (~$5.36/lb)
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                    $12,000/t
                  </td>
                  <td
                    style={{
                      ...styles.dtTd,
                      ...styles.dtMono,
                      color: "#4CAF50",
                    }}
                  >
                    $12,500/t
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    Tariff escalation to refined copper
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    COMEX stockpile unwind, slight surplus 2026
                  </td>
                </tr>

                <tr>
                  <td style={styles.dtTd}>
                    <strong>Citic Securities</strong>
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                    $12,000/t floor
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>Higher</td>
                  <td
                    style={{
                      ...styles.dtTd,
                      ...styles.dtMono,
                      color: "#4CAF50",
                    }}
                  >
                    Deficit deepens
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    ~450k tonne 2026 deficit; prices must incentivize mines
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    Faster-than-expected Chinese smelter capacity addition
                  </td>
                </tr>

                <tr>
                  <td style={styles.dtTd}>
                    <strong>StoneX</strong>
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                    $11,490/t (~$5.21/lb)
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                    Range trade
                  </td>
                  <td
                    style={{
                      ...styles.dtTd,
                      ...styles.dtMono,
                      color: "var(--muted)",
                    }}
                  >
                    Neutral
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    LME bulls; Chinese restocking cycle
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    COMEX-LME spread collapse; speculative unwind
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
                    Deepening deficit
                  </td>
                  <td
                    style={{
                      ...styles.dtTd,
                      ...styles.dtMono,
                      color: "#4CAF50",
                    }}
                  >
                    $13,000+/t
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    Demand for transition metals triples by 2045
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    Aluminum substitution above $6/lb; demand destruction
                  </td>
                </tr>

                <tr>
                  <td style={styles.dtTd}>
                    <strong>Cochilco (Chile gov)</strong>
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                    $9,370/t ($4.25/lb)
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                    Conservative
                  </td>
                  <td style={{ ...styles.dtTd }}>Above $4/lb</td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    Sustained China recovery
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    Global recession; Chinese property further deterioration
                  </td>
                </tr>

                <tr>
                  <td style={styles.dtTd}>
                    <strong>Red Cloud Securities</strong>
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                    Slight surplus possible
                  </td>
                  <td style={{ ...styles.dtTd, ...styles.dtMono }}>Caution</td>
                  <td
                    style={{
                      ...styles.dtTd,
                      ...styles.dtMono,
                      color: "var(--muted)",
                    }}
                  >
                    Uncertain
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    AI demand arrives sooner than expected
                  </td>
                  <td style={{ ...styles.dtTd, fontSize: "12px" }}>
                    US recession probability higher than consensus; AI not yet
                    moving the needle
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            style={{
              background: "rgba(26, 26, 46, 0.03)",
              border: `1px solid ${styles.tokens.bdr}`,
              borderRadius: styles.tokens.r,
              padding: "16px 20px",
              marginBottom: "14px",
              display: "flex",
              gap: "14px",
            }}
          >
            <h2 className="stitle">Copper Price Forecast 2026&ndash;2027</h2>
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: styles.tokens.ink,
                  marginBottom: "3px",
                }}
              >
                The June 30 tariff decision: the biggest near-term binary
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: styles.tokens.ink3,
                  lineHeight: "1.65",
                }}
              >
                The US Commerce Department is due to deliver its review of
                refined copper tariffs by June 30, 2026. If tariffs are imposed
                on refined copper (the earlier proposal was 15%, rising to 30%
                in 2028), it would accelerate COMEX stockpiling further and
                widen the COMEX-LME spread dramatically. If tariffs are waived
                (as happened with the August 2025 refined copper exemption), the
                500,000+ tonne COMEX hoard could begin draining, potentially
                softening the COMEX price while tightening the global market.
                This is the largest known binary event for copper in H1 2026.
                Monitor it carefully.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "rgba(26, 122, 74, 0.05)",
              border: "1px solid rgba(26, 122, 74, 0.2)",
              borderRadius: styles.tokens.r,
              padding: "16px 20px",
              display: "flex",
              gap: "14px",
            }}
          >
            <div style={{ fontSize: "18px", flexShrink: 0 }}>💡</div>
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: styles.tokens.grn,
                  marginBottom: "3px",
                }}
              >
                Where forecasters agree: beyond 2027
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: styles.tokens.ink3,
                  lineHeight: "1.65",
                }}
              >
                There is remarkable consensus that copper’s long-run trajectory
                is higher. The IEA, BloombergNEF, Wood Mackenzie, and the major
                banks all project a structural supply deficit emerging between
                2026 and 2030 that deepens through the 2030s. The disagreement
                is about timing and magnitude — not direction. For investors
                with a 5–10 year horizon, the entry price matters less than the
                structural thesis, which is intact regardless of 2026 tariff
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceForecastSection;
