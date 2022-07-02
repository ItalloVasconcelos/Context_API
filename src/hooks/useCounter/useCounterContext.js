import { useContext } from "react";
import { CounterCount } from "../../context/CounterCount";

export const useCounterContext = () => {
    const context = useContext(CounterCount)

    if(!context) {
        console.log("Contexto não encontrado")
    }
    return context
}