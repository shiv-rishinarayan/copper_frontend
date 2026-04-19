import { useState } from "react";
import * as style from "./styles";

export default function Taxes() {
  const [hoverRow, setHoverRow] = useState(null);

  const taxTable = [
    {
      vehicle: "COPX, FCX, SCCO",
      treatment: "Standard LTCG (Equity)",
      rate: "15–20% (LT)",
      k1: "No",
      comparison: "Better than GLD/IAU",
    },
    {
      vehicle: "CPER (Copper ETF)",
      treatment: "60/40 Section 1256",
      rate: "~26.8% Blended",
      k1: "Yes",
      comparison: "Lower than Collectibles",
    },
    {
      vehicle: "Physical Copper",
      treatment: "Likely Collectibles (Grey)",
      rate: "28% Max",
      k1: "No",
      comparison: "Same as Physical Gold",
    },
    {
      vehicle: "GLD/IAU (Gold)",
      treatment: "Collectibles Rate",
      rate: "28% Flat",
      k1: "No",
      comparison: "— (Benchmark)",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="taxes">
      <p style={style.secLabel}>Section 14 &middot; Tax treatment</p>
      <h2 style={style.h2}>
        Copper Taxes Explained &mdash; Better Than You Think vs Gold
      </h2>

      <p style={style.p}>
        Copper has a more tax-efficient investment structure than gold for most
        vehicles. While gold is almost universally taxed as a "collectible" in
        the US, copper offers pathways to standard capital gains rates that can
        significantly improve your after-tax returns.
      </p>

      <h3 style={style.h3}>COPX, FCX, and Mining Stocks: The Equity Path</h3>
      <p style={style.p}>
        Any US-listed equity &mdash; including ETFs like{" "}
        <strong style={style.pStrong}>COPX</strong> and individual miners like{" "}
        <strong style={style.pStrong}>FCX</strong> &mdash; is taxed at the
        standard long-term capital gains (LTCG) rate of{" "}
        <strong style={style.pStrong}>15&ndash;20%</strong> when held for more
        than one year. Unlike gold ETFs, these are treated as shares in a
        business, not ownership of a metal. This is the most tax-efficient way
        for retail investors to gain copper exposure.
      </p>

      <h3 style={style.h3}>CPER: The 60/40 Section 1256 Advantage</h3>
      <p style={style.p}>
        The <strong style={style.pStrong}>CPER</strong> ETF holds copper
        futures. Under IRS Section 1256, gains are taxed as 60% long-term and
        40% short-term, regardless of your holding period. For an investor in
        the 37% bracket, this results in a blended rate of{" "}
        <strong style={style.pStrong}>~26.8%</strong>. This is superior to the
        28% flat "collectibles" rate applied to gold ETFs like GLD, especially
        for short-term trades where ordinary income rates would otherwise apply.
      </p>

      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Vehicle</th>
              <th style={style.ctblTh}>Tax Treatment</th>
              <th style={style.ctblTh}>Rate (Top Bracket)</th>
              <th style={style.ctblTh}>K-1?</th>
              <th style={style.ctblTh}>vs Gold ETF</th>
            </tr>
          </thead>
          <tbody>
            {taxTable.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoverRow(idx)}
                onMouseLeave={() => setHoverRow(null)}
                style={hoverRow === idx ? style.ctblTrHover : {}}
              >
                <td
                  style={
                    idx === taxTable.length - 1
                      ? { ...style.ctblTdFirst, borderBottom: "none" }
                      : style.ctblTdFirst
                  }
                >
                  <strong style={style.pStrong}>{row.vehicle}</strong>
                </td>
                <td
                  style={
                    idx === taxTable.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.treatment}
                </td>
                <td
                  style={
                    idx === taxTable.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.rate}
                </td>
                <td
                  style={
                    idx === taxTable.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.k1}
                </td>
                <td
                  style={
                    idx === taxTable.length - 1
                      ? style.ctblTdLast
                      : style.ctblTdLast
                  }
                >
                  {row.comparison}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={style.h3}>The K-1 Complexity</h3>
      <p style={style.p}>
        The tax benefit of CPER comes with a caveat: it issues a{" "}
        <strong style={style.pStrong}>Schedule K-1</strong>. This can delay your
        tax filing as K-1s often arrive later than standard 1099s. For most
        individual investors, the simplicity of a 1099-reporting ETF like COPX
        outweighs the marginal tax benefit of a futures-based fund.
      </p>

      <div style={style.calloutGrn}>
        <div style={style.calloutIcon}>💡</div>
        <div>
          <p style={style.calloutTitle}>Retirement Account Tip</p>
          <p style={style.calloutText}>
            Unlike physical gold, which requires a specialized "Gold IRA" with a
            vault custodian, copper mining stocks and ETFs can be held in any
            standard IRA or 401(k). Holding copper miners in a Roth IRA allows
            you to capture the potentially explosive "supercycle" gains
            completely tax-free.
          </p>
        </div>
      </div>
    </section>
  );
}
