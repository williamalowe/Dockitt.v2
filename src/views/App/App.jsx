import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <main className={styles.app} data-theme={darkTheme ? 'dark' : 'light'}>
    </main>
  )
}

export default App
