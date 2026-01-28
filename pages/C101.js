import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import C101Cards from "@/components/C101/C101Cards";
import C101Hero from "@/components/C101/C101Hero";
import React from "react";
import SEO from "@/components/SEO";

const C101 = () => {
  return (
    <div>
      <SEO
        title="Copper 101 - Copper Alloys Guide & Glossary"
        description="Explore the world of Copper and its alloys with our comprehensive guide. Learn about copper, brass, bronze, aluminum bronze, nickel silver, and beryllium copper, their properties, uses, and market significance."
        keywords="Copper 101, Copper Alloys, copper, brass, bronze, aluminum bronze, nickel silver, beryllium copper, metal properties, copper glossary, industrial metals"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/C101"
      />
      <Navbar />
      <C101Hero />
      <C101Cards />

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default C101;