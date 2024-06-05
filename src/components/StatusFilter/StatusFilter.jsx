import { useState, useRef, useEffect } from 'react';
import styles from './StatusFilter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

const StatusFilter = () => {
  const [showing, setShowing] = useState('All Tasks')
  const [showDropdown, setShowDropdown] = useState(false);
  const caretRef = useRef(null);

  const handleClick = (target) => {
    setShowing(target);
    setShowDropdown(false);
  }

  useEffect(() => {
    if (showDropdown) {
      caretRef.current.style.transform = 'rotate(180deg)';
    } else {
      caretRef.current.style.transform = 'rotate(0deg)';
    }
  }, [showDropdown])

  return (
    <div className={styles.filter}>
      <div>
        <h5>Showing: </h5>
      </div>
      <div>
        <div className={styles.display} onClick={() => setShowDropdown(!showDropdown)}>
          <h5>{showing}</h5>
          <FontAwesomeIcon icon={faCaretDown} ref={caretRef}/>
        </div>
        <AnimatePresence mode='popLayout'>
        {
          showDropdown &&
          <motion.div 
            className={styles.dropdown}
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: 'auto',
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
          >
            <button onClick={() => handleClick('All Tasks')}>All Tasks</button>
            <button onClick={() => handleClick('Backlog Tasks')}>Backlog Tasks</button>
            <button onClick={() => handleClick('In Progress Tasks')}>In Progress Tasks</button>
            <button onClick={() => handleClick('Under Review Tasks')}>Under Review Tasks</button>
            <button onClick={() => handleClick('Completed Tasks')}>Completed Tasks</button>
            <button onClick={() => handleClick('Cancelled Tasks')}>Cancelled Tasks</button>
          </motion.div>
        }
        </AnimatePresence>
      </div>
    </div>
  )
}

export default StatusFilter
