
import Games from './Games'
import Play from './Play'
import { getUserLocalStorage } from '../services/users.service.js'
//import { useNavigate } from "react-router-dom";

export default function Profile() {

    //let navigate = useNavigate();

    const goToNewGame = () => {
        window.location = "http://localhost:8080/newGame"
    }


    return <section>
        <h1>{getUserLocalStorage().name}</h1>
        <ol>
            <h1>Partidas</h1>
            <Games />
            <Play />
            <button onClick={goToNewGame}>Jugar</button>

        </ol>
    </section >
}