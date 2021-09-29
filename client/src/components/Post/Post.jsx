import axios from 'axios';
import React, {useState} from 'react'

function Post() {
  // const onSubmit = function (event) {
  //   event.preventDefault();
  //   const id = uuid();

  //   axios.post('/api/post', {
  //     title,
  //     post
  //   })
  // }
  return (
    <form className='main' onSubmit={onSubmit}>
      <input className='title' />
      <textarea className='content'></textarea>
      <button className='btn' type='submit'>Submit</button>
    </form>
  )
}

export default Post
