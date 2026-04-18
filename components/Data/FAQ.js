import React, { useState } from "react";
import * as s from "./styles";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "What is the copper price today per pound?",
      a: "Copper is trading at approximately $5.80 per pound (COMEX HG) as of April 13, 2026, or $12,780 per metric tonne on the LME. The 52-week range is $4.33 to $6.58 per pound, with the all-time high of $6.61/lb set on January 29, 2026. Year-over-year copper is up ~28%.",
    },
    {
      q: "Why is copper called Dr. Copper?",
      a: 'Copper earned the nickname "Dr. Copper" because its broad industrial use — in construction, electronics, power infrastructure, EVs, and almost every manufacturing sector — gives its price a reliable track record as a leading indicator of global economic health.',
    },
    {
      q: 'What is the COMEX-LME copper spread and what is the "inventory paradox"?',
      a: 'The COMEX-LME spread is the premium US-warehoused copper commands over the global LME benchmark. The "inventory paradox" is that high visible stocks in the US actually reflect metal being geographically trapped due to anticipated tariffs rather than genuine oversupply.',
    },
    {
      q: "What are treatment and refining charges (TC/RCs) and why are they at zero?",
      a: "TC/RCs are fees smelters charge miners to process copper concentrate. Near-zero or negative TC/RCs in 2026 confirm that the mine-to-smelter pipeline is genuinely constrained, signaling a structural supply shortage regardless of refined inventory levels.",
    },
    {
      q: "How much copper does an electric vehicle use vs a conventional car?",
      a: "A battery electric vehicle (BEV) uses approximately 80 kg (176 lbs) of copper — roughly 3-4 times more than a conventional internal combustion engine vehicle (~25 kg). EV demand is projected to reach ~10% of global copper use by 2050.",
    },
    {
      q: "What is the structural copper supply deficit and when does it arrive?",
      a: "The structural copper deficit refers to demand growth outpacing supply. BloombergNEF has declared a structural deficit from 2026 onwards. The IEA projects a 30% supply gap by 2035 due to eroding ore grades and a 10-17 year lead time for new mines.",
    },
    {
      q: "What is the best copper mining stock to buy?",
      a: "Not financial advice. Freeport-McMoRan (FCX) offers high copper leverage; Southern Copper (SCCO) has the lowest costs and largest reserves; BHP provides diversified exposure. ETFs like COPX (miners) or CPER (futures) offer broad market access.",
    },
    {
      q: "How is copper converted between $/lb and $/tonne?",
      a: "There are 2,204.62 pounds in one metric tonne. To convert $/lb to $/tonne, multiply by 2,204.62. Example: $5.80/lb × 2,204.62 = $12,787/tonne. One COMEX contract (25,000 lbs) at $5.80/lb is worth $145,000.",
    },
  ];

  return (
    <section id="faq" style={s.sec} className="bg-yellow-100/20">
      <div style={{ ...s.w, maxWidth: "800px" }}>
        <p style={s.slbl}>Frequently asked questions</p>
        <h2 style={s.stitle}>Copper Market FAQ</h2>

        <div
          itemScope
          itemType="https://schema.org/FAQPage"
          style={{
            border: `1px solid ${s.tokens.bdr}`,
            borderRadius: s.tokens.rl,
            overflow: "hidden",
            background: s.tokens.white,
          }}
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              style={{
                borderBottom:
                  index === faqData.length - 1
                    ? "none"
                    : `1px solid ${s.tokens.bdr}`,
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 22px",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  ...s.buttonBase,
                }}
              >
                <span itemProp="name" style={{ ...s.ct, fontSize: "14px" }}>
                  {item.q}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    color: s.tokens.muted,
                    transform:
                      activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                >
                  &#x25BC;
                </span>
              </button>

              {activeIndex === index && (
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  style={{
                    padding: "0 22px 18px",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  <p itemProp="text" style={s.ix}>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
