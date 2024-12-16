import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>The React Demos</h2>
        <div className='links'>
            <Link to='/hello'>Hello</Link>
            <Link to='/sdc'>State Demo</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/lists'>ListKeys</Link>
            <Link to='/todolist'>TodoList</Link>
        </div>
    </div>
  )
}

export default Navbar