import axios from 'axios';
import React, {useState,useEffect,useContext} from 'react'
import { Link,useHistory } from 'react-router-dom';
import SinglePost from './SinglePost/SinglePost';

function Post(props) {

  const [post, setPost] = useState({});
  
  useEffect(() => {
    axios.get(`/api/post/${props.id}`)
    .then((res) => {
      // history.push(`/blog`);
      setPost(res.data)
    })
  }, [])
    
  return (
    <div>
      <Link to={`/${post.id}`}> 

        <h2>{props.title}</h2>
        <p>{props.date}</p>
      </Link>
        <p><i class="fas fa-thumbs-up"></i>{props.likes}</p>

    </div>
  )
}

export default Post;
