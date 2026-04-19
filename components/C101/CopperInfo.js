import { useState } from "react";
import * as style from "./styles";

export default function CopperInfo() {
  const [hoverRow, setHoverRow] = useState(null);

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="what-copper-is">
      <p style={style.secLabel}>Section 1 &middot; Foundations</p>
      <h2 style={style.h2}>
        What Copper Actually Is &mdash; and Why It Powers Everything
      </h2>

      <p style={style.p}>
        Copper has been used by humans for over 10,000 years &mdash; longer than
        any other metal except gold. A copper pendant found in what is now
        northern Iraq dates to roughly 8700 BC. The ancient Egyptians used
        copper pipe for plumbing. The Romans roofed the Pantheon with it. But
        none of that history is why copper matters for investors in 2026.
      </p>

      <p style={style.p}>
        Copper matters because of one physical property:{" "}
        <strong style={style.pStrong}>
          it is the best electrical conductor available at industrial scale.
        </strong>{" "}
        Silver conducts electricity slightly better &mdash; about 6% better
        &mdash; but costs roughly 50 times more per pound. Aluminium is cheaper
        and lighter, but conducts only 61% as well as copper and requires
        thicker wire with more complex installation. For 150 years, every
        engineer building something electrical has defaulted to copper. Nothing
        has meaningfully changed that.
      </p>

      <p style={style.p}>
        That&rsquo;s the part the electrification bulls get right. The part they
        sometimes understate: copper demand has been growing for 150 years
        already, and the mines have generally kept up. The question is whether
        the acceleration from EVs, solar, and AI data centres is genuinely
        different in magnitude from previous demand waves &mdash; or whether the
        market is pricing in a deficit that optimistic engineers and adaptive
        supply chains will find a way to partially avoid.
      </p>

      <h3 style={style.h3}>What makes copper physically special</h3>

      <p style={style.p}>
        <strong style={style.pStrong}>Electrical conductivity.</strong>{" "}
        Copper&rsquo;s electrical conductivity is 59.6 million siemens per metre
        &mdash; beaten only by silver among common metals. This isn&rsquo;t an
        abstract number; it means copper wire of a given diameter carries more
        current with less heat loss than any practical alternative. In motors,
        power lines, and electronics, efficiency losses translate directly into
        energy costs and heat management problems.
      </p>

      <p style={style.p}>
        <strong style={style.pStrong}>Thermal conductivity.</strong> Copper also
        conducts heat exceptionally well (401 W/m&middot;K, second only to
        silver). This matters in heat exchangers, HVAC systems, and the cooling
        circuits inside data centres &mdash; a sector that is becoming one of
        the largest new copper demand drivers as AI compute density increases.
      </p>

      <p style={style.p}>
        <strong style={style.pStrong}>
          Ductility and corrosion resistance.
        </strong>{" "}
        Copper can be drawn into wire thinner than a human hair without
        breaking, soldered reliably, and will last decades in corrosive
        environments with minimal maintenance. There is no comparable
        combination of properties at copper&rsquo;s price point.
      </p>

      <h3 style={style.h3}>Who actually uses copper</h3>

      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>End use</th>
              <th style={style.ctblTh}>Share of demand</th>
              <th style={style.ctblTh}>Primary applications</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                use: "Electrical equipment",
                share: "~32%",
                app: "Power cables, transformers, motors, generators",
              },
              {
                use: "Construction",
                share: "~26%",
                app: "Plumbing, roofing, HVAC, wiring in buildings",
              },
              {
                use: "Transport",
                share: "~13%",
                app: "Vehicles (ICE and EV), railways, ships",
              },
              {
                use: "Industrial machinery",
                share: "~12%",
                app: "Bearings, heat exchangers, industrial processes",
              },
              {
                use: "Consumer electronics",
                share: "~9%",
                app: "Circuit boards, connectors, semiconductors",
              },
              {
                use: "Other",
                share: "~8%",
                app: "Defence, medical, telecommunications",
              },
            ].map((row, idx, arr) => (
              <tr
                key={idx}
                onMouseEnter={() => setHoverRow(idx)}
                onMouseLeave={() => setHoverRow(null)}
                style={hoverRow === idx ? style.ctblTrHover : {}}
              >
                <td
                  style={
                    idx === arr.length - 1
                      ? { ...style.ctblTdFirst, borderBottom: "none" }
                      : style.ctblTdFirst
                  }
                >
                  {row.use}
                </td>
                <td
                  style={
                    idx === arr.length - 1 ? style.ctblTdLast : style.ctblTd
                  }
                >
                  {row.share}
                </td>
                <td
                  style={
                    idx === arr.length - 1 ? style.ctblTdLast : style.ctblTd
                  }
                >
                  {row.app}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={style.pLast}>
        Notice that EVs and solar &mdash; the electrification thesis &mdash; are
        currently a fraction of the transport and electrical equipment
        categories. The bull case is that their share grows dramatically over
        the next decade. The bear case is that efficiency gains and material
        substitution dampen the growth rate of total copper intensity even as
        unit counts rise.
      </p>
    </section>
  );
}
