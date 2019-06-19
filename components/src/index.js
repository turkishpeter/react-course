import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  const users = ["Anna", "Jane", "Joanna"];

  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="today at 4:45" />
      <CommentDetail author="Alex" timeAgo="today at 4:50" />
      <CommentDetail author="Jane" timeAgo="today at 2:40" />
      <CommentDetail author="Bella" timeAgo="today at 8:00" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
