import BarChart from '../../components/BarChart/BarChart';
import DashboardProgressChart from '../../components/DashboardProgressChart/DashboardProgressChart';
import DashboardTally from '../../components/DashboardTally/DashboardTally';
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';
import LineChart from '../../components/LineChart/LineChart';
import UpdatesBoard from '../../components/UpdatesBoard/UpdatesBoard';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <DashboardProgressChart />
        <DoughnutChart />
        <LineChart />
        <BarChart />
      </div>
      <div className={styles.right}>
        <DashboardTally />
        <UpdatesBoard />
      </div>
    </div>
  )
}

export default Dashboard
