import { useState } from "react";
import * as style from "./styles";

export default function CopperPriceUnits() {
  const [hoverRow, setHoverRow] = useState(null);

  const tableData = [
    {
      form: "Grade A cathode",
      purity: "99.99%",
      price: "Benchmark (LME price)",
      use: "Wire mills, fabricators",
    },
    {
      form: "Copper wire rod",
      purity: "99.9%+",
      price: "+5–15% (fabrication premium)",
      use: "Cable, winding wire",
    },
    {
      form: "Copper tube/pipe",
      purity: "99.9%+",
      price: "+20–40% (forming cost)",
      use: "Plumbing, HVAC, heat exchangers",
    },
    {
      form: "Copper concentrate",
      purity: "25–30%",
      price: "− TC/RC (smelter processes it)",
      use: "Shipped to smelters",
    },
    {
      form: "Copper blister",
      purity: "98–99%",
      price: "LME minus refining charge",
      use: "Intermediate product for refining",
    },
    {
      form: "Scrap #1 bare bright",
      purity: "~99.9%",
      price: "~95–97% of LME cathode",
      use: "Wire and cable recycling",
    },
    {
      form: "Scrap #2 copper",
      purity: "~94–96%",
      price: "~88–93% of LME cathode",
      use: "Alloys, lower-grade applications",
    },
  ];

  return (
    <section
      className="mx-3 2xl:mx-32"
      style={style.sec}
      id="copper-price-units"
    >
      <p style={style.secLabel}>Section 3 &middot; Price reference</p>
      <h2 style={style.h2}>
        Copper Price Per Pound, Per Tonne, Per Kilogram Today
      </h2>

      <div style={style.statBand}>
        <div style={style.stat}>
          <p style={{ ...style.statVal, ...style.cuTxt }}>$5.80</p>
          <p style={style.statLbl}>Per pound</p>
          <p style={style.statSub}>COMEX HG spot</p>
        </div>
        <div style={style.stat}>
          <p style={style.statVal}>$12,787</p>
          <p style={style.statLbl}>Per tonne</p>
          <p style={style.statSub}>LME 3-month</p>
        </div>
        <div style={style.stat}>
          <p style={style.statVal}>$12.79</p>
          <p style={style.statLbl}>Per kilogram</p>
          <p style={style.statSub}>Refined cathode</p>
        </div>
        <div style={style.stat}>
          <p style={{ ...style.statVal, ...style.redTxt }}>-12%</p>
          <p style={style.statLbl}>From ATH</p>
          <p style={style.statSub}>ATH $6.61 Jan 29</p>
        </div>
      </div>

      <p style={style.p}>
        Copper pricing varies by product form and purity. The prices above are
        for <strong style={style.pStrong}>Grade A copper cathode</strong>{" "}
        &mdash; 99.99% pure, the LME delivery standard and the starting material
        for wire mills and fabricators. Downstream products trade at premiums or
        discounts reflecting fabrication costs, geography, and form factor.
      </p>

      <div style={style.tblWrap}>
        <table style={style.ctbl}>
          <thead>
            <tr>
              <th style={style.ctblTh}>Product form</th>
              <th style={style.ctblTh}>Purity</th>
              <th style={style.ctblTh}>Typical price vs cathode</th>
              <th style={style.ctblTh}>End use</th>
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
                  {row.form}
                </td>
                <td
                  style={
                    idx === tableData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTd
                  }
                >
                  {row.purity}
                </td>
                <td
                  style={
                    idx === tableData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTd
                  }
                >
                  {row.price}
                </td>
                <td
                  style={
                    idx === tableData.length - 1
                      ? style.ctblTdLast
                      : style.ctblTd
                  }
                >
                  {row.use}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
