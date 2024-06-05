import { useTaskContext } from "../../context/TasksContext/TaskContext";
import TableItem from "../TableItem/TableItem";
import styles from "./TasksTable.module.css";

const TasksTable = () => {
  const { tasks } = useTaskContext();

  return (
    <div className={styles.table}>
      <TableItem 
        id='id'
        task='task'
        status='status'
        priority='priority'
      />
      <div className={styles.tasks}>
      {
        tasks.map((task) => 
        <TableItem 
          key={task.date}
          id={task.date}
          task={task.title}
          tag={task.tag}
          status={task.status}
          priority={task.priority}
        />
        )
      }
      </div>
    </div>
  );
};

export default TasksTable;
