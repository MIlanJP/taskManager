import { Icon, IconButton } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";
import DatePicker from "react-date-picker";
import style from "../scss/Tasks.module.css";
import AddTaskForm from "./AddTaskForm";
import Task from "./Task";
import ZeroState from "./ZeroState";

const tasksList = [
  {
    name: "TaskA",
    date: "May 27 2021",
  },
  {
    name: "TaskB",
    date: "May 28 2021",
  },
];

const Tasks = () => {
  const [taskList, setTaskList] = React.useState(tasksList);
  const [startDate, setStartDate] = React.useState(new Date());
  const [zeroState, displayZeroState] = React.useState(true);
  const [showAddButton, toggleAddButton] = React.useState(true);

  const updateList=(data)=>{
    const list=taskList
    list.push({name:data,date:startDate.toDateString()})
    console.log(list)
    setTaskList(list)
    console.log(taskList);
  }
  

  return (
    <>
      {taskList.length === 0 && (
        <ZeroState message="There are no Tasks Added" />
      )}
      <div className={style.firstCol}>
        {showAddButton ? (
          <span>
            <IconButton
              className="AddButton"
              onClick={() => {
                console.log("TOggle Add button");
                toggleAddButton(false);
              }}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </span>
        ) : (
          <span className={style.form} >
            <AddTaskForm updateList={updateList} toggleAddButton={toggleAddButton}/>
          </span>
        )}
        <span>
          <DatePicker
            className="date picker"
            value={startDate}
            format="dd-MM-y"
            selected={startDate}
            onChange={(date) => {
              const f = "Aug 05 2021";
              const ff = new Date(f);
              console.log(
                `${ff.getDate()}/${ff.getMonth()}/${ff.getFullYear()}`,
                "Printing"
              );
              const d = new Date(date);
              console.log(date);
              console.log(
                `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
              );
              setStartDate(date);
            }}
          />
        </span>
      </div>
      <Icon className="fa fa-plus-circle" color="primary" />
      {taskList.map((data, index) => {
        const dateOfTask = new Date(data.date);
        const dateOfSelectedDate = new Date(startDate);
        if (
          `${dateOfTask.getDate()}/${dateOfTask.getMonth()}/${dateOfTask.getFullYear()}` ===
          `${dateOfSelectedDate.getDate()}/${dateOfSelectedDate.getMonth()}/${dateOfSelectedDate.getFullYear()}`
        ) {
          return (
            <>
              <Task name={data.name} dateOfTask={dateOfTask} />
            </>
          );
        } else if (startDate === null) {
          return (
            <>
              {" "}
              <Task name={data.name} dateOfTask={dateOfTask} />
            </>
          );
        }
      })}
    </>
  );
};

export default Tasks;
