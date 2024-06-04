import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AddTaskForm.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTaskContext } from "../../context/TasksContext/TaskContext";

const AddTaskForm = ({ handleClose }) => {
  const { addTask } = useTaskContext();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("low");
  const [taskTag, setTaskTag] = useState("");

  const submitNewTask = () => {
    const newTask = {
      date: Date.now(),
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      tag: taskTag,
      status: "backlog",
    };
    addTask(newTask);
    handleClose();
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <h3>Add New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <h5>Priority</h5>
      <div className={styles.prioritySelection}>
        <div className={styles.priorityOption}>
          <input
            type="radio"
            name="priority"
            value="low"
            onChange={(e) => setTaskPriority(e.target.value)}
          />
          <label htmlFor="priority">Low</label>
        </div>
        <div className={styles.priorityOption}>
          <input
            type="radio"
            name="priority"
            value="medium"
            onChange={(e) => setTaskPriority(e.target.value)}
          />
          <label htmlFor="priority">Medium</label>
        </div>
        <div className={styles.priorityOption}>
          <input
            type="radio"
            name="priority"
            value="high"
            onChange={(e) => setTaskPriority(e.target.value)}
          />
          <label htmlFor="priority">High</label>
        </div>
        <div className={styles.priorityOption}>
          <input
            type="radio"
            name="priority"
            value="critical"
            onChange={(e) => setTaskPriority(e.target.value)}
          />
          <label htmlFor="priority">Critical</label>
        </div>
        <label htmlFor="">Low</label>
      </div>
      <input
        type="text"
        placeholder="Tag (optional)"
        value={taskTag}
        onChange={(e) => setTaskTag(e.target.value)}
      />
      <motion.button
        className={styles.addButton}
        onClick={() => submitNewTask()}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </motion.button>
    </form>
  );
};

export default AddTaskForm;
