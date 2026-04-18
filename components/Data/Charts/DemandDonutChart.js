import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Arc,
  ArcElement,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
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
  labels: [
    "Construction & buildings 28%",
    "Electrical networks 25%",
    "Industrial machinery 12%",
    "Transport (incl EVs) 12%",
    "Electronics 8%",
    "Other 8%",
    "Green energy 7%",
  ],
  datasets: [
    {
      data: [28, 25, 12, 12, 8, 8, 7],
      backgroundColor: [
        "rgba(184,115,51,.9)",
        "rgba(30,58,95,.85)",
        "rgba(26,122,74,.8)",
        "#F59E0B",
        "rgba(192,57,43,.75)",
        "rgba(136,136,170,.6)",
        "rgba(184,115,51,.4)",
      ],
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "55%",
  layout: {
    padding: {
      right: 20,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "right",
      labels: {
        boxWidth: 8,
        font: { size: 10 },
        padding: 10,
        color: "rgba(255,255,255,.55)",
      },
    },
    tooltip: { callbacks: { title: ([i]) => i.label } },
  },
};

export default function DemandDonutChart() {
  return (
    <div className="relative w-full h-48 md:h-64 xl:h-[280px]">
      <Doughnut data={data} options={options} />
    </div>
  );
}
