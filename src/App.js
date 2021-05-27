import logo from "./logo.svg";
import "./App.css";
import Tasks from "./components/Tasks";
import styles from "./scss/Tasks.module.css"

function App() {
  return (
    <div className="App">
      <h1 className={styles.header}>Task Manager</h1>
      <Tasks />
    </div>
  );
}

export default App;
