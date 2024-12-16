import React from 'react'

const DisplayPosts = ({posts}) => {
  return (
    <div>
        {posts.map((post) => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}

export default DisplayPosts