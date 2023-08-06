import React, { useState } from 'react';
import './App.css';
import TodoApp from './TodoUI';
function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a todo app', completed: false },
  ]);

  return (
    <div className='App'>

      <TodoApp/>
    </div>
    
  );
}

export default App;
