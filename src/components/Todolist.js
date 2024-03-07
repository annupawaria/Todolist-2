import React, { useState } from "react";
// import {uuid} from 'uuid'
import { v4 as uuidv4 } from 'uuid';


const Todolist = () => {
  const [text, setText] = useState("");
// console.log(text)

const [todolist,setTodoList]=useState([])
const addItem=()=>{
  const newTodoItem={
    id:uuidv4,
    item:text,
    done:false,
  };
  setTodoList([...todolist,newTodoItem])
};
console.log('todolist:', todolist);

  return (
    <div className="app">
      <h1>TODOLIST</h1>
      <div className="adder">
        <input
          className="input"
          type="text"
          placeholder="Add items to your list"
          value={text} onChange={(e)=>setText(e.target.value)}/>
        <span onClick={addItem}>+</span>
      </div>
    </div>
  );
};

export default Todolist;
