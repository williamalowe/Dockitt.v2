import styles from './TasksTable.module.css';

const TasksTable = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Status</th>
          <th>Priority</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          // Tasks here
        }
      </tbody>
    </table>
  )
}

export default TasksTable
