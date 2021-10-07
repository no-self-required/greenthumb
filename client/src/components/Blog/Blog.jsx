import axios from 'axios';
import React, {useState,useEffect, Fragment} from 'react'
import { Link } from 'react-router-dom';
import Post from './Post'
import SinglePost from './SinglePost/SinglePost';
import './Blog.scss';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    axios.get('/api/post').then((res) => {
      setPosts(res.data)
      })
  }, [])

   const loadPosts = posts.map(post => {
     return (
      <Post
        key={post.id}
        title={post.title}
        date={post.date}
        id={post.id}
        likes={post.likes}
        />
     )
   })

  return (
    <div className="row">
      <div className='blog col-8'>
        {loadPosts}
      </div>
      <div className="col-2">
        <Link to="/create">
        <h3>Share your tips!</h3>
        <button className="btn btn-light">Create</button></Link>
      </div>
    </div>
  )
}

export default Blog;