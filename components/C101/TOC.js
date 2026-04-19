import { useState } from "react";
import * as style from "./styles";

export default function TOC() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const tocItems = [
    { href: "#what-copper-is", text: "What copper actually is" },
    { href: "#how-price-works", text: "How the copper price works" },
    { href: "#copper-price-units", text: "Price per pound, tonne, gram" },
    { href: "#dr-copper", text: "Dr. Copper explained" },
    { href: "#bull-market", text: "What drove copper to $6.61" },
    { href: "#electrification", text: "The electrification demand thesis" },
    { href: "#supply-crisis", text: "The supply crisis" },
    { href: "#inventory-paradox", text: "The 2026 inventory paradox" },
    { href: "#tc-rc", text: "TC/RC: the signal nobody talks about" },
    { href: "#5-ways", text: "5 ways to own copper" },
    { href: "#mining-stocks", text: "Mining stocks: FCX, SCCO, BHP & beyond" },
    { href: "#price-history", text: "Copper price history 2000–2026" },
    { href: "#good-investment", text: "Is copper a good investment?" },
    { href: "#taxes", text: "Copper taxes explained" },
    { href: "#scrap", text: "Scrap copper prices" },
    { href: "#forecast", text: "Price forecast 2026–2027" },
    { href: "#allocation", text: "How much copper to own" },
    { href: "#signals", text: "What to monitor" },
    { href: "#glossary", text: "Copper glossary (75+ terms)" },
    { href: "#faq", text: "Copper FAQ" },
  ];

  return (
    <section
      className="mx-3 2xl:mx-32"
      style={style.sec}
      id="toc"
      aria-label="Table of contents"
    >
      <nav style={style.toc} aria-label="Article contents">
        <p style={style.tocTitle}>In this guide</p>
        <ol className="grid grid-cols-2 xl:grid-cols-4 gap-x-5">
          {tocItems.map((item, index) => (
            <li key={index} style={style.tocLi}>
              <a
                href={item.href}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                style={{
                  ...style.tocA,
                  textDecoration: hoverIndex === index ? "underline" : "none",
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
