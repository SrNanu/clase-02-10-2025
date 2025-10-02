import React from 'react';
import Counter from './components/Counter'; 
import TodoList from './components/TodoList';
import TaskTracker from './components/TaskTracker.jsx';
import Catalogo from "./components/Catalogo.jsx";
import AuthRoles from "./components/AuthRoles";

import './static/ComponentesHook.css'; 

function App() {
  return (
    <div>
      <Counter />
      <TodoList />
      <TaskTracker />
      <Catalogo />
      <AuthRoles />
    </div>
  );
}

export default App;