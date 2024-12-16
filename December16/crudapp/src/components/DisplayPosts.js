import React from 'react'
import UpdatePost from './axios/UpdatePost'

const DisplayPosts = ({posts, handleDelete, handleUpdate}) => {
  return (
    <div>
        {posts.map((post) => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => handleDelete(post.id)}>
                  Delete
                </button>
                <UpdatePost postId={post.id} handleUpdate={handleUpdate}/>
                <hr/>
            </div>
            
        ))}
    </div>
  )
}

export default DisplayPosts