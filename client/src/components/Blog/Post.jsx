import axios from 'axios';
import React, {useState,useEffect} from 'react'
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
    
  // const loadSingle = () => {
  //   return (
  //     <SinglePost post={post}/>
  //   )
  // } 
  
  return (
    <div>
      <Link to={`/${post.id}`}> 
      {/* <Link to='/'> */}

        <h2>{props.title}</h2>
        <p>{props.date}</p>
      </Link>
        <p>{props.likes}</p>

        {/* {post} */}
    </div>
  )
}

export default Post;
