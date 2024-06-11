import { motion } from 'framer-motion';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import styles from './AddTaskModal.module.css';

const AddTaskModal = ({ handleClose }) => {
  return (
    <motion.div 
      className={styles.background} 
      onClick={handleClose}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
    >
      <motion.div 
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()}
        initial={{
          y: '100%'
        }}
        animate={{
          y: 0
        }}
      >
        <AddTaskForm 
          handleClose={handleClose}
        />
      </motion.div>
    </motion.div>
  )
}

export default AddTaskModal
