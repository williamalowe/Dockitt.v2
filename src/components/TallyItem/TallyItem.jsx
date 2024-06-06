import { useEffect, useRef } from 'react';
import styles from './TallyItem.module.css';
import { motion } from 'framer-motion';

const TallyItem = ({ status, number, percentage, color  }) => {
  const headerRef = useRef(null);
  
  useEffect(() => {
    headerRef.current.style.background = color;
  }, [])

  return (
    <motion.div 
    
    className={styles.tallyItem}
    whileHover={{
      scale: 1.1
    }}
    >
      <div className={styles.header} ref={headerRef}>
        <h5>{status} Tasks</h5>
      </div>
      <div className={styles.stats}>
      {
        number === 1 ?
        <h3>{number} Task</h3>
        :
        <h3>
          {number} Tasks
        </h3>
      }
      <p>{percentage}% of active tasks</p>

      </div>
    </motion.div>
  )
}

export default TallyItem
