import React from "react";
import * as styles from "./styles";

const TickerTape = () => {
  return (
    <div
      className=""
      style={styles.ticker}
      aria-label="Live copper market data"
    >
      <div style={styles.tkInner}>
        <div style={styles.ti}>
          <span style={styles.tl}>COMEX HG</span>
          <span>$5.80/lb</span>
          <span style={styles.dn}>&#x25BC; &minus;1.1%</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>LME 3M</span>
          <span>$12,780/t</span>
          <span style={styles.dn}>&#x25BC; &minus;0.9%</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>COMEX Stocks</span>
          <span>503,412 t</span>
          <span style={styles.up}>&#x25B2; All-time high</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>LME Stocks</span>
          <span>68,150 t</span>
          <span style={styles.dn}>&#x25BC; 8yr low</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>SHFE Stocks</span>
          <span>89,389 t</span>
          <span style={styles.neu}>&#x25BA; Seasonal</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>TC/RC</span>
          <span>$0/t</span>
          <span style={styles.dn}>&#x25BC; Concentrate tight</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>52-wk High</span>
          <span>$6.58/lb</span>
          <span style={styles.neu}>Jan 29, 2026</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>52-wk Low</span>
          <span>$4.33/lb</span>
          <span style={styles.neu}>Apr 2025</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>FCX</span>
          <span>+1.2%</span>
          <span style={styles.up}>&#x25B2;</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>SCCO</span>
          <span>+0.8%</span>
          <span style={styles.up}>&#x25B2;</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>BHP</span>
          <span>+1.6%</span>
          <span style={styles.up}>&#x25B2;</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>Cu/Au ratio</span>
          <span>0.00123</span>
          <span style={styles.neu}>&#x25BA; Industrial risk-on</span>
        </div>

        <div style={styles.ti}>
          <span style={styles.tl}>COMEX HG</span>
          <span>$5.80/lb</span>
          <span style={styles.dn}>&#x25BC; &minus;1.1%</span>
        </div>
        <div style={styles.ti}>
          <span style={styles.tl}>LME 3M</span>
          <span>$12,780/t</span>
          <span style={styles.dn}>&#x25BC; &minus;0.9%</span>
        </div>
        <div style={styles.ti}>
          <span style={styles.tl}>COMEX Stocks</span>
          <span>503,412 t</span>
          <span style={styles.up}>&#x25B2; All-time high</span>
        </div>
        <div style={styles.ti}>
          <span style={styles.tl}>LME Stocks</span>
          <span>68,150 t</span>
          <span style={styles.dn}>&#x25BC; 8yr low</span>
        </div>
        <div style={styles.ti}>
          <span style={styles.tl}>SHFE Stocks</span>
          <span>89,389 t</span>
          <span style={styles.neu}>&#x25BA; Seasonal</span>
        </div>
        <div style={styles.ti}>
          <span style={styles.tl}>TC/RC</span>
          <span>$0/t</span>
          <span style={styles.dn}>&#x25BC; Concentrate tight</span>
        </div>
      </div>
    </div>
  );
};

export default TickerTape;
