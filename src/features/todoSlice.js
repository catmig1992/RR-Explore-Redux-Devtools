import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
        return {items:[...state.items, action.payload]}
    },
    removeTodo: (state) => {},
    clearTodos: () => {
      return { items: [] };
    },
  },
});

export const { addTodo, removeTodo, clearTodos } = todoSlice.actions;

export default todoSlice.reducer;
