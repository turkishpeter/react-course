import React from "react";
import faker from "faker";

const CommentDetail = props => {
  console.log("asdasdasd");
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <div className="date">Today at 6:00PM</div>
        </div>
        <div className="text">Nice blog post</div>
      </div>
    </div>
  );
};

export default CommentDetail;
