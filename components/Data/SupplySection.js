import React from "react";
import * as styles from "./styles";
import MineProdChart from "./Charts/MineProductionChart";
import OreGradeChart from "./Charts/OreGradeChart";
import ExploChart from "./Charts/ExploChart";

const GlobalStyles = () => (
  <style>{`
    @keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes ld { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    @media (max-width: 1024px) {
      .g3-res { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 768px) {
      .g2-res, .g3-res { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const SupplySection = () => {
  const countryData = [
    {
      flag: "🇨🇱",
      name: "Chile",
      val: "5,300",
      share: "23.2%",
      w: "100%",
      notes:
        "Escondida (BHP), Collahuasi, El Teniente (Codelco), Quebrada Blanca (Teck)",
    },
    {
      flag: "🇨🇩",
      name: "DRC",
      val: "2,900",
      share: "12.7%",
      w: "55%",
      notes:
        "Kamoa-Kakula (Ivanhoe/Zijin), Tenke Fungurume — fastest growing region",
    },
    {
      flag: "🇵🇪",
      name: "Peru",
      val: "2,750",
      share: "12.1%",
      w: "52%",
      notes:
        "Cerro Verde (FCX), Antamina, Constancia — permits + social risk ongoing",
    },
    {
      flag: "🇨🇳",
      name: "China",
      val: "1,800",
      share: "7.9%",
      w: "34%",
      notes: "Dominant in refining (45% of global); mine output less dominant",
    },
    {
      flag: "🇷🇺",
      name: "Russia",
      val: "880",
      share: "3.9%",
      w: "17%",
      notes: "Norilsk Nickel — sanctioned; output declining",
    },
    {
      flag: "🇦🇺",
      name: "Australia",
      val: "820",
      share: "3.6%",
      w: "15%",
      notes: "Olympic Dam (BHP), Mount Isa",
    },
    {
      flag: "🇮🇩",
      name: "Indonesia",
      val: "750",
      share: "3.3%",
      w: "14%",
      notes:
        "Grasberg (FCX/PTFI) — mud-rush accident 2025; partial restart Q2 2026",
    },
    {
      flag: "🇺🇸",
      name: "United States",
      val: "720",
      share: "3.2%",
      w: "14%",
      notes: "Morenci (FCX), Bingham Canyon (Rio Tinto/Kennecott) — 70% FCX",
    },
    {
      flag: "🇿🇲",
      name: "Zambia",
      val: "780",
      share: "3.4%",
      w: "15%",
      notes: "Copper Belt revival; government-supported expansion",
    },
    {
      flag: "🌍",
      name: "Rest of world",
      val: "6,100",
      share: "26.7%",
      w: "100%",
      opacity: 0.4,
      notes: "Mexico, Kazakhstan, Mongolia (Oyu Tolgoi), Poland, Canada, etc.",
    },
  ];

  return (
    <>
      <GlobalStyles />
      <section style={{ ...styles.sec, ...styles.secAlt }} id="supply">
        <div style={styles.w} className="w-res">
          <p style={styles.slbl}>Section E · Mine supply</p>
          <h2 style={styles.stitle}>
            Copper Mine Supply: Where It Comes From & Why It’s Not Growing Fast
            Enough
          </h2>
          <p style={styles.sdesc}>
            Global mined copper output reached 22.8 million tonnes in 2024.
            Chile alone accounts for ~25% of world supply. The supply side faces
            structural problems that high prices cannot quickly fix.
          </p>

          <div className="g2-res grid grid-cols-1 lg:grid-cols-10 gap-4 gap-x-4">
            <div className="lg:col-span-5" style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>
                    USGS Mineral Commodity Summaries · ICSG · Annual
                  </p>
                  <p style={styles.ct}>
                    Global Copper Mine Production by Country
                  </p>
                  <p style={styles.cm}>
                    2024 total: 22.8 Mt · IEA projects decline to &lt;19 Mt by
                    2035
                  </p>
                </div>
                <span style={styles.bCu}>2024 data</span>
              </div>

              <MineProdChart />
              <p style={styles.csrc}>
                Source: USGS 2025 · ICSG annual reports · Free public download
              </p>
            </div>

            <div className="overflow-scroll lg:col-span-5" style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>USGS · S&P Global · Annual</p>
                  <p style={styles.ct}>Top Copper Producing Countries — 2024</p>
                </div>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={styles.dt}>
                  <thead>
                    <tr>
                      <th style={styles.dtTh}>Country</th>
                      <th style={styles.dtTh}>2024 output (kt)</th>
                      <th style={styles.dtTh}>World share</th>
                      <th style={styles.dtTh}>Key mines / notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countryData.map((c, i) => (
                      <tr key={i}>
                        <td style={styles.dtTd}>
                          <span style={{ marginRight: "8px" }}>{c.flag}</span>
                          <strong>{c.name}</strong>
                        </td>
                        <td style={{ ...styles.dtTd, ...styles.dtMono }}>
                          {c.val}
                        </td>
                        <td style={styles.dtTd}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <span style={{ minWidth: "40px" }}>{c.share}</span>
                            <div style={{ ...styles.rbar, width: "80px" }}>
                              <div
                                style={{
                                  ...styles.rbarFill,
                                  width: c.w,
                                  opacity: c.opacity || 1,
                                }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td style={{ ...styles.dtTd, fontSize: "11px" }}>
                          {c.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            style={{ ...styles.g3, ...styles.gap, marginTop: "24px" }}
            className="g3-res"
          >
            <div style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>S&P Global · ICSG · Structural trend</p>
                  <p style={styles.ct}>Ore Grade Decline</p>
                  <p style={styles.cm}>
                    Average ore grades have fallen ~40% since 1991
                  </p>
                </div>
              </div>

              <OreGradeChart />
              <div style={{ ...styles.ins, ...styles.ib, marginTop: "12px" }}>
                <div style={styles.ii}>&#x26A0;</div>
                <p style={{ ...styles.ix, fontSize: "11px" }}>
                  As mines mature, they dig into lower-grade rock. Moving more
                  ore per tonne of copper means higher energy, water, and labour
                  costs. This cost inflation is baked in regardless of
                  what&rsquo;s built next.
                </p>
              </div>
              <p style={styles.csrc}>
                Source: S&amp;P Global &middot; CRU Group &middot; Average head
                grade data &middot; Annual
              </p>
            </div>

            <div style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>Wood Mackenzie · Pipeline</p>
                  <p style={styles.ct}>Mine Development Timeline</p>
                  <p style={styles.cm}>
                    Average: 10–17 years discovery to production
                  </p>
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                <div style={styles.tlWrap}>
                  <div style={styles.tlLine} />
                  <div style={styles.tlItem}>
                    <div style={styles.tlDot}></div>
                    <p style={styles.tlYr}>Years 0 — Discovery & Exploration</p>
                    <p style={{ ...styles.tlTxt, fontSize: "12px" }}>
                      Geophysical survey, first drilling
                    </p>
                  </div>
                  <div style={styles.tlItem}>
                    <div style={styles.tlDot}></div>
                    <p style={styles.tlYr}>Years 1-5 — Exploration</p>
                    <p style={{ ...styles.tlTxt, fontSize: "12px" }}>
                      Resource definition drilling; feasibility study;
                      environmental impact assessment
                    </p>
                  </div>
                  <div style={styles.tlItem}>
                    <div style={styles.tlDot}></div>
                    <p style={styles.tlYr}>Years 5–10 — Permitting</p>
                    <p style={{ ...styles.tlTxt, fontSize: "12px" }}>
                      Community consultation; government approvals; financing.
                      Chile/Peru add 3–7 years. Cobre Panama: permitted in 2023,
                      shut 3 months later by court order.
                    </p>
                  </div>
                  <div style={styles.tlItem}>
                    <div style={styles.tlDot}></div>
                    <p style={styles.tlYr}>Years 10–17 — Construction</p>
                    <p style={{ ...styles.tlTxt, fontSize: "12px" }}>
                      Capital deployment ($3–20bn), civil works, mill
                      construction, tailings facility .
                    </p>
                  </div>
                  <div style={styles.tlItem}>
                    <div
                      style={{ ...styles.tlDot, background: styles.tokens.grn }}
                    ></div>
                    <p style={{ ...styles.tlYr, color: styles.tokens.grn }}>
                      Year 15+ — First Copper
                    </p>
                    <p style={{ ...styles.tlTxt, fontSize: "12px" }}>
                      Mine ramp-up to full capacity. Any copper needed before
                      2035 must come from existing deposits already in
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>BloombergNEF · IEA · Structural gap</p>
                  <p style={styles.ct}>Exploration Spending</p>
                  <p style={styles.cm}>
                    Capital for new copper exploration peaked in 2013 at $26bn;
                    fell to $14bn by 2022
                  </p>
                </div>
              </div>

              <ExploChart />
              <div style={{ ...styles.ins, ...styles.ib, marginTop: "12px" }}>
                <div style={styles.ii}>📉</div>
                <p style={{ ...styles.ix, fontSize: "11px" }}>
                  A decade of underinvestment means the project pipeline for the
                  2030s is thin. Without major new projects receiving
                  construction approval by 2027, production cannot respond to
                  the deficit the IEA projects. High copper prices today are
                  creating incentives, but the 15-year lag means relief is years
                  away.
                </p>
              </div>
              <p style={styles.csrc}>
                Source: S&amp;P Global Market Intelligence exploration trends
                &middot; Annual &middot; Public research
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupplySection;
