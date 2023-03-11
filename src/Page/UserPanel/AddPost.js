import React, { useState } from "react";
import axios from "axios";
import "./AddPost.css"
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newArticle = {
      title: title,
      content: content,
    };
    axios
      .post("https://your-api-url.com/articles", newArticle)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="h2-addpost">Add a new article</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label-addpost" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label-addpost" htmlFor="content">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn-add">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
