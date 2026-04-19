import { useState } from "react";
import * as style from "./styles";

export default function SupplyCrisis() {
  const [hoverRow, setHoverRow] = useState(null);

  const mineData = [
    {
      mine: "Cobre Panama (First Quantum, Panama)",
      cap: "270",
      status: "Closed Nov 2023 — court-ordered. No restart timeline.",
    },
    {
      mine: "Grasberg (FCX, Indonesia)",
      cap: "650+",
      status:
        "Operating but transition to underground delayed; Q4 2025 disruption elevated AISC",
    },
    {
      mine: "Tia Maria (SCCO, Peru)",
      cap: "120",
      status:
        "Permitted but construction blocked by community protests since 2019",
    },
    {
      mine: "Resolution (Rio Tinto, USA)",
      cap: "40+ (projected)",
      status: "Congressional land swap required; blocked since 2021",
    },
    {
      mine: "Reko Diq (Barrick, Pakistan)",
      cap: "200+ (projected)",
      status: "Under development; history of expropriation risk in region",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="supply-crisis">
      <p style={style.secLabel}>Section 7 &middot; Supply constraints</p>
      <h2 style={style.h2}>
        The Supply Crisis &mdash; Why High Prices Can&rsquo;t Easily Fix This
      </h2>

      <p style={style.p}>
        Copper defies the normal commodity logic: high prices should attract
        capital, capital builds mines, supply rises, prices fall. In copper,
        that chain breaks down at almost every link. Understanding where and why
        is the whole supply thesis.
      </p>

      <h3 style={style.h3}>Problem 1: Ore grade decline is irreversible</h3>
      <p style={style.p}>
        The average grade of copper ore being processed globally has fallen from
        approximately 1.18% copper by weight in 1991 to around{" "}
        <strong style={style.pStrong}>0.68% today</strong> &mdash; a 42% decline
        over 35 years. This isn&rsquo;t sloppy mining practice. It reflects a
        fundamental physical reality: the highest-grade deposits were found and
        mined first. Geologists have been systematically discovering and
        developing copper deposits for over a century. The rich, near-surface,
        easy-to-process ones are largely gone.
      </p>

      <p style={style.p}>
        A mine processing ore at 1.18% produces 11.8 kg of copper per tonne of
        rock. At 0.68%, it produces 6.8 kg. The same mine processes the same
        amount of rock for less output. Every year, as average grades decline,
        existing mines produce less copper from the same amount of processing
        &mdash; requiring more energy, water, and capital just to maintain
        production levels.
      </p>

      <h3 style={style.h3}>Problem 2: Lead times are 10&ndash;17 years</h3>
      <p style={style.p}>
        From discovery to first production, a new copper mine takes 10&ndash;17
        years. This isn&rsquo;t bureaucratic delay (though that&rsquo;s part of
        it) &mdash; it&rsquo;s the physical reality of exploration, feasibility
        studies, environmental permitting, financing, engineering, construction,
        and ramp-up. No copper price, however high, can compress this timeline
        significantly. The mines that will produce copper in 2030 are mines that
        were discovered and permitted by approximately 2015. The pipeline is
        known; it&rsquo;s not large enough to match demand growth projections.
      </p>

      <h3 style={style.h3}>Problem 3: Social and geopolitical risk</h3>
      <p style={style.p}>
        Cobre Panama is the clearest recent example. In November 2023, a
        perfectly operational 270,000-tonne/year mine was shut by government
        order following protests, with no restart date. This category of risk
        &mdash; community opposition, licence revocation, resource nationalism
        &mdash; is growing, not shrinking. Large copper deposits are
        increasingly located in regions with complex political environments: the
        DRC, Peru, Chile, Zambia, Indonesia.
      </p>

      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Mine / Region</th>
              <th style={style.ctblTh}>Capacity (kt/yr)</th>
              <th style={style.ctblTh}>Status / Issue</th>
            </tr>
          </thead>
          <tbody>
            {mineData.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoverRow(idx)}
                onMouseLeave={() => setHoverRow(null)}
                style={hoverRow === idx ? style.ctblTrHover : {}}
              >
                <td
                  style={
                    idx === mineData.length - 1
                      ? { ...style.ctblTdFirst, borderBottom: "none" }
                      : style.ctblTdFirst
                  }
                >
                  {row.mine}
                </td>
                <td
                  style={
                    idx === mineData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTd
                  }
                >
                  {row.cap}
                </td>
                <td
                  style={
                    idx === mineData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTd
                  }
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={style.h3}>Problem 4: The byproduct constraint</h3>
      <p style={style.p}>
        Unlike gold, where roughly 70% of supply comes from primary gold mines
        that can ramp production when the price justifies it, approximately{" "}
        <strong style={style.pStrong}>
          20% of global copper supply is extracted as a byproduct
        </strong>{" "}
        of other mining operations. These mines aren&rsquo;t optimising for
        copper; production is a function of their primary ore economics (like
        molybdenum or gold). When copper prices rise, they don&rsquo;t drill
        more holes unless the primary metal economics also justify it.
      </p>

      <h3 style={style.h3}>What IEA actually projects</h3>
      <p style={style.p}>
        The International Energy Agency&rsquo;s{" "}
        <em style={style.em}>Critical Minerals Outlook 2025</em> projects that
        under a Net Zero Emissions by 2050 scenario, copper demand would reach
        approximately{" "}
        <strong style={style.pStrong}>35 million tonnes by 2035</strong>,
        against projected mine supply of approximately 24 million tonnes &mdash;
        a <strong style={style.pStrong}>30% gap</strong>. BloombergNEF&rsquo;s{" "}
        <em style={style.em}>Transition Metals Outlook</em> estimates a
        cumulative shortfall of 19 million tonnes by 2050.
      </p>

      <p style={style.pLast}>
        The important caveat: all of these projections assume the energy
        transition proceeds at the pace implied by current policy commitments.
        If EV adoption slows, if solar build rates plateau, or if demand
        reduction from efficiency gains is larger than modelled &mdash; the
        deficit narrows. The supply constraints are structural; the demand
        projections are scenarios, not certainties.
      </p>
    </section>
  );
}
