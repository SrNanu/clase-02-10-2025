import React, { useState } from "react";
import "../App.css"; 

function TodoList() {
  const [Tasks, setTasks] = useState([]);
  const [NewTask, setNewTask] = useState("");

  // Agregar tarea
  const AddTask = () => {
    const text = NewTask.trim();
    if (text === "") return;

    const Task = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...Tasks, Task]);
    setNewTask("");
  };

  // Cambiar estado completada/pendiente
  const ToggleTask = (id) => {
    const updated = Tasks.map((Task) =>
      Task.id === id ? { ...Task, completed: !Task.completed } : Task
    );
    setTasks(updated);
  };

  // Eliminar tarea
  const DeleteTask = (id) => {
    const index = Tasks.findIndex((Task) => Task.id === id);
    if (index !== -1) {
      const updated = [...Tasks];
      updated.splice(index, 1);
      setTasks(updated);
    }
  };

  // Contar tareas pendientes
  let Pending = 0;
  for (let i = 0; i < Tasks.length; i++) {
    if (!Tasks[i].completed) Pending++;
  }

  return (
    <div className="todo-list">
      <h2>Lista de Tareas</h2>

      <div className="add-todo">
        <input
          type="text"
          value={NewTask}
          placeholder="Escribe una tarea..."
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && AddTask()}
        />
        <button onClick={AddTask}>Agregar</button>
      </div>

      {/* Lista de tareas */}
      <ul>
        {Tasks.map((Task) => (
          <li>
            <span
              className={`todo-text ${Task.completed ? "completed" : ""}`}
              onClick={() => ToggleTask(Task.id)}
            >
              {Task.text}
            </span>
            <button className="delete-btn" onClick={() => DeleteTask(Task.id)} title="Eliminar">
              🗑️
            </button>
          </li>
        ))}
      </ul>

      <p>Tareas pendientes: <strong>{Pending}</strong></p>
    </div>
  );
}

export default TodoList;
