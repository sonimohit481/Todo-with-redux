import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="container mx-auto mt-10 p-4 sm:p-6 bg-white shadow-lg max-w-md sm:max-w-lg md:max-w-xl rounded-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-teal-600">
        Todo with Redux
      </h1>
      <div className="mb-4 sm:mb-6">
        <AddTodo />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
