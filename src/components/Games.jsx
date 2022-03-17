

import Game from './Game';

//services
import { getGames } from '../services/games.service'
import { useEffect, useState } from 'react';

export default function Games() {

  const [games, setGames] = useState([])

  useEffect(() => {
    loadGames()
  }, [])

  const loadGames = async () => {
    try {
      const response = await getGames();
      setGames(response);
    } catch (err) {
      console.log(err);
    }
  };


  return <>
    <ol>
      {
        games.map((game, index) => { return <Game key={index} game={game} /> })
      }
    </ol>
  </>
}