import { useRef, useEffect } from 'react';
import styles from './BarChartItem.module.css';

const BarChartItem = ({ header, percentage, color }) => {
  const fillRef = useRef(null);

  useEffect(() => {
    fillRef.current.style.background = color;
    fillRef.current.style.width = percentage + '%';
  }, [])
  return (
    <div className={styles.chartItem}>
      <div className={styles.fill} ref={fillRef}><h5>{percentage}% - {header}</h5></div>
    </div>
  )
}

export default BarChartItem
