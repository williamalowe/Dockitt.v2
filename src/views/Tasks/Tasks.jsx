import TasksTable from '../../components/TasksTable/TasksTable';
import styles from './Tasks.module.css';

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <TasksTable />
    </div>
  )
}

export default Tasks
