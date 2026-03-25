import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  toggleTodo
} from "../features/Todo/todoSlice";
import "./TodoItem.css"; // 👈 import css

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (newText.trim() === "") return;
    dispatch(editTodo({ id: todo.id, newText }));
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            className="edit-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="save-btn" onClick={handleEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={`todo-text ${
              todo.completed ? "completed" : ""
            }`}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>

          <div className="btn-group">
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}