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
const CUT = "rgba(184,115,51,.15)";
const W = { color: "rgba(26,26,46,.06)" };
const FONT = { family: "'DM Mono', monospace", size: 10 };

const mo = [
  "Jan 23",
  "Apr",
  "Jul",
  "Oct",
  "Jan 24",
  "Apr",
  "Jul",
  "Oct",
  "Jan 25",
  "Apr",
  "Jul",
  "Oct",
  "Jan 26",
  "Apr",
];
const r = [
  0.00447, 0.00434, 0.00393, 0.0039, 0.00384, 0.00406, 0.00378, 0.00358,
  0.00296, 0.00265, 0.00208, 0.00194, 0.00181, 0.00123,
];

const data = {
  labels: mo,
  datasets: [
    {
      data: r,
      borderColor: CU,
      backgroundColor: CUT,
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.4,
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
      ticks: { callback: (v) => v.toFixed(5), font: FONT },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: { label: (ctx) => "Cu/Au: " + ctx.raw.toFixed(5) },
    },
  },
};

export default function CuAuChart() {
  return <Line data={data} options={options} />;
}
