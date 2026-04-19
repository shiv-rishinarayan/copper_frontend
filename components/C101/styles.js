export const cu = "#B87333";
export const cuL = "#D4956A";
export const cuD = "#7A4A1E";
export const cuBg = "#FBF3EC";
export const cuT = "rgba(184,115,51,.08)";

export const gold = "#C9A84C";
export const goldD = "#8B6914";

export const ink = "#1A1A2E";
export const ink2 = "#2D2D44";
export const ink3 = "#4A4A6A";
export const muted = "#777799";
export const bdr = "rgba(26,26,46,.1)";
export const page = "#F7F5F0";
export const white = "#FFFFFF";

export const grn = "#1A7A4A";
export const grnBg = "#E8F5ED";
export const red = "#C0392B";
export const redBg = "#FDECEA";
export const blu = "#1E3A5F";
export const bluBg = "#EFF6FF";

export const max = "1700px";
export const r = "10px";
export const rl = "14px";

export const skipLink = {
  position: "absolute",
  top: "-40px",
  left: 0,
  background: cu,
  color: ink,
  padding: "8px 16px",
  fontSize: "13px",
  fontWeight: 700,
  zIndex: 1000,
  borderRadius: "0 0 6px 0",
  transition: "top .2s",
};

// ─────────────────────────────────────────────────────────────
//  NAV
// ─────────────────────────────────────────────────────────────
export const nav = {
  background: ink,
  height: "56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 28px",
  position: "sticky",
  top: 0,
  zIndex: 100,
  borderBottom: "1px solid rgba(184,115,51,.2)",
};

export const navLogo = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "17px",
  fontWeight: 700,
  color: cu,
  textDecoration: "none",
};

export const navLinks = {
  display: "flex",
  gap: "2px",
  listStyle: "none",
  padding: 0,
  margin: 0,
};

export const navLinksA = {
  fontSize: "12px",
  color: "rgba(255,255,255,.45)",
  padding: "5px 10px",
  borderRadius: "6px",
  textDecoration: "none",
};

export const navLinksAHover = {
  color: "#E8A87C",
  background: "rgba(184,115,51,.12)",
};

// ─────────────────────────────────────────────────────────────
//  BREADCRUMB
// ─────────────────────────────────────────────────────────────
export const bread = {
  background: white,
  borderBottom: "1px solid rgba(26,26,46,.07)",
  padding: "7px 24px",
  fontSize: "11px",
  color: muted,
};

export const breadA = {
  color: muted,
};

// ─────────────────────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────────────────────
export const hero = {
  background: ink,
  padding: "52px 0 48px",
  position: "relative",
  overflow: "hidden",
};

// hero::before is a pseudo-element — replicate via a sibling <div> with:
export const heroBefore = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(ellipse 50% 80% at 5% 50%,rgba(184,115,51,.08),transparent),radial-gradient(ellipse 40% 60% at 95% 30%,rgba(122,74,30,.06),transparent)",
  pointerEvents: "none",
};

export const heroInner = {
  maxWidth: max,
  margin: "0 auto",
  padding: "0 24px",
  position: "relative",
};

export const heroEyebrow = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: ".15em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,.3)",
  marginBottom: "12px",
};

export const heroEyebrowSpan = {
  color: cu,
};

export const h1 = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "clamp(28px,4.5vw,46px)",
  fontWeight: 700,
  color: white,
  lineHeight: 1.12,
  marginBottom: "10px",
};

export const h1Em = {
  fontStyle: "italic",
  color: cuL,
};

export const heroSub = {
  fontSize: "14px",
  color: "rgba(255,255,255,.48)",
  maxWidth: "900px",
  lineHeight: 1.8,
  marginBottom: "32px",
};

export const heroMeta = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  marginBottom: "28px",
};

export const heroMetaSpan = {
  fontSize: "12px",
  color: "rgba(255,255,255,.3)",
};

export const heroMetaStrong = {
  color: "rgba(255,255,255,.6)",
};

// ─────────────────────────────────────────────────────────────
//  PRICE STRIP
// ─────────────────────────────────────────────────────────────
export const pstrip = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "1px",
  background: "rgba(255,255,255,.06)",
  borderRadius: "12px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,.07)",
};

export const ps = {
  background: "rgba(255,255,255,.03)",
  padding: "14px 16px",
};

export const psL = {
  fontSize: "10px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: ".1em",
  color: "rgba(255,255,255,.25)",
  marginBottom: "4px",
};

export const psV = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "18px",
  color: white,
  marginBottom: "2px",
};

export const psS = {
  fontSize: "10px",
  color: "rgba(255,255,255,.22)",
};

export const cuTxt = { color: cu };
export const grnTxt = { color: "#4CAF50" };
export const redTxt = { color: "#EF5350" };

// ─────────────────────────────────────────────────────────────
//  DATA / CTA BANNER
// ─────────────────────────────────────────────────────────────
export const dataBanner = {
  background: "linear-gradient(135deg,#2D1A0A 0%,#3D2515 50%,#1A1A2E 100%)",
  borderRadius: "12px",
  padding: "16px 22px",
  margin: "8px 0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  border: "1px solid rgba(184,115,51,.2)",
};

export const dbLabel = {
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: ".12em",
  color: cu,
  marginBottom: "3px",
};

export const dbTitle = {
  fontSize: "14px",
  fontWeight: 700,
  color: white,
  marginBottom: "2px",
};

export const dbSub = {
  fontSize: "11px",
  color: "rgba(255,255,255,.3)",
};

export const dbBtn = {
  fontSize: "12px",
  fontWeight: 600,
  padding: "8px 16px",
  borderRadius: "7px",
  whiteSpace: "nowrap",
  textDecoration: "none",
  background: cu,
  color: white,
  cursor: "pointer",
};

// ─────────────────────────────────────────────────────────────
//  KEY TAKEAWAYS
// ─────────────────────────────────────────────────────────────
export const takeaways = {
  background: cuT,
  border: "1px solid rgba(184,115,51,.22)",
  borderRadius: rl,
  padding: "20px 24px",
  margin: "0 0 8px",
};

export const takeawaysLabel = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: cuD,
  marginBottom: "12px",
};

export const takeawaysUl = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

export const takeawaysLi = {
  fontSize: "13px",
  color: ink3,
  padding: "5px 0",
  borderBottom: "1px solid rgba(184,115,51,.12)",
  display: "flex",
  gap: "10px",
  lineHeight: 1.6,
};

export const takeawaysLiLast = {
  fontSize: "13px",
  color: ink3,
  padding: "5px 0",
  display: "flex",
  gap: "10px",
  lineHeight: 1.6,
};

// render as a <span> before li text
export const takeawaysBullet = {
  color: cu,
  flexShrink: 0,
  marginTop: "1px",
};

// ─────────────────────────────────────────────────────────────
//  TABLE OF CONTENTS
// ─────────────────────────────────────────────────────────────
export const toc = {
  background: white,
  border: `1px solid ${bdr}`,
  borderRadius: rl,
  padding: "20px 24px",
  margin: "0 0 16px",
};

export const tocTitle = {
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: ".1em",
  color: muted,
  marginBottom: "12px",
};

export const tocOl = {
  paddingLeft: "18px",
  margin: 0,
};

export const tocLi = {
  fontSize: "13px",
  color: ink3,
  lineHeight: 1.8,
};

export const tocA = {
  color: cuD,
  textDecoration: "none",
};

export const tocCols = {
  columns: 2,
  columnGap: "24px",
};

// ─────────────────────────────────────────────────────────────
//  LAYOUT / ARTICLE WRAPPER
// ─────────────────────────────────────────────────────────────
export const w = {
  maxWidth: max,
  margin: "0 auto",
  padding: "0 24px",
};

export const proseWrap = {
  padding: "32px 0 48px",
};

export const sec = {
  marginBottom: "40px",
};

export const secLabel = {
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: ".14em",
  color: cuD,
  marginBottom: "6px",
};

export const h2 = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "clamp(22px,3vw,30px)",
  fontWeight: 700,
  color: ink,
  lineHeight: 1.18,
  marginBottom: "12px",
};

export const h3 = {
  fontSize: "17px",
  fontWeight: 700,
  color: ink,
  margin: "24px 0 8px",
};

export const p = {
  fontSize: "15px",
  lineHeight: 1.82,
  color: ink3,
  marginBottom: "14px",
};

export const pLast = {
  fontSize: "15px",
  lineHeight: 1.82,
  color: ink3,
  marginBottom: 0,
};

export const pStrong = {
  color: ink,
};

export const li = {
  fontSize: "15px",
  lineHeight: 1.75,
  color: ink3,
};

// ─────────────────────────────────────────────────────────────
//  CALLOUTS
// ─────────────────────────────────────────────────────────────
export const callout = {
  borderRadius: r,
  padding: "16px 20px",
  margin: "18px 0",
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
};

export const calloutCu = {
  ...callout,
  background: cuT,
  border: "1px solid rgba(184,115,51,.22)",
};

export const calloutRed = {
  ...callout,
  background: redBg,
  border: "1px solid rgba(192,57,43,.18)",
};

export const calloutGrn = {
  ...callout,
  background: grnBg,
  border: "1px solid rgba(26,122,74,.18)",
};

export const calloutBlu = {
  ...callout,
  background: bluBg,
  border: "1px solid rgba(30,58,95,.15)",
};

export const calloutWarn = {
  ...callout,
  background: "#FEF3C7",
  border: "1px solid rgba(180,140,20,.25)",
};

export const calloutIcon = {
  fontSize: "18px",
  flexShrink: 0,
  marginTop: "1px",
};

export const calloutTitle = {
  fontSize: "13px",
  fontWeight: 700,
  color: ink,
  marginBottom: "4px",
};

export const calloutText = {
  fontSize: "13px",
  color: ink3,
  lineHeight: 1.7,
  margin: 0,
};

// ─────────────────────────────────────────────────────────────
//  TABLES
// ─────────────────────────────────────────────────────────────
export const tblWrap = {
  overflowX: "auto",
  margin: "16px 0",
};

export const ctbl = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "13px",
  margin: "16px 0",
};

export const ctblTh = {
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: ".07em",
  color: muted,
  padding: "9px 14px",
  textAlign: "left",
  borderBottom: `2px solid ${bdr}`,
};

export const ctblThCu = {
  ...ctblTh,
  color: cuD,
};

export const ctblTd = {
  padding: "10px 14px",
  borderBottom: "1px solid rgba(26,26,46,.05)",
  verticalAlign: "top",
  color: ink3,
  lineHeight: 1.55,
};

export const ctblTdFirst = {
  ...ctblTd,
  fontWeight: 600,
  color: ink,
};

export const ctblTdLast = {
  ...ctblTd,
  borderBottom: "none",
};

export const ctblTrHover = {
  background: "rgba(26,26,46,.02)",
};

// ─────────────────────────────────────────────────────────────
//  WAYS  (ownership / option cards)
// ─────────────────────────────────────────────────────────────
export const ways = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
  margin: "16px 0",
};

export const way = {
  background: white,
  border: `1px solid ${bdr}`,
  borderRadius: "12px",
  padding: "16px 18px",
  borderLeft: `3px solid ${cu}`,
};

export const wayDim = {
  ...way,
  borderLeftColor: "rgba(26,26,46,.2)",
  opacity: 0.82,
};

export const wayLabel = {
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: ".1em",
  color: cuD,
  marginBottom: "4px",
};

export const wayTitle = {
  fontSize: "15px",
  fontWeight: 700,
  color: ink,
  marginBottom: "6px",
};

export const wayText = {
  fontSize: "13px",
  color: ink3,
  lineHeight: 1.65,
  margin: 0,
};

export const wayTag = {
  display: "inline-block",
  fontSize: "10px",
  fontWeight: 700,
  padding: "2px 8px",
  borderRadius: "10px",
  marginTop: "8px",
};

export const tagBest = {
  ...wayTag,
  background: grnBg,
  color: grn,
};

export const tagOk = {
  ...wayTag,
  background: cuT,
  color: cuD,
};

export const tagAvoid = {
  ...wayTag,
  background: redBg,
  color: red,
};

// ─────────────────────────────────────────────────────────────
//  FORECAST CARDS
// ─────────────────────────────────────────────────────────────
export const fcast = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "14px",
  margin: "20px 0",
};

export const fc = {
  borderRadius: rl,
  padding: "18px",
  border: `1px solid ${bdr}`,
};

export const fcGrn = {
  ...fc,
  borderTop: `3px solid ${grn}`,
};

export const fcCu = {
  ...fc,
  borderTop: `3px solid ${cu}`,
};

export const fcRed = {
  ...fc,
  borderTop: `3px solid ${red}`,
};

export const fcTag = {
  fontSize: "11px",
  fontWeight: 700,
  marginBottom: "8px",
};

export const fcPrice = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "22px",
  fontWeight: 500,
  color: ink,
  marginBottom: "8px",
};

export const fcText = {
  fontSize: "12px",
  color: ink3,
  lineHeight: 1.65,
};

export const fcNote = {
  fontSize: "11px",
  color: muted,
  marginTop: "8px",
};

// ─────────────────────────────────────────────────────────────
//  STAT BAND
// ─────────────────────────────────────────────────────────────
export const statBand = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "1px",
  background: bdr,
  borderRadius: "10px",
  overflow: "hidden",
  margin: "16px 0",
};

export const stat = {
  background: white,
  padding: "14px 16px",
  textAlign: "center",
};

export const statVal = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "22px",
  fontWeight: 500,
  color: ink,
  lineHeight: 1,
};

export const statLbl = {
  fontSize: "10px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: ".08em",
  color: muted,
  marginTop: "4px",
};

export const statSub = {
  fontSize: "11px",
  color: ink3,
  marginTop: "2px",
};

// ─────────────────────────────────────────────────────────────
//  GLOSSARY
// ─────────────────────────────────────────────────────────────
export const gloss = {
  columns: 2,
  columnGap: "28px",
  margin: "16px 0",
};

export const glossDl = {
  breakInside: "avoid",
  marginBottom: "14px",
};

export const glossDt = {
  fontSize: "13px",
  fontWeight: 700,
  color: ink,
  marginBottom: "3px",
};

export const glossDd = {
  fontSize: "13px",
  color: ink3,
  lineHeight: 1.65,
};

// ─────────────────────────────────────────────────────────────
//  FAQ
// ─────────────────────────────────────────────────────────────
export const faqWrap = {
  border: `1px solid ${bdr}`,
  borderRadius: "12px",
  overflow: "hidden",
  background: white,
  margin: "16px 0",
};

export const faqItem = {
  borderBottom: "1px solid rgba(26,26,46,.06)",
};

export const faqItemLast = {
  borderBottom: "none",
};

export const faqBtn = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px 20px",
  background: white,
  border: "none",
  cursor: "pointer",
  fontFamily: '"DM Sans", sans-serif',
  fontSize: "14px",
  fontWeight: 600,
  color: ink,
  textAlign: "left",
  gap: "16px",
};

export const faqBtnActive = {
  ...faqBtn,
  background: cuBg,
};

export const faqArr = {
  fontSize: "10px",
  color: muted,
  flexShrink: 0,
  transition: "transform .2s",
};

export const faqArrOpen = {
  ...faqArr,
  transform: "rotate(180deg)",
};

export const faqBody = {
  display: "block",
  padding: "4px 20px 16px",
  background: cuBg,
  fontSize: "14px",
  color: ink3,
  lineHeight: 1.78,
};

export const faqBodyHidden = {
  display: "none",
};

// ─────────────────────────────────────────────────────────────
//  EDITORIAL
// ─────────────────────────────────────────────────────────────
export const editorial = {
  background: cuT,
  border: "1px solid rgba(184,115,51,.2)",
  borderRadius: "14px",
  padding: "22px 26px",
  display: "flex",
  gap: "18px",
  alignItems: "flex-start",
};

export const editorialIcon = {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  background: ink,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  fontSize: "20px",
};

// ─────────────────────────────────────────────────────────────
//  NEWSLETTER
// ─────────────────────────────────────────────────────────────
export const newsletter = {
  background: ink,
  borderRadius: "14px",
  padding: "18px 22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  margin: "8px 0 20px",
};

export const nlLabel = {
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: ".12em",
  color: cu,
  marginBottom: "3px",
};

export const nlTitle = {
  fontSize: "14px",
  fontWeight: 700,
  color: white,
  marginBottom: "2px",
};

export const nlSub = {
  fontSize: "12px",
  color: "rgba(255,255,255,.35)",
};

export const nlBtn = {
  background: cuL,
  color: ink,
  fontSize: "13px",
  fontWeight: 700,
  padding: "10px 18px",
  borderRadius: "8px",
  whiteSpace: "nowrap",
  textDecoration: "none",
  flexShrink: 0,
  cursor: "pointer",
};

// ─────────────────────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────────────────────
export const footer = {
  background: ink,
  padding: "32px",
  textAlign: "center",
  borderTop: "1px solid rgba(184,115,51,.15)",
};

export const footerLogo = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "17px",
  color: cu,
  display: "block",
  marginBottom: "8px",
  textDecoration: "none",
};

export const footerP = {
  fontSize: "11px",
  color: "rgba(255,255,255,.22)",
  lineHeight: 1.9,
};

export const footerLinks = {
  display: "flex",
  gap: "14px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "10px",
};

export const footerLinksA = {
  fontSize: "11px",
  color: "rgba(255,255,255,.22)",
};
