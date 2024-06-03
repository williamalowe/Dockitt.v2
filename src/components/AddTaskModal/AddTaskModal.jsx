import AddTaskForm from '../AddTaskForm/AddTaskForm';
import styles from './AddTaskModal.module.css';

const AddTaskModal = ({ handleClose }) => {
  return (
    <div className={styles.background} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <AddTaskForm 
          handleClose={handleClose}
        />
      </div>
    </div>
  )
}

export default AddTaskModal
