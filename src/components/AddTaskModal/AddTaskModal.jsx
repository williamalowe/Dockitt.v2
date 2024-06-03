import styles from './AddTaskModal.module.css';

const AddTaskModal = ({ handleClose }) => {
  return (
    <div className={styles.background} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
      </div>
    </div>
  )
}

export default AddTaskModal
