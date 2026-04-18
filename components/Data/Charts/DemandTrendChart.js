import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
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

const WD = { color: "rgba(255,255,255,.07)" };
const FONT = { family: "'DM Mono', monospace", size: 10 };

const yrs = ["2014", "16", "18", "20", "22", "24"];
const trad = [20.1, 20.4, 22.1, 20.5, 22.8, 23.5];
const green = [0.6, 0.8, 1.2, 1.4, 2.2, 3.5];

const data = {
  labels: yrs,
  datasets: [
    {
      label: "Traditional demand (Mt)",
      data: trad,
      backgroundColor: "rgba(184,115,51,.65)",
      borderRadius: 3,
      barPercentage: 0.7,
    },
    {
      label: "Energy transition demand (Mt)",
      data: green,
      backgroundColor: "rgba(26,122,74,.8)",
      borderRadius: 3,
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
      stacked: false,
      ticks: {
        color: "rgba(255,255,255,.35)",
        callback: (v) => v + " Mt",
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

export default function DemandTrendChart() {
  return (
    <div className="relative w-full h-48 md:h-64 xl:h-[280px]">
      <Bar data={data} options={{ ...options, maintainAspectRatio: false }} />
    </div>
  );
}
