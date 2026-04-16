import React from "react";
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
  const navItems = [
    { name: "Prices", id: "prices", active: true },
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

  return (
    <>
      <GlobalStyles />
      <nav style={styles.snav} className="snav-res" aria-label="Page sections">
        <div style={styles.snavI} className="snav-i-res">
          {navItems.map((item) => (
            <button
              key={item.id}
              style={{
                ...styles.sn,
                ...(item.active ? styles.snOn : {}),
              }}
              onMouseEnter={(e) => {
                if (!item.active)
                  Object.assign(e.currentTarget.style, styles.snHover);
              }}
              onMouseLeave={(e) => {
                if (!item.active)
                  Object.assign(e.currentTarget.style, styles.sn);
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
