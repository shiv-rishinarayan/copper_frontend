import CalendarPage from "@/components/Calendar/CalendarPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import SEO from "@/components/SEO";

const calendar = () => {
  return (
    <div>
      <SEO
        title="Copper Market Calendar  - Key Events & Industry Updates"
        description="Stay informed with the latest Copper market events in 2025. Track key industry conferences, financial updates, and supply-demand shifts with our comprehensive market calendar."
        keywords="Copper market calendar 2025, Copper and Copper Alloys events, Copper industry conferences, market updates, financial events, supply and demand trends"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/calendar"
      />
      <Navbar />
      <CalendarPage />

      <div className="mt-10 md:mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default calendar;
