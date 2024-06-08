import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTaskContext } from "../../context/TasksContext/TaskContext";
import styles from "./TableItem.module.css";
import {
  faCaretLeft,
  faCaretRight,
  faCheck,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const TableItem = ({ id, task, tag, status, priority }) => {
  const { updateStatus, rollbackStatus, cancelTask, deleteTask } =
    useTaskContext();

  return (
    <motion.div
      className={styles.item}
      whileHover={{
        fontWeight: 800,
      }}
    >
      <div className={styles.id}>
        <p>
          {id}
          {tag && <span>{tag}</span>}
        </p>
      </div>
      <div className={styles.description}>
        <p>{task}</p>
      </div>
      <div className={styles.status}>
        <p>{status}</p>
      </div>
      <div className={styles.priority}>
        <p>{priority}</p>
      </div>
      <div className={styles.buttons}>
        {status === "cancelled" ? (
          <>
            <motion.button
              className={styles.rollbackButton}
              onClick={() => deleteTask(id)}
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </motion.button>
          </>
        ) : status === "completed" ? (
          <>
            <motion.button
              className={styles.rollbackButton}
              onClick={() => rollbackStatus(id)}
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FontAwesomeIcon icon={faCaretLeft} />
            </motion.button>
            <motion.button
              className={styles.updateButton}
              onClick={() => deleteTask(id)}
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FontAwesomeIcon icon={faCheck} />
            </motion.button>
          </>
        ) : status === "backlog" ||
          status === "in progress" ||
          status === "under review" ? (
          <>
            <motion.button
              className={styles.cancelButton}
              onClick={() => cancelTask(id)}
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </motion.button>
            <motion.button
              className={styles.rollbackButton}
              onClick={() => rollbackStatus(id)}
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FontAwesomeIcon icon={faCaretLeft} />
            </motion.button>
            <motion.button
              className={styles.updateButton}
              onClick={() => updateStatus(id)}
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <FontAwesomeIcon icon={faCaretRight} />
            </motion.button>
          </>
        ) : (
          <></>
        )}
      </div>
    </motion.div>
  );
};

export default TableItem;
