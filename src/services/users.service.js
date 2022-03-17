
const url = 'http://localhost:8080/users'
const headers = {
    "Content-Type": "application/json",
}

const getUsers = async () => {
    const response = await fetch(url, {
        headers
    });
    const result = await response.json();
    if (response.status === 500) throw result;
    return result;
}

const login = async (user) => {
    const body = JSON.stringify(user)

    const response = await fetch(`${url}/login`, {
        method: "POST",
        headers,
        body,
    });
    const result = await response.json();
    if (response.status === 500) throw result;
    if (response.status === 401) throw result;
    return result;
}

const getToken = () => {
    const token = localStorage.getItem("token")
    if (token) {
        return JSON.parse(token)
    }
    else return []
}

const saveToken = token => {
    localStorage.setItem("token", JSON.stringify(token))
}

const getUserLocalStorage = () => {
    const user = localStorage.getItem("user")
    if (user) {
        return JSON.parse(user)
    }
    else return []
}

const saveUserLocalStorage = user => {
    localStorage.setItem("user", JSON.stringify(user))
}

const addUser = async (user) => {
    const body = JSON.stringify(user)
    const response = await fetch(url + '/signUp', {
        method: "POST",
        headers,
        body,
    });
    console.log(response);
    const result = await response.json();
    if (response.status === 500) throw result;
    return result;
}

export { saveUserLocalStorage, getUserLocalStorage, getUsers, addUser, login, getToken, saveToken }