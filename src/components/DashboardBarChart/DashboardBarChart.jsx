import BarChartItem from '../BarChartItem/BarChartItem';
import styles from './DashboardBarChart.module.css';

const DashboardBarChart = () => {
  return (
    <div className={styles.barChart}>
      <BarChartItem 
        header='Backlog'
        percentage={10}
        color='var(--backlog)'
      />
    </div>
  )
}

export default DashboardBarChart
