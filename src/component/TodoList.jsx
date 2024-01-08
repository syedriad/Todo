import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    
    <ul >
      {todos.map((t) => (
        <li className='text-1xl sm:text-4xl font-bold shadow-lg bg-blue-400 p-1 sm:p-2 m-2 rounded'>
          <span className="" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}
          className=' px-2 text-md sm:text-2xl rounded-xl ml-12 font-medium bg-green-700   '
          >Edit</button>
          <button onClick={() => handleDelete(t.id)}
          className=' px-2 text-md sm:text-2xl rounded-xl ml-4 font-medium bg-red-700 '
          >Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;