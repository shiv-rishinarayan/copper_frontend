import Navbar from "@/components/Navbar";
import Hero from "@/components/News/Hero";
import React from "react";

const news = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-14">
        {" "}
        <Hero />
      </div>
    </div>
  );
};

export default news;
