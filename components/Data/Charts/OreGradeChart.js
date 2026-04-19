import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  LineElement,
  Legend,
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
const yrs = ["1991", "95", "00", "05", "10", "15", "20", "24"];
const grade = [1.18, 1.1, 1.02, 0.97, 0.88, 0.78, 0.72, 0.68];
const data = {
  labels: yrs,
  datasets: [
    {
      data: grade,
      borderColor: RED,
      backgroundColor: "rgba(192,57,43,.08)",
      borderWidth: 2.5,
      pointRadius: 3,
      pointBackgroundColor: RED,
      tension: 0.35,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: { grid: { display: false }, ticks: { font: FONT } },
    y: {
      grid: W,
      ticks: { callback: (v) => v.toFixed(2) + "%", font: FONT },
      min: 0.5,
      max: 1.3,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => "Avg ore grade: " + ctx.raw.toFixed(2) + "%",
      },
    },
  },
};

export default function OreGradeChart() {
  return (
    <div className="relative w-full h-48 md:h-64 xl:h-[280px]">
      <Line data={data} options={options} />
    </div>
  );
}
