// src/App.js
import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SummaryButton from './components/SummaryButton';
import API from './api';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const res = await API.get('/todos');
      setTodos(res.data);
    }
    fetchTodos();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📝 Todo Summary Assistant</h1>
      <TodoForm onAdd={(todo) => setTodos([...todos, todo])} />
      <TodoList todos={todos} setTodos={setTodos} />
      <SummaryButton />
    </div>
  );
}

export default App;
