
import { getToken } from "./users.service.js"

const url = 'http://localhost:8080/games'
const headers = {
    "Content-Type": "application/json",
    "Authorization": ""
}

const getGames = async () => {
    const token = getToken();
    headers.Authorization = "Bearer " + token;
    const response = await fetch(url, {
        headers
    });
    const result = await response.json();
    if (response.status === 500) throw result;
    return result;
}


const getGame = async (id) => {
    const response = await fetch(url + "/" + id, {
        headers
    });
    const result = await response.json();
    if (response.status === 500) throw result;
    return result;
}


export { getGames, getGame }