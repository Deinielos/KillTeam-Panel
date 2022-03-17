import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { getGame } from '../services/games.service'
import { useNavigate } from "react-router";

export default function Detail() {
  const [game, setGame] = useState([])
  const params = useParams() //req.params
  const navigate = useNavigate();

  useEffect(() => {
    loadDetails()
  }, [])

  const loadDetails = async () => {
    try {
      const response = await getGame(params.id);
      setGame(response);
    } catch (err) {
      console.log(err);
    }
  };


  return <>
    <section>
      <h1>Jugador 1 {game.player1}</h1>
      <p>Faccion {game.faction1}</p>
      <p>Atacante  {game.attacker}</p>
      <p>Iniciativa  {game.iniciative}</p>
      <p>Turnos {game.turns}</p>
      <p>Mision {game.mission}</p>
      <ol>
        <p>Tac Ops</p>
        <li>{game.tacOps1}</li>
        <li>{game.tacOps2}</li>
        <li>{game.tacOps3}</li>
      </ol>
      <p>Puntos {game.result1}</p>
    </section>
    <section>
      <h1>Jugador 2 {game.player2}</h1>
      <p>Faccion {game.faction2}</p>
      <ol>
        <p>Tac Ops</p>
        <li>{game.tacOps4}</li>
        <li>{game.tacOps5}</li>
        <li>{game.tacOps6}</li>
      </ol>
      <p>Puntos {game.result2}</p>
    </section>

    <button onClick={e => navigate('/profile')}>Salir</button>
  </>
}