import React from 'react'

const CommentDisplayComponent = ({comments, handleDelete}) => {
  return (
    <div>
        <hr />
        CommentDisplayComponent
        {
            comments.map((comment)=>(
                <div key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.email}</p>
                    <button onClick={() => handleDelete(comment.id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default CommentDisplayComponent