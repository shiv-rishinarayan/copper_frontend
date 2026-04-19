import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
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

const data = {
  labels: [
    "Chile 23.2%",
    "DRC 12.7%",
    "Peru 12.1%",
    "China 7.9%",
    "Australia 3.6%",
    "Indonesia 3.3%",
    "USA 3.2%",
    "Zambia 3.4%",
    "Russia 3.9%",
    "Rest 26.7%",
  ],
  datasets: [
    {
      data: [5300, 2900, 2750, 1800, 820, 750, 720, 780, 880, 6100],
      backgroundColor: [
        "#B87333",
        "#D4956A",
        "#9B6B44",
        "#7A4A1E",
        "#C4895A",
        "#8B5C34",
        "#E0A060",
        "#A0724A",
        "rgba(184,115,51,.45)",
        "rgba(184,115,51,.25)",
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
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: { boxWidth: 8, font: { size: 10 }, padding: 8 },
    },
  },
};

export default function MineProdChart() {
  return (
    <div className="relative w-full h-72 md:h-64 xl:h-[540px]">
      <Doughnut data={data} options={options} />
    </div>
  );
}
