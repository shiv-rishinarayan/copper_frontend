import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  BarElement,
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

const labels = ["Oct 25", "Nov", "Dec", "Jan 26", "Feb", "Mar", "Apr"];
const reg = [60, 90, 150, 280, 380, 440, 460];
const elig = [30, 35, 80, 100, 110, 65, 43];

const data = {
  labels,
  datasets: [
    {
      label: "Registered",
      data: reg,
      backgroundColor: CUL,
      borderRadius: 3,
    },
    {
      label: "Eligible",
      data: elig,
      backgroundColor: "rgba(184,115,51,.35)",
      borderRadius: 3,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: { display: false },
      stacked: false,
      ticks: { color: "rgba(255,255,255,.35)", font: FONT },
    },
    y: {
      grid: WD,
      stacked: false,
      ticks: {
        color: "rgba(255,255,255,.35)",
        callback: (v) => v + "k t",
        font: FONT,
      },
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

export default function RegEligChart() {
  return (
    <div className="relative w-full h-48 md:h-64 xl:h-[280px]">
      <Bar data={data} options={{ ...options, maintainAspectRatio: false }} />
    </div>
  );
}
