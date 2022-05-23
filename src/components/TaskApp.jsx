import React,{useState} from "react";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";

import styles from "./taskApp.module.css";
import data from "../data/tasks.json"
import {v4 as uuidv4} from "uuid";

const TaskApp = () => {
  const[value,setValue]=useState("");
  const[todos,setTodos]=useState(data);
  const addTodo=(xyz)=>{
    if(xyz.length!==0){
    setTodos([...todos,{id:uuidv4(),value:xyz}])
  }}
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader/>
      <AddTask value={value} setValue={setValue} addTodo={addTodo}/>
      <Tasks data={data}/>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;