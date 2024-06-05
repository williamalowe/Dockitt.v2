import StatusFilter from '../../components/StatusFilter/StatusFilter';
import TasksTable from '../../components/TasksTable/TasksTable';
import styles from './Tasks.module.css';

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <StatusFilter />
      <TasksTable />
    </div>
  )
}

export default Tasks
