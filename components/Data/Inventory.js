import React from "react";
import * as styles from "./styles";

const GlobalStyles = () => (
  <style>{`
    @keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes ld { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    @media (max-width: 1024px) {
      .inv-strip-res { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 768px) {
      .g2-res { grid-template-columns: 1fr !important; }
    }
    @media (max-width: 480px) {
      .inv-strip-res { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

const Inventory = () => {
  const invStats = [
    {
      label: "COMEX stocks",
      val: "503k t",
      sub: "All-time high · Up 5x in 12 months",
      color: "#f59e0b",
    },
    {
      label: "LME stocks",
      val: "68k t",
      sub: "8-year low · Down from 256k in Jan 2025",
      color: "#f44336",
    },
    {
      label: "SHFE stocks",
      val: "89k t",
      sub: "Seasonal · Normal range for Q1",
      color: "rgba(255, 255, 255, 0.8)",
    },
    {
      label: "Combined visible",
      val: "660k t",
      sub: "Highest since 2003 (was <400k in mid-2025)",
      color: "#4caf50",
    },
  ];

  const tableData = [
    {
      name: "COMEX (New York)",
      cur: "503",
      old: "89",
      chg: "+469%",
      pct: "76%",
      why: "Tariff front-loading; 44 straight days net inflow Jan 2026",
      color: "#f59e0b",
      up: true,
    },
    {
      name: "LME (London)",
      cur: "68",
      old: "256",
      chg: "-73%",
      pct: "10%",
      why: "Metal pulled to US; genuine physical tightness in rest-of-world",
      color: "#f44336",
      up: false,
    },
    {
      name: "SHFE (Shanghai)",
      cur: "89",
      old: "102",
      chg: "-13%",
      pct: "14%",
      why: "Seasonal Q1 build; China demand cautious; spot premiums near discount",
      up: false,
    },
    {
      name: "Combined visible",
      cur: "660",
      old: "447",
      chg: "+48%",
      pct: "100%",
      why: "Highest combined since 2003 — but geographically concentrated in US",
      color: "#4caf50",
      up: true,
    },
  ];

  return (
    <>
      <GlobalStyles />
      <section style={{ ...styles.sec, ...styles.secDark }} id="inventory">
        <div style={styles.w} className="w-res">
          <p style={{ ...styles.slbl, ...styles.slblDark }}>
            Section B · Exchange inventories
          </p>
          <h2 style={{ ...styles.stitle, ...styles.stitleDark }}>
            The Inventory Paradox: COMEX vs LME vs SHFE
          </h2>
          <p style={{ ...styles.sdesc, ...styles.sdescDark }}>
            Combined visible copper stocks across the three major exchanges
            exceeded 1 million tonnes in early 2026 — the highest since 2003.
            But location matters: most of it is stuck in the US, locked in ahead
            of potential tariffs. The LME is at 8-year lows.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: styles.tokens.rl,
              overflow: "hidden",
              marginBottom: "24px",
            }}
            className="inv-strip-res"
          >
            {invStats.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "18px 20px",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(255, 255, 255, 0.35)",
                    marginBottom: "5px",
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: "22px",
                    color: s.color,
                    marginBottom: "3px",
                  }}
                >
                  {s.val}
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    color: "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>

          <div style={{ ...styles.g2, ...styles.gap }} className="g2-res">
            <div style={styles.cbd}>
              <div style={styles.ch}>
                <div>
                  <p style={{ ...styles.cl, ...styles.clDark }}>
                    CME Group daily XLS · LME daily report
                  </p>
                  <p style={{ ...styles.ct, ...styles.ctDark }}>
                    COMEX vs LME Inventory — 2024–2026
                  </p>
                  <p style={{ ...styles.cm, ...styles.cmDark }}>
                    The great divergence: US stocks surge, London depletes
                  </p>
                </div>
                <span style={{ ...styles.bdg, ...styles.bWarn, flexShrink: 0 }}>
                  Tariff distortion
                </span>
              </div>
              <canvas
                id="inventoryChart"
                height="220"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "8px",
                }}
              ></canvas>
              <p style={{ ...styles.csrc, ...styles.csrcDark }}>
                Source: CME Group daily warehouse report + LME daily stock
                report
              </p>
            </div>

            <div style={styles.cbd}>
              <div style={styles.ch}>
                <div>
                  <p style={{ ...styles.cl, ...styles.clDark }}>
                    CME Group · Registered vs eligible
                  </p>
                  <p style={{ ...styles.ct, ...styles.ctDark }}>
                    COMEX Copper: Registered vs Eligible Stocks
                  </p>
                  <p style={{ ...styles.cm, ...styles.cmDark }}>
                    Registered = deliverable · Eligible = stored, not warranted
                  </p>
                </div>
              </div>
              <canvas
                id="regEligChart"
                height="220"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "8px",
                }}
              ></canvas>
              <p style={{ ...styles.csrc, ...styles.csrcDark }}>
                Source: CME Group COMEX daily copper warehouse report
              </p>
            </div>
          </div>

          <div style={{ ...styles.ins, ...styles.ig, marginBottom: "18px" }}>
            <div style={styles.ii}>💡</div>
            <div>
              <p style={{ ...styles.it, ...styles.itDark }}>
                What the “Inventory Paradox” means
              </p>
              <p style={{ ...styles.ix, ...styles.ixDark }}>
                Metal is being <em>relocated</em>, not destroyed. Traders
                front-loaded copper into US warehouses ahead of anticipated
                Trump tariffs. Watch for COMEX inventory drain as a key signal:
                if it starts falling from 503k, it means physical consumption is
                absorbing the stockpile.
              </p>
            </div>
          </div>

          <div style={styles.cbd}>
            <div style={styles.ch}>
              <div>
                <p style={{ ...styles.cl, ...styles.clDark }}>
                  CME · LME · SHFE · Daily public data
                </p>
                <p style={{ ...styles.ct, ...styles.ctDark }}>
                  Exchange Inventory Comparison Table
                </p>
                <p style={{ ...styles.cm, ...styles.cmDark }}>
                  Current vs year ago comparison
                </p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={styles.dt}>
                <thead>
                  <tr>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      Exchange
                    </th>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      Current (kt)
                    </th>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      Year ago (kt)
                    </th>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      Change
                    </th>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      % of total
                    </th>
                    <th style={{ ...styles.dtTh, ...styles.dtThDark }}>
                      Why it moved
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) => (
                    <tr key={i}>
                      <td style={{ ...styles.dtTd, ...styles.dtTdDark }}>
                        <strong>{row.name}</strong>
                      </td>
                      <td
                        style={{
                          ...styles.dtTd,
                          ...styles.dtTdDark,
                          ...styles.dtMono,
                          color: row.color,
                        }}
                      >
                        {row.cur}
                      </td>
                      <td
                        style={{
                          ...styles.dtTd,
                          ...styles.dtTdDark,
                          ...styles.dtMono,
                        }}
                      >
                        {row.old}
                      </td>
                      <td
                        style={{
                          ...styles.dtTd,
                          ...styles.dtTdDark,
                          ...styles.dtMono,
                          ...(row.up ? styles.up : styles.dn),
                        }}
                      >
                        {row.chg}
                      </td>
                      <td
                        style={{
                          ...styles.dtTd,
                          ...styles.dtTdDark,
                          ...styles.dtMono,
                        }}
                      >
                        {row.pct}
                      </td>
                      <td
                        style={{
                          ...styles.dtTd,
                          ...styles.dtTdDark,
                          fontSize: "11px",
                        }}
                      >
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inventory;
