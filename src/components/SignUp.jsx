import { useState } from "react";

import { useNavigate } from "react-router";
import { addUser } from "../services/users.service";

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [passwd, setPasswd] = useState('');
  const navigate = useNavigate();


  const doSubmit = async (event) => {
    event.preventDefault()
    try {
      const user = { email, name, passwd };
      const response = await addUser(user);
      navigate('/')
    } catch (err) {
      console.log(err.message);
    }
  }



  return (<>
    <form onSubmit={doSubmit}>
      <label>Email </label>
      <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
      <label>Nombre De Usuario </label>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      <label>Contraseña </label>
      <input type="password" onChange={e => setPasswd(e.target.value)} value={passwd} />
      <input type="submit" value="Crear" />
    </form>
    <button onClick={e => navigate('/')}>Salir</button>
  </>
  );
}
