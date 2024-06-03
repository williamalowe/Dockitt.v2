import { useState } from "react";
import styles from "./App.module.css";
import { TaskProvider } from "../../context/TasksContext/TaskContext";
import Navbar from "../../components/Navbar/Navbar";
import Background from "../../components/Background/Background";
import { Outlet } from "react-router-dom";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <TaskProvider>
      <main className={styles.app} data-theme={darkTheme ? "dark" : "light"}>
        <div className={styles.backgroundWrapper}>
          <Background />
        </div>
        <Navbar
          currentTheme={darkTheme}
          handleSwitch={() => setDarkTheme(!darkTheme)}
        />
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </TaskProvider>
  );
};

export default App;
