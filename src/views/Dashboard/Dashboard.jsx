import DashboardTally from '../../components/DashboardTally/DashboardTally';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.right}>
        <DashboardTally />
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard
