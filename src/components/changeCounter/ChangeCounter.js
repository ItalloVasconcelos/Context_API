import { useContext } from "react";
import { CounterCount } from "../../context/CounterCount";

import React from 'react'

const ChangeCounter = () => {
    let {counter, setCouter} = useContext(CounterCount)
  return (
    <div>
      <button onClick={() => setCouter(counter + 1 )}>Press the button</button>
    </div>
  )
}

export default ChangeCounter
