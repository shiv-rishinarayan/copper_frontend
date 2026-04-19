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

const CU = "#B87333";
const W = { color: "rgba(26,26,46,.06)" };
const FONT = { family: "'DM Mono', monospace", size: 10 };
const yrs = [
  "2010",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
];
const sp = [
  18.2, 22.1, 25.1, 26.1, 21.9, 16.4, 12.8, 13.1, 14.0, 14.2, 11.8, 16.4, 14.4,
  15.2, 16.8,
];
const cs = sp.map((_, i) => (i === 3 ? CU : "rgba(184,115,51,.5)"));
const data = {
  labels: yrs,
  datasets: [
    {
      data: sp,
      backgroundColor: cs,
      borderRadius: 3,
      barPercentage: 0.8,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: { grid: { display: false }, ticks: { font: FONT } },
    y: {
      grid: W,
      ticks: { callback: (v) => "$" + v + "bn", font: FONT },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => "Exploration: $" + ctx.raw.toFixed(1) + "bn",
      },
    },
  },
};

export default function ExploChart() {
  return <Bar data={data} options={options} />;
}
