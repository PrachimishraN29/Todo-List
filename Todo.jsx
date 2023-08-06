import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([
    { text: 'Apple', completed: false },
    { text: 'orange', completed: false },
  ]);

  function toggleComplete(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(index)} />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
