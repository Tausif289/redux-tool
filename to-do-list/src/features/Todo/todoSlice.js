import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // ➕ Add Todo
    addTodo(state, action) {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false
      });
    },

    // ❌ Delete Todo
    deleteTodo(state, action) {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    // ✏️ Edit Todo
    editTodo(state, action) {
      const { id, newText } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
      }
    },

    // ✔️ Toggle Complete
    toggleTodo(state, action) {
      const todo = state.todos.find(
        (t) => t.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo
} = todoSlice.actions;

export default todoSlice.reducer;