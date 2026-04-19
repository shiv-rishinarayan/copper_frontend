import * as style from "./styles";

export default function BullMarket() {
  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="bull-market">
      <p style={style.secLabel}>Section 5 &middot; Market history</p>
      <h2 style={style.h2}>
        What Drove Copper to $6.61? The 2024&ndash;2026 Bull Market Story
      </h2>

      <p style={style.p}>
        Copper hit $6.61 per pound on COMEX on January 29, 2026 &mdash; an
        all-time high, the same week gold and silver also set records. Getting
        there required a specific, unrepeatable confluence of events &mdash;
        some structural and still in play, others one-time distortions that have
        already unwound. Knowing which is which matters for how you position
        now.
      </p>

      <h3 style={style.h3}>Act 1: The May 2024 spike to $5.20/lb</h3>
      <p style={style.p}>
        Copper broke through $5/lb in May 2024 briefly, hitting $5.20/lb before
        retreating. The main catalyst: Panama&rsquo;s government ordered the
        closure of First Quantum Minerals&rsquo;{" "}
        <strong style={style.pStrong}>Cobre Panama mine</strong> in November
        2023 following national protests over environmental concerns. At 270,000
        tonnes per year, Cobre Panama represented roughly 1% of global copper
        supply. Its abrupt closure was a genuine shock &mdash; not a mine life
        expiry or planned reduction, but a forced overnight shutdown of a major
        operating facility with no clear restart timeline. The copper market
        priced in a supply hole that couldn&rsquo;t be immediately filled.
      </p>

      <p style={style.p}>
        The rally faded when Chinese smelter output proved more resilient than
        expected and the COMEX-LME spread compressed back toward normal. But the
        Cobre Panama closure remains in effect as of April 2026 &mdash; 270,000
        tonnes per year of capacity is still offline.
      </p>

      <h3 style={style.h3}>
        Act 2: The tariff front-loading (August 2025&ndash;January 2026)
      </h3>
      <p style={style.p}>
        In August 2025, the Trump administration imposed 50% tariffs on
        semi-finished copper products. Refined copper (cathode) was exempted
        &mdash; but the White House explicitly left the door open for refined
        copper tariffs, saying a Section 232 national security review was
        ongoing with a decision expected by June 30, 2026. That announcement
        started a slow-motion scramble.
      </p>

      <p style={style.p}>
        Traders, importers, and industrial buyers began front-loading refined
        copper purchases before potential tariffs landed. The rational play: buy
        copper now at $4.50&ndash;5.00/lb, move it to COMEX-approved US
        warehouses, pay storage and freight, and avoid a hypothetical
        25&ndash;50% tariff later. COMEX warehouse stocks went from roughly
        90,000 tonnes to over 500,000 tonnes in 12 months. LME stocks in Europe
        and Asia fell correspondingly as copper flowed west.
      </p>

      <h3 style={style.h3}>Act 3: The January 2026 convergence</h3>
      <p style={style.p}>
        The $6.61 ATH was driven by tariff front-loading meeting the
        geopolitical shock from the US-Iran conflict, which hit copper
        (alongside gold and silver) as a broad commodity safe-haven bid. COMEX
        short-sellers who had bet on the spread normalising were forced to cover
        against a market with physically tight nearby delivery. The combination
        of structural buying, speculative momentum, and short-covering produced
        a spike that overshot fundamental value.
      </p>

      <h3 style={style.h3}>Where we are now</h3>
      <p style={style.p}>
        The pullback to $5.80/lb reflects some unwinding of the tariff premium
        as markets partially priced in either no tariff (ceasefire reducing
        urgency) or a manageable tariff. The June 30 decision date remains a
        binary event &mdash; the largest near-term catalyst in the copper
        market. Tariffs on refined copper would lock in the COMEX premium and
        validate the inventory build. No tariff would trigger a significant
        unwind of that inventory position, pressuring COMEX prices lower even if
        LME prices held.
      </p>

      <div style={style.calloutWarn}>
        <div className="callout-icon">&#x26A0;</div>
        <div>
          <p style={style.calloutTitle}>June 30, 2026: the binary</p>
          <p style={style.calloutText}>
            The Section 232 decision on refined copper tariffs is the single
            largest near-term event for COMEX copper pricing. A tariff &gt;15%
            would likely push COMEX copper toward $6.00&ndash;6.50/lb as the
            inventory build is validated. A decision to delay or exempt refined
            copper would likely push COMEX toward $5.00&ndash;5.40/lb as
            front-loaded inventory is unwound. The underlying LME price is less
            sensitive to this decision, since the tariff is US-specific.
          </p>
        </div>
      </div>
    </section>
  );
}
