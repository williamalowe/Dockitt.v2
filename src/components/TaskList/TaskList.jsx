import { useRef, useEffect } from "react";
import styles from "./TaskList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import TaskCard from "../TaskCard/TaskCard";
import { motion } from "framer-motion";

const taskItem = {
  initial: {
    opacity: 0,
    x: -10
  },
  animate: {
    opacity: 1,
    x: 0
  }
}

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
        <motion.div className={styles.cards}
          initial='initial'
          animate='animate'
          transition={{
            staggerChildren: 0.2,
            delayChildren: 0.1
          }}
        >
          {
            tasksList.length > 0 ?
          tasksList.map((task) => (
            <motion.div key={task.date}
              variants={taskItem}
            >
              <TaskCard
                header={task.title}
                date={task.date}
                description={task.description}
                tag={task.tag}
                priority={task.priority}
                status={task.status}
              />
            </motion.div>
          ))
          :
                <div className={styles.empty}>
                  No Tasks
                </div>
          }
        </motion.div>
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
