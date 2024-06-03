import styles from './Background.module.css';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <motion.div className={styles.background} 
      animate={{
        y: '-100vh',
        x: '-100vw',
        transition: {
          duration: 100,
          repeat: Infinity,
          repeatType: 'reverse'
        }
      }}
    />
  )
}

export default Background
