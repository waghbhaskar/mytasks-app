import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') {
      alert('❗ Please enter a task before adding.');
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    alert('✅ Task added successfully!');
    setTask('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h1 style={{ color: "#000" }}>Assignment-2: To-Do Application</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;