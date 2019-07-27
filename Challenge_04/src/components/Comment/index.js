import React, { Component } from "react";

import "./index.css";

function Comment({ comment }) {
  return (
    <div className="post-comment">
      <div className="post-comment-profile">
        <img src={comment.author.avatar} alt="" />
      </div>
      <div className="post-comment-content">
        <p>
          <strong>{comment.author.name}</strong>
          {comment.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
