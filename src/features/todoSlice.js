import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice ({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state) => {},
        removeTodo: (state) => {},
        clearTodos: (state) => {}
    }
})

export const {} = todoSlice.actions

export default todoSlice.reducer
