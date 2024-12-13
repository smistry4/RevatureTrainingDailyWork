import React from 'react'

const PostComments = (props) => {
    const lComments = props.listcomment;

  return (
    <>
        <h6>Comments</h6>
        <ul>
            {lComments.map((comment, index)=>(
                <li key={index}>{comment}</li>
            ))}
        </ul>
    </>
  )
}

export default PostComments