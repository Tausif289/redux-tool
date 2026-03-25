import { configureStore } from '@reduxjs/toolkit'
import todoreducer from "../features/Todo/todoSlice"
export default configureStore({
  reducer: {
    todos: todoreducer
  }
})