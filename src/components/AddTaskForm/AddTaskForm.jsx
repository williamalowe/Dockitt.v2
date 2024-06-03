import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AddTaskForm.module.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const AddTaskForm = ({ handleClose }) => {

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <h3>Add New Task</h3>
      <input type="text" placeholder='Task Description'/>
      <input type="text" placeholder='Task Priority'/>
      <input type="text" placeholder='Tag'/>
      <motion.button 
        className={styles.addButton}
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </motion.button>
    </form>
  )
}

export default AddTaskForm
