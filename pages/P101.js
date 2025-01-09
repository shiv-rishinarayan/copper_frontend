import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import P101Cards from "@/components/P101/P101Cards";
import P101Hero from "@/components/P101/P101Hero";
import React from "react";

const P101 = () => {
  return (
    <div>
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
