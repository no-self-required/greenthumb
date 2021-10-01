import axios from 'axios';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Post from './Post'

function Blog() {
  // function getPosts() {
  //   return axios.get('/api/post')
  // }

  return (
    <div className='main'>
      {/* {getPosts()} */}
      <Link to="/create"><button>Create</button></Link>
      <Link to="/singlepage"><Post /></Link>
      <Link to="/singlepage"><Post /></Link>
      <Link to="/singlepage"><Post /></Link>
    </div>
  )
}

export default Blog;