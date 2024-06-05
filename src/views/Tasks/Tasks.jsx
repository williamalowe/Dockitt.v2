import StatusFilter from "../../components/StatusFilter/StatusFilter";
import TasksTable from "../../components/TasksTable/TasksTable";
import styles from "./Tasks.module.css";
import { useTaskContext } from "../../context/TasksContext/TaskContext";
import { useEffect, useState } from "react";

const Tasks = () => {
  const { tasks } = useTaskContext();
  const [displayList, setDisplayList] = useState([]);
  const [filter, setFilter] = useState("All Tasks");

  const filterList = () => {
    if (filter === "Backlog Tasks") {
      setDisplayList(tasks.filter((task) => task.status === "backlog"));
    } else if (filter === "In Progress Tasks") {
      setDisplayList(tasks.filter((task) => task.status === "in progress"));
    } else if (filter === "Under Review Tasks") {
      setDisplayList(tasks.filter((task) => task.status === "under review"));
    } else if (filter === "Completed Tasks") {
      setDisplayList(tasks.filter((task) => task.status === "completed"));
    } else if (filter === "Cancelled Tasks") {
      setDisplayList(tasks.filter((task) => task.status === "cancelled"));
    } else {
      setDisplayList(tasks);
    }
  };

  useEffect(() => {
    filterList();
  }, [filter, tasks]);

  return (
    <div className={styles.tasks}>
      <StatusFilter handleSelect={(target) => setFilter(target)} />
      <TasksTable taskslist={displayList} />
    </div>
  );
};

export default Tasks;
