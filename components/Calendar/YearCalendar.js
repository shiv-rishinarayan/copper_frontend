import { useState } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { ChevronLeft, ChevronRight } from "lucide-react";

dayjs.extend(isBetween);

const getDaysInMonth = (year, month) => {
  const daysInMonth = dayjs(`${year}-${month + 1}`).daysInMonth();
  const startDay = dayjs(`${year}-${month + 1}-01`).day();

  return [
    ...new Array(startDay).fill(null),
    ...new Array(daysInMonth).fill(null).map((_, i) => i + 1),
  ];
};

const isDateInRange = (start_date, end_date, date) => {
  const startDate = dayjs(start_date);
  const endDate = dayjs(end_date);
  return date.isBetween(startDate, endDate, "day", "[]");
};

const formatEventDate = (start_date, end_date) => {
  const formattedStartDate = dayjs(start_date).format("MMM D, YYYY");
  const formattedEndDate = end_date
    ? dayjs(end_date).format("MMM D, YYYY")
    : null;

  return formattedEndDate
    ? `${formattedStartDate} - ${formattedEndDate}`
    : formattedStartDate;
};

const YearCalendar = ({ calendarData, selectedYear, setSelectedYear }) => {
  const [hoveredDate, setHoveredDate] = useState(null);
  const eventColors = [
    "bg-[#bc7ebc]",
    "bg-[#d88e9b]",
    "bg-[#f1b316]",
    "bg-[#7abde1]",
  ];

  const handlePrevYear = () => {
    setSelectedYear((prevYear) => prevYear - 1);
  };

  const handleNextYear = () => {
    setSelectedYear((prevYear) => prevYear + 1);
  };

  const getEventsForDate = (date) => {
    return calendarData.filter((event) =>
      isDateInRange(event.start_date, event.end_date, date)
    );
  };

  return (
    <div className="mx-auto px-0 md:px-4 py-8">
      <div className="flex items-center justify-center mb-12">
        <button
          onClick={handlePrevYear}
          className="mr-4 text-black1/90 hover:text-green"
        >
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-[22px] md:text-3xl font-bold text-center text-black1/90 frank">
          {selectedYear} Yearly Calendar
        </h2>
        <button
          onClick={handleNextYear}
          className="ml-4 text-black1/90 hover:text-green"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2">
        {Array.from({ length: 12 }).map((_, month) => (
          <div
            key={month}
            className="border border-date/20 rounded-md p-4 relative"
          >
            <h3 className="text-lg font-medium mb-4 text-center text-black">
              {dayjs().month(month).format("MMMM")}
            </h3>
            <div className="grid grid-cols-7 gap-1 text-center text-[12.3px] sm:text-[13px] text-black/80">
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <div
                  key={day}
                  className="w-5 h-5 md:w-6 md:h-6 text-[12.3px] sm:text-[13px]"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 mt-2 text-[12.3px] sm:text-[13px] relative">
              {getDaysInMonth(selectedYear, month).map((day, idx) => {
                const date = day
                  ? dayjs(`${selectedYear}-${month + 1}-${day}`)
                  : null;
                const events = date ? getEventsForDate(date) : [];
                const hasEvents = events.length > 0;
                const eventColor = hasEvents
                  ? eventColors[
                      calendarData.indexOf(events[0]) % eventColors.length
                    ]
                  : "bg-accent/10";
                const textColor = hasEvents ? "text-black" : "text-black/70";

                return (
                  <div
                    key={idx}
                    className={`w-5 h-5 md:w-6 md:h-6 flex items-center justify-center cursor-pointer transition-colors ${
                      day ? `${eventColor} ${textColor}` : ""
                    } relative`}
                    onMouseEnter={() => setHoveredDate(date)}
                    onMouseLeave={() => setHoveredDate(null)}
                  >
                    <span>{day}</span>
                    {hasEvents && hoveredDate?.isSame(date, "day") && (
                      <div className="absolute z-50 left-full -ml-16 sm:ml-1 top-1/2 transform -translate-y-1/2 min-w-[100px] sm:min-w-[150px] bg-yellow-300 text-black text-sm rounded-md px-3 py-2 shadow-lg">
                        {events.map((event, index) => (
                          <div
                            key={index}
                            className="flex items-start mb-1 last:mb-0"
                          >
                            <span className="mr-2 flex-shrink-0">*</span>
                            <span className="flex-grow">{event.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="my-20 space-y-6">
        {calendarData.map((event, index) => (
          <div
            key={index}
            className="bg-accent/10 text-black1/90 p-6 rounded-lg border border-date/20 flex flex-col md:flex-row overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center pr-6 border-b md:border-r border-black1/5 md:border-b-0 mb-4 md:mb-0">
              <span className="text-lg font-bold pb-3 md:pb-0">
                {formatEventDate(event.start_date, event.end_date)}
              </span>
            </div>

            <div className="flex-grow pl-0 md:pl-6">
              <h3 className="text-xl font-bold text-green2 mb-3 frank">
                {event.title}
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold mr-2 text-lightgray">
                    Location:
                  </span>
                  <a
                    href={event.location_link}
                    className="transition-colors text-lightgray"
                  >
                    {event.location}
                  </a>
                </p>
                <p>
                  <span className="font-semibold mr-2 text-lightgray">
                    Sponsor:
                  </span>
                  <a
                    href={event.sponsor_link}
                    className="hover:text-blue-400 transition-colors text-lightgray"
                  >
                    {event.sponsor}
                  </a>
                </p>
                {event.contact !== "N/A" && (
                  <p>
                    <span className="font-semibold mr-2 text-lightgray">
                      Contact:
                    </span>
                    <span className="text-lightgray">{event.contact}</span>
                  </p>
                )}
                <p className="mt-3 text-lightgray">{event.description}</p>
                <div className="mt-4">
                  <a
                    href={event.url}
                    target="_blank"
                    className="inline-flex items-center py-1 text-black/60 hover:text-accent text-[11px] md:text-[14px]"
                  >
                    View More
                    <i className="ri-arrow-right-s-line ml-1 text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearCalendar;
