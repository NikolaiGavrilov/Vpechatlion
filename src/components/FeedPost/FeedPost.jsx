import "./FeedPost.scss";
import React from "react";

const FeedPost = ({ children }) => {
  return (
    <div className="feedpost">
      <h1 className="feedpost__heading">Заголовок</h1>
      <div className="feedpost__img"></div>
      <p className="feedpost__preview">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, iusto.
      </p>
      <div className="feedpost__interaction-icons">
        <img
          className="feedpost__interaction-icon"
          src="img/comment.svg"
          alt=""
        />
        <img
          className="feedpost__interaction-icon"
          src="img/like-empty.svg"
          alt=""
        />
        <a className="feedpost__show-link" href="#">
          Впечатлиться полностью
        </a>
      </div>
    </div>
  );
};

export default FeedPost;
