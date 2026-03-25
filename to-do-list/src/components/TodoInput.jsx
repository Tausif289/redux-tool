import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";
import "./TodoInput.css"; // 👈 import css

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    console.log(text);
    setText("");
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={text}
        placeholder="Enter todo..."
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <button onClick={handleAdd} className="todo-button">
        Add
      </button>
    </div>
  );
}