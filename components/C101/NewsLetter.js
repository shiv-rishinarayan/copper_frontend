import { useState } from "react";
import * as style from "./styles";

export default function NewsletterBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="2xl:min-w-[800px] max-w-[1700px]" style={style.newsletter}>
      <div>
        <p style={style.nlLabel}>Free weekly newsletter</p>
        <p style={style.nlTitle}>Copper market updates</p>
        <p style={style.nlSub}>
          TC/RC signals &middot; inventory data &middot; tariff news &middot; no
          spam &middot; unsubscribe anytime
        </p>
      </div>
      <a
        href="/newsletter/"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          ...style.nlBtn,
          filter: isHovered ? "brightness(1.1)" : "none",
        }}
      >
        Subscribe free &rarr;
      </a>
    </div>
  );
}
