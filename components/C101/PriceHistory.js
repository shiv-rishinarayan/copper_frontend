import { useState } from "react";
import * as style from "./styles";

export default function PriceHistory() {
  const [hoverRow, setHoverRow] = useState(null);

  const historyData = [
    {
      year: "2000",
      lb: "$0.82",
      t: "$1,807",
      driver: "Post-dot-com slowdown; copper at multi-decade lows",
    },
    {
      year: "2002",
      lb: "$0.72",
      t: "$1,587",
      driver: "Cycle low; global recession aftermath",
    },
    {
      year: "2004",
      lb: "$1.29",
      t: "$2,843",
      driver: "China construction boom begins; supply surprise",
    },
    {
      year: "2006",
      lb: "$3.05",
      t: "$6,722",
      driver: "China demand surge; first modern supercycle peak",
    },
    {
      year: "2008",
      lb: "$3.16",
      t: "$6,965",
      driver: "Peak then crash — $4.20 in Feb, $1.29 by Dec (GFC)",
    },
    {
      year: "2011",
      lb: "$4.00",
      t: "$8,818",
      driver: "All-time high at the time ($4.62); China property peak",
    },
    {
      year: "2015",
      lb: "$2.50",
      t: "$5,510",
      driver: "China slowdown; copper in bear market",
    },
    {
      year: "2016",
      lb: "$2.21",
      t: "$4,868",
      driver: "Cycle low; $1.96 in January trough",
    },
    {
      year: "2020",
      lb: "$2.80",
      t: "$6,173",
      driver: "COVID crash to $2.10, then recovery on stimulus",
    },
    {
      year: "2021",
      lb: "$4.23",
      t: "$9,315",
      driver: "Stimulus boom; first electrification premium appears",
    },
    {
      year: "2022",
      lb: "$3.99",
      t: "$8,796",
      driver: "Peak $5.03 in March; Fed hikes & China lockdowns",
    },
    {
      year: "2024",
      lb: "$4.32",
      t: "$9,527",
      driver: "Cobre Panama closure; May spike to $5.20",
    },
    {
      year: "2025",
      lb: "~$4.90",
      t: "~$10,800",
      driver: "Tariff front-loading begins; geopolitical premium",
    },
    {
      year: "2026 ATH",
      lb: "$6.61",
      t: "$14,566",
      driver: "Record high Jan 29; tariff & US-Iran convergence",
    },
    {
      year: "2026 (Apr)",
      lb: "$5.80",
      t: "$12,787",
      driver: "Current price; post-ATH pullback & tariff uncertainty",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="price-history">
      <p style={style.secLabel}>Section 12 &middot; Historical context</p>
      <h2 style={style.h2}>
        Copper Price History: Year by Year (2000&ndash;2026)
      </h2>

      <p style={style.p}>
        Copper&rsquo;s modern price history is a story of two China-driven
        supercycles and a third potential phase driven by global
        electrification. The current price of $5.80/lb is high by any historical
        measure, reflecting the market&rsquo;s bet on a structural supply
        deficit.
      </p>

      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Year</th>
              <th style={style.ctblTh}>Avg Price $/lb</th>
              <th style={style.ctblTh}>Avg Price $/t</th>
              <th style={style.ctblTh}>Key Driver</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoverRow(idx)}
                onMouseLeave={() => setHoverRow(null)}
                style={hoverRow === idx ? style.ctblTrHover : {}}
              >
                <td
                  style={
                    idx === historyData.length - 1
                      ? { ...style.ctblTdFirst, borderBottom: "none" }
                      : style.ctblTdFirst
                  }
                >
                  <strong style={style.pStrong}>{row.year}</strong>
                </td>
                <td
                  style={
                    idx === historyData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.lb}
                </td>
                <td
                  style={
                    idx === historyData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.t}
                </td>
                <td
                  style={
                    idx === historyData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTdLast
                  }
                >
                  {row.driver}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "8px" }}>
        Sources: LME historical data &middot; USGS Minerals Yearbook &middot;
        World Bank Commodity Markets data. ATH dates reflect intraday highs.
      </p>

      <h3 style={style.h3}>
        The two supercycles &mdash; and what a third would require
      </h3>
      <p style={style.p}>
        The first supercycle (2003&ndash;2011) was defined by Chinese
        urbanization on an unprecedented scale, moving 300 million people to
        cities. The second (2020&ndash;2022) was fueled by global stimulus but
        capped by China&rsquo;s property crisis.
      </p>

      <p style={style.pLast}>
        A third supercycle, rooted in{" "}
        <strong style={style.pStrong}>electrification</strong>, hinges on the
        demand projections for EVs and grid modernization being broadly
        accurate. At $5.80/lb, the market is pricing in significant success for
        this transition. However, as the January 2026 spike to $6.61/lb showed,
        geopolitics and trade policy can create volatility that overshoots even
        the strongest fundamental thesis.
      </p>
    </section>
  );
}
