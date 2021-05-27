import { Button, TextField } from "@material-ui/core";
import styles from "../scss/AddTaskForm.module.css";
import React from "react";

const AddTaskForm = ({ updateList, toggleAddButton }) => {
  const [taskName, setTaskName] = React.useState("");
  return (
    <div className={styles.addtaskform}>
      <form autoComplete="off">
        <TextField
          id="standard-basic"
          label="Task Name"
          onChange={(value) => {
            console.log(value.target.value);
            setTaskName(value.target.value);
          }}
          value={taskName}
        />
      </form>
      <span>
        <button
          className={styles.addButton}
          onClick={() => {
            updateList(taskName);
            toggleAddButton(true);
          }}
        >
          Add Task
        </button>
      </span>
    </div>
  );
};

export default AddTaskForm;
