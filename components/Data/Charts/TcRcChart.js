import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
  // Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  // Legend,
);

const GRN = "#4CAF50";
const RED = "#F44336";
const AMB = "#F59E0B";
const W = { color: "rgba(26,26,46,.06)" };

const yrs = [
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
];
const tc = [82.25, 62.0, 59.5, 76.0, 65.0, 88.0, 21.5, 15.0, 0];
const cs = tc.map((v) => (v > 50 ? GRN : v > 20 ? AMB : RED));
const data = {
  labels: yrs,
  datasets: [
    {
      data: tc,
      backgroundColor: cs,
      borderRadius: 5,
      barPercentage: 0.7,
    },
  ],
};
const options = {
  responsive: true,
  scales: {
    x: { grid: { display: false } },
    y: { grid: W, ticks: { callback: (v) => "$" + v + "/t" } },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) =>
          ctx.raw === 0
            ? "$0/t — Structural stress"
            : "$" + ctx.raw + "/t benchmark TC",
      },
    },
  },
};

export default function TcrcChart() {
  return (
    <div className="relative w-full h-48 md:h-64 xl:h-[280px]">
      <Bar data={data} options={options} />
    </div>
  );
}
