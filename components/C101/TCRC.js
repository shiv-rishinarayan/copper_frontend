import { useState } from "react";
import * as style from "./styles";

export default function TCRC() {
  const [hoverRow, setHoverRow] = useState(null);

  const tcrcLevels = [
    {
      level: "$80–$100/t+",
      meaning:
        "Abundant concentrate — smelters have pricing power, miners are competing for processing slots",
      context: "2018–2022 era; smelter capacity outpaced concentrate supply",
    },
    {
      level: "$40–$80/t",
      meaning:
        "Balanced market — miners and smelters negotiate roughly equally",
      context: "Normal range for a well-supplied market",
    },
    {
      level: "$0–$40/t",
      meaning:
        "Tight concentrate — miners have pricing power; smelters accept minimal fees to stay operating",
      context: "2023 benchmark was $80/t; fell to $20 by 2024",
    },
    {
      level: "$0/t or below",
      meaning:
        "Extreme tightness — smelters processing at cost or below; some may cut rates or take tolling deals",
      context:
        "2026 benchmark: approximately $0/t. Unprecedented in the modern era.",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="tc-rc">
      <p style={style.secLabel}>Section 9 &middot; The upstream signal</p>
      <h2 style={style.h2}>
        TC/RC: The Market Signal Almost Nobody Talks About
      </h2>

      <p style={style.p}>
        Treatment charges and refining charges &mdash; TC/RCs &mdash; are the
        fees that copper concentrate producers (miners) pay to smelters to
        convert their ore into refined cathode. Most retail investors have never
        heard of them. They are, in the opinion of serious copper market
        participants, the most informative upstream signal in the copper market.
      </p>

      <h3 style={style.h3}>How TC/RCs work</h3>
      <p style={style.p}>
        When a copper mine processes ore, it typically produces{" "}
        <strong style={style.pStrong}>concentrate</strong> &mdash; a powder that
        is roughly 25&ndash;30% copper by weight, produced by froth flotation.
        Concentrate then goes to a smelter, which melts it, removes impurities
        (including potentially valuable gold and silver byproducts), and
        produces refined copper cathode. For this service, the smelter charges
        the miner a <strong style={style.pStrong}>treatment charge (TC)</strong>{" "}
        expressed in dollars per dry metric tonne of concentrate, and a{" "}
        <strong style={style.pStrong}>refining charge (RC)</strong> expressed in
        cents per pound of contained copper.
      </p>

      <p style={style.p}>
        These charges are set annually in benchmark negotiations between major
        miners and Chinese smelters (who process roughly 40% of the
        world&rsquo;s copper concentrate). The benchmark is then referenced by
        most other concentrate contracts globally.
      </p>

      <h3 style={style.h3}>What the TC/RC level signals</h3>
      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>TC/RC level</th>
              <th style={style.ctblTh}>What it means</th>
              <th style={style.ctblTh}>Historical context</th>
            </tr>
          </thead>
          <tbody>
            {tcrcLevels.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoverRow(idx)}
                onMouseLeave={() => setHoverRow(null)}
                style={hoverRow === idx ? style.ctblTrHover : {}}
              >
                <td
                  style={
                    idx === tcrcLevels.length - 1
                      ? { ...style.ctblTdFirst, borderBottom: "none" }
                      : style.ctblTdFirst
                  }
                >
                  <strong style={style.pStrong}>{row.level}</strong>
                </td>
                <td
                  style={
                    idx === tcrcLevels.length - 1
                      ? style.ctblTdLast
                      : style.ctblTd
                  }
                >
                  {row.meaning}
                </td>
                <td
                  style={
                    idx === tcrcLevels.length - 1
                      ? style.ctblTdLast
                      : style.ctblTd
                  }
                >
                  {row.context}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={style.h3}>Why $0/t is extraordinary</h3>
      <p style={style.p}>
        The 2026 TC/RC benchmark of approximately $0/t is not a negotiating
        tactic or an accounting oddity. It means Chinese smelters &mdash; which
        have collectively invested billions of dollars in processing capacity
        &mdash; are willing to refine copper concentrate for essentially no
        payment. This only makes economic sense if the alternative (sitting idle
        for lack of concentrate) is worse. It is a direct, unambiguous signal
        that mine-level copper concentrate supply is genuinely tight.
      </p>

      <p style={style.p}>
        The contrast with 2023 is stark: TC/RCs fell from $88/t to ~$0/t in
        three years. That is one of the most dramatic moves in this relatively
        obscure market&rsquo;s history. It predates the COMEX inventory spike
        &mdash; the upstream signal was flashing red before the headline numbers
        got confusing.
      </p>

      <div style={style.calloutGrn}>
        <div style={style.calloutIcon}>💡</div>
        <div>
          <p style={style.calloutTitle}>
            Why institutional copper investors watch TC/RCs above all else
          </p>
          <p style={style.calloutText}>
            Any hedge fund or physical trader with serious copper exposure
            tracks TC/RCs as a primary input. The spot copper price is noisy and
            subject to speculative positioning. TC/RCs reflect the actual
            physical economics at the mine-to-smelter interface, where the real
            commodity supply chain operates. When TC/RCs are near zero, you know
            the concentrate market is tight regardless of what COMEX warehouse
            numbers say. This signal predated the 2021&ndash;2022 copper rally
            and is now at its most extreme level on record.
          </p>
        </div>
      </div>
    </section>
  );
}
