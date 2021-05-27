import { Button } from "@material-ui/core";
import React from "react";
import styles from "../scss/Tasks.module.css"

function Task({ name ,dateOfTask,updateList}) {
  return (
    <div className={styles.taskBox} >
      <div className={styles.DateSection} >
        Date:{dateOfTask.getDate()}/{dateOfTask.getMonth()}/
        {dateOfTask.getFullYear()}
      </div>
      <div className={styles.taskNameSection}>Name:{name}</div>
    </div>
  );
}

export default Task;
