import React from "react";
import * as styles from "./styles";
import DemandDonutChart from "./Charts/DemandDonutChart";
import DemandTrendChart from "./Charts/DemandTrendChart";
import ChinaChart from "./Charts/ChinaChart";
import DemandForecastChart from "./Charts/DemandForecastChart";

const GlobalStyles = () => (
  <style>{`
    @keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes ld { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    @media (max-width: 1024px) {
      .g2-res { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const DemandSection = () => {
  const intensityData = [
    {
      tech: "Battery EV (BEV)",
      qty: "~80 kg/v",
      vs: "3–4× more",
      scale: "18M units/yr",
      use: "Motor windings, battery wiring, charging",
      up: true,
    },
    {
      tech: "Plug-in hybrid (PHEV)",
      qty: "~60 kg/v",
      vs: "~2.5× more",
      scale: "7M units/yr",
      use: "ICE wiring + EV components",
      up: true,
    },
    {
      tech: "Internal combustion (ICE)",
      qty: "~25 kg/v",
      vs: "Baseline",
      scale: "~65M units/yr",
      use: "Wiring harness, radiator, starter",
      neu: true,
    },
    {
      tech: "Onshore wind",
      qty: "~3–4 t/MW",
      vs: ">3× vs gas",
      scale: "90 GW new",
      use: "Generator windings, transformers",
      up: true,
    },
    {
      tech: "Offshore wind",
      qty: "~8–15 t/MW",
      vs: ">8× vs gas",
      scale: "10 GW new",
      use: "Subsea cables, salt-water standards",
      up: true,
    },
    {
      tech: "Solar PV",
      qty: "~4–5 t/MW",
      vs: ">4× vs gas",
      scale: "447 GW new",
      use: "Inverters, DC cabling, mounting",
      up: true,
    },
    {
      tech: "AI data center",
      qty: "~40–60 kg/rack",
      vs: "New category",
      scale: "Exploding 2024–30",
      use: "Power (PDUs), cooling, high-speed cables",
      up: true,
    },
    {
      tech: "Grid transmission",
      qty: "~1–5 t/km",
      vs: "Legacy",
      scale: "Replacement cycle",
      use: "Aging grid needs $21tn (IEA)",
    },
    {
      tech: "Natural gas plant",
      qty: "~1 t/MW",
      vs: "Low baseline",
      scale: "Being retired",
      use: "Generator, switchgear, wiring",
      neu: true,
    },
  ];

  return (
    <>
      <GlobalStyles />
      <section style={{ ...styles.sec, ...styles.secDark }} id="demand">
        <div style={styles.w} className="w-res">
          <p style={{ ...styles.slbl, ...styles.slblDark }}>
            Section F · Demand by sector
          </p>
          <h2 style={{ ...styles.stitle, ...styles.stitleDark }}>
            Copper Demand: Old Economy & New Economy Combined
          </h2>
          <p style={{ ...styles.sdesc, ...styles.sdescDark }}>
            Global refined copper demand reached ~27 million tonnes in 2024.
            China consumes over 50% of global supply. Electrification is the
            growth engine, but traditional construction remains the massive
            industrial floor.
          </p>

          <div style={{ ...styles.g2, ...styles.gap }} className="g2-res ">
            <div style={styles.cbd}>
              <div style={styles.ch}>
                <div>
                  <p style={{ ...styles.cl, ...styles.clDark }}>
                    ICSG · Wood Mackenzie · IEA · Annual
                  </p>
                  <p style={{ ...styles.ct, ...styles.ctDark }}>
                    Global Copper Demand by Sector — 2024
                  </p>
                  <p style={{ ...styles.cm, ...styles.cmDark }}>
                    Total: ~27 Mt · China: 52% · Up 4.1% in 2024
                  </p>
                </div>
              </div>
              <DemandDonutChart />
              <p style={{ ...styles.csrc, ...styles.csrcDark }}>
                Source: ICSG World Copper Factbook · Copper Alliance
              </p>
            </div>

            <div style={styles.cbd} className="">
              <div style={styles.ch}>
                <div>
                  <p style={{ ...styles.cl, ...styles.clDark }}>
                    ICSG · BloombergNEF · IEA · Annual
                  </p>
                  <p style={{ ...styles.ct, ...styles.ctDark }}>
                    Copper Demand Growth: Traditional vs Electrification{" "}
                  </p>
                  <p style={{ ...styles.cm, ...styles.cmDark }}>
                    Historical demand 2014&ndash;2024 &middot; Energy transition
                    share growing from 4% (2014) to 13% (2024)
                  </p>
                </div>
              </div>
              {/* <canvas
                id="demandTrendChart"
                height="230"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "8px",
                }}
              ></canvas> */}
              <DemandTrendChart />
              <p style={{ ...styles.csrc, ...styles.csrcDark }}>
                Source: BNEF Transition Metals Outlook 2025 · IEA
              </p>
            </div>
          </div>

          <div style={{ ...styles.cbd, ...styles.gap, marginTop: "24px" }}>
            <div style={styles.ch}>
              <div>
                <p style={{ ...styles.cl, ...styles.clDark }}>
                  IEA Critical Minerals 2025 · Key data
                </p>
                <p style={{ ...styles.ct, ...styles.ctDark }}>
                  Copper Intensity per Technology — Why Each One Matters
                </p>
                <p style={{ ...styles.cm, ...styles.cmDark }}>
                  Copper requirements vs conventional alternatives
                </p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={styles.dt}>
                <thead>
                  <tr>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      Technology
                    </th>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      Copper content
                    </th>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      vs conventional
                    </th>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      Scale in 2024
                    </th>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      Why copper-intensive
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {intensityData.map((row, i) => (
                    <tr key={i}>
                      <td style={{ ...styles.dtTd, ...styles.dtTdDark }}>
                        <strong>{row.tech}</strong>
                      </td>
                      <td
                        style={{
                          ...styles.dtTd,
                          ...styles.dtTdDark,
                          ...styles.dtMono,
                        }}
                      >
                        {row.qty}
                      </td>
                      <td
                        style={{
                          ...styles.dtTd,
                          ...styles.dtTdDark,
                          ...styles.dtMono,
                          ...(row.up ? styles.up : row.neu ? {} : styles.dn),
                        }}
                      >
                        {row.vs}
                      </td>
                      <td style={{ ...styles.dtTd, ...styles.dtTdDark }}>
                        {row.scale}
                      </td>
                      <td
                        style={{
                          ...styles.dtTd,
                          ...styles.dtTdDark,
                          fontSize: "11px",
                        }}
                      >
                        {row.use}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            style={{ ...styles.g2, ...styles.gap, marginTop: "24px" }}
            className="g2-res"
          >
            <div style={styles.cbd}>
              <div style={styles.ch}>
                <div>
                  <p style={{ ...styles.cl, ...styles.clDark }}>
                    NBS China · SHFE · Customs data
                  </p>
                  <p style={{ ...styles.ct, ...styles.ctDark }}>
                    China Copper Consumption — The 50% Story
                  </p>
                  <p style={{ ...styles.cm, ...styles.cmDark }}>
                    Property sector weakness vs grid/EV strength
                  </p>
                </div>
              </div>
              <ChinaChart />
              <div style={{ ...styles.ins, ...styles.ig, marginTop: "12px" }}>
                <div style={styles.ii}>🇨🇳</div>
                <p style={{ ...styles.ix, ...styles.ixDark }}>
                  China&rsquo;s copper demand story is a tale of two sectors.
                  Property construction (historically 30% of copper use) is
                  declining as the housing market adjusts. But state-mandated
                  grid upgrades, solar installations, and EV production are
                  growing so fast they&rsquo;re more than offsetting property
                  weakness. China&rsquo;s State Grid plans $120bn in grid
                  investment in 2026 alone. Net result: Chinese copper demand is
                  flat-to-slightly-up despite property weakness.
                </p>
              </div>
              <p style={styles.csrc}>
                Source: NBS (National Bureau of Statistics China) &middot; SHFE
                warehouse data &middot; Customs General Administration of China
                (monthly) &middot; All public, Chinese government websites
              </p>
            </div>

            <div style={styles.cbd}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>
                    IEA &middot; BloombergNEF &middot; Long-range projections
                  </p>
                  <p style={styles.ctDark}>
                    Copper Demand Forecast 2024&ndash;2035
                  </p>
                  <p style={styles.cm}>
                    Current 27 Mt &rarr; projected 33&ndash;37 Mt by 2035
                    &middot; Deficit emerges as mine supply peaks ~2028
                  </p>
                </div>
                <span
                  style={{
                    ...styles.bdg,
                    background: "rgba(184, 115, 51, 0.2)",
                    color: styles.tokens.cuL,
                    flexShrink: 0,
                  }}
                >
                  IEA STEPS
                </span>
              </div>

              <DemandForecastChart />
              <div style={{ ...styles.ins, ...styles.ig, marginTop: "12px" }}>
                <div style={styles.ii}>📈</div>
                <p style={{ ...styles.ix, ...styles.ixDark }}>
                  IEA&rsquo;s Global Critical Minerals Outlook 2025 projects a
                  30% supply deficit for copper by 2035 under current stated
                  policies. Mine output is expected to peak ~24 Mt in the late
                  2020s and then decline to below 19 Mt by 2035 as ore grades
                  erode. Even the most optimistic &ldquo;high production&rdquo;
                  case retains a 20% deficit. BloombergNEF&rsquo;s scenario:
                  structural deficit emerging from 2026 with potential 19 Mt
                  shortfall by 2050.
                </p>
              </div>
              <p style={styles.csrc}>
                Source: IEA Global Critical Minerals Outlook 2025 &middot;
                BloombergNEF Transition Metals Outlook Dec 2025 &middot; Wood
                Mackenzie &middot; ICSG
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemandSection;
