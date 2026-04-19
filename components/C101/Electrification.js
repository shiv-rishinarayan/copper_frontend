import { useState } from "react";
import * as style from "./styles";

export default function Electrification() {
  const [hoverRow, setHoverRow] = useState(null);

  const vehicleData = [
    { type: "Battery EV (BEV)", content: "~80 kg", vs: "3.2× more copper" },
    {
      type: "Plug-in hybrid (PHEV)",
      content: "~60 kg",
      vs: "2.4× more copper",
    },
    { type: "Hybrid (HEV)", content: "~40 kg", vs: "1.6× more copper" },
    { type: "ICE vehicle (baseline)", content: "~25 kg", vs: "—" },
    { type: "Electric bus", content: "~250 kg", vs: "10× more than ICE bus" },
    {
      type: "Electric heavy truck",
      content: "~180 kg",
      vs: "6× more than diesel truck",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="electrification">
      <p style={style.secLabel}>Section 6 &middot; Demand thesis</p>
      <h2 style={style.h2}>
        The Electrification Demand Thesis &mdash; Why This Time Might Be
        Different
      </h2>

      <p style={style.p}>
        Every commodity cycle has its &ldquo;this time is different&rdquo;
        narrative. The copper electrification story has been circulating since
        at least 2018, and copper bulls have been citing it through two
        significant price corrections since then. The fact that a thesis has
        been repeated doesn&rsquo;t make it wrong &mdash; but it does mean the
        market has been partially pricing it in for years. The question
        isn&rsquo;t whether electrification will drive copper demand; it clearly
        will. The question is how much is already priced into $5.80/lb, and
        whether the demand materialises on the schedule the models assume.
      </p>

      <h3 style={style.h3}>Electric vehicles: the most analysed driver</h3>
      <p style={style.p}>
        A battery electric vehicle (BEV) uses approximately{" "}
        <strong style={style.pStrong}>80 kg (176 lbs) of copper</strong>. A
        conventional ICE vehicle uses about 25 kg. A plug-in hybrid sits at
        roughly 60 kg. The difference comes from electric motor windings,
        battery management wiring, power electronics (inverters, converters),
        high-voltage cables, and the charging port. In 2024, roughly 18 million
        BEVs were sold globally, consuming about 1.4 million tonnes of copper in
        EV applications alone &mdash; approximately 5% of total global
        production. The IEA projects EV copper demand growing to 10&ndash;12% of
        global use by 2050.
      </p>

      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Vehicle type</th>
              <th style={style.ctblTh}>Copper content</th>
              <th style={style.ctblTh}>vs ICE</th>
            </tr>
          </thead>
          <tbody>
            {vehicleData.map((row, idx) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoverRow(idx)}
                onMouseLeave={() => setHoverRow(null)}
                style={hoverRow === idx ? style.ctblTrHover : {}}
              >
                <td
                  style={
                    idx === vehicleData.length - 1
                      ? { ...style.ctblTdFirst, borderBottom: "none" }
                      : style.ctblTdFirst
                  }
                >
                  {row.type}
                </td>
                <td
                  style={
                    idx === vehicleData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTd
                  }
                >
                  {row.content}
                </td>
                <td
                  style={
                    idx === vehicleData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTd
                  }
                >
                  {row.vs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={style.h3}>Solar: larger than most models assumed</h3>
      <p style={style.p}>
        Solar PV installations require approximately{" "}
        <strong style={style.pStrong}>4&ndash;5 tonnes of copper per MW</strong>{" "}
        of capacity, primarily in wiring, inverters, transformers, and mounting
        hardware. At 2024 installation rates of roughly 450 GW/year globally,
        solar alone consumed approximately 2 million tonnes of copper &mdash;
        about 7% of global production. The IEA&rsquo;s net-zero pathway assumes
        installations rising to 650+ GW/year by 2030. One thing notably absent
        from most 2022-era copper demand models: AI data centres.
      </p>

      <h3 style={style.h3}>AI data centres: the demand nobody modelled</h3>
      <p style={style.p}>
        This is the part of the copper story that was genuinely underestimated.
        Each MW of data centre capacity requires approximately 10&ndash;15
        tonnes of copper in power distribution, cooling systems, and server
        interconnects. A large hyperscale facility running 500 MW of compute
        would contain 5,000&ndash;7,500 tonnes of copper. In 2024 alone,
        Microsoft, Google, Amazon, and Meta collectively announced over $200bn
        in data centre capital expenditure. The copper intensity of AI compute
        buildout was not in most copper demand forecasts written before 2023.
      </p>

      <div style={style.calloutCu}>
        <div style={style.calloutIcon}>⚡</div>
        <div>
          <p style={style.calloutTitle}>
            The grid is the most underappreciated copper demand driver
          </p>
          <p style={style.calloutText}>
            EVs and solar often dominate the copper conversation, but{" "}
            <strong style={style.pStrong}>
              grid modernisation and expansion
            </strong>{" "}
            is the largest copper demand driver in the electrification
            transition. The US alone needs to roughly double its transmission
            capacity to accommodate renewable energy integration and EV charging
            demand. Each km of high-voltage transmission line requires
            10&ndash;20 tonnes of copper. The global grid upgrade required by
            2040 is estimated at $21 trillion of investment. A significant share
            of that is copper wire.
          </p>
        </div>
      </div>

      <h3 style={style.h3}>The honest counter: efficiency improvements</h3>
      <p style={style.pLast}>
        The bear case for the electrification demand story is legitimate: EV
        manufacturers are already reducing copper per vehicle through improved
        motor design, using thinner gauge wire where possible, and adopting
        aluminium wiring in some non-critical circuits. The Tesla Model 3 uses
        roughly 50 kg of copper, below the 80 kg average, in part because of
        engineering optimisation. If the industry systematically reduces copper
        intensity by 20&ndash;30% through efficiency gains, the demand
        trajectory is meaningfully lower than headline numbers suggest &mdash;
        just as silver thrifting in solar panels has dampened silver demand
        growth from that sector.
      </p>
    </section>
  );
}
