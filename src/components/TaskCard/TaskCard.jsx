import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TaskCard.module.css";
import {
  faCaretLeft,
  faCaretRight,
  faCheck,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTaskContext } from "../../context/TasksContext/TaskContext";

const TaskCard = ({ header, date, description, tag, priority, status }) => {
  const { deleteTask, updateStatus, rollbackStatus, cancelTask } =
    useTaskContext();
  return (
    <motion.div
      className={styles.card}
      whileHover={{
        rotate: -2,
      }}
    >
      {tag && (
        <div className={styles.tagContainer}>
          <h5>{tag}</h5>
        </div>
      )}
      <div className={styles.header}>
        <h3>{header}</h3>
        <h5>ID: {date}</h5>
      </div>
      <p>{description}</p>
      <div className={styles.lower}>
        <p>
          Priority: <span>{priority}</span>
        </p>
        {status === "backlog" ? (
          <div className={styles.buttons}>
            <motion.button
              className={styles.cancelButton}
              onClick={() => cancelTask(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faX} />
            </motion.button>
            <motion.button
              className={styles.updateButton}
              onClick={() => updateStatus(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faCaretRight} />
            </motion.button>
          </div>
        ) : status === "in progress" || status === "under review" ? (
          <div className={styles.buttons}>
            <motion.button
              className={styles.cancelButton}
              onClick={() => cancelTask(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faX} />
            </motion.button>
            <motion.button
              className={styles.rollbackButton}
              onClick={() => rollbackStatus(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faCaretLeft} />
            </motion.button>
            <motion.button
              className={styles.updateButton}
              onClick={() => updateStatus(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faCaretRight} />
            </motion.button>
          </div>
        ) : status === "completed" ? (
          <div className={styles.buttons}>
            <motion.button
              className={styles.rollbackButton}
              onClick={() => rollbackStatus(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faCaretLeft} />
            </motion.button>
            <motion.button
              className={styles.updateButton}
              onClick={() => deleteTask(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faCheck} />
            </motion.button>
          </div>
        ) : (
          <div className={styles.buttons}>
            <motion.button
              className={styles.rollbackButton}
              onClick={() => rollbackStatus(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faCaretLeft} />
            </motion.button>
            <motion.button
              className={styles.rollbackButton}
              onClick={() => deleteTask(date)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faX} />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TaskCard;
