import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayPosts from '../DisplayPosts';

const GetPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/posts')
        .then(res => {
            setPosts(res.data);
        }) 
    },[])
  return (
    <>
        <h2>Axios Demo</h2>
        <DisplayPosts posts={posts}/>
    </>
  )
}

export default GetPosts