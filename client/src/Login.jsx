import React, {useState} from "react"

export const Login  = (props) =>{
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user">Usuario:</label>
        <input value={user} onChange={(e) => setUser(e.target.value)} type="email" placeholder="Tu email" id="email" name="email" />
        <label htmlFor="password">Contraseña:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Tu contraseña" id="password" name="password" />
        <button type="submit">Ingresar</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Aun no tienes una cuenta? Registrate aquí</button>
    </div>
  )
}