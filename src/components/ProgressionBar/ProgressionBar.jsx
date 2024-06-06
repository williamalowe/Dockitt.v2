import { useRef, useEffect } from "react";
import styles from "./ProgressionBar.module.css";
import { motion } from "framer-motion";

const ProgressionBar = ({ header, percentage, color }) => {
  const fillRef = useRef(null);

  useEffect(() => {
    fillRef.current.style.background = color;
    fillRef.current.style.width = percentage + "%";
  }, [percentage]);
  return (
    <motion.div
      className={styles.progression}
      whileHover={{
        scale: 1.1,
      }}
    >
      <div className={styles.fill} ref={fillRef}>
        <h5>
          {percentage}% - {header}
        </h5>
      </div>
    </motion.div>
  );
};

export default ProgressionBar;
