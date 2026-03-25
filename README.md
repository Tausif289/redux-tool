# 📝 Redux Toolkit Todo App

A simple and scalable **Todo Application** built using **Redux Toolkit** and React. This project demonstrates modern Redux patterns including slices, store configuration, and state management.

---

## 🚀 Features

* ➕ Add Todo
* ❌ Delete Todo
* ✅ Mark Todo as Completed
* 📦 Centralized state management using Redux Toolkit
* ⚡ Clean and scalable folder structure

---

## 🛠️ Tech Stack

* React
* Redux Toolkit
* React-Redux
* JavaScript (ES6+)

---

## 📂 Project Structure

```
src/
│
├── app/
│   └── store.js          # Redux store configuration
│
├── features/
│   └── todos/
│       ├── todoSlice.js  # Slice (state + reducers)
│       └── TodoList.js   # UI component
│
├── components/
│   └── AddTodo.js        # Add todo component
│
├── App.js
└── index.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/redux-toolkit-todo.git
```

### 2. Navigate to project folder

```bash
cd redux-toolkit-todo
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the app

```bash
npm start
```

---

## 🧠 Redux Toolkit Setup

### Store Configuration

```js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
```

---

### Slice Example

```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleTodo(state, action) {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
```

---

## 🔁 Redux Flow

```
Component → Dispatch Action → Slice Reducer → Store → UI Update
```

---

## 📸 Screenshots (Optional)

*Add screenshots of your app UI here*

---

## 🎯 Learning Outcomes

* Understanding Redux Toolkit basics
* Using `createSlice` and `configureStore`
* Managing global state efficiently
* Writing clean and maintainable Redux code

---

## 📌 Future Improvements

* 🗂️ Add filters (All / Completed / Pending)
* 💾 Persist state using local storage
* 🌐 Add backend integration (API)
* 🎨 Improve UI/UX

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙌 Acknowledgements

* Redux Toolkit Documentation
* React Community

---
