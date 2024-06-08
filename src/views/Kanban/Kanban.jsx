import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskList from "../../components/TaskList/TaskList";
import { useTaskContext } from "../../context/TasksContext/TaskContext";
import styles from "./Kanban.module.css";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Kanban = () => {
  const { tasks } = useTaskContext();
  const [displayList, setDisplayList] = useState(0);

  const handleNextList = () => {
    if (displayList === 4) {
      setDisplayList(0);
    } else {
      setDisplayList(displayList + 1);
    }
  };

  const handlePrevList = () => {
    if (displayList === 0) {
      setDisplayList(4);
    } else {
      setDisplayList(displayList - 1);
    }
  };

  return (
    <>
      <div className={styles.kanban}>
        <TaskList
          header={"Backlog"}
          color={"var(--backlog)"}
          tasksList={tasks.filter((task) => task.status === "backlog")}
          count={tasks.filter((task) => task.status === "backlog").length}
        />
        <TaskList
          header={"In Progress"}
          color={"var(--in-progress)"}
          tasksList={tasks.filter((task) => task.status === "in progress")}
          count={tasks.filter((task) => task.status === "in progress").length}
        />
        <TaskList
          header={"Under Review"}
          color={"var(--under-review)"}
          tasksList={tasks.filter((task) => task.status === "under review")}
          count={tasks.filter((task) => task.status === "under review").length}
        />
        <TaskList
          header={"Completed"}
          color={"var(--completed)"}
          tasksList={tasks.filter((task) => task.status === "completed")}
          count={tasks.filter((task) => task.status === "completed").length}
        />
        <TaskList
          header={"Cancelled"}
          color={"var(--cancelled)"}
          tasksList={tasks.filter((task) => task.status === "cancelled")}
          count={tasks.filter((task) => task.status === "cancelled").length}
        />
      </div>
      {/* <div className={styles.mobile}>
        <div className={styles.buttons}>
          <button onClick={() => handlePrevList()}>
            <FontAwesomeIcon icon={faCaretLeft} />
            <h5>Previous List</h5>
          </button>
          <button onClick={() => handleNextList()}>
            <h5>Next List</h5>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
        <AnimatePresence mode="popLayout">
          {displayList === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                x: "-100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: "100%",
              }}
            >
              <TaskList
                header={"Backlog"}
                color={"var(--backlog)"}
                tasksList={tasks.filter((task) => task.status === "backlog")}
                count={tasks.filter((task) => task.status === "backlog").length}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {displayList === 1 && (
            <motion.div
              initial={{
                opacity: 0,
                x: "-100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: "100%",
              }}
            >
              <TaskList
                header={"In Progress"}
                color={"var(--in-progress)"}
                tasksList={tasks.filter(
                  (task) => task.status === "in progress"
                )}
                count={
                  tasks.filter((task) => task.status === "in progress").length
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {displayList === 2 && (
            <motion.div
              initial={{
                opacity: 0,
                x: "-100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: "100%",
              }}
            >
              <TaskList
                header={"Under Review"}
                color={"var(--under-review)"}
                tasksList={tasks.filter(
                  (task) => task.status === "under review"
                )}
                count={
                  tasks.filter((task) => task.status === "under review").length
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {displayList === 3 && (
            <motion.div
              initial={{
                opacity: 0,
                x: "-100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: "100%",
              }}
            >
              <TaskList
                header={"Completed"}
                color={"var(--completed)"}
                tasksList={tasks.filter((task) => task.status === "completed")}
                count={
                  tasks.filter((task) => task.status === "completed").length
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {displayList === 4 && (
            <motion.div
              initial={{
                opacity: 0,
                x: "-100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: "100%",
              }}
            >
              <TaskList
                header={"Cancelled"}
                color={"var(--cancelled)"}
                tasksList={tasks.filter((task) => task.status === "cancelled")}
                count={
                  tasks.filter((task) => task.status === "cancelled").length
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}
      <div className={styles.mobile}>
        <TaskList
          header={"Backlog"}
          color={"var(--backlog)"}
          tasksList={tasks.filter((task) => task.status === "backlog")}
          count={tasks.filter((task) => task.status === "backlog").length}
        />
        <TaskList
          header={"In Progress"}
          color={"var(--in-progress)"}
          tasksList={tasks.filter((task) => task.status === "in progress")}
          count={tasks.filter((task) => task.status === "in progress").length}
        />
        <TaskList
          header={"Under Review"}
          color={"var(--under-review)"}
          tasksList={tasks.filter((task) => task.status === "under review")}
          count={tasks.filter((task) => task.status === "under review").length}
        />
        <TaskList
          header={"Completed"}
          color={"var(--completed)"}
          tasksList={tasks.filter((task) => task.status === "completed")}
          count={tasks.filter((task) => task.status === "completed").length}
        />
        <TaskList
          header={"Cancelled"}
          color={"var(--cancelled)"}
          tasksList={tasks.filter((task) => task.status === "cancelled")}
          count={tasks.filter((task) => task.status === "cancelled").length}
        />
      </div>
    </>
  );
};

export default Kanban;
