import { useState } from "react";
import * as style from "./styles";

export default function InvestInCopper() {
  const [hoverRow, setHoverRow] = useState(null);

  const tableData = [
    {
      vehicle: "Copper miners ETF",
      ticker: "COPX",
      expense: "0.65%",
      tax: "15–20% LTCG",
      purity: "Indirect (miners)",
      k1: "No",
    },
    {
      vehicle: "Junior miners ETF",
      ticker: "COPJ",
      expense: "0.65%",
      tax: "15–20% LTCG",
      purity: "Indirect (juniors)",
      k1: "No",
    },
    {
      vehicle: "Copper futures ETF",
      ticker: "CPER",
      expense: "0.85%",
      tax: "60/40 Sec 1256",
      purity: "Near-direct",
      k1: "Yes",
    },
    {
      vehicle: "Freeport-McMoRan",
      ticker: "FCX",
      expense: "—",
      tax: "15–20% LTCG",
      purity: "~75% copper rev",
      k1: "No",
    },
    {
      vehicle: "Southern Copper",
      ticker: "SCCO",
      expense: "—",
      tax: "15–20% LTCG",
      purity: "~90% copper rev",
      k1: "No",
    },
    {
      vehicle: "BHP Group",
      ticker: "BHP",
      expense: "—",
      tax: "15–20% LTCG",
      purity: "~30% copper rev",
      k1: "No",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="5-ways">
      <p style={style.secLabel}>Section 10 &middot; How to own it</p>
      <h2 style={style.h2}>
        5 Ways to Invest in Copper &mdash; Trade-offs Laid Flat
      </h2>

      <p style={style.p}>
        Figuring out how to invest in copper requires accepting an awkward
        reality: copper has no GLD equivalent &mdash; no large, liquid US ETF
        that holds physical copper in an allocated vault and lets you sell
        shares backed by real metal. Every route involves a compromise: either
        mining company risk, futures roll cost, or physical storage
        impracticality.
      </p>

      <div style={style.ways}>
        <div style={style.way}>
          <p style={style.wayLabel}>Option 1</p>
          <p style={style.wayTitle}>COPX &mdash; Copper miners ETF</p>
          <p style={style.wayText}>
            Global X Copper Miners ETF. ~40 copper mining stocks globally.
            Expense ratio: 0.65%/yr. The single most practical entry point for
            most investors. Diversified, liquid, no K-1, no storage. Moves
            roughly 1.5&ndash;2&times; the copper price due to operating
            leverage.
          </p>
          <span style={style.tagBest}>Best for most investors</span>
        </div>

        <div style={style.way}>
          <p style={style.wayLabel}>Option 2</p>
          <p style={style.wayTitle}>FCX &amp; SCCO &mdash; Individual miners</p>
          <p style={style.wayText}>
            Freeport-McMoRan (FCX) and Southern Copper (SCCO) are the most
            liquid pure-play equities. FCX offers high leverage to price with
            Grasberg concentration; SCCO offers lower costs and better
            dividends. Standard LTCG tax treatment.
          </p>
          <span style={style.tagOk}>For concentrated conviction</span>
        </div>

        <div style={style.way}>
          <p style={style.wayLabel}>Option 3</p>
          <p style={style.wayTitle}>CPER &mdash; Futures ETF</p>
          <p style={style.wayText}>
            United States Copper Index Fund. Holds COMEX futures.{" "}
            <strong style={style.pStrong}>
              Tax advantage: 60/40 Section 1256 treatment
            </strong>{" "}
            (blended ~26.8% rate). Downside: generates a K-1 tax form and has
            contango roll costs. Best for specific near-term price plays.
          </p>
          <span style={style.tagOk}>Best tax structure; complex</span>
        </div>

        <div style={style.way}>
          <p style={style.wayLabel}>Option 4</p>
          <p style={style.wayTitle}>
            BHP, RIO, TECK &mdash; Diversified miners
          </p>
          <p style={style.wayText}>
            Significant copper operations alongside iron ore, coal, or zinc.
            More stable earnings and larger balance sheets. BHP is actively
            expanding copper via M&A. Good for investors wanting diluted, safer
            exposure.
          </p>
          <span style={style.tagOk}>Diversified; diluted exposure</span>
        </div>

        <div style={{ ...style.way, opacity: 0.6 }}>
          <p style={style.wayLabel}>Option 5</p>
          <p style={style.wayTitle}>Physical copper &mdash; impractical</p>
          <p style={style.wayText}>
            At $5.80/lb, $10,000 of copper weighs nearly a tonne. Retail
            premiums are 40&ndash;100% over spot. No allocated physical ETF
            equivalent to gold exists at retail scale. Only practical for scrap
            dealers or large institutions.
          </p>
          <span style={style.tagAvoid}>Impractical for retail</span>
        </div>
      </div>

      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Vehicle</th>
              <th style={style.ctblTh}>Ticker</th>
              <th style={style.ctblTh}>Exp Ratio</th>
              <th style={style.ctblTh}>Tax</th>
              <th style={style.ctblTh}>Purity</th>
              <th style={style.ctblTh}>K-1?</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoverRow(idx)}
                onMouseLeave={() => setHoverRow(null)}
                style={hoverRow === idx ? style.ctblTrHover : {}}
              >
                <td
                  style={
                    idx === tableData.length - 1
                      ? { ...style.ctblTdFirst, borderBottom: "none" }
                      : style.ctblTdFirst
                  }
                >
                  <strong style={style.pStrong}>{row.vehicle}</strong>
                </td>
                <td
                  style={
                    idx === tableData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.ticker}
                </td>
                <td
                  style={
                    idx === tableData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.expense}
                </td>
                <td
                  style={
                    idx === tableData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.tax}
                </td>
                <td
                  style={
                    idx === tableData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.purity}
                </td>
                <td
                  style={
                    idx === tableData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTdLast
                  }
                >
                  {row.k1}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={style.h3}>Practical: how to buy copper step by step</h3>
      <ol style={{ paddingLeft: "24px", margin: "12px 0" }}>
        <li style={{ marginBottom: "10px", ...style.p }}>
          <strong style={style.pStrong}>
            Open a standard US brokerage account
          </strong>{" "}
          (Fidelity, Schwab, etc.). No special account type needed for COPX or
          individual miners.
        </li>
        <li style={{ marginBottom: "10px", ...style.p }}>
          <strong style={style.pStrong}>Decide on your vehicle</strong>: COPX
          for simplicity; individual miners for conviction; CPER for pure price
          play (if okay with K-1s).
        </li>
        <li style={{ marginBottom: "10px", ...style.p }}>
          <strong style={style.pStrong}>Size the position appropriately</strong>
          : 3&ndash;7% of portfolio is common for those with high conviction.
          Remember: copper is a growth bet, not a safe-haven hedge.
        </li>
        <li style={{ marginBottom: "10px", ...style.p }}>
          <strong style={style.pStrong}>Track the right signals</strong>: Follow
          TC/RCs, exchange stocks, and Chinese manufacturing PMI over the daily
          price noise.
        </li>
      </ol>
    </section>
  );
}
