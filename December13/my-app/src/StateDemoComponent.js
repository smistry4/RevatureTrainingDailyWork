import React from 'react'
import { useState } from 'react';

function StateDemoComponent() {
    //let name = "Shivam";
    const [name,setName] = useState("Shivam");
    const changeName=(inputName)=>{
        setName(inputName)
    }
  return (
    <>
        <h2>{name}</h2>
        <button onClick={()=>changeName("Mistry")}>Change name</button>
    </>
  )
}

export default StateDemoComponent