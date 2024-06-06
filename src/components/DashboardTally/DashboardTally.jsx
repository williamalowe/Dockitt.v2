import { useTaskContext } from "../../context/TasksContext/TaskContext";
import TallyItem from "../TallyItem/TallyItem";
import styles from "./DashboardTally.module.css";

const DashboardTally = () => {
  const { tasks } = useTaskContext();
  const totalTasks = tasks.filter((task) => task.status !== "cancelled").length;

  return (
    <div className={styles.tally}>
      <TallyItem
        status="backlog"
        number={tasks.filter((task) => task.status === "backlog").length}
        percentage={Math.floor(
          (tasks.filter((task) => task.status === "backlog").length /
            totalTasks) *
            100
        )}
        color="var(--backlog)"
      />
      <TallyItem
        status="in progress"
        number={tasks.filter((task) => task.status === "in progress").length}
        percentage={Math.floor(
          (tasks.filter((task) => task.status === "in progress").length /
            totalTasks) *
            100
        )}
        color="var(--in-progress"
      />
      <TallyItem
        status="under review"
        number={tasks.filter((task) => task.status === "under review").length}
        percentage={Math.floor(
          (tasks.filter((task) => task.status === "under review").length /
            totalTasks) *
            100
        )}
        color="var(--under-review)"
      />
      <TallyItem
        status="completed"
        number={tasks.filter((task) => task.status === "completed").length}
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

export default DashboardTally;
