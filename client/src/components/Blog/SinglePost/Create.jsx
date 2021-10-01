import axios from "axios";
import { useState } from "react";
import uuid from 'react-uuid';
import "./Create.scss";

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [post, setPost] = useState({ title: '', body: '', id: ''});

  const onTitleChange = function (event) {
    setTitle(event.target.value);
  };

  const onBodyChange = function (event) {
    setBody(event.target.value);
  };

  const onSubmit = function (event) {
    event.preventDefault();
    if(title && body) {
      addPost(title, body)
    }
  }

  const addPost = function(title, body) {
    let likes = 0;

    axios.post('api/post', {
      title, body, likes
    })
    .then(function (res) {
      setPost(res.data)
      console.log('RES.DATA-------', res.data);
    })
  }

  // console.log('POST-------', post);
  return (
    <div className="write">
      <form className="writeForm" onSubmit={onSubmit}>
        <div className="writeFormGroup">
          {/* <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label> */}
          {/* <input id="fileInput" type="file" style={{ display: "none" }} /> */}
          <input
            type="text"
            name="title"
            className="writeInput"
            placeholder="Enter Title"
            autoFocus={true}
            onChange={onTitleChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            name="body"
            className="writeInput writeText"
            placeholder="Tell your story..."
            onChange={onBodyChange}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}