import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form  onSubmit={handleSubmit}>
      <input
        className=' m-3 border-opacity-100 rounded text-black w-full  p-2 text-1xl'
        type="text"
        value={todo}
        placeholder="Add a task.."
        onChange={(e) => setTodo(e.target.value)}
      />
      <button 
      className= "text-white bg-blue-700 p-1 sm:p-2 rounded mb-12"
      type="submit"> {editId ? "Edit" : "Add Task"}</button>
    </form>
  );
};

export default TodoForm;