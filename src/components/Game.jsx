
import { Link } from 'react-router-dom';

export default function Game({ game }) {
    return <Link to={`/profile/game/${game.id}`}><p>{game.player1} ({game.faction1}) {game.result1} VS {game.player2} ({game.faction2}) {game.result2} </p></Link>;
}