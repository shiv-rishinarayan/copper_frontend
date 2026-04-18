import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Arc,
  BarElement,
  Legend,
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

const yrs = ["2018", "19", "20", "21", "22", "23", "24"];
const cn = [12.0, 12.5, 13.2, 14.1, 14.3, 14.5, 14.7];

const data = {
  labels: yrs,
  datasets: [
    {
      label: "China demand (Mt)",
      data: cn,
      backgroundColor: "rgba(184,115,51,.6)",
      borderRadius: 4,
      barPercentage: 0.7,
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
      min: 10,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (ctx) =>
          ctx.raw + " Mt (" + Math.round((ctx.raw / 27) * 100) + "% of global)",
      },
    },
  },
};

export default function ChinaChart() {
  return (
    <div className="relative w-full h-48 md:h-64 xl:h-[280px]">
      <Bar data={data} options={options} />
    </div>
  );
}
