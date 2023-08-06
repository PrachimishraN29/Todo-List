import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function handleInputChange(event) {
    setTodoInput(event.target.value);
  }

  function handleAddTodo() {
    if (!todoInput.trim()) return; // don't add empty todos
    const newTodo = { id: Date.now(), text: todoInput };
    setTodos(todos.concat(newTodo));
    setTodoInput('');
  }

  function handleDelete(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function handleEdit(id, newText) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>🈴Todo App</h1>
      <figure>
        <img src='CheckList.png'alt=''/>
      </figure>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
            onEdit={(newText) => handleEdit(todo.id, newText)}
          />
        ))}
      </ul>
      <div>
        <input type="text" value={todoInput} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>➕</button>
      </div>
    </div>
  );
}

function TodoItem({ todo, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleEditStart() {
    setEditing(true);
  }

  function handleEditInputChange(event) {
    setEditText(event.target.value);
  }

  function handleEditCancel() {
    setEditing(false);
    setEditText(todo.text);
  }

  function handleEditSave() {
    if (!editText.trim()) return; // don't save empty todos
    onEdit(editText);
    setEditing(false);
  }

  return (
    <ul>
    <li>
      {editing ? (
        <>
          <input type="text" value={editText} onChange={handleEditInputChange} />
          <button onClick={handleEditSave}>Save</button>
          <button onClick={handleEditCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={onDelete}>❌</button>
          <button onClick={handleEditStart}>❗</button>
        </>
      )}
    </li>
    </ul>
  );
}

export default TodoApp;
