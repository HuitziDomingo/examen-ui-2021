import { createContext } from 'react'
import { getCharacters } from '../api/hp-characters'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {

    return (
        <DataContext.Provider value={{ getCharacters }}>
            {children}
        </DataContext.Provider>
    )

}