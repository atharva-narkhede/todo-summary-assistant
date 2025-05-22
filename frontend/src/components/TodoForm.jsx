// src/components/TodoForm.jsx
import React, { useState } from 'react';
import API from '../api';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const res = await API.post('/todos', { text });
    onAdd({ id: res.data.id, text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;
