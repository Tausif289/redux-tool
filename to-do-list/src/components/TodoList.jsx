import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./TodoList.css"; // 👈 import css

export default function TodoList() {
  const todos = useSelector((state) => state.todos?.todos || []);
  console.log(todos);

  return (
    <div className="todo-list-container">
      <h2 className="todo-heading">My Todos</h2>

      {todos.length === 0 ? (
        <p className="empty-text">No todos yet 🚀</p>
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}