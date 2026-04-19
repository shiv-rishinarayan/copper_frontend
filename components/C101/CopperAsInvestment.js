import { useState } from "react";
import * as style from "./styles";

export default function CopperAsInvestment() {
  const [activeTab, setActiveTab] = useState("bull");

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="good-investment">
      <p style={style.secLabel}>Section 13 &middot; Investment case</p>
      <h2 style={style.h2}>
        Is Copper a Good Investment in 2026? Both Sides, Fairly
      </h2>

      <p style={style.p}>
        Copper has entered a period of extreme volatility. After hitting an
        all-time high of $6.61/lb in late January 2026, it has pulled back to
        $5.80/lb as of April. The structural story remains intact, but the
        short-term landscape is a minefield of geopolitical and trade risks.
      </p>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setActiveTab("bull")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "bull" ? "#065F46" : "#E5E7EB",
            color: activeTab === "bull" ? "white" : "#374151",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          The Bull Case
        </button>
        <button
          onClick={() => setActiveTab("bear")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "bear" ? "#991B1B" : "#E5E7EB",
            color: activeTab === "bear" ? "white" : "#374151",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          The Bear Case
        </button>
      </div>

      {activeTab === "bull" ? (
        <div style={{ animation: "fadeIn 0.3s" }}>
          <p style={style.p}>
            <strong style={style.pStrong}>
              1. Structural Deficits are Hard-Coded:
            </strong>{" "}
            The IEA and S&P Global forecast a "structurally unmanageable" gap,
            with demand potentially hitting 42 Mt by 2040 while supply struggles
            to cross 30 Mt. The 17-year average lead time for new mines means
            this gap can't be closed by a simple price spike.
          </p>
          <p style={style.p}>
            <strong style={style.pStrong}>2. AI and Data Centers:</strong> While
            EVs are the primary driver, AI infrastructure has emerged as a major
            secondary vector. A single megawatt of AI data center capacity
            requires up to 47 tons of copper. JPMorgan estimates AI could add
            110,000 tons of demand by the end of 2026 alone.
          </p>
          <p style={style.p}>
            <strong style={style.pStrong}>3. The $0/t Benchmark:</strong> As of
            April 17, 2026, the annual TC/RC benchmark settled at $0/t. This is
            a definitive physical signal that smelters are desperate for ore,
            prioritizing keeping their multi-billion dollar plants running over
            immediate processing profits.
          </p>
        </div>
      ) : (
        <div style={{ animation: "fadeIn 0.3s" }}>
          <p style={style.p}>
            <strong style={style.pStrong}>
              1. The "Dr. Copper" Recession Risk:
            </strong>{" "}
            Copper is a cyclical beast. If high interest rates finally trigger a
            global recession in late 2026, copper will fall 30-50% regardless of
            the long-term EV story. It is a growth bet, not a safe haven like
            gold.
          </p>
          <p style={style.p}>
            <strong style={style.pStrong}>
              2. Section 232 Tariff Whiplash:
            </strong>{" "}
            The April 6, 2026 implementation of 50% tariffs on many copper
            articles has front-loaded demand. If this leads to a trade war that
            slows global manufacturing, the "pre-tariff" inventory build-up (now
            over 590,000 tonnes in the US) could become a massive drag on
            prices.
          </p>
          <p style={style.p}>
            <strong style={style.pStrong}>3. China's Property Drag:</strong>{" "}
            While China's grid investment is surging (targeted at 4 trillion
            yuan through 2030), its property sector remains weak. If the
            government fails to manage this transition, the resulting credit
            contraction could outweigh the gains from renewable energy.
          </p>
        </div>
      )}

      <div style={style.calloutCu}>
        <div style={style.calloutIcon}>📍</div>
        <div>
          <p style={style.calloutTitle}>Where this leaves a 2026 investor</p>
          <p style={style.calloutText}>
            The long-term case is among the most compelling in the commodity
            world, but the "entry price" matters. Most institutional portfolios
            maintain a 3&ndash;5% allocation to copper (often via COPX) as a
            hedge against the energy transition's material requirements.
            However, investors should be prepared for violent pullbacks; as Jan
            2026 proved, even a "perfect" fundamental story can be derailed by
            speculative positioning and geopolitical shockwaves.
          </p>
        </div>
      </div>
    </section>
  );
}
