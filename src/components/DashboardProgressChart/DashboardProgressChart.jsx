import { useTaskContext } from "../../context/TasksContext/TaskContext";
import AllTasksProgressionBar from "../ProgressionBar/AllTasksProgressionBar";
import ProgressionBar from "../ProgressionBar/ProgressionBar";
import styles from "./DashboardProgressChart.module.css";

const DashboardProgressChart = () => {
  const { tasks } = useTaskContext();
  const totalTasks = tasks.filter((task) => task.status !== "cancelled").length;

  return (
    <div className={styles.progressChart}>
    <AllTasksProgressionBar 
      backlog={Math.floor(
        (tasks.filter((task) => task.status === "backlog").length /
          totalTasks) *
          100
      )}
      inProgress={Math.floor(
        (tasks.filter((task) => task.status === "in progress").length /
          totalTasks) *
          100
      )}
      underReview={Math.floor(
        (tasks.filter((task) => task.status === "under review").length /
          totalTasks) *
          100
      )}
      completed={Math.floor(
        (tasks.filter((task) => task.status === "completed").length /
          totalTasks) *
          100
      )}
    />
      <ProgressionBar
        header="Backlog"
        percentage={Math.floor(
          (tasks.filter((task) => task.status === "backlog").length /
            totalTasks) *
            100
        )}
        color="var(--backlog)"
      />
      <ProgressionBar
        header="In Progress"
        percentage={Math.floor(
          (tasks.filter((task) => task.status === "in progress").length /
            totalTasks) *
            100
        )}
        color="var(--in-progress)"
      />
      <ProgressionBar
        header="Under Review"
        percentage={Math.floor(
          (tasks.filter((task) => task.status === "under review").length /
            totalTasks) *
            100
        )}
        color="var(--under-review)"
      />
      <ProgressionBar
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

export default DashboardProgressChart;
