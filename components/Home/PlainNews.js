import React, { useState, useEffect } from "react";
import { IoTimerOutline } from "react-icons/io5";
import axios from "axios";

const PlainNews = () => {
  const [newsData, setNewsData] = useState([]); // State to hold news data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const response = await axios.get(
          "https://platinumdjango-production.up.railway.app/api/platinum_news/"
        ); // Replace with your API URL
        const data = response.data;

        if (data && Array.isArray(data) && data.length > 0) {
          setNewsData(data); // Set data if valid
        } else {
          setNewsData([]); // Set empty array if data is empty or invalid
        }
      } catch (err) {
        setError("Failed to fetch news data"); // Set error message if the API call fails
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchNewsData();
  }, []); // Empty dependency array to fetch data only once on component mount

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Conditional rendering based on loading, error, and data
  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if API call fails
  }

  if (!newsData || newsData.length === 0) {
    return <div>No data available</div>; // Show no data message if no valid data
  }

  return (
    <div>
      <div className="">
        <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
          Latest Platinum News
        </h1>

        <div className="flex flex-wrap md:flex-nowrap gap-5">
          <div className="w-full grid grid-cols-1 gap-3">
            {newsData.slice(0, 6).map((news, index) => (
              <a
                key={index}
                href={news.link}
                className="bg-white border-b border-black/10 pb-4 rounded-sm overflow-hidden block group transition-shadow duration-300"
              >
                <div>
                  <h2 className="group-hover:underline text-[16px] md:text-[17px] text-primary mt-1 leading-6">
                    {news.title}
                  </h2>
                  <p className="text-gray-500 text-xs mt-2 flex gap-x-1.5 items-center">
                    {/* <span>
                      <IoTimerOutline className="text-sm" />
                    </span>{" "} */}
                    {news.date && formatDate(news.date)}{" "}
                    {/* Format and display date */}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlainNews;
