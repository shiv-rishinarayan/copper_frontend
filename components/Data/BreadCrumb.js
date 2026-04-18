import React from "react";
import * as s from "./styles";

const Breadcrumbs = () => {
  return (
    <nav className="mt-20" aria-label="Breadcrumb" style={s.bread}>
      <a href="/" style={s.breadA}>
        Home
      </a>
      <span style={s.breadSpan}>&rsaquo;</span>

      <a href="/data/" style={s.breadA}>
        Market Data
      </a>
      <span style={s.breadSpan}>&rsaquo;</span>

      <span style={{ color: s.tokens.ink3 }}>Copper</span>
    </nav>
  );
};

export default Breadcrumbs;
