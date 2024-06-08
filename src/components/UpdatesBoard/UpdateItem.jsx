import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './UpdatesBoard.module.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UpdateItem = ({ user, task, description }) => {
  return (
    <div className={styles.update}>
      <div className={styles.profile}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className={styles.description}>
        <h5>{user} has updated task {task}.</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default UpdateItem
