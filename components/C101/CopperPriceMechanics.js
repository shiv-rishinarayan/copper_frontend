import { useState } from "react";
import * as style from "./styles";

export default function CopperPriceMechanics() {
  const [hoverRow, setHoverRow] = useState(null);

  return (
    <section className="mx-3 2xl:mx-32 " style={style.sec} id="how-price-works">
      <p style={style.secLabel}>Section 2 &middot; Price mechanics</p>
      <h2 style={style.h2}>How the Copper Price Works</h2>

      <p style={style.p}>
        Copper trades on two main exchanges with different pricing conventions
        that matter in 2026 more than usual, because the gap between them has
        become a market story in itself.
      </p>

      <h3 style={style.h3}>COMEX (HG) &mdash; the North American benchmark</h3>
      <p style={style.p}>
        COMEX (symbol: HG) quotes copper in{" "}
        <strong style={style.pStrong}>US cents per pound</strong>. Each standard
        contract represents 25,000 pounds of Grade 1 electrolytic copper cathode
        &mdash; about 11.34 metric tonnes. At $5.80/lb, one full contract has a
        notional value of $145,000. COMEX trading runs 23 hours a day, Sunday
        through Friday. E-mini contracts (QC) represent 12,500 lbs; Micro copper
        futures are 2,500 lbs. North American wire mills, tube manufacturers,
        and scrap dealers all price against HG.
      </p>

      <h3 style={style.h3}>LME &mdash; the global benchmark</h3>
      <p style={style.p}>
        The London Metal Exchange quotes copper in{" "}
        <strong style={style.pStrong}>US dollars per metric tonne</strong>. The
        3-month forward contract is the primary benchmark. Contracts are 25
        tonnes per lot. The LME sets official prices twice daily through
        open-outcry ring trading in London at 12:30 pm GMT. These official
        settlement prices determine the physical delivery price for most global
        copper contracts &mdash; meaning the Chinese smelter selling refined
        copper to a Japanese cable manufacturer prices against the LME, not
        COMEX.
      </p>

      <p style={style.p}>
        To convert: multiply per-pound price &times; 2,204.62 = per-tonne price.
        At $5.80/lb: $5.80 &times; 2,204.62 = $12,787/t. The two exchanges
        should price the same metal at equivalent rates &mdash; and mostly they
        do. When they don&rsquo;t, it&rsquo;s usually a story.
      </p>

      <div style={style.calloutWarn}>
        <div style={style.calloutIcon}>⚠️</div>
        <div>
          <p style={style.calloutTitle}>The 2026 COMEX&ndash;LME spread</p>
          <p style={style.calloutText}>
            In late 2025 and early 2026, the COMEX copper price traded at an
            unusual premium to the LME &mdash; at points exceeding $1,000/t,
            versus the normal ~$50&ndash;100/t differential. This wasn&rsquo;t a
            change in underlying copper value. It was traders physically moving
            copper from LME and SHFE warehouses in Europe and Asia to
            COMEX-approved warehouses in the United States ahead of anticipated
            Section 232 tariffs. Understanding this distinction &mdash;
            geographic price distortion vs genuine supply shortage &mdash; is
            essential for reading 2026 copper data correctly.
          </p>
        </div>
      </div>

      <h3 style={style.h3}>The copper price in different units</h3>
      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Unit</th>
              <th style={style.ctblTh}>At $5.80/lb</th>
              <th style={style.ctblTh}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                unit: "Per pound (COMEX)",
                val: "$5.80",
                note: "Primary US quoting unit",
              },
              {
                unit: "Per metric tonne (LME)",
                val: "$12,787",
                note: "Primary global quoting unit",
              },
              {
                unit: "Per kilogram",
                val: "$12.79",
                note: "Divide per-tonne by 1,000",
              },
              {
                unit: "Per gram",
                val: "$0.01279",
                note: "Used in electronics/precision contexts",
              },
              {
                unit: "Per short ton (2,000 lbs)",
                val: "$11,600",
                note: "Some US scrap pricing",
              },
              {
                unit: "Per troy ounce",
                val: "$0.18",
                note: "Rarely used; contrast with silver at $73",
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
                  {row.unit}
                </td>
                <td
                  style={
                    idx === arr.length - 1
                      ? {
                          ...style.ctblTd,
                          borderBottom: "none",
                          fontWeight: 700,
                        }
                      : { ...style.ctblTd, fontWeight: 700 }
                  }
                >
                  {row.val}
                </td>
                <td
                  style={
                    idx === arr.length - 1 ? style.ctblTdLast : style.ctblTd
                  }
                >
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
