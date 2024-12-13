import React from 'react'

const PostComments = (props) => {
    const comments = ["lorem ipsum dolor", "sit amet consectetur", "adipisicing elit", "excepturi at quia", "eos consequatur"];

  return (
    <>
        <h6>Comments</h6>
        <ul>
            {comments.map((comment, index)=>(
                <li key={index}>{comment}</li>
            ))}
        </ul>
    </>
  )
}

export default PostComments