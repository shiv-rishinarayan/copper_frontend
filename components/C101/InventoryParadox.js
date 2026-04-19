import * as style from "./styles";

export default function InventoryParadox() {

  return (
    <section
      className="mx-3 2xl:mx-32"
      style={style.sec}
      id="inventory-paradox"
    >
      <p style={style.secLabel}>Section 8 &middot; Market structure</p>
      <h2 style={style.h2}>
        The 2026 Inventory Paradox: Why the Headlines Are Misleading
      </h2>

      <p style={style.p}>
        New copper investors often see &ldquo;COMEX copper stocks at all-time
        record&rdquo; and assume the market is oversupplied. Experienced copper
        market participants see the same headline and read something quite
        different. The gap between those two reactions is worth understanding
        explicitly, because it explains a lot about where copper prices sit
        today.
      </p>

      <div style={style.statBand}>
        <div style={style.stat}>
          <p style={{ ...style.statVal, color: "#F59E0B" }}>503k t</p>
          <p style={style.statLbl}>COMEX stocks</p>
          <p style={style.statSub}>All-time record, up 5&times; YoY</p>
        </div>
        <div style={style.stat}>
          <p style={{ ...style.statVal, ...style.redTxt }}>172k t</p>
          <p style={style.statLbl}>LME stocks</p>
          <p style={style.statSub}>Surged in April; 8-year high</p>
        </div>
        <div style={style.stat}>
          <p style={{ ...style.statVal, color: "#6B7280" }}>$0/t</p>
          <p style={style.statLbl}>TC/RC 2026</p>
          <p style={style.statSub}>Annual benchmark record low</p>
        </div>
        <div style={style.stat}>
          <p style={{ ...style.statVal, color: "#10B981" }}>140k t</p>
          <p style={style.statLbl}>SHFE stocks</p>
          <p style={style.statSub}>Shanghai; sharp April destock</p>
        </div>
      </div>

      <h3 style={style.h3}>What these numbers together mean</h3>
      <p style={style.p}>
        The refined copper (cathode) has been{" "}
        <strong style={style.pStrong}>geographically relocated</strong>, not
        genuinely overproduced. Starting in late 2025, traders began moving
        copper to COMEX-approved warehouses in the US ahead of the Section 232
        tariffs. On April 2, 2026, President Trump issued a proclamation
        formalizing 50% tariffs on copper articles, effective April 6. This
        explains why COMEX stocks hit record highs: if refined copper was
        already in the US before the deadline, it avoided the massive new tax.
      </p>

      <p style={style.p}>
        However, as of mid-April 2026, the global picture is shifting. While
        COMEX remains stuffed, LME stocks have recently surged to an eight-year
        high, reflecting a surge in exports from Chinese smelters. This
        &ldquo;inventory paradox&rdquo; isn't a sign of global abundance, but a
        sign of a market in flux as traders react to the combined shocks of US
        tariffs and the geopolitical situation in the Middle East.
      </p>

      <h3 style={style.h3}>TC/RCs confirm mine-level tightness</h3>
      <p style={style.p}>
        If the inventory build were caused by a genuine mine supply surplus,
        smelters would have abundant concentrate to process and would charge
        miners higher treatment fees. Instead, the annual{" "}
        <strong style={style.pStrong}>
          TC/RC benchmark for 2026 settled at $0/t
        </strong>
        , with spot rates recently trading as low as &minus;$78.50/t. Smelters
        are processing concentrate at a massive loss just to keep operations
        running. This upstream signal directly contradicts any narrative of
        oversupply; the raw material (concentrate) is scarcer than it has ever
        been in modern history.
      </p>

      <div style={style.calloutCu}>
        <div style={style.calloutIcon}>🔍</div>
        <div>
          <p style={style.calloutTitle}>How to read the paradox correctly</p>
          <p style={style.calloutText}>
            The right mental model for April 2026: total global inventory is
            rising, but availability for the{" "}
            <em style={style.em}>right metal at the right time</em> is
            fragmented. Smelters are cutting production (over 10% expected in
            China) because they cannot find enough concentrate. The record
            inventory you see on exchanges is partly &ldquo;trapped&rdquo; by
            new tariff barriers or being held as a strategic hedge against
            further supply chain disruptions in the Strait of Hormuz.
          </p>
        </div>
      </div>
    </section>
  );
}
