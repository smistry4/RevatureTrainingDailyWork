import React, { useRef } from 'react'

const ButtonClickDemo = () => {
    const numClicks = useRef(0)

    const handleClick =() => {
        numClicks.current = numClicks.current +  1;
        alert(`You clicked ${numClicks.current} times`)
    }
  return (
    <div>
        <button onClick={handleClick}>Button</button>
    </div>
  )
}

export default ButtonClickDemo