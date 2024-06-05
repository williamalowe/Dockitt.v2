import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTaskContext } from "../../context/TasksContext/TaskContext";
import styles from "./TableItem.module.css";
import {
  faCaretLeft,
  faCaretRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const TableItem = ({ id, task, tag, status, priority }) => {
  const { updateStatus, rollbackStatus, cancelTask, deleteTask } =
    useTaskContext();

  return (
    <div className={styles.item}>
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
        {id !== "id" && (
          <>
            {status === "cancelled" ? (
              <motion.button
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
            ) : (
              <>
                <motion.button
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
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TableItem;
