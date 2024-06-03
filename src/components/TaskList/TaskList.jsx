import { useRef, useEffect } from 'react';
import styles from './TaskList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ header, color }) => {
  const headerRef = useRef(0);

  useEffect(() => {
    headerRef.current.style.background = color;
  }, [])

  return (
    <div className={styles.list}>
      <div className={styles.header} ref={headerRef}>
        <h5>{ header }</h5>
      </div>
      <div className={styles.display}>  
        <div className={styles.cards}>
          
        </div>
      <div className={styles.arrow}>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      </div>
    </div>
  )
}

export default TaskList
