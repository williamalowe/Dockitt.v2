import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './OpenModalButton.module.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const OpenModalButton = ({ handleClick }) => {
  
  return (
    <motion.button 
      className={styles.openModalButton} 
      onClick={handleClick}
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.9
      }}
      >
      <FontAwesomeIcon icon={faPlus} />
    </motion.button>
  )
}

export default OpenModalButton
