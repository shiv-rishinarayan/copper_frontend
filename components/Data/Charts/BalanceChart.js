import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  BarElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
);


const W = { color: "rgba(26,26,46,.06)" };

const yrs = ["2018", "19", "20", "21", "22", "23", "24", "25e", "26f"];
const balance = [+82, +180, +300, -430, -290, -100, -147, +117, +118];
const cs = balance.map((v) =>
  v >= 0 ? "rgba(26,122,74,.8)" : "rgba(192,57,43,.8)",
);

const data = {
  labels: yrs,
  datasets: [
    {
      label: "Refined market balance (kt)",
      data: balance,
      backgroundColor: cs,
      borderRadius: 4,
      barPercentage: 0.75,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, 
  scales: {
    x: { grid: { display: false } },
    y: {
      grid: W,
      ticks: { callback: (v) => (v >= 0 ? "+" : "") + v + "kt" },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (ctx) =>
          (ctx.raw >= 0 ? "Surplus: +" : "Deficit: ") +
          Math.abs(ctx.raw) +
          "kt",
      },
    },
  },
};

export default function BalanceChart() {
  return (
    <div className="relative w-full h-48 md:h-64 xl:h-[380px]">
      <Bar data={data} options={options} />
    </div>
  );
}
