import React, { useState } from 'react'

const CreatePost = ({handleAdd}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [postId, setPostId] = useState()

      const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("")
        setContent("")
        setPostId("")
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Post id
            <input type="text" name="postid" value={postId} onChange={(e)=>setPostId(e.target.value)} />
          </label>
          <label>
            Title
            <input type="text" name="name" value={title} onChange={(e)=>setTitle(e.target.value)} />
          </label>
          <label>
            Body
            <input type="text" name="body" value={content} onChange={(e)=>setContent(e.target.value)} />
          </label>
          <button type="submit" onClick={() => handleAdd(postId, title, content)}>Add</button>
        </form>
      </div>
  )
}

export default CreatePost