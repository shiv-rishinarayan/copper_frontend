import { useState } from "react";
import * as style from "./styles";

export default function MonitorSignals() {
  const [activeSignal, setActiveSignal] = useState(null);

  const signals = [
    {
      id: 1,
      title: "1. TC/RCs — The Upstream Pulse",
      status: "CRITICAL",
      desc: "Smelter fees (TC/RCs) settled at $0/t for the 2026 annual benchmark. This is an unprecedented signal of extreme concentrate tightness. If these stay near zero or remain negative in the spot market, the 'supply crunch' is fact, not theory.",
      icon: "🧪",
    },
    {
      id: 2,
      title: "2. The Section 232 Tariff Impact",
      status: "ACTIVE",
      desc: "As of April 6, 2026, new 50% tariffs on refined copper articles took effect. This validated the massive stockpiling on COMEX. Watch for 'privileged foreign status' entries in US Foreign Trade Zones; if these inventories don't draw down, the price premium may have peaked.",
      icon: "🛡️",
    },
    {
      id: 3,
      title: "3. COMEX vs. LME Divergence",
      status: "SKEWED",
      desc: "COMEX inventories hit record highs (~457kt) while LME stocks contracted nearly 60% year-over-year. This extreme geographic imbalance creates 'operational fragility.' A normalization (COMEX down, LME up) would signal the end of the US-centric price spike.",
      icon: "⚖️",
    },
    {
      id: 4,
      title: "4. Chinese Manufacturing PMI",
      status: "REBOUNDING",
      desc: "March 2026 data showed the official PMI rebounding to 50.4, though the private Caixin index dipped to 50.8. Since China consumes over 50% of the world's copper, sustained prints above 50 are required to support prices above $5.50/lb.",
      icon: "🏭",
    },
    {
      id: 5,
      title: "5. The Copper/Gold Ratio",
      status: "RISING",
      desc: "With copper near $6.10/lb and gold at $4,833/oz (April 2026), the ratio is trending higher. This suggests industrial optimism is currently outweighing safe-haven fear. A sharp reversal here often precedes a broader market correction.",
      icon: "📊",
    },
    {
      id: 6,
      title: "6. Kamoa-Kakula Phase 3 Ramp",
      status: "WATCHING",
      desc: "Ivanhoe Mines targets 380kt–420kt for 2026. However, short-term guidance was recently 'reset' due to mine design exclusions. Any further downgrades in quarterly reports will directly fuel the bull case for a structural deficit.",
      icon: "⛏️",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="signals">
      <p style={style.secLabel}>Section 18 &middot; What to watch</p>
      <h2 style={style.h2}>The Six Most Informative Copper Signals</h2>

      <p style={style.p}>
        In a market defined by geopolitical friction and electrification, these
        six metrics provide the highest signal-to-noise ratio for 2026.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          margin: "24px 0",
        }}
      >
        {signals.map((s) => (
          <div
            key={s.id}
            onClick={() => setActiveSignal(activeSignal === s.id ? null : s.id)}
            style={{
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              backgroundColor: activeSignal === s.id ? "#F9FAFB" : "white",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span style={{ fontSize: "20px" }}>{s.icon}</span>
                <strong style={{ fontSize: "16px", color: "#111827" }}>
                  {s.title}
                </strong>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  backgroundColor:
                    s.status === "CRITICAL" ? "#FEE2E2" : "#E0F2FE",
                  color: s.status === "CRITICAL" ? "#991B1B" : "#0369A1",
                }}
              >
                {s.status}
              </span>
            </div>
            {activeSignal === s.id && (
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "14px",
                  color: "#4B5563",
                  lineHeight: "1.5",
                  animation: "fadeIn 0.2s",
                }}
              >
                {s.desc}
              </p>
            )}
          </div>
        ))}
      </div>

      <div style={style.calloutCu}>
        <div style={style.calloutIcon}>💡</div>
        <div>
          <p style={style.calloutTitle}>Analyst Note</p>
          <p style={style.calloutText}>
            The most immediate binary risk is no longer the "decision" of
            tariffs (which are now law) but the{" "}
            <strong style={style.pStrong}>implementation efficacy</strong>. If
            the US grid can't source enough non-tariffed copper, look for
            emergency exemptions to trigger the next major price swing.
          </p>
        </div>
      </div>
    </section>
  );
}
