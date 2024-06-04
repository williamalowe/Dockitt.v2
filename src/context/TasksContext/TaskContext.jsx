import { createContext, useContext, useEffect, useState } from "react";

// Step 1: Create a context
const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  // Step 2: Set up state for tasks
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Step 3: Define functions to manipulate tasks
  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const deleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.date !== taskId));

  const updateStatus = (taskID) => {
    let target = tasks.filter((task) => task.date === taskID);
    let updatedList = tasks.filter((task) => task.date !== taskID);
    let status = "";

    if (target[0].status === "completed") {
      setTasks([...updatedList]);
    } else if (target[0].status === "backlog") {
      status = "in progress";
    } else if (target[0].status === "in progress") {
      status = "under review";
    } else if (target[0].status === "under review") {
      status = "completed";
    }

    let updatedTask = {
      date: target[0].date,
      title: target[0].title,
      description: target[0].description,
      priority: target[0].priority,
      tag: target[0].tag,
      status: status,
    };
    setTasks([...updatedList, updatedTask]);
  };

  const rollbackStatus = (taskID) => {
    let target = tasks.filter((task) => task.date === taskID);
    let updatedList = tasks.filter((task) => task.date !== taskID);
    let status = "";

    if (target[0].status === "backlog") {
      status = "cancelled";
    } else if (target[0].status === "in progress") {
      status = "backlog";
    } else if (target[0].status === "under review") {
      status = "in progress";
    } else if (target[0].status === "completed") {
      status = "under review";
    }

    let updatedTask = {
      date: target[0].date,
      title: target[0].title,
      description: target[0].description,
      priority: target[0].priority,
      tag: target[0].tag,
      status: status,
    };
    setTasks([...updatedList, updatedTask]);
  };
  // const toggleTaskCompletion = (taskId) =>
  //   setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));

  // Step 4: Provide the context and functions to the components
  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, updateStatus, rollbackStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Step 5: Create a custom hook for accessing the context
const useTaskContext = () => useContext(TaskContext);

export { TaskProvider, useTaskContext };
