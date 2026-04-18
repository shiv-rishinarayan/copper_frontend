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
const BLU = "rgba(30,58,95,.8)";
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
const cu = [
  8750, 8400, 8150, 8500, 8300, 9800, 9500, 9700, 9100, 9600, 11200, 10800,
  12500, 12780,
];
const pmi = [
  49.8, 50.1, 49.5, 49.2, 49.9, 51.0, 50.5, 49.8, 50.2, 50.8, 51.5, 51.0, 50.2,
  50.4,
];

const data = {
  labels: mo,
  datasets: [
    {
      label: "Copper $/t",
      data: cu,
      borderColor: CU,
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.4,
      yAxisID: "y",
    },
    {
      label: "Global PMI",
      data: pmi,
      borderColor: BLU,
      borderWidth: 2,
      borderDash: [5, 3],
      pointRadius: 0,
      tension: 0.4,
      yAxisID: "y2",
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: { grid: { display: false }, ticks: { font: FONT } },
    y: {
      grid: W,
      ticks: {
        callback: (v) => "$" + v.toLocaleString(),
        font: FONT,
      },
    },
    y2: {
      position: "right",
      grid: { display: false },
      ticks: { callback: (v) => v.toFixed(1), font: FONT },
      min: 48,
      max: 53,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: { boxWidth: 8, font: { size: 10 } },
    },
  },
};

export default function DrCopperChart() {
  return <Line data={data} options={options} />;
}
