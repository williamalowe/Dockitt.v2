import { useState, useRef, useEffect } from 'react';
import styles from './StatusFilter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

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
        {
          showDropdown &&
          <div className={styles.dropdown}>
            <button onClick={() => handleClick('All Tasks')}>All Tasks</button>
            <button onClick={() => handleClick('Backlog Tasks')}>Backlog Tasks</button>
            <button onClick={() => handleClick('In Progress Tasks')}>In Progress Tasks</button>
            <button onClick={() => handleClick('Under Review Tasks')}>Under Review Tasks</button>
            <button onClick={() => handleClick('Completed Tasks')}>Completed Tasks</button>
            <button onClick={() => handleClick('Cancelled Tasks')}>Cancelled Tasks</button>
          </div>
        }
        
      </div>
    </div>
  )
}

export default StatusFilter
