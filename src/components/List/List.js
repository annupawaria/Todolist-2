import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  const [text, setText] = useState("");
  const [todolist, setToDoList] = useState([]);

  const addItem = () => {
    const newTodoItem = {
      id: uuidv4,
      item: text,
      done: "true",
    };
    setToDoList([...todolist, newTodoItem]);
    setText("");
  };
  function handleDelete(itemId) {
    const newTodoList = todolist.filter((listItem) => listItem.id !== itemId);
    setToDoList(newTodoList);
  }
  const handleToggle = (itemId) => {
    const newTodoList = todolist.map((listItem) => {
      if (listItem.id === itemId) {
        return { ...listItem, done:false };
      }
      return listItem;
    });
    setToDoList(newTodoList);
  };
  console.log(todolist);
  function deleteall(){
    setToDoList([])
  }

  return (
    <div>
      <div className="app">
        <h1>TODOLIST</h1>
        <div className="adder">
          <input
            className="input"
            type="text"
            placeholder="write something here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <span onClick={addItem}>+</span>
        </div>
      </div>
      <ul className="list">
        {todolist.map((listItem) => (
          <li key={listItem.id} className={listItem.done ? 'done':""}>
            <span>{listItem.item}</span>
            <span className="actions">
              {listItem.done ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => handleToggle(listItem.id)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCheck}
                  onClick={() => handleToggle(listItem.id)}
                />
              )}
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(listItem.id)}
              />
            </span>
          </li>
          
        ))}
        <div className="button">
      {todolist.length > 1 && (
          <button onClick={deleteall}>Remove All</button>)}</div>
      </ul>
    </div>
  );
};

export default List;
