import React from 'react'

const ListShow = ({list}) => {
  return (
    <div>
        {
            list.map((item)=>(
                <li key={item}>{item}</li>
            ))
        }
    </div>
  )
}

export default ListShow