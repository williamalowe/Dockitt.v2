import { useTaskContext } from "../../context/TasksContext/TaskContext";
import TableItem from "../TableItem/TableItem";
import styles from "./TasksTable.module.css";

const TasksTable = () => {
  const { tasks } = useTaskContext();

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TableItem
              key={task.date}
              id={task.date}
              task={task.title}
              tag={task.tag}
              status={task.status}
              priority={task.priority}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksTable;
