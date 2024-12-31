import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, title: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <>
      <h2 className="text-lg sm:text-xl font-semibold text-center mb-4 text-teal-600">
        Your Todos
      </h2>
      <ul className="list-none space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow"
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 bg-white border border-gray-300 rounded py-1 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            ) : (
              <span className="text-gray-800">{todo.title}</span>
            )}
            <div className="flex items-center gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-teal-500 hover:bg-teal-600 py-1 px-4 rounded-lg"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.title);
                  }}
                  className="text-teal-500 hover:text-teal-600"
                  title="Edit"
                >
                  ✎
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-600"
                title="Delete"
              >
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
