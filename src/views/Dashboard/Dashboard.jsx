import DashboardProgressChart from '../../components/DashboardProgressChart/DashboardProgressChart';
import DashboardTally from '../../components/DashboardTally/DashboardTally';
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <DashboardProgressChart />
        <DoughnutChart />
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
