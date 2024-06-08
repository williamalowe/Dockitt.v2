import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableItem from "../TableItem/TableItem";
import styles from "./TasksTable.module.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const TasksTable = ({ taskslist }) => {

  return (
    <div className={styles.table}>
      <TableItem id="id" task="task" status="status" priority="priority" />
      <div className={styles.tasks}>
        {
        taskslist.length > 0 ?
        taskslist.map((task) => (
          <TableItem
            key={task.date}
            id={task.date}
            task={task.title}
            tag={task.tag}
            status={task.status}
            priority={task.priority}
          />
        ))
        :
        <div className={styles.empty}> No Items in this list!</div>
      }
      </div>
      <div className={styles.arrow}>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  );
};

export default TasksTable;
