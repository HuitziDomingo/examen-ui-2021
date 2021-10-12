import { useReducer } from "react"
import characterReducer from "./CharacterReducer"
import CharacterContext from './CharactersContext'


const CharactersState = ({ children }) => {

    const initialState = {
        characters: [],
        selectedCharacter: null,
    }

    const [state, dispatch] = useReducer(characterReducer, initialState)

    //Funciones de la api
    const getCharacter = () => {
        fetch('http://localhost:4000/hp-characters')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'GET_CHARACTER',
                    payload: data.data
                })
            })
    }


    return (
        <CharacterContext.Provider value={{ ...state, getCharacter }}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharactersState
