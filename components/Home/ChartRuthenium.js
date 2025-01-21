import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { color } from "framer-motion";
import { BASE_URL2 } from "@/src/api/authAPI";
import { SPORT_PRICE_CHART } from "@/src/api/homeAPI";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartRuthenium = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "https://platinumdjango-production.up.railway.app/api/spot-price-chart"
        // );
        const response = await axios.get(BASE_URL2 + SPORT_PRICE_CHART);
        const result = response.data;

        if (!result || result.length === 0) {
          setError("No data available");
          setData(null);
        } else {
          setData(result[0].price_chart);
          setError(null);
        }
      } catch (err) {
        setError("Failed to fetch data");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const chartOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false, // Hide top menu on the chart
      },
      zoom: {
        enabled: false, // Disable zooming
      },
    },
    xaxis: {
      categories: data ? data.map((item) => item.DateTime) : [],
      title: {
        display: false, // Hide the title for the x-axis
      },
      labels: {
        show: false, // Hide x-axis labels
      },
      axisBorder: {
        show: false, // Hide the x-axis line border
      },
      axisTicks: {
        show: false, // Hide ticks on the x-axis
      },
    },
    yaxis: {
      title: {
        display: false, // Hide the title for the y-axis
      },
      labels: {
        show: false, // Hide y-axis labels
      },
      axisBorder: {
        show: false, // Hide the y-axis line border
      },
      axisTicks: {
        show: false, // Hide ticks on the y-axis
      },
    },
    stroke: {
      width: 2, // Set a thicker line for more wave visibility
      curve: "smooth", // This creates the wave-like smooth curve
    },
    theme: {
      mode: "light",
    },
    title: {
      display: false, // Hide the chart title if not needed
    },
    colors: ["#0089A4"], // Define the chart line color
  };

  const chartSeries = [
    {
      name: "Ruthenium",
      data: data
        ? data.map((item) => parseFloat(item.Ruthenium.replace(/,/g, "")))
        : [],
    },
  ];

  return (
    <div className="-ml-4 -mt-3">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={280}
        width="100%"
      />
    </div>
  );
};

export default ChartRuthenium;
