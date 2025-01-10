import CalendarPage from "@/components/Calendar/CalendarPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const calendar = () => {
  return (
    <div>
      <Navbar />
      <CalendarPage />

      <div className="mt-10 md:mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default calendar;
