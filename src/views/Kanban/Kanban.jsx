import TaskList from "../../components/TaskList/TaskList";
import { useTaskContext } from "../../context/TasksContext/TaskContext";
import styles from "./Kanban.module.css";

const Kanban = () => {
  const { tasks } = useTaskContext();

  return (
    <div className={styles.kanban}>
      <TaskList 
        header={"Backlog"} 
        color={"var(--backlog)"} 
        tasksList={tasks.filter((task) => task.status === 'backlog')}
        count={tasks.filter((task) => task.status === 'backlog').length} 
      />
      <TaskList 
      header={"In Progress"} 
      color={"var(--in-progress)"}
      tasksList={tasks.filter((task) => task.status === 'in progress')}
      count={tasks.filter((task) => task.status === 'in progress').length} 
      />
      <TaskList
        header={"Under Review"}
        color={"var(--under-review)"}
        tasksList={tasks.filter((task) => task.status === 'under review')}
        count={tasks.filter((task) => task.status === 'under review').length} 
      />
      <TaskList
        header={"Completed"}
        color={"var(--completed)"}
        tasksList={tasks.filter((task) => task.status === 'completed')}
        count={tasks.filter((task) => task.status === 'completed').length} 
      />
      <TaskList
        header={"Cancelled"}
        color={"var(--cancelled)"}
        tasksList={tasks.filter((task) => task.status === 'cancelled')}
        count={tasks.filter((task) => task.status === 'cancelled').length} 
      />
    </div>
  );
};

export default Kanban;
