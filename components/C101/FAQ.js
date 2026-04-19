import { useState } from "react";
import * as style from "./styles";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the copper price today per pound?",
      a: "As of April 19, 2026, copper is trading at approximately $5.80/lb on COMEX (HG), equivalent to ~$12,787 per metric tonne on the LME. This is roughly 12% below the all-time high of $6.61/lb reached on January 29, 2026. For real-time updates, visit our live copper data page.",
    },
    {
      q: "What is the best way to invest in copper?",
      a: "For most investors, COPX (Global X Copper Miners ETF) is the most practical entry point, offering diversified exposure to ~40 miners with standard equity tax treatment. For higher leverage, individual miners like FCX or SCCO are popular. For pure price exposure, CPER tracks copper futures, though it involves K-1 tax complexity.",
    },
    {
      q: "Why is copper called Dr. Copper?",
      a: "Copper earned its 'Ph.D. in economics' because its widespread use in construction, electronics, and infrastructure makes it a sensitive leading indicator of global economic health. It historically 'diagnoses' recessions or expansions months before they appear in official GDP data.",
    },
    {
      q: "What are TC/RCs and why does ~$0 matter?",
      a: "Treatment and Refining Charges (TC/RCs) are fees miners pay smelters. The 2026 benchmark sitting near $0/t is a massive signal of concentrate scarcity. It means smelters are so desperate for raw ore to keep their plants running that they are refining it for essentially no profit.",
    },
    {
      q: "Can copper replace gold in a portfolio?",
      a: "No—they serve opposite functions. Gold is a safe-haven asset that typically performs well during crises or recessions. Copper is a pro-cyclical industrial metal that thrives during growth and electrification. They are complementary, but not interchangeable.",
    },
    {
      q: "How much copper does an EV use vs a regular car?",
      a: "A typical battery EV uses about 80 kg (176 lbs) of copper—roughly 3.2x more than a conventional internal combustion engine vehicle (ICE), which uses about 25 kg. This intensity is the core driver of the long-term 'structural deficit' thesis.",
    },
  ];

  return (
    <section className="mx-3 2xl:mx-32" style={style.sec} id="faq">
      <p style={style.secLabel}>Section 20 &middot; Questions</p>
      <h2 style={style.h2}>Copper Investing FAQ</h2>

      <div style={{ marginTop: "24px" }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{
              borderBottom: "1px solid #E5E7EB",
              marginBottom: "8px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => toggleFaq(idx)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
              }}
            >
              <span>{faq.q}</span>
              <span
                style={{
                  transform:
                    openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  fontSize: "12px",
                }}
              >
                ▼
              </span>
            </button>
            <div
              style={{
                maxHeight: openIndex === idx ? "500px" : "0",
                opacity: openIndex === idx ? "1" : "0",
                transition: "all 0.3s ease-in-out",
                paddingBottom: openIndex === idx ? "16px" : "0",
              }}
            >
              <p style={{ ...style.p, margin: 0, color: "#4B5563" }}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ ...style.calloutGrn, marginTop: "40px" }}>
        <div style={style.calloutIcon}>💬</div>
        <div>
          <p style={style.calloutTitle}>Still have questions?</p>
          <p style={style.calloutText}>
            The copper market is moving fast in 2026. If you're tracking
            specific supply disruptions or need more detail on the June 30
            tariff decision, check our <strong>Deep Dive</strong> series on the
            Copper Data Page.
          </p>
        </div>
      </div>
    </section>
  );
}
