import {
  useState,
  useContext,
  useEffect
} from 'react';
import { Link,useLocation } from 'react-router-dom';
import "./SinglePost.scss";
import {stateContext} from '../../Providers/StateProvider'
import axios from 'axios';

export default function SinglePost(props) {
  const {
    likes,
    increment,
    decrement
  } = useContext(stateContext);

  const [post, setPost] = useState({});
  const search = useLocation();
  let id = search.pathname;
  id = id.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

  useEffect(() => {
    axios.get(`/api/post/${id}`)
    .then((res) => {
      // history.push(`/blog`);
      setPost(res.data)
    })
  }, [])

  useEffect(() => {
    axios.delete(`/api/post/${id}`)
      .then((res) => {
        // history.push(`/blog`);
        setPost(res.data)
      })
  }, [])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <Link to="/blog">Back</Link>
        <img
          className="singlePostImg"
          src = "https://cdn.the-scientist.com/assets/articleNo/66864/aImg/35078/foresttb-l.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          {/* <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span> */}
          <div>
      Likes: <span className="counter"> {likes} </span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
          <span>LIKES: {post.likes}</span>
          <span>{post.date}</span>
        </div>
        <p className="singlePostDesc">
          {post.body}
        </p>
        
      </div>
    </div>
  )
}