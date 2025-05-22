// src/components/TodoList.jsx
import React from 'react';
import API from '../api';

function TodoList({ todos, setTodos }) {
  const handleDelete = async (id) => {
    await API.delete(`/todos/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className="card shadow-sm mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <span>{todo.text}</span>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
