import React, { useEffect, useState } from "react";
import "../static/ComponentesHook.css";

const usuarioEjemplo = {
 nombre: 'Ana García',
 email: 'ana@ejemplo.com',
 rol: 'admin', // probar con 'editor' y 'usuario'
 ultimoAcceso: '15/01/2024'
};

function AuthRoles() {
  // Estados
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(usuarioEjemplo.email);
  const [rol, setRol] = useState(usuarioEjemplo.rol);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  // Crea el usuario y cambia estado
  const handleLogin = (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      nombre: usuarioEjemplo.nombre,
      email,
      rol,
      ultimoAcceso: new Date().toLocaleDateString("es-AR"),
    };
    setUser(nuevoUsuario);
    setIsLogged(true);
  };

  // Logout
  const handleLogout = () => {
    setIsLogged(false);
    setUser(null);
  };

  // Ternarios anidados para los 3 estados
  return isLoading ? (
    // Cargando
    <div className="success-message" style={{ maxWidth: 420 }}>
      <div style={{ fontSize: 22, marginBottom: 10 }}>⏳ Cargando...</div>
      <div>Preparando la aplicación de autenticación</div>
    </div>
  ) : isLogged ? (
    // Logueado
    <div className="success-message" style={{ maxWidth: 500 }}>
      <h2>Bienvenido</h2>

      <p><strong>Nombre:</strong> {user.nombre}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Rol:</strong> {user.rol}</p>
      <p><strong>Último acceso:</strong> {user.ultimoAcceso}</p>

      <div>
        {/* Todos los usuarios */}
        <button className="theme-toggle">Mi Perfil</button>
        <button className="theme-toggle">Configuración</button>

        {/* Admin O Editor */}
        {(user.rol === "admin" || user.rol === "editor") && (
          <button className="theme-toggle">Gestionar Contenido</button>
        )}

        {/* Solo Admin */}
        {user.rol === "admin" && (
          <button className="theme-toggle">Panel de Administración</button>
        )}
      </div>

      <div style={{ marginTop: 16 }}>
        <button className="clear-btn" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  ) : (
    // No Logueado
    <form className="registration-form" onSubmit={handleLogin}>
      <h2 style={{ marginTop: 0 }}>Iniciar Sesión</h2>

      <div className="form-group">
        <label>Email</label>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
        />
      </div>

      <div className="form-group">
        <label>Rol</label>
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
          <option value="admin">admin</option>
          <option value="editor">editor</option>
          <option value="usuario">usuario</option>
        </select>
      </div>

      <button type="submit">Entrar</button>
      
    </form>
  );
}

export default AuthRoles;
