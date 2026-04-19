import { useState } from "react";
import * as style from "./styles";

export default function ComparisonCallout() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="mx-3 2xl:mx-32"
      style={{ ...style.sec, paddingTop: 0, paddingBottom: 0 }}
      id="vs-metals"
    >
      <div style={{ ...style.calloutCu, marginBottom: "8px" }}>
        <div style={style.calloutIcon}>⚖</div>
        <div>
          <p style={style.calloutTitle}>
            Copper vs Gold vs Silver &mdash; the one-line version
          </p>
          <p style={style.calloutText}>
            <strong style={style.pStrong}>Gold:</strong> safe-haven, monetary
            metal, rises in crises, central bank backed.
            <strong style={style.pStrong}> Silver:</strong> monetary +
            industrial, 6-year supply deficit, 3&times; copper&rsquo;s
            volatility.
            <strong style={style.pStrong}> Copper:</strong> pure industrial
            metal, falls in recessions, rises with electrification and economic
            growth &mdash; the opposite of gold&rsquo;s behaviour. Don&rsquo;t
            substitute copper for gold. They perform in opposite conditions. The{" "}
            <a
              href="/gold-silver-101/"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                ...style.tocA,
                textDecoration: isHovered ? "underline" : "none",
              }}
            >
              Gold vs Silver comparison hub
            </a>{" "}
            covers the precious metals decision; this page covers copper as a
            separate, complementary position.
          </p>
        </div>
      </div>
    </section>
  );
}
