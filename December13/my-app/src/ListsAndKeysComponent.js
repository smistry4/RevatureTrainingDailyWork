import React, { useState, useEffect} from 'react'
import CommentDisplayComponent from './CommentDisplayComponent'

const ListsAndKeysComponent = () => {

   const [comments,setComments] = useState([
        {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz"
        },
        {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv"
        },
        {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net"
        }
    ])

    const handleDelete = (id) => {
        const newComment = comments.filter(comment=>comment.id!==id);
        setComments(newComment)
    }

    const [name, setName] = useState("Shivam")

    useEffect(() => {
        console.log("use effect called..")
    },[name])
  return (
    <div>
        ListsAndKeysComponent
        <CommentDisplayComponent comments={comments} handleDelete={handleDelete}/>
        <button onClick={() => setName("Mistry")}> Change Name</button>
    </div>
  )
}

export default ListsAndKeysComponent