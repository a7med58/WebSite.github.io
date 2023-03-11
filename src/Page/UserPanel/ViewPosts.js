import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ViewPosts.css";
const ViewPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setcurrentUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://your-api-url.com/posts")
      .then((response) => {
        setPosts(
          response.data.filter((post) => post.userId === currentUser.id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://your-api-url.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="h2-viewposts ">All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3 className="h3-viewposts">{post.title}</h3>
            <p className="p-viewposts">{post.body}</p>
            <div>
              <Link to={`/posts/${post.id}`}>View</Link>
              <Link to={`/posts/${post.id}/edit`}>Edit</Link>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPosts;
