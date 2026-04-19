import { useState } from "react";
import * as style from "./styles";

export default function C101Hero() {
  const [ps1Hover, setPs1Hover] = useState(false);
  const [ps2Hover, setPs2Hover] = useState(false);
  const [ps3Hover, setPs3Hover] = useState(false);
  const [ps4Hover, setPs4Hover] = useState(false);

  return (
    <section style={style.hero} aria-label="Page header">
      <div style={style.heroBefore}></div>
      <div style={style.heroInner}>
        <p style={style.heroEyebrow}>
          <span style={style.heroEyebrowSpan}>Copper $5.80/lb · $12,780/t</span>
          &nbsp;·&nbsp; ATH $6.61 (Jan 29 2026) &nbsp;·&nbsp; Updated April 14,
          2026
        </p>

        <h1 style={style.h1}>
          How to Invest in <em style={style.h1Em}>Copper</em>
        </h1>

        <p style={style.heroSub}>
          Copper hit an all-time high in January 2026 and is now 12% off that
          peak. If you&rsquo;re researching how to invest in copper in 2026
          &mdash; whether that&rsquo;s COPX, FCX, CPER, or individual miners
          &mdash; whether $5.80 is a floor or a waystation depends on which
          version of the demand story you believe &mdash; and there are two very
          different versions. This guide lays out both honestly, including the
          parts the copper bulls don&rsquo;t always mention.
        </p>

        <div style={style.heroMeta}>
          <span style={style.heroMetaSpan}>
            📅 <strong style={style.heroMetaStrong}>April 14, 2026</strong>
          </span>
          <span style={style.heroMetaSpan}>
            ⏱️ <strong style={style.heroMetaStrong}>~35 min read</strong>
          </span>
          <span style={style.heroMetaSpan}>
            📝 <strong style={style.heroMetaStrong}>~17,400 words</strong>
          </span>
        </div>

        <div style={style.pstrip}>
          <div
            onMouseEnter={() => setPs1Hover(true)}
            onMouseLeave={() => setPs1Hover(false)}
            style={{
              ...style.ps,
              background: ps1Hover
                ? "rgba(255,255,255,.08)"
                : style.ps.background,
            }}
          >
            <p style={style.psL}>Copper price/lb</p>
            <p style={{ ...style.psV, ...style.cuTxt }}>$5.80</p>
            <p style={style.psS}>+28% YoY · ATH $6.61</p>
          </div>

          <div
            onMouseEnter={() => setPs2Hover(true)}
            onMouseLeave={() => setPs2Hover(false)}
            style={{
              ...style.ps,
              background: ps2Hover
                ? "rgba(255,255,255,.08)"
                : style.ps.background,
            }}
          >
            <p style={style.psL}>LME price/tonne</p>
            <p style={style.psV}>$12,780</p>
            <p style={style.psS}>3-month forward</p>
          </div>

          <div
            onMouseEnter={() => setPs3Hover(true)}
            onMouseLeave={() => setPs3Hover(false)}
            style={{
              ...style.ps,
              background: ps3Hover
                ? "rgba(255,255,255,.08)"
                : style.ps.background,
            }}
          >
            <p style={style.psL}>COMEX stocks</p>
            <p style={{ ...style.psV, color: "#F59E0B" }}>503k t</p>
            <p style={style.psS}>All-time record (tariff fwd)</p>
          </div>

          <div
            onMouseEnter={() => setPs4Hover(true)}
            onMouseLeave={() => setPs4Hover(false)}
            style={{
              ...style.ps,
              background: ps4Hover
                ? "rgba(255,255,255,.08)"
                : style.ps.background,
            }}
          >
            <p style={style.psL}>TC/RC 2026</p>
            <p style={{ ...style.psV, ...style.redTxt }}>~$0/t</p>
            <p style={style.psS}>Was $88/t in 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}
