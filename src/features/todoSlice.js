import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todoSlice = createSlice ({
    name: 'todo',
    initialState,
    reducers: {}
})

export const {} = todoSlice.actions

export default todoSlice.reducer
