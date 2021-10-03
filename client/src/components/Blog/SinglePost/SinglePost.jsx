import { useState,useParams,useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import "./SinglePost.scss";
import axios from 'axios';

export default function SinglePost(props) {
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

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <Link to="/blog">Back</Link>
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.title}
          TITLE
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>{post.date}</span>
        </div>
        <p className="singlePostDesc">
          {post.body}
    123
        </p>
        
      </div>
    </div>
  )
}