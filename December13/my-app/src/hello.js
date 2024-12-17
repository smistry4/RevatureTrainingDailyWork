import React, { useContext } from 'react'
import MyContext from './components/contextdemo/MyContext'
import TextComponent from './components/hoc/TextComponent'

function Hello(props) {
  const theData = useContext(MyContext)
  return (
    <div>Hello {props.firstname} {props.lastname}
      <hr/>
      <TextComponent/>
      <h2>Data From Context ---- {theData}</h2>
    </div>
    

  )
}

export default Hello