import { useRef, useEffect } from "react";
import styles from "./TaskList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = ({ header, color, tasksList, count }) => {
  const headerRef = useRef(0);

  useEffect(() => {
    headerRef.current.style.background = color;
  }, []);

  return (
    <div className={styles.list}>
      <div className={styles.header} ref={headerRef}>
        <h5>{header} - {count}</h5>
      </div>
      <div className={styles.display}>
        <div className={styles.cards}>
          {tasksList.map((task) => (
            <div key={task.date}>
              <TaskCard
                header={task.title}
                date={task.date}
                description={task.description}
                tag={task.tag}
                priority={task.priority}
                status={task.status}
              />
            </div>
          ))}
        </div>
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
