import styles from './DoughnutChart.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTaskContext } from '../../context/TasksContext/TaskContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const { tasks } = useTaskContext();
  const data = {
    labels: ['Backlog', 'In Progress', 'Under Review', 'Completed'],
    datasets: [
      {
        label: '# of Tasks',
        data: [
          tasks.filter((task) => task.status === 'backlog').length,
          tasks.filter((task) => task.status === 'in progress').length,
          tasks.filter((task) => task.status === 'under review').length,
          tasks.filter((task) => task.status === 'completed').length,
        ],
        backgroundColor: [
          '#FF204E',
          '#7520ff',
          '#ffb820',
          '#20ff75'
        ],
        borderWidth: 2,
        hoverOffset: 10
      },
    ],
  };

  return (
    <div className={styles.doughnut}>
      <Doughnut 
        data={data}
        width={"100%"}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  )
}

export default DoughnutChart
