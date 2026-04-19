import { useState } from "react";
import * as style from "./styles";

export default function DataBanner() {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <div className="2xl:min-w-[800px] max-w-[1700px]" style={style.dataBanner}>
      <div>
        <p style={style.dbLabel}>Live copper data</p>
        <p style={style.dbTitle}>
          COMEX HG &middot; LME 3-month &middot; SHFE &middot; TC/RC tracker
          &middot; COPX, FCX, SCCO quotes
        </p>
        <p style={style.dbSub}>
          38 copper data sources &middot; Inventory paradox charts &middot;
          Updated continuously
        </p>
      </div>
      <a
        href="/copper/"
        style={{
          ...style.dbBtn,
          filter: isBtnHovered ? "brightness(1.1)" : "none",
        }}
        onMouseEnter={() => setIsBtnHovered(true)}
        onMouseLeave={() => setIsBtnHovered(false)}
      >
        Live Copper Charts &rarr;
      </a>
    </div>
  );
}
