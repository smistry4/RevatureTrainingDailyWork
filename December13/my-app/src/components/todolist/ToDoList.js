import React, { useState } from 'react'
import ListShow from './ListShow'
import ListAdd from './ListAdd'
import ListCount from './ListCount'
const ToDoList = () => {

    
    const[list, setList] = useState([])

    const handleAdd=(value)=> {
        setList((prevList)=> {return[...prevList, value];})
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(value);
    //     setList((prevList)=> {return[...prevList, value];})
    //     console.log(list)
    //     setValue("")
    // }
  return (
    <div>
        <h3>To Do List</h3>
        <ListShow list={list}/>
        <ListAdd handleAdd={handleAdd}></ListAdd>
        <ListCount list={list}></ListCount>
        {/* {
            list.map((item)=>(
                <li key={item}>{item}</li>
            ))
        }
        <form onSubmit={submitHandler}>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button>Add</button>
        </form>
        <h3>Total elements {list.length}</h3> */}
    </div>
  )
}

export default ToDoList