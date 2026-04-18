import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
);

const CU = "#B87333";
const CUL = "rgba(184,115,51,.8)";
const CUT = "rgba(184,115,51,.15)";
const GRN = "#4CAF50";
const RED = "#F44336";
const BLU = "rgba(30,58,95,.8)";
const AMB = "#F59E0B";
const W = { color: "rgba(26,26,46,.06)" };
const WD = { color: "rgba(255,255,255,.07)" };
const FONT = { family: "'DM Mono', monospace", size: 10 };

const labels = [
  "Jan 25",
  "Mar",
  "May",
  "Jul",
  "Sep",
  "Nov",
  "Jan 26",
  "Mar",
  "Apr 26",
];
const comex = [89, 95, 120, 180, 290, 410, 490, 503, 503];
const lme = [256, 240, 195, 160, 140, 105, 80, 68, 68];

const data = {
  labels,
  datasets: [
    {
      label: "COMEX (kt)",
      data: comex,
      borderColor: AMB,
      backgroundColor: "rgba(245,158,11,.1)",
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.4,
      fill: true,
      yAxisID: "y",
    },
    {
      label: "LME (kt)",
      data: lme,
      borderColor: RED,
      backgroundColor: "rgba(244,67,54,.08)",
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4,
      fill: true,
      yAxisID: "y",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        boxWidth: 8,
        font: { size: 10 },
        color: "rgba(255,255,255,.5)",
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "rgba(255,255,255,.35)", font: FONT },
    },
    y: {
      grid: WD,
      ticks: {
        color: "rgba(255,255,255,.35)",
        callback: (v) => v + "k t",
        font: FONT,
      },
    },
  },
};

export default function InventoryChart() {
  return (
    <div className="relative w-full h-48 md:h-64 xl:h-[280px]">
      <Line data={data} options={{ ...options, maintainAspectRatio: false }} />
    </div>
  );
}
