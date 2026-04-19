export const tokens = {
  cu: "#b87333",

  cuL: "#d4956a",

  cuD: "#7a4a1e",

  cuBg: "#fbf3ec",

  cuT: "rgba(184, 115, 51, 0.1)",

  cuGlow: "rgba(184, 115, 51, 0.25)",

  ink: "#1a1a2e",

  ink2: "#2d2d44",

  ink3: "#4a4a6a",

  muted: "#8888aa",

  bdr: "rgba(26, 26, 46, 0.1)",

  bdrD: "rgba(255, 255, 255, 0.1)",

  page: "#f7f5f0",

  white: "#ffffff",

  grn: "#1a7a4a",

  grnBg: "#e8f5ed",

  red: "#c0392b",

  redBg: "#fdecea",

  amb: "#92400e",

  ambBg: "#fef3c7",

  blu: "#1e3a5f",

  bluBg: "#eff6ff",

  max: "1280px",

  r: "10px",

  rl: "14px",
};

export const keyframes = {
  tk: `@keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`,

  ld: `@keyframes ld { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`,
};

export const breakpoints = {
  lg: "(max-width: 1024px)",

  md: "(max-width: 768px)",

  sm: "(max-width: 480px)",
};

export const responsive = {
  lg: {
    g4: { gridTemplateColumns: "repeat(2, 1fr)" },

    g3: { gridTemplateColumns: "1fr 1fr" },

    hpg: { gridTemplateColumns: "repeat(3, 1fr)" },
  },

  md: {
    w: { padding: "0 20px" },

    g2: { gridTemplateColumns: "1fr" },

    g3: { gridTemplateColumns: "1fr" },

    g52: { gridTemplateColumns: "1fr" },

    hpg: { gridTemplateColumns: "1fr 1fr" },

    bread: { padding: "7px 20px" },
  },

  sm: {
    hpg: { gridTemplateColumns: "1fr 1fr" },

    g4: { gridTemplateColumns: "1fr 1fr" },
  },
};

export const globalReset = {
  boxSizing: "border-box",

  margin: 0,

  padding: 0,
};

export const htmlBase = {
  scrollBehavior: "smooth",
};

export const bodyBase = {
  fontFamily: '"DM Sans", sans-serif',

  background: "#f7f5f0",

  color: "#1a1a2e",

  fontSize: "14px",

  lineHeight: 1.6,

  WebkitFontSmoothing: "antialiased",
};

export const aBase = {
  color: "inherit",

  textDecoration: "none",
};

export const buttonBase = {
  fontFamily: "inherit",

  cursor: "pointer",
};

export const w = {
  maxWidth: "1600px",

  margin: "0 auto",

  padding: "0 32px",
};

export const g2 = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "18px",
};

export const g3 = {
  display: "grid",

  gridTemplateColumns: "repeat(3, 1fr)",

  gap: "16px",
};

export const g4 = {
  display: "grid",

  gridTemplateColumns: "repeat(4, 1fr)",

  gap: "14px",
};

export const g52 = {
  display: "grid",

  gridTemplateColumns: "5fr 2fr",

  gap: "18px",

  alignItems: "start",
};

export const gap = {
  marginBottom: "18px",
};

export const nav = {
  background: "#1a1a2e",

  height: "56px",

  display: "flex",

  alignItems: "center",

  justifyContent: "space-between",

  padding: "0 32px",

  position: "sticky",

  top: 0,

  zIndex: 200,

  borderBottom: "1px solid rgba(184, 115, 51, 0.25)",
};

export const navLogo = {
  fontFamily: '"Playfair Display", serif',

  fontSize: "17px",

  fontWeight: 700,

  color: "#b87333",

  textDecoration: "none",
};

export const navLinks = {
  display: "flex",

  gap: "4px",

  listStyle: "none",
};

export const navLinksA = {
  fontSize: "12px",

  fontWeight: 500,

  color: "rgba(255, 255, 255, 0.55)",

  padding: "5px 10px",

  borderRadius: "6px",

  transition: "all 0.15s",

  textDecoration: "none",
};

export const navLinksAHover = {
  color: "#d4956a",

  background: "rgba(184, 115, 51, 0.12)",
};

export const navLinksAOn = {
  color: "#d4956a",

  background: "rgba(184, 115, 51, 0.15)",
};

export const ticker = {
  background: "#2d2d44",

  borderBottom: "1px solid rgba(184, 115, 51, 0.18)",

  overflow: "hidden",

  height: "34px",

  display: "flex",

  alignItems: "center",
};

export const tkInner = {
  display: "flex",

  gap: "40px",

  animation: "tk 36s linear infinite",

  whiteSpace: "nowrap",

  padding: "0 20px",

  alignItems: "center",
};

export const tkInner2 = {
  display: "flex",

  gap: "40px",

  whiteSpace: "nowrap",

  padding: "0 20px",

  alignItems: "center",
};

export const ti = {
  display: "inline-flex",

  alignItems: "center",

  gap: "7px",

  fontSize: "11px",

  fontFamily: '"DM Mono", monospace',

  color: "rgba(255, 255, 255, 0.85)",
};

export const tl = {
  fontSize: "10px",

  color: "rgba(255, 255, 255, 0.4)",

  letterSpacing: "0.05em",
};

export const up = { color: "#4caf50" };

export const dn = { color: "#f44336" };

export const neu = { color: "rgba(255, 255, 255, 0.45)" };

export const bread = {
  background: "#ffffff",

  borderBottom: "1px solid rgba(26, 26, 46, 0.1)",

  padding: "7px 32px",

  fontSize: "11px",

  color: "#8888aa",
};

export const breadA = {
  color: "#8888aa",
};

export const breadSpan = {
  margin: "0 6px",

  opacity: 0.4,
};

export const hero = {
  background: "#1a1a2e",

  padding: "40px 0 44px",

  position: "relative",

  overflow: "hidden",
};

export const heroBefore = {
  content: '""',

  position: "absolute",

  inset: 0,

  background:
    "radial-gradient(ellipse 60% 90% at 5% 50%, rgba(184,115,51,0.09) 0%, transparent 65%), " +
    "radial-gradient(ellipse 40% 60% at 95% 20%, rgba(120,80,30,0.06) 0%, transparent 65%)",

  pointerEvents: "none",
};

export const heroInner = {
  position: "relative",
};

export const hEye = {
  fontSize: "10px",

  fontWeight: 600,

  letterSpacing: "0.15em",

  textTransform: "uppercase",

  color: "#b87333",

  marginBottom: "8px",
};

export const hTitle = {
  fontFamily: '"Playfair Display", serif',

  fontSize: "clamp(26px, 3.5vw, 40px)",

  fontWeight: 700,

  color: "#ffffff",

  lineHeight: 1.15,

  marginBottom: "6px",
};

export const hTitleEm = {
  fontStyle: "italic",

  color: "#d4956a",
};

export const hSub = {
  fontSize: "13px",

  color: "rgba(255, 255, 255, 0.5)",

  maxWidth: "560px",

  lineHeight: 1.65,

  marginBottom: "10px",
};

export const hUpd = {
  display: "inline-flex",

  alignItems: "center",

  gap: "6px",

  fontSize: "10px",

  color: "rgba(255, 255, 255, 0.35)",

  marginBottom: "24px",

  padding: "4px 10px",

  border: "1px solid rgba(255, 255, 255, 0.1)",

  borderRadius: "20px",
};

export const ldot = {
  width: "6px",

  height: "6px",

  background: "#4caf50",

  borderRadius: "50%",

  animation: "ld 2s ease-in-out infinite",
};

export const hpg = {
  display: "grid",

  gridTemplateColumns: "repeat(5, 1fr)",

  gap: "1px",

  background: "rgba(255, 255, 255, 0.06)",

  borderRadius: "14px",

  overflow: "hidden",

  border: "1px solid rgba(184, 115, 51, 0.25)",
};

export const hpc = {
  background: "rgba(255, 255, 255, 0.03)",

  padding: "16px 18px",

  transition: "background 0.2s",
};

export const hpcHover = {
  background: "rgba(255, 255, 255, 0.06)",
};

export const hpcL = {
  fontSize: "10px",

  fontWeight: 500,

  textTransform: "uppercase",

  letterSpacing: "0.1em",

  color: "rgba(255, 255, 255, 0.35)",

  marginBottom: "5px",
};

export const hpcV = {
  fontFamily: '"DM Mono", monospace',

  fontSize: "20px",

  fontWeight: 500,

  color: "#ffffff",

  lineHeight: 1.1,

  marginBottom: "3px",
};

export const hpcC = {
  fontSize: "11px",

  marginBottom: "2px",
};

export const hpcS = {
  fontSize: "10px",

  color: "rgba(255, 255, 255, 0.3)",
};

export const snav = {
  background: "#ffffff",

  borderBottom: "1px solid rgba(26, 26, 46, 0.1)",

  position: "sticky",

  top: "56px",

  zIndex: 100,

  overflowX: "auto",

  scrollbarWidth: "none",
};

export const snavI = {
  maxWidth: "1280px",

  margin: "0 auto",

  padding: "0 32px",

  display: "flex",

  gap: "2px",
};

export const sn = {
  fontSize: "12px",

  fontWeight: 500,

  color: "#8888aa",

  padding: "12px 14px",

  borderBottom: "2px solid transparent",

  whiteSpace: "nowrap",

  transition: "all 0.15s",

  background: "none",

  borderTop: "none",

  borderLeft: "none",

  borderRight: "none",
};

export const snHover = {
  color: "#1a1a2e",
};

export const snOn = {
  color: "#1a1a2e",

  borderBottomColor: "#b87333",

  fontWeight: 600,
};

export const sec = {
  padding: "48px 0",
};

export const secAlt = {
  background: "#ffffff",
};

export const secDark = {
  background: "#1a1a2e",
};

export const slbl = {
  fontSize: "10px",

  fontWeight: 600,

  letterSpacing: "0.14em",

  textTransform: "uppercase",

  color: "#7a4a1e",

  marginBottom: "4px",
};

export const slblDark = {
  color: "#d4956a",
};

export const stitle = {
  fontFamily: '"Playfair Display", serif',

  fontSize: "clamp(20px, 2.2vw, 28px)",

  fontWeight: 700,

  color: "#1a1a2e",

  lineHeight: 1.2,

  marginBottom: "6px",
};

export const stitleDark = {
  color: "#ffffff",
};

export const sdesc = {
  fontSize: "13px",

  color: "#8888aa",

  maxWidth: "640px",

  lineHeight: 1.65,

  marginBottom: "28px",
};

export const sdescDark = {
  color: "rgba(255, 255, 255, 0.5)",
};

export const cb = {
  background: "#ffffff",

  border: "1px solid rgba(26, 26, 46, 0.1)",

  borderRadius: "14px",

  padding: "20px 22px 14px",
};

export const cbd = {
  background: "rgba(255, 255, 255, 0.04)",

  border: "1px solid rgba(255, 255, 255, 0.08)",

  borderRadius: "14px",

  padding: "20px 22px 14px",
};

export const ch = {
  display: "flex",

  alignItems: "flex-start",

  justifyContent: "space-between",

  gap: "12px",

  marginBottom: "16px",
};

export const cl = {
  fontSize: "10px",

  fontWeight: 600,

  textTransform: "uppercase",

  letterSpacing: "0.1em",

  color: "#8888aa",

  marginBottom: "2px",
};

export const clDark = {
  color: "rgba(255, 255, 255, 0.35)",
};

export const ct = {
  fontSize: "15px",

  fontWeight: 600,

  color: "#1a1a2e",

  lineHeight: 1.25,
};

export const ctDark = {
  color: "#ffffff",
};

export const cm = {
  fontSize: "11px",

  color: "#8888aa",

  marginTop: "2px",
};

export const cmDark = {
  color: "rgba(255, 255, 255, 0.35)",
};

export const csrc = {
  fontSize: "10px",

  color: "#8888aa",

  marginTop: "10px",

  paddingTop: "8px",

  borderTop: "1px solid rgba(26, 26, 46, 0.06)",
};

export const csrcDark = {
  borderTopColor: "rgba(255, 255, 255, 0.06)",

  color: "rgba(255, 255, 255, 0.25)",
};

export const tvph = {
  background:
    "linear-gradient(135deg, rgba(26,26,46,0.04) 0%, rgba(184,115,51,0.03) 100%)",

  borderRadius: "10px",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  position: "relative",

  overflow: "hidden",
};

export const tvphBefore = {
  content: '""',

  position: "absolute",

  inset: 0,

  background:
    "repeating-linear-gradient(90deg, rgba(26,26,46,0.02) 0, rgba(26,26,46,0.02) 1px, transparent 1px, transparent 60px), " +
    "repeating-linear-gradient(0deg, rgba(26,26,46,0.02) 0, rgba(26,26,46,0.02) 1px, transparent 1px, transparent 40px)",
};

export const tvic = {
  display: "flex",

  flexDirection: "column",

  alignItems: "center",

  gap: "8px",

  color: "#8888aa",

  fontSize: "11px",

  position: "relative",

  zIndex: 1,
};

export const sc = {
  background: "#ffffff",

  padding: "14px 16px",
};

export const sl = {
  fontSize: "10px",

  fontWeight: 600,

  textTransform: "uppercase",

  letterSpacing: "0.08em",

  color: "#8888aa",

  marginBottom: "4px",
};

export const sv = {
  fontFamily: '"DM Mono", monospace',

  fontSize: "20px",

  fontWeight: 500,

  color: "#1a1a2e",
};

export const ss2 = {
  fontSize: "10px",

  color: "#8888aa",

  marginTop: "2px",
};

export const bdg = {
  fontSize: "10px",

  fontWeight: 700,

  padding: "4px 10px",

  borderRadius: "12px",

  letterSpacing: "0.04em",

  whiteSpace: "nowrap",
};

export const bCu = {
  ...bdg,

  background: "#fbf3ec",

  color: "#7a4a1e",

  border: "1px solid rgba(184, 115, 51, 0.25)",
};

export const bBull = {
  ...bdg,

  background: "#e8f5ed",

  color: "#1a7a4a",
};

export const bBear = {
  ...bdg,

  background: "#fdecea",

  color: "#c0392b",
};

export const bNeu = {
  ...bdg,

  background: "#f3f4f6",

  color: "#4b5563",
};

export const bWarn = {
  ...bdg,

  background: "#fef3c7",

  color: "#92400e",
};

export const ins = {
  display: "flex",

  gap: "12px",

  alignItems: "flex-start",

  borderRadius: "10px",

  padding: "14px 16px",

  marginBottom: "14px",
};

export const ib = {
  ...ins,

  background: "#fbf3ec",

  border: "1px solid rgba(184, 115, 51, 0.25)",
};

export const ig = {
  ...ins,

  background: "rgba(255, 255, 255, 0.04)",

  border: "1px solid rgba(255, 255, 255, 0.1)",
};

export const iw = {
  ...ins,

  background: "#fef3c7",

  border: "1px solid rgba(146, 64, 14, 0.2)",
};

export const ir = {
  ...ins,

  background: "#fdecea",

  border: "1px solid rgba(192, 57, 43, 0.2)",
};

export const ii = {
  fontSize: "16px",

  flexShrink: 0,

  marginTop: "1px",
};

export const it = {
  fontSize: "12px",

  fontWeight: 600,

  color: "#1a1a2e",

  marginBottom: "3px",
};

export const itDark = {
  color: "#ffffff",
};

export const ix = {
  fontSize: "12px",

  color: "#4a4a6a",

  lineHeight: 1.6,
};

export const ixDark = {
  color: "rgba(255, 255, 255, 0.6)",
};

export const ixWarnRed = {
  color: "#4a4a6a",
};

export const dt = {
  width: "100%",

  borderCollapse: "collapse",

  fontSize: "12px",
};

export const dtTh = {
  fontSize: "10px",

  fontWeight: 700,

  textTransform: "uppercase",

  letterSpacing: "0.07em",

  color: "#8888aa",

  padding: "8px 12px",

  textAlign: "left",

  borderBottom: "2px solid rgba(26, 26, 46, 0.1)",
};

export const dtTd = {
  padding: "9px 12px",

  borderBottom: "1px solid rgba(26, 26, 46, 0.05)",

  verticalAlign: "middle",

  color: "#4a4a6a",
};

export const dtTrLastTd = {
  borderBottom: "none",
};

export const dtTrHoverTd = {
  background: "rgba(184, 115, 51, 0.03)",
};

export const dtMono = {
  fontFamily: '"DM Mono", monospace',

  fontSize: "11px",
};

export const dtStrong = {
  color: "#1a1a2e",

  fontWeight: 600,
};

export const flag = {
  fontSize: "15px",

  marginRight: "4px",
};

export const dtThDark = {
  color: "rgba(255, 255, 255, 0.35)",

  borderBottomColor: "rgba(255, 255, 255, 0.08)",
};

export const dtTdDark = {
  color: "rgba(255, 255, 255, 0.7)",

  borderBottomColor: "rgba(255, 255, 255, 0.06)",
};

export const dtTrHoverDark = {
  background: "rgba(184, 115, 51, 0.05)",
};

export const rbar = {
  height: "6px",

  borderRadius: "3px",

  background: "rgba(26, 26, 46, 0.08)",

  overflow: "hidden",

  marginTop: "5px",
};

export const rbarFill = {
  height: "100%",

  borderRadius: "3px",

  background: "#b87333",
};

export const tlWrap = {
  position: "relative",

  paddingLeft: "24px",
};

export const tlWrapBefore = {
  content: '""',

  position: "absolute",

  left: "8px",

  top: "6px",

  bottom: "6px",

  width: "2px",

  background: "rgba(184, 115, 51, 0.2)",

  borderRadius: "1px",
};

export const tlItem = {
  position: "relative",

  marginBottom: "20px",
};

export const tlDot = {
  position: "absolute",

  left: "-20px",

  top: "3px",

  width: "10px",

  height: "10px",

  borderRadius: "50%",

  background: "#b87333",

  border: "2px solid #ffffff",

  boxShadow: "0 0 0 2px rgba(184, 115, 51, 0.25)",
};

export const tlYr = {
  fontSize: "10px",

  fontWeight: 700,

  color: "#7a4a1e",

  textTransform: "uppercase",

  letterSpacing: "0.08em",

  marginBottom: "2px",
};

export const tlTxt = {
  fontSize: "12px",

  color: "#4a4a6a",

  lineHeight: 1.6,
};

export const tlLine = {
  position: "absolute",
  left: "8px",
  top: "6px",
  bottom: "6px",
  width: "2px",
  background: "rgba(184,115,51,0.2)",
  borderRadius: "1px",
};

export const gaugeWrap = {
  position: "relative",

  display: "inline-block",
};

export const gaugeCenter = {
  position: "absolute",

  top: "50%",

  left: "50%",

  transform: "translate(-50%, -50%)",

  textAlign: "center",
};

export const ccInput = {
  width: "100%",

  padding: "9px 12px",

  border: "1px solid rgba(184, 115, 51, 0.25)",

  borderRadius: "7px",

  fontSize: "14px",

  fontFamily: '"DM Mono", monospace',

  background: "#fff",
};

export const ccSelect = {
  width: "100%",

  padding: "9px 12px",

  border: "1px solid rgba(184, 115, 51, 0.25)",

  borderRadius: "7px",

  fontSize: "13px",

  fontFamily: '"DM Sans", sans-serif',

  background: "#fff",
};

export const ccResult = {
  background: "#fff",

  border: "1px solid rgba(184, 115, 51, 0.25)",

  borderRadius: "10px",

  padding: "14px 16px",
};

export const ccV = {
  fontFamily: '"DM Mono", monospace',

  fontSize: "26px",

  fontWeight: 500,

  color: "#7a4a1e",
};

export const ccS = {
  fontSize: "11px",

  color: "#8888aa",

  marginTop: "3px",
};

export const footer = {
  background: "#1a1a2e",

  padding: "40px 32px 36px",

  borderTop: "1px solid rgba(184, 115, 51, 0.18)",

  textAlign: "center",

  marginTop: 0,
};

export const footerLogo = {
  fontFamily: '"Playfair Display", serif',

  fontSize: "18px",

  color: "#b87333",

  display: "block",

  marginBottom: "10px",
};

export const footerP = {
  fontSize: "11px",

  color: "rgba(255, 255, 255, 0.3)",

  lineHeight: 1.8,
};

export const footerLinks = {
  display: "flex",

  gap: "16px",

  justifyContent: "center",

  marginTop: "12px",

  flexWrap: "wrap",
};

export const footerLinksA = {
  fontSize: "11px",

  color: "rgba(255, 255, 255, 0.3)",
};

export const footerLinksAHover = {
  color: "#d4956a",
};

export const trng = {
  display: "flex",

  gap: "4px",

  flexShrink: 0,
};

export const tb = {
  fontSize: "10px",

  fontWeight: 600,

  padding: "4px 8px",

  borderRadius: "5px",

  border: "1px solid rgba(26, 26, 46, 0.1)",

  color: "#8888aa",

  background: "none",

  transition: "all 0.15s",
};

export const tbHover = {
  color: "#1a1a2e",

  borderColor: "rgba(184, 115, 51, 0.25)",
};

export const tbOn = {
  background: "#fbf3ec",

  color: "#7a4a1e",

  borderColor: "rgba(184, 115, 51, 0.25)",
};
