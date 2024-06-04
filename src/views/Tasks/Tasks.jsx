import TaskList from "../../components/TaskList/TaskList";
import styles from "./Tasks.module.css";

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <TaskList header={"Backlog"} color={"var(--backlog)"} tasksList={""} />
      <TaskList header={"In Progress"} color={"var(--in-progress)"} />
      <TaskList
        header={"Under Review"}
        color={"var(--under-review)"}
        tasksList={""}
      />
      <TaskList
        header={"Completed"}
        color={"var(--completed)"}
        tasksList={""}
      />
      <TaskList
        header={"Cancelled"}
        color={"var(--cancelled)"}
        tasksList={""}
      />
    </div>
  );
};

export default Tasks;
