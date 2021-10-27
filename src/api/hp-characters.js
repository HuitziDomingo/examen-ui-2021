const API = 'http://localhost:5000'

export const getCharacters = async () => {
    let response = await fetch(`${API}/hp-characters`)
    return response.json()
}

export const getStaff = async () => {
    let response = await fetch(`${API}/hp-staff`)
    return response.json()
}