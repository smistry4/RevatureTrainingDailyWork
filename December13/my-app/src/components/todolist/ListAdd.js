import React from 'react'
import { useState } from 'react'

const ListAdd = ({handleAdd}) => {

    const [value,setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setValue("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={() => handleAdd(value)}>Add</button>
        </form>
    </div>
  )
}

export default ListAdd