import UpdateItem from './UpdateItem';
import styles from './UpdatesBoard.module.css';

const UpdatesBoard = () => {
  return (
    <div className={styles.updates}>
      <div className={styles.header}>
        <h3>Updates</h3>
      </div>
      <div className={styles.updateList}>
        <UpdateItem 
          user='user001'
          task='1717565900129'
          description='Task has been updated from backlog to in progress.'
        />
        <UpdateItem 
          user='user001'
          task='1717565900129'
          description='Task has been updated from backlog to in progress.'
        />
        <UpdateItem 
          user='user001'
          task='1717565900129'
          description='Task has been updated from backlog to in progress.'
        />
        <UpdateItem 
          user='user001'
          task='1717565900129'
          description='Task has been updated from backlog to in progress.'
        />
      </div>
    </div>
  )
}

export default UpdatesBoard
