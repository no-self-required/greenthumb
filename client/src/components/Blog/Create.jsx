import axios from 'axios';
import React, {useState} from 'react';
import 

function Create() {
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
      <input className='title' />Test
      <textarea className='content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis vel commodo ante.Aliquam lobortis nibh justo, vitae convallis magna laoreet id.Vestibulum commodo mi ac lacus ornare rhoncus.Nam eget urna aliquet, maximus nulla non, varius massa.Nam porttitor odio velit, vel sagittis sapien ornare pharetra.Etiam ornare in nunc faucibus tristique.Nullam nec mi orci.Donec eros enim, pretium vitae massa et, aliquet sagittis lacus.Interdum et malesuada fames ac ante ipsum primis in faucibus.

        Maecenas eget ultricies quam.Proin facilisis faucibus nibh pellentesque vehicula.Donec id urna feugiat, sodales ipsum vitae, malesuada dui.Aenean ultricies urna volutpat massa ornare, eget tincidunt lacus viverra.Curabitur aliquet nisi magna, ac vulputate ante cursus vel.Sed consectetur pellentesque erat, et faucibus massa ornare ac.Pellentesque elit leo, iaculis et dui vitae, vestibulum dictum turpis.Nulla imperdiet tempor pharetra.Donec tempor, libero quis rutrum rhoncus, sapien eros dapibus libero, imperdiet pharetra erat ante non libero.Maecenas nunc orci, maximus eu tempus et, vulputate nec nulla.Mauris aliquet pharetra magna, et vehicula eros imperdiet sit amet.
      </textarea>
      <button className='btn' type='submit'>Submit</button>
    </form>
  )
}

export default Create
