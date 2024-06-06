import { useRef, useEffect } from 'react';
import styles from './ProgressionBar.module.css';
import { motion } from 'framer-motion'

const AllTasksProgressionBar = ({ backlog, inProgress, underReview, completed }) => {
  const backlogRef = useRef(null);
  const inProgressRef = useRef(null);
  const underReviewRef = useRef(null);
  const completedRef = useRef(null);

  useEffect(() => {
    backlogRef.current.style.width = backlog + "%";
    inProgressRef.current.style.width = inProgress + "%";
    underReviewRef.current.style.width = underReview + "%";
    completedRef.current.style.width = completed + "%";

  }, [backlog, inProgress, underReview, completed])
  
  return (
    <motion.div
      className={styles.progression}
      whileHover={{
        scale: 1.1,
      }}
    >
      <div className={styles.fill}>
        <h5>All Tasks</h5>
        <div className={styles.backlogFill} ref={backlogRef}/>
        <div className={styles.inProgressFill} ref={inProgressRef}/>
        <div className={styles.underReviewFill} ref={underReviewRef}/>
        <div className={styles.completedFill} ref={completedRef}/>
      </div>
    </motion.div>
  )
}

export default AllTasksProgressionBar
