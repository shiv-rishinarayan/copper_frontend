import React, { useEffect } from "react";
import * as styles from "./styles";

const GlobalStyles = () => (
  <style>{`
    @keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes ld { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

    .snav-res::-webkit-scrollbar { display: none; }

    @media (max-width: 768px) {
      .snav-i-res { padding: 0 20px !important; }
    }
  `}</style>
);

const SubNav = () => {
  const [activeSection, setActiveSection] = React.useState("prices");

  const navItems = [
    { name: "Prices", id: "prices" },
    { name: "Inventory", id: "inventory" },
    { name: "TC/RCs", id: "tcrcs" },
    { name: "Dr. Copper & Macro", id: "macro" },
    { name: "Mine Supply", id: "supply" },
    { name: "Demand", id: "demand" },
    { name: "Price History", id: "copper-price-history" },
    { name: "What Drives Price", id: "what-drives-copper-price" },
    { name: "Scrap Prices", id: "scrap-copper-prices" },
    { name: "Forecast", id: "copper-price-forecast" },
    { name: "Deficit & Outlook", id: "deficit" },
    { name: "Mining Stocks", id: "stocks" },
    { name: "Calculator", id: "calculator" },
    { name: "FAQ", id: "faq" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalStyles />
      <nav style={styles.snav} className="snav-res" aria-label="Page sections">
        <div style={styles.snavI} className="snav-i-res">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              style={{
                ...styles.sn,
                ...(activeSection === item.id ? styles.snOn : {}),
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SubNav;
