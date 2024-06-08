import { useTaskContext } from '../../context/TasksContext/TaskContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './LineChart.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const { tasks } = useTaskContext();

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    }
  };

  const labels = ["Backlog", "In Progress", "Under Review", "Completed"];

  const data = {
    labels,
    datasets: [
      {
        label: 'Tasks',
        data: [
          tasks.filter((task) => task.status === 'backlog').length,
          tasks.filter((task) => task.status === 'in progress').length,
          tasks.filter((task) => task.status === 'under review').length,
          tasks.filter((task) => task.status === 'completed').length,
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: [
          '#FF204E',
          '#7520ff',
          '#ffb820',
          '#20ff75'
        ],
      }
    ],
  };

  return (
    <div className={styles.chart}>
      <Line options={options} data={data} />
    </div>
  )
}

export default LineChart
