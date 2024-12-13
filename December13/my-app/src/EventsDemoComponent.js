import React from 'react'

function EventsDemoComponent() {
  const handleClick=()=>{
    console.log("Hello Event");
  }
  const handleClickAgain=(name)=>{
    console.log("hello event" + name);
  }
  return (
    <>
        <h2>Events Demo</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClickAgain("Shiva")}>Click Me</button>
    </>
  )
}

export default EventsDemoComponent