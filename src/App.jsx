import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 shadow-lg max-w-md rounded-md">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">
        Learn about Redux Toolkit
      </h1>
      <div className="mb-6">
        <AddTodo />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
