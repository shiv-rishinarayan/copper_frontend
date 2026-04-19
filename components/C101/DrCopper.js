import * as style from "./styles";

export default function DrCopper() {
  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="dr-copper">
      <p style={style.secLabel}>Section 4 &middot; Economic signal</p>
      <h2 style={style.h2}>
        Dr. Copper: The Economic Indicator No One Taught You About
      </h2>

      <p style={style.p}>
        Wall Street has a saying: copper has a PhD in economics. The nickname
        &ldquo;Dr. Copper&rdquo; comes from the metal&rsquo;s 30-year track
        record as a leading indicator of global economic health &mdash; often
        moving before official GDP data, unemployment figures, or central bank
        statements confirm what the copper market already knew.
      </p>

      <p style={style.p}>
        The logic is structural, not mystical. Copper is used in construction,
        electronics, power infrastructure, transportation, and industrial
        machinery. When economic activity genuinely expands, copper demand rises
        across all these categories simultaneously. When it contracts, demand
        falls just as broadly. No single sector dominates &mdash; which is
        exactly what makes the signal robust. A commodity used in only one
        industry can spike or crash on sector-specific news. Copper&rsquo;s
        breadth of use means a sustained price move reflects something more
        fundamental.
      </p>

      <h3 style={style.h3}>The track record</h3>
      <p style={style.p}>
        <strong style={style.pStrong}>2008 financial crisis.</strong> Copper
        peaked near $4.20/lb in early 2008, then crashed 67% over six months
        &mdash; well before the formal recession was declared and long before
        unemployment reached its worst levels. The copper market read the credit
        freeze before the headline data did.
      </p>

      <p style={style.p}>
        <strong style={style.pStrong}>2015&ndash;2016 slowdown.</strong> Copper
        fell from $3.50/lb in early 2014 to a low of $1.96/lb in January 2016,
        accurately tracking the slowdown in Chinese credit growth and global
        manufacturing that preceded the 2015 equity correction.
      </p>

      <p style={style.p}>
        <strong style={style.pStrong}>COVID-19 recovery.</strong> Copper
        bottomed at $2.10/lb in March 2020, then surged 130% to $4.75/lb by May
        2021 &mdash; pricing in the fiscal stimulus-driven industrial recovery
        while equity markets were still pricing in uncertainty. It was one of
        the clearest economic signals of the 2020&ndash;2021 period.
      </p>

      <div style={style.calloutCu}>
        <div style={style.calloutIcon}>📊</div>
        <div>
          <p style={style.calloutTitle}>
            The copper/gold ratio: a subtler signal
          </p>
          <p style={style.calloutText}>
            The ratio of copper price to gold price (copper per pound divided by
            gold per ounce) is an even more refined economic indicator. When the
            ratio rises, industrial optimism is outrunning safe-haven demand
            &mdash; typically bullish for risk assets. When the ratio falls
            sharply, it signals that markets are pricing in economic
            deterioration.
            <br />
            <br />
            As of April 14, 2026, with gold near $4,728/oz, the ratio sits at{" "}
            <strong style={style.pStrong}>0.00123</strong>. For historical
            context, a ratio as high as 830 (when expressed as gold-per-ounce
            divided by copper-per-pound) has historically signaled extreme
            industrial stress, as seen during early 2026 volatility.
          </p>
        </div>
      </div>

      <h3 style={style.h3}>
        The 2026 complication: tariffs distorted the signal
      </h3>
      <p style={style.pLast}>
        The copper/gold ratio and Dr. Copper&rsquo;s signal were both distorted
        in 2025&ndash;2026 by tariff-driven positioning. Copper&rsquo;s rise to
        $6.61/lb in January 2026 was only partially an economic signal &mdash; a
        significant component was traders moving physical copper to US
        warehouses for tariff arbitrage. Reading this move as pure economic
        expansion led some analysts astray. The lesson: Dr. Copper is a reliable
        signal over months and years; individual price spikes can be noise.
      </p>
    </section>
  );
}
