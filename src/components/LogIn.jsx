import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { login, saveToken, saveUserLocalStorage } from '../services/users.service.js'

export default function LogIn() {

    const [userName, setUserName] = useState('');
    const [menssage, setMenssage] = useState('');
    const [userPasswd, setUserPasswd] = useState('');

    const navigate = useNavigate()

    const doLogin = async () => {
        try {
            const user = { name: userName, passwd: userPasswd };
            const response = await login(user);
            saveUserLocalStorage(response.user);
            saveToken(response.token);
            setMenssage("");
            navigate('/profile');
        } catch (err) {
            setMenssage("Usuario y/o Contraseña Erroneos");
            console.log(err);
        }
    };

    return (
        <section>
            <h1>Log In</h1>
            <label>User</label>
            <input type="text" onChange={e => setUserName(e.target.value)} value={userName} />
            <label>Password</label>
            <input type="password" onChange={e => setUserPasswd(e.target.value)} value={userPasswd} />
            <button onClick={doLogin}>Entrar</button>
            <label>{menssage}</label>
            <p>¿No tienes cuenta? </p>
            <Link to="/signUp">Resgistrate</Link>
        </section>
    );
}