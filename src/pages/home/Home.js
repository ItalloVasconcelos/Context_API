//import { useContext } from "react"
import ChangeCounter from "../../components/changeCounter/ChangeCounter"
//import {CounterCount} from "../../context/CounterCount"

import { useCounterContext } from "../../hooks/useCounter/useCounterContext"
import { useTittleColorContext } from "../../hooks/useTittleColor/useTittleColorContext"


const Home = () => {
  //const {counter} = useContext(CounterCount)

  const {counter} = useCounterContext()
  const {color, dispatch} = useTittleColorContext()
  const setTittleColor = (color) => {
    dispatch({ type: color })
  }
  return (
    <div>
      <h1 style={{color: color}}>Casa!</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      <div>
        <button onClick={() => setTittleColor("RED")}>Vermelho</button>
        <button onClick={() => setTittleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home
