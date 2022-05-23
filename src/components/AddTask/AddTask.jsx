import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({value,setValue,addTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." onChange={(e)=>{setValue=(e.target.value)}} />
      <button data-cy="add-task-button" onClick={()=>{addTodo(value)}}>+</button>
    </div>
  );
};

export default AddTask;