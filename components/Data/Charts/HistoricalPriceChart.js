import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
);

const CU = "#B87333";
const CUL = "rgba(184,115,51,.8)";
const CUT = "rgba(184,115,51,.15)";
const GRN = "#4CAF50";
const RED = "#F44336";
const BLU = "rgba(30,58,95,.8)";
const AMB = "#F59E0B";
const W = { color: "rgba(26,26,46,.06)" };
const FONT = { family: "'DM Mono', monospace", size: 10 };

const yrs = [
  "2000",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
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
  "25",
  "26YTD",
];

const prices = [
  1813, 1578, 1559, 1779, 2866, 3679, 6722, 7118, 6955, 5150, 7535, 8828, 7959,
  7332, 6863, 5494, 4868, 6166, 6530, 6000, 6174, 9317, 8773, 8478, 9409, 12400,
  12780,
];

const data = {
  labels: yrs,
  datasets: [
    {
      data: prices,
      borderColor: CU,
      backgroundColor: CUT,
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.35,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  //   maintainAspectRatio: false,
  scales: {
    x: { grid: { display: false }, ticks: { font: FONT } },
    y: {
      grid: W,
      ticks: {
        callback: (v) => "$" + v.toLocaleString(),
        font: FONT,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (ctx) => "$" + ctx.raw.toLocaleString() + "/t",
      },
    },
  },
};

export default function CuHistChart() {
  return <Line data={data} options={options} />;
}
