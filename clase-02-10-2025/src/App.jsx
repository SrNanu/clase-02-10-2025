import React from 'react';
import Counter from './components/Counter'; 
import TodoList from './components/TodoList';

import './static/ComponentesHook.css'; 

function App() {
  return (
    <div>
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;