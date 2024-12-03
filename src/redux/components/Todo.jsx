import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const Todo = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const dispatch = useDispatch();

  const handleAddToDo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddToDoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddToDo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        PERSONAL TODO APP
      </h2>

      {/* input text and btn */}
      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          name="addTodo"
          id="addTodo"
          placeholder="Add Todo"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          onClick={handleAddToDoClick}
        >
          <BsPlus />
        </button>
      </div>
    </div>
  );
};

export default Todo;
