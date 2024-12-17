import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0);

    const handleIncrement = (e) => {
        setValue(prevValue => prevValue + 1);
    }

    const handleDecrement = (e) => {
        setValue(prevValue => prevValue - 1)
    }
  return (
    <div>
        <button data-testid="increment" onClick={handleIncrement}>Increment</button>
        <h3 data-testid="counter">{value}</h3>
        <button data-testid="decrement" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter