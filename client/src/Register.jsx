import React, {useState} from "react";

export const Register  = (props) =>{
  const [name, setName] = useState('');
  const [dpto, setDpto] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify({nombre: name, departamento: dpto, cel : celular, email: email, contrasena: password})
    })

    const data = await response.json()
    console.log(data)
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Tu nombre completo" id="name" name="name" />
        <label htmlFor="dpto">Departamento:</label>
        <input value={dpto} onChange={(e) => setDpto(e.target.value)} type="number" placeholder="Tu número de departamento" id="dpto" name="dpto" />
        <label htmlFor="celular">Celular:</label>
        <input value={celular} onChange={(e) => setCelular(e.target.value)} type="text" placeholder="Tu número de celular" id="cel" name="cel" />
        <label htmlFor="email">Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}  type="text" placeholder="Tu usuario" id="email" name="email" />
        <label htmlFor="password">Contraseña:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Tu contraseña" id="password" name="password" />
        <button type="submit">Registrar</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Ya tienes una cuenta? Ingresa aquí</button>
    </div>
  )
}