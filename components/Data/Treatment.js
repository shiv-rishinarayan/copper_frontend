import React from "react";
import * as styles from "./styles";

const GlobalStyles = () => (
  <style>{`
    @keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes ld { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    @media (max-width: 768px) {
      .g2-res { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const Treatment = () => {
  const timeline = [
    {
      yr: "2022 — TC/RC: $65/t | Normal market",
      txt: "Smelters earn healthy processing fees. Mine supply growing. Physical market balanced. No urgency to chase concentrate.",
    },
    {
      yr: "2023 — TC/RC: $88/t | Supply comfortable",
      txt: "Peak treatment charges. Miners competing to fill smelter capacity. Panama’s Cobre Panama still operating. Plentiful concentrate available.",
    },
    {
      yr: "2024 — TC/RC: $21.5/t | Tightening fast",
      txt: "Cobre Panama shut by court order. Chile and Peru output disappoints. Smelters begin fighting for material. Chinese smelters announce 10% output cuts.",
    },
    {
      yr: "2026 — TC/RC: $0/t | Structural stress",
      txt: "Some 2026 benchmark negotiations reportedly settled at $0 — meaning smelters are processing for free just to keep running. The clearest signal the pipeline is tight.",
      alert: true,
    },
  ];

  return (
    <>
      <GlobalStyles />
      <section style={{ ...styles.sec, ...styles.secAlt }} id="tcrcs">
        <div style={styles.w} className="w-res">
          <p style={styles.slbl}>Section C · Treatment & refining charges</p>
          <h2 style={styles.stitle}>
            TC/RC: The Market Signal Nobody Talks About
          </h2>
          <p style={styles.sdesc}>
            Treatment and refining charges (TC/RCs) are what smelters charge
            miners to process copper concentrate into refined metal. They are
            the most upstream physical market signal available — and right now
            they’re telling a stark story.
          </p>

          <div style={{ ...styles.g2, ...styles.gap }} className="g2-res">
            <div style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>
                    SMM / CRU · Annual benchmark negotiations · Key signal
                  </p>
                  <p style={styles.ct}>
                    Benchmark TC/RC History — 2018 to 2026
                  </p>
                  <p style={styles.cm}>
                    Annual benchmark in USD/tonne of concentrate processed ·
                    2026:{" "}
                    <strong style={{ color: styles.tokens.red }}>$0/t</strong>
                  </p>
                </div>
                <span style={{ ...styles.bdg, ...styles.bBear }}>
                  Concentrate scarce
                </span>
              </div>
              <canvas
                id="tcrcChart"
                height="200"
                style={{
                  width: "100%",
                  background: "rgba(26,26,46,0.02)",
                  borderRadius: "8px",
                }}
              ></canvas>
              <p style={styles.csrc}>
                Source: SMM annual benchmark negotiations · CRU Group ·
                Fastmarkets · Published after annual Copper-to-the-World
                conference.
              </p>
            </div>

            <div style={styles.cb}>
              <div style={styles.ch}>
                <div>
                  <p style={styles.cl}>Explained · Why it matters for price</p>
                  <p style={styles.ct}>
                    Understanding TC/RCs as a Market Signal
                  </p>
                </div>
              </div>
              <div style={{ padding: "4px 0" }}>
                <div style={styles.tlWrap}>
                  {timeline.map((item, i) => (
                    <div key={i} style={styles.tlItem}>
                      <div
                        style={{
                          ...styles.tlDot,
                          ...(item.alert
                            ? { background: styles.tokens.red }
                            : {}),
                        }}
                      ></div>
                      <p
                        style={{
                          ...styles.tlYr,
                          ...(item.alert ? { color: styles.tokens.red } : {}),
                        }}
                      >
                        {item.yr}
                      </p>
                      <p style={styles.tlTxt}>{item.txt}</p>
                    </div>
                  ))}
                </div>
                <div style={{ ...styles.ins, ...styles.ib, marginTop: "16px" }}>
                  <div style={styles.ii}>💡</div>
                  <div>
                    <p style={styles.ix}>
                      <strong>Why this matters for price:</strong> TC/RCs at
                      zero confirm that visible refined copper inventories do
                      not reflect physical abundance at the mine level. The
                      metal sitting in US warehouses was produced from
                      concentrate that was already scarce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Treatment;
