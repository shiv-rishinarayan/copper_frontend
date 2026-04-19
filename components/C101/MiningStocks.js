import { useState } from "react";
import * as style from "./styles";

export default function MiningStocks() {
  const [hoverRow, setHoverRow] = useState(null);

  const minerData = [
    {
      name: "Freeport-McMoRan",
      ticker: "FCX",
      rev: "~75%",
      mines: "Grasberg (ID), Morenci (USA), Cerro Verde (PE)",
      aisc: "~$1.60–$1.80",
      risk: "Grasberg transition; Indonesia politics; history of leverage stress",
    },
    {
      name: "Southern Copper",
      ticker: "SCCO",
      rev: "~90%",
      mines: "Buenavista (MX), Toquepala (PE), Cuajone (PE)",
      aisc: "~$0.85–$1.00",
      risk: "Tia Maria protests; 88% owned by Grupo Mexico; Mexico country risk",
    },
    {
      name: "Ivanhoe Mines",
      ticker: "IVN (TSX)",
      rev: "~80%",
      mines: "Kamoa-Kakula (DRC), Platreef (SA)",
      aisc: "~$1.20–$1.50",
      risk: "DRC operational/political risk; Zijin JV dependency; ramp challenges",
    },
    {
      name: "First Quantum",
      ticker: "FM (TSX)",
      rev: "~95%",
      mines: "Kansanshi (ZM), Sentinel (ZM) — Cobre Panama closed",
      aisc: "~$1.80–$2.10",
      risk: "Cobre Panama shutdown impact; heavy debt; Zambia fiscal risk",
    },
    {
      name: "Antofagasta",
      ticker: "ANTO (LSE)",
      rev: "~100%",
      mines: "Los Pelambres, Centinela (CL)",
      aisc: "~$1.50–$1.70",
      risk: "Chile resource nationalism; water scarcity in Atacama",
    },
    {
      name: "BHP Group",
      ticker: "BHP",
      rev: "~30%",
      mines: "Escondida (CL, 50%), Olympic Dam (AU)",
      aisc: "Varies",
      risk: "Iron ore/coal dilution; Escondida water and labor risk",
    },
    {
      name: "Rio Tinto",
      ticker: "RIO",
      rev: "~15%",
      mines: "Kennecott (USA), Oyu Tolgoi (MN)",
      aisc: "Varies",
      risk: "Iron ore/aluminum dominance; Oyu Tolgoi ramp speed",
    },
    {
      name: "Teck Resources",
      ticker: "TECK.B (TSX)",
      rev: "~45%",
      mines: "QB2 (CL), Highland Valley (CA)",
      aisc: "~$1.80",
      risk: "QB2 ramp costs; coal transition; Canadian tax environment",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="mining-stocks">
      <p style={style.secLabel}>Section 11 &middot; Equity guide</p>
      <h2 style={style.h2}>
        Copper Mining Stocks Guide: FCX, SCCO, BHP &amp; Beyond
      </h2>

      <p style={style.p}>
        This is not a buy/sell recommendation. It&rsquo;s a guide to what drives
        each company&rsquo;s share price and the risks specific to their
        operations. Prices and metrics are approximate as of April 2026.
      </p>

      <h3 style={style.h3}>
        Operating leverage: why copper stocks move so much
      </h3>
      <p style={style.p}>
        A miner&rsquo;s profit per pound equals the copper price minus the
        all-in sustaining cost (AISC). At $5.80/lb with an AISC of $1.60/lb, FCX
        earns $4.20/lb of operating margin. A 10% rise in copper to $6.38/lb
        adds $0.58/lb &mdash; a 14% improvement in margin on a 10% price move.
        This <strong style={style.pStrong}>operating leverage</strong> is why
        mining stocks typically outperform the metal in a bull market and
        underperform in a crash.
      </p>

      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Company</th>
              <th style={{ ...style.ctblTh, ...style.cuTh }}>Ticker</th>
              <th style={style.ctblTh}>Cu Rev %</th>
              <th style={style.ctblTh}>Key Mines</th>
              <th style={style.ctblTh}>AISC/lb</th>
              <th style={style.ctblTh}>Key Risk</th>
            </tr>
          </thead>
          <tbody>
            {minerData.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoverRow(idx)}
                onMouseLeave={() => setHoverRow(null)}
                style={hoverRow === idx ? style.ctblTrHover : {}}
              >
                <td
                  style={
                    idx === minerData.length - 1
                      ? { ...style.ctblTdFirst, borderBottom: "none" }
                      : style.ctblTdFirst
                  }
                >
                  <strong style={style.pStrong}>{row.name}</strong>
                </td>
                <td
                  style={
                    idx === minerData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.ticker}
                </td>
                <td
                  style={
                    idx === minerData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.rev}
                </td>
                <td
                  style={
                    idx === minerData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.mines}
                </td>
                <td
                  style={
                    idx === minerData.length - 1 ? style.ctblTd : style.ctblTd
                  }
                >
                  {row.aisc}
                </td>
                <td
                  style={
                    idx === minerData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTdLast
                  }
                >
                  {row.risk}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={style.h3}>FCX: the institutional benchmark</h3>
      <p style={style.p}>
        Freeport-McMoRan is the default institutional holding for copper equity
        exposure. Its crown jewel,{" "}
        <strong style={style.pStrong}>Grasberg</strong> in Indonesia, is one of
        the world&rsquo;s largest copper and gold deposits. FCX moves fast on
        price swings; its 2015&ndash;2016 near-bankruptcy (when copper hit
        $2/lb) serves as a stark reminder of the financial stress high-cost
        miners face in down cycles.
      </p>

      <h3 style={style.h3}>SCCO: the quiet outperformer</h3>
      <p style={style.p}>
        Southern Copper is widely considered the highest-quality major miner due
        to its AISC of ~$0.90/lb &mdash; among the lowest in the world. This
        massive margin of safety allows SCCO to remain profitable even in severe
        downturns. The trade-off: the{" "}
        <strong style={style.pStrong}>Tia Maria</strong> expansion in Peru
        remains a "stranded asset" due to community protests, and low public
        float (88% owned by Grupo Mexico) can impact liquidity.
      </p>

      <h3 style={style.h3}>
        Kamoa-Kakula: the project changing the supply map
      </h3>
      <p style={style.pLast}>
        Owned by Ivanhoe Mines and Zijin Mining, Kamoa-Kakula in the{" "}
        <strong style={style.pStrong}>DRC</strong> is one of the few global
        projects capable of moving the needle on total supply. Planned capacity
        of 600,000+ tonnes per year would make it a top-tier global producer.
        While the project has ramped successfully, its DRC location remains a
        high-risk/high-reward variable that dictates much of the stock&rsquo;s
        valuation multiple.
      </p>
    </section>
  );
}
