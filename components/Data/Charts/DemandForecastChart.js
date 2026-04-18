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
    LineElement ,
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

const yrs = ["2024", "26", "28", "30", "32", "35"];
const sup = [22.8, 23.5, 24.1, 24.0, 22.5, 19.0];
const dem = [27.0, 27.8, 29.0, 30.5, 32.0, 35.0];

const data = {
  labels: yrs,
  datasets: [
    {
      label: "Mine supply (Mt)",
      data: sup,
      borderColor: RED,
      borderWidth: 2.5,
      pointRadius: 4,
      tension: 0.35,
      fill: false,
      borderDash: [6, 3],
    },
    {
      label: "Demand (STEPS, Mt)",
      data: dem,
      borderColor: CU,
      borderWidth: 2.5,
      pointRadius: 4,
      tension: 0.35,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "rgba(255,255,255,.35)", font: FONT },
    },
    y: {
      grid: WD,
      ticks: {
        color: "rgba(255,255,255,.35)",
        callback: (v) => v + " Mt",
        font: FONT,
      },
      min: 15,
      max: 37,
    },
  },
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
};

export default function DemandForecastChart() {
  return (
    <div className="relative w-full h-48 md:h-64 xl:h-[280px]">
      <Line data={data} options={{ ...options, maintainAspectRatio: false }} />
    </div>
  );
}
