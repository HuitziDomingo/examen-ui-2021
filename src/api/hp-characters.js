const API = 'http://localhost:5000/hp-characters'

export const getCharacters = async () => {
    let response = await fetch(API)
    return response.json()
}