import * as style from "./styles";

export default function Editorial() {
  return (
    <section
      className="mx-3 2xl:mx-32"
      style={{ ...style.sec, paddingTop: 0 }}
      id="editorial"
    >
      <div
        className="bg-orange-200/20 border border-orange-300"
        style={{
          display: "flex",
          gap: "20px",
          padding: "24px",
          borderRadius: "12px",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            backgroundColor: "#2e2d2c",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            flexShrink: 0,
          }}
        ></div>
        <div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: ".1em",
              color: "#6B7280",
              marginBottom: "4px",
            }}
          >
            Editorial note
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "6px",
            }}
          >
            Gold & Silver Tracker Editorial Team
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#4B5563",
              lineHeight: "1.7",
              marginBottom: "8px",
            }}
          >
            This guide is written and maintained by the Gold & Silver Tracker
            editorial team, who monitor COMEX and LME copper inventory data,
            TC/RC benchmarks, IEA critical minerals reports, and major miner
            production updates on a daily basis. All statistics are sourced from
            primary market data.{" "}
            <strong style={{ color: "#111827" }}>
              This content is for informational purposes only and does not
              constitute financial advice.
            </strong>{" "}
            Consult a qualified financial advisor before making investment
            decisions.
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#6B7280",
              lineHeight: "1.5",
            }}
          >
            Last reviewed: April 19, 2026 &middot; Data sources: LME, CME
            Group/COMEX, SHFE, IEA Critical Minerals Outlook 2025, BloombergNEF
            Transition Metals Outlook 2025, Wood Mackenzie, USGS Minerals
            Yearbook, company filings (FCX, SCCO, Ivanhoe, BHP, Rio Tinto)
          </p>
        </div>
      </div>
    </section>
  );
}
