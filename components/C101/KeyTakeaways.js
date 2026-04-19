import * as style from "./styles";

export default function KeyTakeaways() {
  return (
    <section
      className="mx-3 2xl:mx-32"
      style={style.sec}
      id="key-takeaways"
      aria-label="Key takeaways"
    >
      <div style={style.takeaways}>
        <p style={style.takeawaysLabel}>Key Takeaways</p>
        <ul style={style.takeawaysUl}>
          <li style={style.takeawaysLi}>
            <span style={style.takeawaysBullet}>&bull;</span>
            <span>
              Copper is at $5.80/lb (April 2026), down 12% from its all-time
              high of $6.61 on January 29, 2026, but still up 28%
              year-over-year.
            </span>
          </li>
          <li style={style.takeawaysLi}>
            <span style={style.takeawaysBullet}>&bull;</span>
            <span>
              The best copper ETF for most investors is COPX (Global X Copper
              Miners ETF, 0.65%/yr) &mdash; ~40 miners, standard LTCG tax, daily
              liquidity, no K-1 complexity.
            </span>
          </li>
          <li style={style.takeawaysLi}>
            <span style={style.takeawaysBullet}>&bull;</span>
            <span>
              TC/RCs at ~$0/t (vs $88/t in 2023) are the most upstream signal
              that mine-level copper concentrate supply is genuinely tight
              &mdash; even as COMEX warehouse stocks sit at an all-time record.
            </span>
          </li>
          <li style={style.takeawaysLi}>
            <span style={style.takeawaysBullet}>&bull;</span>
            <span>
              The IEA projects a 30% structural copper supply gap by 2035. The
              key uncertainty: whether demand forecasts account for AI data
              centre copper use, which is growing faster than most
              2022&ndash;2023 models assumed.
            </span>
          </li>
          <li style={style.takeawaysLi}>
            <span style={style.takeawaysBullet}>&bull;</span>
            <span>
              CPER (futures ETF) has a better tax structure than gold ETFs:
              60/40 Section 1256 treatment, blended rate ~26.8% at 37% bracket
              vs gold&rsquo;s flat 28% collectibles rate.
            </span>
          </li>
          <li style={style.takeawaysLiLast}>
            <span style={style.takeawaysBullet}>&bull;</span>
            <span>
              Copper is not a safe haven. It fell 67% in 2008&ndash;2009, 36% in
              2022, and 26% in the March 2020 COVID crash. Size your position
              accordingly.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
