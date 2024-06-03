import { useState } from 'react';
import styles from './App.module.css';
import { TaskProvider } from '../../context/TasksContext/TaskContext';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <TaskProvider>
      <main className={styles.app} data-theme={darkTheme ? 'dark' : 'light'}>
        
      </main>
    </TaskProvider>
  )
}

export default App
