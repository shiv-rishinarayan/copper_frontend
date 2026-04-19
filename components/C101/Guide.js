import * as style from "./styles";

export default function Guide() {
  return (
    <section
      className="mx-3 2xl:mx-32"
      style={{ ...style.sec, paddingTop: "8px" }}
      id="related"
    >
      <p style={style.secLabel}>Also on this site</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "14px",
          marginTop: "12px",
          marginBottom: "40px",
        }}
      >
        <a
          className="border p-3 bg-white rounded-lg"
          href="/gold-investing-101/"
        >
          <p className="text-orange-600 pb-3">🥇 Gold 101</p>
          <p className="font-bold pb-3">How to Invest in Gold</p>
          <p className="text-black/70">
            GLD vs IAU, Gold IRA, taxes, price history →
          </p>
        </a>
        <a
          href="/silver-investing-101/"
          className="border p-3 bg-white rounded-lg"
        >
          <p style={{ ...style.navTag, color: "#4A4A6A" }}>🥈 Silver 101</p>
          <p className="font-bold pb-3">How to Invest in Silver</p>
          <p className="text-black/70">
            SLV vs PSLV, supply deficit, junk silver →
          </p>
        </a>
        <a href="/copper/" className="border p-3 bg-white rounded-lg">
          <p style={{ ...style.navTag, color: "#92400E" }}>📊 Live Data</p>
          <p className="font-bold pb-3">Copper Data & Charts</p>
          <p className="text-black/70">
            COMEX/LME live · TC/RC tracker · miners →
          </p>
        </a>
      </div>

      <h3 style={style.h3}>Advanced Copper Concepts</h3>
      <div style={{ display: "grid", gap: "20px" }}>
        <div style={style.glossItem}>
          <dt style={style.glossTerm}>Copper Intensity</dt>
          <dd style={style.glossDef}>
            The amount of copper required per unit of output. Key benchmarks for
            2026:
            <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
              <li>
                <strong>Solar PV:</strong> ~4–5 tonnes per MW
              </li>
              <li>
                <strong>Electric Vehicles:</strong> ~80 kg per vehicle (vs 25 kg
                for gas)
              </li>
              <li>
                <strong>Offshore Wind:</strong> ~8,000 kg per MW
              </li>
            </ul>
            As technologies mature, manufacturers try to "thrift" copper out of
            designs, but the sheer volume of new green infrastructure is
            currently outpacing these efficiency gains.
          </dd>
        </div>

        <div style={style.glossItem}>
          <dt style={style.glossTerm}>Heap Leach / SX-EW</dt>
          <dd style={style.glossDef}>
            A processing method used for oxide ores that bypasses traditional
            smelting. Ore is irrigated with acid, and copper is recovered
            through <strong>Solvent Extraction (SX)</strong> and{" "}
            <strong>Electrowinning (EW)</strong>. It produces 99.99% pure
            cathode directly at the mine site. This accounts for ~20% of global
            supply and is a critical "cost-saver" for mines in the US Southwest.
          </dd>
        </div>

        <div style={style.glossItem}>
          <dt style={style.glossTerm}>Section 232 (US Copper Tariffs)</dt>
          <dd style={style.glossDef}>
            The "T-word" of 2026. Following the implementation of new
            protections, the US market has seen a record{" "}
            <strong>COMEX premium</strong> over global benchmarks. The upcoming
            June 30 decision will determine if this geographic price split
            becomes a permanent feature of the North American market.
          </dd>
        </div>

        <div style={style.glossItem}>
          <dt style={style.glossTerm}>Byproduct Credits</dt>
          <dd style={style.glossDef}>
            Miners rarely just find copper; they often extract gold, silver, or
            molybdenum simultaneously. The revenue from these secondary metals
            acts as a <strong>direct offset</strong> to production costs. For
            major operations like Grasberg, high gold prices can reduce the
            effective AISC significantly, providing a massive safety margin.
          </dd>
        </div>

        <div style={style.glossItem}>
          <dt style={style.glossTerm}>The DRC Factor</dt>
          <dd style={style.glossDef}>
            The Democratic Republic of Congo has emerged as a global copper
            powerhouse, housing roughly 8% of global reserves. Projects like{" "}
            <strong>Kamoa-Kakula</strong> are essential for meeting green energy
            demand, though the region carries unique geopolitical and
            infrastructure risks that investors must weigh against its
            geological richness.
          </dd>
        </div>
      </div>

      <div style={{ ...style.calloutCu, marginTop: "32px" }}>
        <div style={style.calloutIcon}>🗺️</div>
        <div>
          <p style={style.calloutTitle}>Global Supply Snapshot</p>
          <p style={style.calloutText}>
            While <strong>Chile</strong> remains the world's largest producer
            (~27%), the global center of gravity is shifting toward Central
            Africa and Indonesia. This geographic shift makes supply chains more
            sensitive to geopolitical trade alignments than ever before.
          </p>
        </div>
      </div>
    </section>
  );
}
