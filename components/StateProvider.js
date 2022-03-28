import { createContext, useContext, useReducer } from 'react'


// Data layer created
export const StateContext = createContext();


// Build a provider

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);