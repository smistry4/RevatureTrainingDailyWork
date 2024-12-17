import React, { useState } from 'react'

const ControlledComponent = () => {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }
  return (
    <div>
        <input type="text" value={text} onChange={handleChange}/>
        <p>{text}</p>
    </div>
  )
}

export default ControlledComponent