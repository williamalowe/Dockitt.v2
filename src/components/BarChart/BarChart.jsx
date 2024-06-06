import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useTaskContext } from "../../context/TasksContext/TaskContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const { tasks } = useTaskContext();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = ["Backlog", "In Progress", "Under Review", "Completed"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Tasks",
        data: [
          tasks.filter((task) => task.status === "backlog").length,
          tasks.filter((task) => task.status === "in progress").length,
          tasks.filter((task) => task.status === "under review").length,
          tasks.filter((task) => task.status === "completed").length,
        ],
        backgroundColor: ["#FF204E", "#7520ff", "#ffb820", "#20ff75"],
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
