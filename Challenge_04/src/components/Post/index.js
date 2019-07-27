import React from "react";

import Comment from "../Comment";

import "./index.css";
import profile from "../../assets/profile.jpg";

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-profile">
          <img src={post.author.avatar} alt="" />
        </div>
        <div className="post-header-info">
          <div className="post-header-info-name">
            <p>{post.author.name}</p>
          </div>
          <div className="post-header-info-date">
            <p>{post.date}</p>
          </div>
        </div>
      </div>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Post;
