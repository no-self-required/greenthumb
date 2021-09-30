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
    <form className='post'>
        <h2>Test</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis vel commodo ante.Aliquam lobortis nibh justo, vitae convallis magna laoreet id.Vestibulum commodo mi ac lacus ornare rhoncus.Nam eget urna aliquet, maximus nulla non, varius massa.Nam porttitor odio velit, vel sagittis sapien ornare pharetra.Etiam ornare in nunc faucibus tristique.Nullam nec mi orci.Donec eros enim, pretium vitae massa et, aliquet sagittis lacus.Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
    </form>
  )
}

export default Post
