import axios from 'axios';
import React, {useState} from 'react'

function Post(props) {
  return (
    <div className='post'>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
    </div>
  )
}

export default Post
