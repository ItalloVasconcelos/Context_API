import { createContext, useState } from "react"

export const CounterCount = createContext();

export const CounterCountProvider = ({children}) => {

    const [counter, setCouter] = useState(4)

    return (
        <CounterCount.Provider value = {{counter, setCouter}}>
            {children}
        </CounterCount.Provider>
    )
}
