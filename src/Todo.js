import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, clearTodos } from "./features/todoSlice";

function Todo() {
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  return <div></div>;
}

export default Todo;
