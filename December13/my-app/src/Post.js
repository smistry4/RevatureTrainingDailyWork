import React from 'react'
import PostComments from './PostComments'

const Post = () => {
  const comments = ["lorem ipsum dolor", "sit amet consectetur", "adipisicing elit", "excepturi at quia", "eos consequatur"];
  return (
    <>
        <h5>Shivam Mistry</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Excepturi at quia eos consequatur fugiat debitis minima 
            dolorum, doloribus quaerat id, est ut, eum expedita 
            ipsum deserunt dignissimos quis. Quis, eaque?
        </p>
        <hr />
        <PostComments listcomment={comments}/>
    </>
  )
}

export default Post


  