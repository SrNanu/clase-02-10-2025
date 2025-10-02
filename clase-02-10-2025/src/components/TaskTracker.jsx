import React, { useState } from 'react';

// Datos Iniciales 
const tareasIniciales = [
    { id: 1, texto: 'Aprender React', estado: 'completada' },
    { id: 2, texto: 'Practicar hooks', estado: 'en progreso' },
    { id: 3, texto: 'Crear proyecto final', estado: 'pendiente' }
];

const TaskTracker = () => {
    const [todos, setTodos] = useState(tareasIniciales);
    const [newTaskText, setNewTaskText] = useState('');

    const getStatusInfo = (estado) => {
        switch (estado) {
            case 'completada':
                return { color: 'green', icon: '✅' };
            case 'en progreso':
                return { color: 'orange', icon: '⏳' };
            case 'pendiente':
                return { color: 'gray', icon: '⏱️' };
            default:
                return { color: 'black', icon: '?' };
        }
    };

    const changeStatus = (id, currentEstado) => {
        const estadosPosibles = ['pendiente', 'en progreso', 'completada'];
        // Encontrar el índice del estado actual
        const currentIndex = estadosPosibles.indexOf(currentEstado);
        // Calcular el índice del próximo estado (circular)
        const nextIndex = (currentIndex + 1) % estadosPosibles.length;
        const nextEstado = estadosPosibles[nextIndex];

        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, estado: nextEstado } : todo
        ));
    };

    // 3. Lógica para agregar nueva tarea (Siempre como 'pendiente')
    const addTask = (e) => {
        e.preventDefault();
        if (newTaskText.trim() === '') return;

        const newTask = {
            id: Date.now(),
            texto: newTaskText.trim(),
            estado: 'pendiente',
        };

        setTodos([...todos, newTask]);
        setNewTaskText('');
    };

    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const completedCount = todos.filter(t => t.estado === 'completada').length;
    const inProgressCount = todos.filter(t => t.estado === 'en progreso').length;
    const totalCount = todos.length;

    return (
        <div className="todo-list">
            <h2>Seguimiento de Tareas</h2>

            {totalCount === 0 ? (
                <p style={{ color: 'blue' }}>No hay tareas pendientes</p> 
            ) : (
                totalCount > 0 && (
                    <div style={{ marginBottom: '15px' }}>
                        <p>
                            **Estadísticas:** Completadas: {completedCount} | En Progreso: {inProgressCount} | Total: {totalCount}
                        </p>
                    </div>
                )
            )}

            <form className="add-todo" onSubmit={addTask}>
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    placeholder="Nueva tarea..."
                />
                <button type="submit" disabled={newTaskText.trim() === ''}>
                    Agregar
                </button>
            </form>

            <div>
                {todos.map((todo) => {
                    const { color, icon } = getStatusInfo(todo.estado);

                    return (
                        <div key={todo.id} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #eee' }}>
                            
                            <span 
                                className="todo-text" 
                                style={{ color: color, cursor: 'pointer', flex: 1 }}
                                onClick={() => changeStatus(todo.id, todo.estado)}
                            >
                                {icon} {todo.texto}
                            </span>
                            
                            <div>
                                <button 
                                    onClick={() => deleteTask(todo.id)}
                                    className="delete-btn"
                                >
                                    🗑️ 
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TaskTracker;