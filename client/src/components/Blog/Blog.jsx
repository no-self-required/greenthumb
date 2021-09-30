import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Post from './Post'

function Blog() {
  return (
    <div className='main'>
      <Link to="/create"><button>Create</button></Link>
      <Link to="/singlepage"><Post /></Link>
      <Link to="/singlepage"><Post /></Link>
      <Link to="/singlepage"><Post /></Link>
    </div>
  )
}

export default Blog;