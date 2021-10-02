import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Post from './Post'
import SinglePost from './SinglePost/SinglePost';

function Blog(props) {
  const [posts, setPosts] = useState([]);
  // function getPosts() {
  //   return axios.get('/api/post')
  // }
  useEffect(()=> {
    axios.get('/api/post').then((res) => {
      console.log('RES---', res)
      setPosts(res.data)
      })
  }, [])

   const loadPosts = posts.map(post => {
     return (
     <Post
      title={post.title}
      date={post.date}
      />
     )
   })
   console.log(loadPosts);


  

  return (
    <div className='main'>
    
      <Link to="/create"><button>Create</button></Link>
      {loadPosts}
    </div>
  )
}

export default Blog;