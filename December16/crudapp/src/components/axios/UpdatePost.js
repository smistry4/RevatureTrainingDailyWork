import React from 'react'
import { useState } from 'react'

const UpdatePost = ({postId, handleUpdate}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("")
        setContent("")
    }

  return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input type="text" name="name" value={title} onChange={(e)=>setTitle(e.target.value)} />
          </label>
          <label>
            Body
            <input type="text" name="body" value={content} onChange={(e)=>setContent(e.target.value)} />
          </label>
          <button type="submit" onClick={() => handleUpdate(postId, title, content)}>Update</button>
        </form>
      </div>
  )
}

export default UpdatePost