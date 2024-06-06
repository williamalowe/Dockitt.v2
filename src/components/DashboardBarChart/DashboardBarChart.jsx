import { useTaskContext } from "../../context/TasksContext/TaskContext";
import BarChartItem from "../BarChartItem/BarChartItem";
import styles from "./DashboardBarChart.module.css";

const DashboardBarChart = () => {
  const { tasks } = useTaskContext();
  const totalTasks = tasks.filter((task) => task.status !== "cancelled").length;

  return (
    <div className={styles.barChart}>
      <BarChartItem
        header="Backlog"
        percentage={Math.floor(
          (tasks.filter((task) => task.status === "backlog").length /
            totalTasks) *
            100
        )}
        color="var(--backlog)"
      />
      <BarChartItem
        header="In Progress"
        percentage={Math.floor(
          (tasks.filter((task) => task.status === "in progress").length /
            totalTasks) *
            100
        )}
        color="var(--in-progress)"
      />
      <BarChartItem
        header="Under Review"
        percentage={Math.floor(
          (tasks.filter((task) => task.status === "under review").length /
            totalTasks) *
            100
        )}
        color="var(--under-review)"
      />
      <BarChartItem
        header="Completed"
        percentage={Math.floor(
          (tasks.filter((task) => task.status === "completed").length /
            totalTasks) *
            100
        )}
        color="var(--completed)"
      />
    </div>
  );
};

export default DashboardBarChart;
