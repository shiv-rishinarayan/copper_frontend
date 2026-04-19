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

const W = { color: "rgba(26,26,46,.06)" };
const mo = [
  "Aug 25",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan 26",
  "Feb",
  "Mar",
  "Apr",
];
const p = [120, 250, 480, 980, 1650, 2100, 850, 320, 80];
const cs = p.map((v) =>
  v > 1000
    ? "rgba(245,158,11,.8)"
    : v > 500
      ? "rgba(184,115,51,.8)"
      : "rgba(26,122,74,.8)",
);
const data = {
  labels: mo,
  datasets: [{ data: p, backgroundColor: cs, borderRadius: 4 }],
};

const options = {
  responsive: true,
  scales: {
    x: { grid: { display: false } },
    y: {
      grid: W,
      ticks: { callback: (v) => "$" + v.toLocaleString() + "/t" },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => "COMEX premium: $" + ctx.raw.toLocaleString() + "/t",
      },
    },
  },
};

export default function ComexPremChart() {
  return <Bar data={data} options={options} />;
}
