import { useState, useEffect } from "react";
import YearCalendar from "./YearCalendar";
import Navbar from "../Navbar";
import Loader from "../Loader";
import { CALENDAR } from "@/src/api/platinumAPI";

const Calendar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2025); // State for the year

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CALENDAR); // Replace with your API URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const events = await response.json();
        setData(events);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Filter events based on the selected year
  const filteredEvents = data.filter(
    (event) =>
      new Date(event.start_date).getFullYear() === selectedYear ||
      new Date(event.end_date).getFullYear() === selectedYear
  );

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-20 mt-[84px]">
        {/* Pass selectedYear and setSelectedYear to YearCalendar */}
        <YearCalendar
          calendarData={filteredEvents}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear} // Pass state change function
        />
      </div>
    </>
  );
};

export default Calendar;
