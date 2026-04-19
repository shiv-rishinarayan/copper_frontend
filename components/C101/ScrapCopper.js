import { useState } from "react";
import * as style from "./styles";

export default function ScrapCopper() {
  const [hoverRow, setHoverRow] = useState(null);

  const scrapData = [
    {
      grade: "Bare Bright Wire (#1)",
      desc: "Uncoated, unalloyed wire ≥16 gauge. The 'Gold Standard'.",
      purity: "~99.9%",
      price: "$5.65 – $5.78",
    },
    {
      grade: "Copper #1",
      desc: "Clean pipe, bus bars, clippings. Small solder joints okay.",
      purity: "~99%",
      price: "$5.48 – $5.66",
    },
    {
      grade: "Copper #2",
      desc: "Oxidized wire, pipe with heavy solder/fittings, roofing copper.",
      purity: "~94–96%",
      price: "$5.05 – $5.35",
    },
    {
      grade: "Insulated Wire (70%)",
      desc: "Heavy power cables with thick copper cores.",
      purity: "Variable",
      price: "$3.85 – $4.15",
    },
    {
      grade: "Christmas Lights / Romex",
      desc: "High-insulation, low-copper yield wiring.",
      purity: "Variable",
      price: "$1.20 – $1.95",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="scrap">
      <p style={style.secLabel}>Section 15 &middot; Secondary market</p>
      <h2 style={style.h2}>
        Scrap Copper Prices: #1, #2, Bare Bright, and What They Mean
      </h2>

      <p style={style.p}>
        Scrap copper accounts for roughly 35% of total global supply. It is the
        "safety valve" of the market; when prices spike, recycling activity
        surges. However, as we move through 2026, the secondary market is
        showing signs of exhaustion as most easily accessible scrap has already
        been processed.
      </p>

      <h3 style={style.h3}>Current Scrap Values (April 2026)</h3>
      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Grade</th>
              <th style={style.ctblTh}>Description</th>
              <th style={style.ctblTh}>Purity</th>
              <th style={style.ctblTh}>Est. Price/lb</th>
            </tr>
          </thead>
          <tbody>
            {scrapData.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoverRow(idx)}
                onMouseLeave={() => setHoverRow(null)}
                style={hoverRow === idx ? style.ctblTrHover : {}}
              >
                <td
                  style={
                    idx === scrapData.length - 1
                      ? { ...style.ctblTdFirst, borderBottom: "none" }
                      : style.ctblTdFirst
                  }
                >
                  <strong style={style.pStrong}>{row.grade}</strong>
                </td>
                <td
                  style={
                    idx === scrapData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.desc}
                </td>
                <td
                  style={
                    idx === scrapData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.purity}
                </td>
                <td
                  style={
                    idx === scrapData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTdLast
                  }
                >
                  <span style={{ color: "#059669", fontWeight: "bold" }}>
                    {row.price}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "8px" }}>
        *Retail scrap yard payouts typically range from 85% to 95% of COMEX/LME
        spot depending on volume and location. Values adjusted for $5.96/lb spot
        price.
      </p>

      <h3 style={style.h3}>The "Smelter Squeeze" and Scrap</h3>
      <p style={style.p}>
        With mine concentrate so tight that annual treatment charges (TC/RCs)
        hit <strong style={style.pStrong}>$0/t</strong> in early 2026, smelters
        are increasingly turning to scrap to keep their furnaces running. This
        has pushed scrap premiums to record highs.
      </p>

      <div style={style.calloutCu}>
        <div style={style.calloutIcon}>📢</div>
        <div>
          <p style={style.calloutTitle}>Market Signal</p>
          <p style={style.calloutText}>
            Watch the "Scrap Spread." If the gap between refined copper and
            scrap narrows, it usually signals that mine supply is critically
            low. In April 2026, Bare Bright is trading at a historically tight{" "}
            <strong style={style.pStrong}>97% of spot</strong>, confirming the
            midstream's desperation for raw material.
          </p>
        </div>
      </div>
    </section>
  );
}
