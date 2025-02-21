import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import P101Cards from "@/components/P101/P101Cards";
import P101Hero from "@/components/P101/P101Hero";
import React from "react";
import SEO from "@/components/SEO";

const P101 = () => {
  return (
    <div>
      <SEO
        title="PGM 101 - Platinum Group Metals Guide & Glossary"
        description="Explore the world of Platinum Group Metals (PGMs) with our comprehensive guide. Learn about platinum, palladium, rhodium, iridium, ruthenium, and osmium, their properties, uses, and market significance."
        keywords="PGM 101, Platinum Group Metals, platinum, palladium, rhodium, iridium, ruthenium, osmium, metal properties, PGM glossary, precious metals"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/P101"
      />
      <Navbar />
      <P101Hero />
      <P101Cards />

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default P101;
