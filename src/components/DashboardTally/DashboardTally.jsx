import { useTaskContext } from '../../context/TasksContext/TaskContext';
import TallyItem from '../TallyItem/TallyItem';
import styles from './DashboardTally.module.css';

const DashboardTally = () => {
  const { tasks } = useTaskContext();
  return (
    <div className={styles.tally}>
      <TallyItem 
        status='backlog'
        number={1}
        percentage='47'
        color='var(--backlog)'
      />
      <TallyItem 
        status='in progress'
        number='13'
        percentage='47'
        color='var(--in-progress'
      />
      <TallyItem 
        status='under review'
        number='13'
        percentage='47'
        color='var(--under-review)'
      />
      <TallyItem 
        status='completed'
        number='13'
        percentage='47'
        color='var(--completed)'
      />
    </div>
  )
}

export default DashboardTally
