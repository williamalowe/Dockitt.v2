import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTaskContext } from '../../context/TasksContext/TaskContext'
import styles from './TableItem.module.css'
import { faCaretLeft, faCaretRight, faX } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const TableItem = ({ id, task, tag, status, priority }) => {
  const { updateStatus, rollbackStatus, cancelTask, deleteTask } = useTaskContext();

  return (
    <motion.tr 
      className={styles.item}
      whileHover={{
        
      }}
    >
      <td>{id} 
      {
        tag &&
        <span>{tag}</span>
      }
      </td>
      <td>{task}</td>
      <td>{status}</td>
      <td>{priority}</td>
      <td>
        <div className={styles.buttons}>
          {
            status !== 'cancelled' ?
            <motion.button
              whileHover={{
                scale: 1.2
              }}
              whileTap={{
                scale: 0.9
              }}
            >
              <FontAwesomeIcon icon={faX} onClick={() => cancelTask(id)}/>
            </motion.button>
            :
          <motion.button
            whileHover={{
              scale: 1.2
            }}
            whileTap={{
              scale: 0.9
            }}
          >
          <FontAwesomeIcon icon={faX} onClick={() => deleteTask(id)}/>
        </motion.button>
          }
          <motion.button
            whileHover={{
              scale: 1.2
            }}
            whileTap={{
              scale: 0.9
            }}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2
            }}
            whileTap={{
              scale: 0.9
            }}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </motion.button>
        </div>
      </td>
    </motion.tr>
  )
}

export default TableItem
