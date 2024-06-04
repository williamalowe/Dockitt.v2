import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TaskCard.module.css";
import {
  faCaretLeft,
  faCaretRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTaskContext } from "../../context/TasksContext/TaskContext";

const TaskCard = ({ header, date, description, tag, priority, status }) => {
  const { deleteTask, updateStatus, rollbackStatus, cancelTask } =
    useTaskContext();
  return (
    <div className={styles.card}>
      {
        tag &&
        <div className={styles.tagContainer}>
          <h5>{tag}</h5>
        </div>
      }
      <div className={styles.header}>
        <h3>{header}</h3>
        <h5>ID: {date}</h5>
      </div>
      <p>{description}</p>
      <div className={styles.lower}>
        <p>
          Priority: <span>{priority}</span>
        </p>
        {status !== "cancelled" ? (
          <div className={styles.buttons}>
            <motion.button
              onClick={() => cancelTask(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faX} />
            </motion.button>
            <motion.button
              onClick={() => rollbackStatus(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faCaretLeft} />
            </motion.button>
            <motion.button
              onClick={() => updateStatus(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faCaretRight} />
            </motion.button>
          </div>
        ) : (
          <motion.button
            onClick={() => deleteTask(date)}
            className={styles.cancel}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faX} />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
