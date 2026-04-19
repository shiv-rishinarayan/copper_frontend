import React from "react";
import * as s from "./styles";

const StocksSection = () => {
  return (
    <section id="stocks" style={{ ...s.sec, ...s.secDark }}>
      <div style={s.w}>
        <p style={{ ...s.slbl, ...s.slblDark }}>
          Section H &middot; Copper mining stocks
        </p>
        <h2 style={{ ...s.stitle, ...s.stitleDark }}>
          Major Copper Producers &mdash; Stock Data &amp; Company Profiles
        </h2>
        <p style={{ ...s.sdesc, ...s.sdescDark }}>
          Copper stocks typically move 1.5&ndash;2.5&times; the magnitude of
          copper price changes. The industry is printing record margins at
          $5.80/lb against average AISC of ~$1.50&ndash;$2.50/lb. Here&rsquo;s
          the major players.
        </p>

        <div className="flex flex-col">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-6">
            {[
              { label: "FCX — Freeport-McMoRan", ticker: "NYSE:FCX" },
              { label: "SCCO — Southern Copper", ticker: "NYSE:SCCO" },
              { label: "BHP — BHP Group", ticker: "NYSE:BHP" },
              { label: "COPX — Copper Miners ETF", ticker: "NYSE:COPX" },
            ].map((stock, i) => (
              <div key={i} style={{ ...s.cbd, padding: "14px 16px" }}>
                <p
                  style={{
                    fontSize: "10px",
                    color: "rgba(255, 255, 255, 0.35)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "4px",
                  }}
                >
                  {stock.label}
                </p>
                <p
                  style={{
                    ...s.dtMono,
                    fontSize: "18px",
                    color: "#fff",
                    marginBottom: "2px",
                  }}
                >
                  {stock.ticker}
                </p>
                <div style={{ ...s.tvph, height: "60px" }}>
                  <div style={{ ...s.tvic, fontSize: "10px" }}>
                    TradingView mini widget
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={s.cbd}>
            <div>
              <p style={{ ...s.cl, ...s.clDark }}>
                Alpha Vantage &middot; Daily &middot; Free (25 req/day) &middot;
                All data approximate Apr 13, 2026
              </p>
              <p style={{ ...s.ct, ...s.ctDark }}>
                Major Copper Stocks &mdash; Comparative Data
              </p>
              <p style={{ ...s.cm, ...s.cmDark }}>
                Sorted by copper production 2024 &middot; Daily prices via Alpha
                Vantage or TradingView
              </p>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={s.dt}>
                <thead>
                  <tr>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>
                      Company / Ticker
                    </th>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>
                      Cu prod 2024 (kt)
                    </th>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>Key assets</th>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>Cu revenue %</th>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>Leverage type</th>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>Dividend</th>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>Notable 2026</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Freeport-McMoRan (FCX)",
                      sub: "NYSE:FCX · ~$68bn mkt cap",
                      prod: "1,260",
                      assets:
                        "Grasberg (Indonesia), Cerro Verde (Peru), Morenci (Arizona)",
                      rev: "~85%",
                      lev: "Pure-play: 2–3× copper leverage",
                      div: "~1.3%",
                      note: "Grasberg mud-rush restart Q2 2026; leaching tech adds 800M lb by 2030",
                    },
                    {
                      name: "Codelco",
                      sub: "State-owned, Chile · Not listed",
                      prod: "1,296",
                      assets: "El Teniente, Chuquicamata, Escondida JV, Andina",
                      rev: "100%",
                      lev: "N/A (state-owned)",
                      div: "N/A",
                      note: "World’s largest copper miner; production declining due to aging mines",
                    },
                    {
                      name: "Southern Copper (SCCO)",
                      sub: "NYSE:SCCO · ~$162bn mkt cap",
                      prod: "1,000",
                      assets:
                        "Cuajone+Toquepala (Peru), La Caridad+Buenavista (Mexico)",
                      rev: "~75%",
                      lev: "Lowest-cost major: 52% op margin, premium valuation",
                      div: "~4.5%",
                      note: "Largest copper reserve base; $15bn capex program 2024–2032",
                    },
                    {
                      name: "BHP Group (BHP)",
                      sub: "NYSE:BHP · ~$153bn mkt cap",
                      prod: "1,500",
                      assets:
                        "Escondida (57.5%, Chile), Olympic Dam (Australia), Pampa Norte",
                      rev: "~38%",
                      lev: "Diversified: iron ore buffers copper swings",
                      div: "~3.7%",
                      note: "$10–14bn expansion targeting +540k t/yr; copper now >iron ore focus",
                    },
                    {
                      name: "Rio Tinto (RIO)",
                      sub: "NYSE:RIO · ~$98bn mkt cap",
                      prod: "600",
                      assets:
                        "Oyu Tolgoi (Mongolia, 66%), Kennecott (Utah), Escondida JV",
                      rev: "~25%",
                      lev: "Diversified; Oyu Tolgoi growth driver",
                      div: "~5.2%",
                      note: "Oyu Tolgoi targeting 500k t/yr by 2028; 2026 major expansion milestone",
                    },
                    {
                      name: "Teck Resources (TECK)",
                      sub: "NYSE:TECK · ~$21bn mkt cap",
                      prod: "316",
                      assets:
                        "Quebrada Blanca (QB2, Chile), Highland Valley (Canada)",
                      rev: "~60%",
                      lev: "Pure-play post coal-sale; QB2 ramp still ongoing",
                      div: "~0.8%",
                      note: "QB2 targeting 600k t/yr by 2027; merged with Anglo American forming Anglo Teck",
                    },
                    {
                      name: "Ivanhoe Mines (IVN)",
                      sub: "TSX:IVN · ~$19bn mkt cap",
                      prod: "450",
                      assets:
                        "Kamoa-Kakula (DRC, 39.6%), Platreef (South Africa)",
                      rev: "~95%",
                      lev: "High-growth; DRC political risk; world’s highest-grade copper mine",
                      div: "None",
                      note: "Kamoa-Kakula targeting 600k t/yr by 2027; fastest-growing major",
                    },
                    {
                      name: "Lundin Mining (LUN)",
                      sub: "TSX:LUN · ~$12bn mkt cap",
                      prod: "270",
                      assets:
                        "Caserones (Chile), Josemaria (Argentina), Eagle (Michigan)",
                      rev: "~70%",
                      lev: "Mid-tier; Americas focused; consistent guidance",
                      div: "~1.8%",
                      note: "Caserones ramp; Josemaria development decision expected 2026",
                    },
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ ...s.dtTd, ...s.dtTdDark }}>
                        <strong style={{ color: "#fff" }}>{row.name}</strong>
                        <br />
                        <span
                          style={{
                            fontSize: "10px",
                            color: "rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          {row.sub}
                        </span>
                      </td>
                      <td style={{ ...s.dtTd, ...s.dtTdDark, ...s.dtMono }}>
                        {row.prod}
                      </td>
                      <td style={{ ...s.dtTd, ...s.dtTdDark }}>{row.assets}</td>
                      <td style={{ ...s.dtTd, ...s.dtTdDark, ...s.dtMono }}>
                        {row.rev}
                      </td>
                      <td style={{ ...s.dtTd, ...s.dtTdDark }}>{row.lev}</td>
                      <td style={{ ...s.dtTd, ...s.dtTdDark, ...s.dtMono }}>
                        {row.div}
                      </td>
                      <td style={{ ...s.dtTd, ...s.dtTdDark }}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ ...s.csrc, ...s.csrcDark }}>
              Sources: Company Q4 2025 production reports &middot; Market cap
              approximate Apr 2026 &middot; Alpha Vantage daily prices (25
              req/day free) &middot; All figures approximate
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-9 mb-4 mt-4 gap-x-4 gap-4"
            // style={{ ...s.g2, marginTop: "18px" }}
          >
            <div
              className="lg:col-span-6 overflow-scroll scrollb"
              style={s.cbd}
            >
              <div style={s.ch}>
                <div>
                  <p style={{ ...s.cl, ...s.clDark }}>
                    ETF comparison &middot; For index exposure
                  </p>
                  <p style={{ ...s.ct, ...s.ctDark }}>
                    Copper ETFs &mdash; Miners vs Metal
                  </p>
                </div>
              </div>
              <table style={s.dt}>
                <thead>
                  <tr>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>ETF</th>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>Ticker</th>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>Expense ratio</th>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>What it holds</th>
                    <th style={{ ...s.dtTh, ...s.dtThDark }}>Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Global X Copper Miners",
                      ticker: "COPX",
                      ratio: "0.65%",
                      holds: "40+ copper mining stocks globally",
                      best: "Diversified mining equity exposure",
                    },
                    {
                      name: "US Copper Index Fund",
                      ticker: "CPER",
                      ratio: "0.85%",
                      holds: "COMEX HG copper futures",
                      best: "Pure metal price exposure, no mining risk",
                    },
                    {
                      name: "iPath Bloomberg Copper",
                      ticker: "JJC",
                      ratio: "0.75%",
                      holds: "Copper futures (LME-based)",
                      best: "European-style future exposure; lower liquidity",
                    },
                    {
                      name: "Sprott Copper Miners",
                      ticker: "COPP",
                      ratio: "0.65%",
                      holds: "Pure-play copper miners",
                      best: "High-conviction copper thesis",
                    },
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ ...s.dtTd, ...s.dtTdDark }}>
                        <strong style={{ color: "#fff" }}>{row.name}</strong>
                      </td>
                      <td style={{ ...s.dtTd, ...s.dtTdDark, ...s.dtMono }}>
                        {row.ticker}
                      </td>
                      <td style={{ ...s.dtTd, ...s.dtTdDark, ...s.dtMono }}>
                        {row.ratio}
                      </td>
                      <td style={{ ...s.dtTd, ...s.dtTdDark }}>{row.holds}</td>
                      <td style={{ ...s.dtTd, ...s.dtTdDark }}>{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ ...s.csrc, ...s.csrcDark }}>
                Source: ETF.com &middot; Fund prospectuses &middot; Fees as of
                Q1 2026
              </p>
            </div>

            <div className="lg:col-span-3" style={s.cbd}>
              <div style={s.ch}>
                <div>
                  <p style={{ ...s.cl, ...s.clDark }}>
                    TradingView &middot; COPX vs HG copper &middot; Real-time
                  </p>
                  <p style={{ ...s.ct, ...s.ctDark }}>
                    COPX vs Copper Price &mdash; Leverage Ratio
                  </p>
                  <p style={{ ...s.cm, ...s.cmDark }}>
                    COPX has historically moved ~2&times; copper &middot; YTD
                    2026: COPX up 34%, copper up 28%
                  </p>
                </div>
              </div>
              <div style={{ ...s.tvph, height: "180px" }}>
                <div style={s.tvic}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M1 15 L5 8 L9 11 L13 4 L17 7 L20 2"
                      stroke="#B87333"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1 15 L5 11 L9 13 L13 8 L17 10 L20 7"
                      stroke="rgba(184,115,51,.4)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="4,2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>COPX vs COMEX:HG1! overlay</span>
                  <span style={{ fontSize: "10px", opacity: 0.6 }}>
                    TradingView embed in production
                  </span>
                </div>
              </div>
              <p style={{ ...s.csrc, ...s.csrcDark }}>
                TradingView symbol-overview widget &middot; COPX|COMEX:HG1!
                &middot; Zero backend &middot; Real-time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StocksSection;
