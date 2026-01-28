// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import dynamic from "next/dynamic";
// import { color } from "framer-motion";
// import { SPORT_PRICE_CHART } from "@/src/api/copperAPI";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const ChartRhodium = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(SPORT_PRICE_CHART);
//         const result = response.data;

//         if (!result || result.length === 0) {
//           setError("No data available");
//           setData(null);
//         } else {
//           setData(result[0].price_chart);
//           setError(null);
//         }
//       } catch (err) {
//         setError("Failed to fetch data");
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   const chartOptions = {
//     chart: {
//       type: "line",
//       toolbar: {
//         show: false, // Hide top menu on the chart
//       },
//       zoom: {
//         enabled: false, // Disable zooming
//       },
//     },
//     xaxis: {
//       categories: data ? data.map((item) => item.DateTime) : [],
//       title: {
//         display: false, // Hide the title for the x-axis
//       },
//       labels: {
//         show: false, // Hide x-axis labels
//       },
//       axisBorder: {
//         show: false, // Hide the x-axis line border
//       },
//       axisTicks: {
//         show: false, // Hide ticks on the x-axis
//       },
//     },
//     yaxis: {
//       title: {
//         display: false, // Hide the title for the y-axis
//       },
//       labels: {
//         show: false, // Hide y-axis labels
//       },
//       axisBorder: {
//         show: false, // Hide the y-axis line border
//       },
//       axisTicks: {
//         show: false, // Hide ticks on the y-axis
//       },
//     },
//     stroke: {
//       width: 2, // Set a thicker line for more wave visibility
//       curve: "smooth", // This creates the wave-like smooth curve
//     },
//     theme: {
//       mode: "light",
//     },
//     title: {
//       display: false, // Hide the chart title if not needed
//     },
//     colors: ["#0089A4"], // Define the chart line color
//   };

//   const chartSeries = [
//     {
//       name: "Rhodium",
//       data: data
//         ? data.map((item) => parseFloat(item.Rhodium.replace(/,/g, "")))
//         : [],
//     },
//   ];

//   return (
//     <div className="-ml-4 -mt-3">
//       <Chart
//         options={chartOptions}
//         series={chartSeries}
//         type="line"
//         height={280}
//         width="100%"
//       />
//     </div>
//   );
// };

// export default ChartRhodium;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import dynamic from "next/dynamic";
// import { SPORT_PRICE_CHART } from "@/src/api/copperAPI";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const ChartRhodium = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(SPORT_PRICE_CHART);
//         const result = response.data;

//         if (!result || result.length === 0) {
//           setError("No data available");
//           setData(null);
//         } else {
//           setData(result[0].price_chart);
//           setError(null);
//         }
//       } catch (err) {
//         setError("Failed to fetch data");
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   const chartOptions = {
//     chart: {
//       type: "line",
//       toolbar: {
//         show: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//     },
//     xaxis: {
//       categories: data ? data.map((item) => item.DateTime) : [],
//       labels: {
//         show: true, // Show x-axis labels
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//         },
//         rotate: -45, // Rotate labels for better readability
//         trim: true,
//       },
//       title: {
//         text: "Date/Time", // Add x-axis title
//         style: {
//           fontSize: "0px",
//           fontWeight: 0,
//         },
//       },
//       axisBorder: {
//         show: true, // Show the x-axis line border
//       },
//       axisTicks: {
//         show: true, // Show ticks on the x-axis
//       },
//     },
//     yaxis: {
//       labels: {
//         show: true, // Show y-axis labels
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//         },
//         formatter: (value) => `$${value.toLocaleString()}`,
//       },
//       title: {
//         text: "Price (USD)", // Add y-axis title
//         style: {
//           fontSize: "0px",
//           fontWeight: 0,
//         },
//       },
//       axisBorder: {
//         show: true, // Show the y-axis line border
//       },
//       axisTicks: {
//         show: true, // Show ticks on the y-axis
//       },
//     },
//     stroke: {
//       width: 2,
//       curve: "smooth",
//     },
//     theme: {
//       mode: "light",
//     },
//     grid: {
//       show: true, // Show grid lines
//       borderColor: "#90A4AE",
//       strokeDashArray: 0,
//       opacity: 0.1,
//     },
//     colors: ["#0089A4"],
//   };

//   const chartSeries = [
//     {
//       name: "Rhodium",
//       data: data
//         ? data.map((item) => parseFloat(item.Rhodium.replace(/,/g, "")))
//         : [],
//     },
//   ];

//   return (
//     <div className="-ml-4 -mt-3">
//       <Chart
//         options={chartOptions}
//         series={chartSeries}
//         type="line"
//         height={280}
//         width="100%"
//       />
//     </div>
//   );
// };

// export default ChartRhodium;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import dynamic from "next/dynamic";
// import { SPORT_PRICE_CHART } from "@/src/api/copperAPI";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const ChartRhodium = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(SPORT_PRICE_CHART);
//         const result = response.data;

//         if (!result || result.length === 0) {
//           setError("No data available");
//           setData(null);
//         } else {
//           setData(result[0].price_chart);
//           setError(null);
//         }
//       } catch (err) {
//         setError("Failed to fetch data");
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   const chartOptions = {
//     chart: {
//       type: "line",
//       toolbar: {
//         show: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//     },
//     xaxis: {
//       categories: data ? data.map((item) => item.DateTime) : [],
//       labels: {
//         show: true,
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//         },
//         rotate: -45,
//         trim: false,
//         formatter: function (value, timestamp, opts) {
//           // Show only the first date of each month
//           const date = new Date(value);
//           if (date.getDate() === 1) {
//             return date.toLocaleDateString("en-US", {
//               month: "short",
//               year: "2-digit",
//             });
//           }
//           return "";
//         },
//       },
//       title: {
//         text: "Date/Time",
//         style: {
//           fontSize: "0px",
//           fontWeight: 0,
//         },
//       },
//       axisBorder: {
//         show: true,
//       },
//       axisTicks: {
//         show: true,
//       },
//       tickAmount: undefined, // Let ApexCharts calculate the optimal number of ticks
//     },
//     yaxis: {
//       labels: {
//         show: true,
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//         },
//         formatter: (value) => `$${value.toLocaleString()}`,
//       },
//       title: {
//         text: "Price (USD)",
//         style: {
//           fontSize: "0px",
//           fontWeight: 0,
//         },
//       },
//       axisBorder: {
//         show: true,
//       },
//       axisTicks: {
//         show: true,
//       },
//     },
//     stroke: {
//       width: 2,
//       curve: "smooth",
//     },
//     theme: {
//       mode: "light",
//     },
//     grid: {
//       show: true,
//       borderColor: "#90A4AE",
//       strokeDashArray: 0,
//       opacity: 0.1,
//     },
//     colors: ["#0089A4"],
//   };

//   const chartSeries = [
//     {
//       name: "Rhodium",
//       data: data
//         ? data.map((item) => parseFloat(item.Rhodium.replace(/,/g, "")))
//         : [],
//     },
//   ];

//   return (
//     <div className="-ml-4 -mt-3">
//       <Chart
//         options={chartOptions}
//         series={chartSeries}
//         type="line"
//         height={280}
//         width="100%"
//       />
//     </div>
//   );
// };

// export default ChartRhodium;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import dynamic from "next/dynamic";
// import { SPORT_PRICE_CHART } from "@/src/api/copperAPI";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const ChartRhodium = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(SPORT_PRICE_CHART);
//         const result = response.data;

//         if (!result || result.length === 0) {
//           setError("No data available");
//           setData(null);
//         } else {
//           setData(result[0].price_chart);
//           setError(null);
//         }
//       } catch (err) {
//         setError("Failed to fetch data");
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   const chartOptions = {
//     chart: {
//       type: "line",
//       toolbar: {
//         show: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//     },

//     xaxis: {
//       categories: data ? data.map((item) => item.DateTime) : [],
//       labels: {
//         show: true,
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//           colors: "#595e66",
//         },
//         rotate: -45,
//         trim: false,
//         formatter: function (value, timestamp, opts) {
//           const date = new Date(value);
//           if (date.getDate() === 1) {
//             return date.toLocaleDateString("en-US", {
//               month: "short",
//               year: "2-digit",
//             });
//           }
//           return "";
//         },
//       },
//       title: {
//         text: "Date/Time",
//         style: {
//           fontSize: "0px",
//           fontWeight: 0,
//         },
//       },
//       axisBorder: {
//         show: true,
//       },
//       axisTicks: {
//         show: true,
//       },
//       tickAmount: undefined,
//     },
//     yaxis: {
//       labels: {
//         show: true,
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//           colors: "#595e66",
//         },
//         formatter: (value) => `$${value.toLocaleString()}`,
//       },
//       title: {
//         text: "Price (USD)",
//         style: {
//           fontSize: "0px",
//           fontWeight: 0,
//         },
//       },
//       axisBorder: {
//         show: true,
//       },
//       axisTicks: {
//         show: true,
//       },
//     },
//     stroke: {
//       width: 2,
//       curve: "smooth",
//     },
//     theme: {
//       mode: "light",
//     },
//     grid: {
//       show: true,
//       borderColor: "#90A4AE",
//       strokeDashArray: 0,
//       opacity: 0.1,
//     },
//     colors: ["#0089A4"],
//   };

//   const chartSeries = [
//     {
//       name: "Rhodium",
//       data: data
//         ? data.map((item) => parseFloat(item.Rhodium.replace(/,/g, "")))
//         : [],
//     },
//   ];

//   return (
//     <div className="-ml-4 -mt-3">
//       <Chart
//         options={chartOptions}
//         series={chartSeries}
//         type="line"
//         height={280}
//         width="100%"
//       />
//     </div>
//   );
// };

// export default ChartRhodium;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import dynamic from "next/dynamic";
// import { SPORT_PRICE_CHART } from "@/src/api/copperAPI";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const ChartRhodium = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(SPORT_PRICE_CHART);
//         const result = response.data;

//         if (!result || result.length === 0) {
//           setError("No data available");
//           setData(null);
//         } else {
//           setData(result[0].price_chart);
//           setError(null);
//         }
//       } catch (err) {
//         setError("Failed to fetch data");
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   const chartOptions = {
//     chart: {
//       type: "line",
//       toolbar: {
//         show: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//     },
//     xaxis: {
//       type: "datetime", // Ensures correct automatic date formatting
//       categories: data
//         ? data.map((item) => new Date(item.DateTime).getTime())
//         : [],
//       labels: {
//         show: true,
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//           colors: "#595e66",
//         },
//         rotate: -45,
//         trim: false,
//         datetimeFormatter: {
//           year: "yyyy",
//           month: "MMM yyyy",
//           day: "dd MMM",
//           hour: "HH:mm",
//         },
//       },
//       axisBorder: {
//         show: true,
//       },
//       axisTicks: {
//         show: true,
//       },
//     },
//     yaxis: {
//       labels: {
//         show: true,
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//           colors: "#595e66",
//         },
//         formatter: (value) => `$${value.toLocaleString()}`,
//       },
//       axisBorder: {
//         show: true,
//       },
//       axisTicks: {
//         show: true,
//       },
//     },
//     stroke: {
//       width: 2,
//       curve: "smooth",
//     },
//     theme: {
//       mode: "light",
//     },
//     grid: {
//       show: true,
//       borderColor: "#90A4AE",
//       strokeDashArray: 0,
//       opacity: 0.1,
//     },
//     colors: ["#0089A4"],
//     tooltip: {
//       enabled: true,
//       x: {
//         show: true,
//         format: "dd MMM yyyy", // Ensures date appears in tooltip
//       },
//     },
//   };

//   const chartSeries = [
//     {
//       name: "Rhodium",
//       data: data
//         ? data.map((item) => [
//             new Date(item.DateTime).getTime(),
//             parseFloat(item.Rhodium.replace(/,/g, "")),
//           ])
//         : [],
//     },
//   ];

//   return (
//     <div className="-ml-4 -mt-3">
//       <Chart
//         options={chartOptions}
//         series={chartSeries}
//         type="line"
//         height={280}
//         width="100%"
//       />
//     </div>
//   );
// };

// export default ChartRhodium;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import dynamic from "next/dynamic";
// import { SPORT_PRICE_CHART } from "@/src/api/copperAPI";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const ChartRhodium = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(SPORT_PRICE_CHART);
//         const result = response.data;

//         if (!result || result.length === 0) {
//           setError("No data available");
//           setData(null);
//         } else {
//           setData(result[0].price_chart);
//           setError(null);
//         }
//       } catch (err) {
//         setError("Failed to fetch data");
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   const chartOptions = {
//     chart: {
//       type: "line",
//       toolbar: {
//         show: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//     },

//     xaxis: {
//       categories: data ? data.map((item) => item.DateTime) : [],
//       labels: {
//         show: true,
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//           colors: "#595e66",
//         },
//         rotate: -45, // Rotates the labels for better readability
//         trim: false,
//         formatter: function (value) {
//           const date = new Date(value);
//           return date.toLocaleDateString("en-US", {
//             month: "short",
//             year: "numeric",
//           }); // Displays 'Jan 2025' format
//         },
//       },
//       title: {
//         text: "Date/Time",
//         style: {
//           fontSize: "0px",
//           fontWeight: 0,
//         },
//       },
//       axisBorder: {
//         show: true,
//       },
//       axisTicks: {
//         show: true,
//       },
//     },

//     yaxis: {
//       labels: {
//         show: true,
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//           colors: "#595e66",
//         },
//         formatter: (value) => `$${value.toLocaleString()}`,
//       },
//       title: {
//         text: "Price (USD)",
//         style: {
//           fontSize: "0px",
//           fontWeight: 0,
//         },
//       },
//       axisBorder: {
//         show: true,
//       },
//       axisTicks: {
//         show: true,
//       },
//     },
//     stroke: {
//       width: 2,
//       curve: "smooth",
//     },
//     theme: {
//       mode: "light",
//     },
//     grid: {
//       show: true,
//       borderColor: "#90A4AE",
//       strokeDashArray: 0,
//       opacity: 0.1,
//     },
//     colors: ["#0089A4"],
//   };

//   const chartSeries = [
//     {
//       name: "Rhodium",
//       data: data
//         ? data.map((item) => parseFloat(item.Rhodium.replace(/,/g, "")))
//         : [],
//     },
//   ];

//   return (
//     <div className="-ml-4 -mt-3">
//       <Chart
//         options={chartOptions}
//         series={chartSeries}
//         type="line"
//         height={280}
//         width="100%"
//       />
//     </div>
//   );
// };

// export default ChartRhodium;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import dynamic from "next/dynamic";
// import { SPORT_PRICE_CHART } from "@/src/api/copperAPI";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const ChartRhodium = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(SPORT_PRICE_CHART);
//         const result = response.data;

//         if (!result || result.length === 0) {
//           setError("No data available");
//           setData(null);
//         } else {
//           setData(result[0].price_chart);
//           setError(null);
//         }
//       } catch (err) {
//         setError("Failed to fetch data");
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   const chartOptions = {
//     chart: {
//       type: "line",
//       toolbar: { show: false },
//       zoom: { enabled: false },
//     },
//     xaxis: {
//       categories: data ? data.map((item) => item.DateTime) : [],
//       labels: {
//         show: true,
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//           colors: "#595e66",
//         },
//         rotate: -45,
//         trim: false,
//         formatter: function (value) {
//           const date = new Date(value);
//           return date.getDate() === 1
//             ? date.toLocaleDateString("en-US", {
//                 month: "short",
//                 year: "2-digit",
//               })
//             : "";
//         },
//       },
//       title: { text: "Date/Time", style: { fontSize: "0px", fontWeight: 0 } },
//       axisBorder: { show: true },
//       axisTicks: { show: true },
//     },
//     yaxis: {
//       labels: {
//         show: true,
//         style: {
//           fontSize: "12px",
//           fontFamily: "Arial, sans-serif",
//           colors: "#595e66",
//         },
//         formatter: (value) => `$${value.toLocaleString()}`,
//       },
//       title: { text: "Price (USD)", style: { fontSize: "0px", fontWeight: 0 } },
//       axisBorder: { show: true },
//       axisTicks: { show: true },
//     },
//     stroke: { width: 2, curve: "smooth" },
//     theme: { mode: "light" },
//     grid: {
//       show: true,
//       borderColor: "#90A4AE",
//       strokeDashArray: 0,
//       opacity: 0.1,
//     },
//     colors: ["#0089A4"],
//     tooltip: { enabled: true },
//   };

//   const chartSeries = [
//     {
//       name: "Rhodium",
//       data: data
//         ? data.map((item) => parseFloat(item.Rhodium.replace(/,/g, "")))
//         : [],
//     },
//   ];

//   return (
//     <div className="-ml-4 -mt-3">
//       <Chart
//         options={chartOptions}
//         series={chartSeries}
//         type="line"
//         height={280}
//         width="100%"
//       />
//     </div>
//   );
// };

// export default ChartRhodium;

import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { SPORT_PRICE_CHART } from "@/src/api/copperAPI";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartRhodium = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(SPORT_PRICE_CHART);
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
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: {
      categories: data ? data.map((item) => item.DateTime) : [],
      labels: {
        show: true,
        style: {
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
          colors: "#595e66",
        },
        rotate: -45,
        trim: false,
        formatter: function (value) {
          const date = new Date(value);
          return date.getDate() === 1
            ? date.toLocaleDateString("en-US", {
                month: "short",
                year: "2-digit",
              })
            : "";
        },
      },
      title: { text: "Date/Time", style: { fontSize: "0px", fontWeight: 0 } },
      axisBorder: { show: true },
      axisTicks: { show: true },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
          colors: "#595e66",
        },
        formatter: (value) => `$${value.toLocaleString()}`,
      },
      title: { text: "Price (USD)", style: { fontSize: "0px", fontWeight: 0 } },
      axisBorder: { show: true },
      axisTicks: { show: true },
    },
    stroke: { width: 2, curve: "smooth" },
    theme: { mode: "light" },
    grid: {
      show: true,
      borderColor: "#90A4AE",
      strokeDashArray: 0,
      opacity: 0.1,
    },
    colors: ["#0089A4"],
    tooltip: {
      enabled: true,
      x: {
        show: true, // Ensures date appears in tooltip
        format: "dd MMM yyyy", // Formats date inside tooltip
      },
      y: {
        formatter: (value, { dataPointIndex }) => {
          const date = new Date(data[dataPointIndex].DateTime);
          const formattedDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          return `${formattedDate}: $${value.toLocaleString()}`;
        },
      },
    },
  };

  const chartSeries = [
    {
      name: "Rhodium",
      data: data
        ? data.map((item) => parseFloat(item.Rhodium.replace(/,/g, "")))
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

export default ChartRhodium;
