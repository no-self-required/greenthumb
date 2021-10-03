import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Post from './Post'
import SinglePost from './SinglePost/SinglePost';

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
    <div className='main'>
    
      <Link to="/create"><button>Create</button></Link>
      {loadPosts}
    </div>
  )
}

export default Blog;