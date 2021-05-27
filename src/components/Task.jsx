import { Button } from "@material-ui/core";
import React from "react";

function Task({ name ,dateOfTask,updateList}) {
  return (
    <div>
      <div>
        {dateOfTask.getDate()}/{dateOfTask.getMonth()}/
        {dateOfTask.getFullYear()}
      </div>
      <div>{name}</div>
    </div>
  );
}

export default Task;
