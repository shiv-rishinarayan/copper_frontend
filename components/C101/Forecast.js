import { useState } from "react";
import * as style from "./styles";

export default function Forecast() {
  const [hoverBox, setHoverBox] = useState(null);

  const forecastPoints = [
    {
      type: "bull",
      tag: "🟢 Bull Case",
      price: "$6.50 – $7.50/lb",
      text: "Triggers: Section 232 tariffs on refined copper (June 30 decision); China infrastructure stimulus accelerates; TC/RCs stay near zero. Citi's bull case sees LME prices hitting $14,000/t (~$6.35/lb) by mid-2026.",
      color: "#065F46",
    },
    {
      type: "base",
      tag: "🟡 Base Case",
      price: "$5.40 – $5.90/lb",
      text: "Scenario: Tariff uncertainty persists but supply chains adapt. Electrification demand from data centers and EVs grows 3% annually. Goldman Sachs April 2026 update targets a 2026 average of $12,650/t ($5.74/lb).",
      color: "#92400E",
    },
    {
      type: "bear",
      tag: "🔴 Bear Case",
      price: "$4.20 – $4.90/lb",
      text: "Triggers: Global recession drives industrial demand collapse; a massive tariff exemption triggers a COMEX inventory unwind; China property sector deeper contraction. GS fair value estimates drift toward $11,100/t in a hard landing.",
      color: "#991B1B",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="forecast">
      <p style={style.secLabel}>Section 16 &middot; Price outlook</p>
      <h2 style={style.h2}>
        Copper Price Forecast 2026&ndash;2027: What Analysts Are Saying
      </h2>

      <p style={style.p}>
        Nobody predicted the Jan 29, 2026 spike to{" "}
        <strong style={style.pStrong}>$6.61/lb</strong>. As we sit at $5.80/lb
        in April, the market is caught between a structural "electrification"
        floor and a cyclical "recession" ceiling.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          margin: "30px 0",
        }}
      >
        {forecastPoints.map((fc, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoverBox(idx)}
            onMouseLeave={() => setHoverBox(null)}
            style={{
              padding: "24px",
              borderRadius: "12px",
              border: `1px solid ${fc.color}33`,
              backgroundColor: hoverBox === idx ? `${fc.color}08` : "#FFFFFF",
              transition: "all 0.2s ease",
              boxShadow:
                hoverBox === idx
                  ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  : "none",
              transform: hoverBox === idx ? "translateY(-4px)" : "none",
            }}
          >
            <p
              style={{
                color: fc.color,
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              {fc.tag}
            </p>
            <p
              style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              {fc.price}
            </p>
            <p
              style={{ fontSize: "14px", color: "#4B5563", lineHeight: "1.6" }}
            >
              {fc.text}
            </p>
          </div>
        ))}
      </div>

      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Institution</th>
              <th style={style.ctblTh}>2026 Avg Target</th>
              <th style={style.ctblTh}>Key Narrative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={style.ctblTdFirst}>
                <strong>Goldman Sachs</strong>
              </td>
              <td style={style.ctblTd}>$12,650/t ($5.74/lb)</td>
              <td style={style.ctblTdLast}>
                Structural demand resilience vs. near-term surplus risk.
              </td>
            </tr>
            <tr>
              <td style={style.ctblTdFirst}>
                <strong>JPMorgan</strong>
              </td>
              <td style={style.ctblTd}>$13,500/t ($6.12/lb)</td>
              <td style={style.ctblTdLast}>
                Tightness peaking in Q2; data center demand quadrupling by 2030.
              </td>
            </tr>
            <tr>
              <td style={style.ctblTdFirst}>
                <strong>Citigroup</strong>
              </td>
              <td style={style.ctblTd}>$12,075/t ($5.48/lb)</td>
              <td style={style.ctblTdLast}>
                Base case assumes dovish Fed; bull case sees $15k on supply
                shocks.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={style.calloutWarn}>
        <div className="callout-icon">&#x26A0;</div>
        <div>
          <p style={style.calloutTitle}>The Dr. Copper Paradox</p>
          <p style={style.calloutText}>
            Historical volatility remains extreme. In the 2022-2023 cycle,
            copper saw an intra-year range of 37%. While bank targets for late
            2026 cluster around $5.40–$5.80, the January volatility proved that
            geopolitics can force a $1.00/lb swing in under 30 days. Forecasts
            are tools for sizing, not certainties for timing.
          </p>
        </div>
      </div>
    </section>
  );
}
