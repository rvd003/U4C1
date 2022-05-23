import React,{useState} from "react";
import styles from "./task.module.css";

const Task = ({todo}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [count1,setCount1]=useState(todo.count);
  const [isCompleted,setIsCompleted]=useState(todo.done)
  // console.log(count1);
  return (
    <li data-cy="task" className={styles.task}>
      <div className={styles.list}>
      <div className={isCompleted?styles.striked:styles.left}>
      <input type="checkbox" data-cy="task-checkbox" checked={isCompleted} onChange={(e)=>{setIsCompleted(e.target.checked)}}  />
      <div data-cy="task-text">{todo.text}</div>
      </div>
      <div className={styles.right}>
      <button onClick={()=>{setCount1(count1+1);console.log(count1)}}>+</button>
      {/* Counter here */}{count1}
      <button data-cy="task-remove-button" onClick={()=>setCount1(count1-1)}>-</button>
      </div>
      </div>
    </li>
  );
};

export default Task;