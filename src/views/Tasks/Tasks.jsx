import TaskList from "../../components/TaskList/TaskList";
import styles from "./Tasks.module.css";

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <TaskList header={"Backlog"} color={"var(--backlog)"} />
      <TaskList header={"In Progress"} color={"var(--in-progress)"} />
      <TaskList header={"Under Review"} color={"var(--under-review)"} />
      <TaskList header={"Completed"} color={"var(--completed)"} />
      <TaskList header={"Cancelled"} color={"var(--cancelled)"} />
    </div>
  );
};

export default Tasks;
