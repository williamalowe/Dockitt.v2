import { useRef, useEffect } from "react";
import styles from "./TaskList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = ({ header, color, tasksList }) => {
  const headerRef = useRef(0);

  useEffect(() => {
    headerRef.current.style.background = color;
  }, []);

  return (
    <div className={styles.list}>
      <div className={styles.header} ref={headerRef}>
        <h5>{header}</h5>
      </div>
      <div className={styles.display}>
        <div className={styles.cards}>
          <TaskCard 
            header={'Add Mobile Responsiveness'}
            date={Date.now()}
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab et eveniet, hic odit illo deleniti blanditiis natus, atque reiciendis aut quia fugit aliquam molestias sit deserunt, tempore consequuntur. Error.'}
            tag={'Styles'}
            priority={'High'}
          />
        </div>
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
