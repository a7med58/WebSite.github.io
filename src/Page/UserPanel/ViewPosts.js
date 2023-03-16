import {
  faDeleteLeft,
  faEdit,
  faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ViewPosts.css";

const ITEMS_PER_PAGE = 10; // Change this to adjust the number of posts per page

const ViewPosts = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then((response) => {
        console.log(response);
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visiblePosts = posts.slice(startIndex, endIndex);

  return (
    <div className="container viewposts">
      <h2 className="h2-viewposts ">All Posts</h2>

      <h3 className="h2-count-posts ">
        Count Of Posts<span className="count-posts">({posts.length})</span>
      </h3>

      {authenticated ? (
        <ul>
          {visiblePosts.map((post) => (
            <div className="posts-box">
              <li key={post.id}>
                <h3 className="h3-viewposts">{post.title}</h3>
                <p className="p-viewposts">{post.body}</p>
                <div className="icon-viewposts">
                  <Link to={`/posts/${post.id}`}>
                    <FontAwesomeIcon icon={faUsersViewfinder} />
                  </Link>
                  <Link to={`/posts/${post.id}/edit`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <FontAwesomeIcon
                    icon={faDeleteLeft}
                    onClick={() => handleDelete(post.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </li>
            </div>
          ))}
          <div className="pagination">
            {" "}
            <h4>Page</h4>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </ul>
      ) : null}
      {!authenticated && <p>Please log in to View Panel.</p>}
    </div>
  );
};

export default ViewPosts;
