import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayPosts from '../DisplayPosts';
import CreatePost from './CreatePost';

const GetPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/posts')
        .then(res => {
            setPosts(res.data);
        }) 
    })



    const addPost = (postId, title, content) => {
        const toAdd = {
          "userId": 1,
          "id": postId,
          "title": title,
          "body": content
        }

        axios.post('http://localhost:8000/posts', toAdd)
        .then(res => {
          setPosts([...posts, res.data])
        })
    }

    const handleDelete = (id) => {
      axios.delete(`http://localhost:8000/posts/${id}`)
      .then(res => {
        const newPost= posts.filter(post=>post.id!==id);
        setPosts(newPost)
      })
      
      
    }

    const handleUpdate = (postId, title, content) => {
      const toUpdate = {
          "userId": 1,
          "id": postId,
          "title": title,
          "body": content
      }

      axios.put(`http://localhost:8000/posts/${postId}`, toUpdate)
      .then(res => {
        const newPost = posts.map((post) => {
          if (post.id === postId) {
            return toUpdate
          } else {
            return post;
          }
        }
        )
        setPosts(newPost)
      })
    }

  return (
    <>
        <h2>Axios Demo</h2>
        <CreatePost handleAdd={addPost} />
        <DisplayPosts posts={posts} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </>
  )
}

export default GetPosts