import "./FeedPost.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../../redux/actions";
import { Link } from "react-router-dom";

const FeedPost = ({
  id,
  title,
  imgPath,
  description,
  likes,
  youLiked,
  path,
}) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  const toggleIsLiked = () => {
    dispatch(toggleLike(id));
  };

  return (
    <Link to={path} className="feedpost__link">
      <div className="feedpost">
        <h1 className="feedpost__heading">{title}</h1>
        <img className="feedpost__img" src={imgPath[0]} alt="" />
        <p className="feedpost__preview-text">{description}</p>
        <div className="feedpost__interaction-icons">
          <div className="feedpost__likes-number">
            <span>{likes}</span>
            {youLiked ? (
              <img
                onClick={toggleIsLiked}
                className="feedpost__interaction-icon"
                src="img/like-added.svg"
                alt=""
              />
            ) : (
              <img
                onClick={toggleIsLiked}
                className="feedpost__interaction-icon"
                src="img/like-empty.svg"
                alt=""
              />
            )}
          </div>
          <img
            className="feedpost__interaction-icon"
            src="img/comment.svg"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default FeedPost;
