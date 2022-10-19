import React, {useState, createContext } from 'react'

const StateContext = createContext()

const StateProvider = ({children}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <StateContext.Provider 
        value={{usernameObj: [username, setUsername], passwordObj: [password, setPassword]}}>
            {children}
        </StateContext.Provider>
    )
}

export {StateProvider, StateContext}