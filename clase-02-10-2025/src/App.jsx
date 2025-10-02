import React from 'react';
import Counter from './components/Counter'; 
import TodoList from './components/TodoList';

import './styles/ComponentesHook.css'; 

function App() {
  return (
    <div className="App">
      <h2>Contador con límites</h2>
      <Counter />

      <h2>Lista de Tareas Interactiva</h2>
      <TodoList />
    </div>
  );
}
export default App;
