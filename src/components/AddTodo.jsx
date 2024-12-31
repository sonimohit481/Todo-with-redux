import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="flex flex-row  items-center  ">
      <input
        type="text"
        className="flex-1 bg-gray-200 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-400 text-base outline-none text-gray-800 py-2 px-4 transition-colors duration-200 ease-in-out"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white ml-5  bg-teal-500 hover:bg-teal-600 border-0 py-2 px-6 rounded-lg transition-colors duration-200 ease-in-out"
      >
        <span className="block sm:hidden">+</span>
        <span className="hidden sm:block">Add Todo</span>
      </button>
    </form>
  );
}

export default AddTodo;
