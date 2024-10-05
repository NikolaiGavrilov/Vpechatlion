import "./FeedPost.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../../redux/actions";
import { Link } from "react-router-dom";
import DetailedPost from "../DetailedPost/DetailedPost";

const FeedPost = ({
  id,
  title,
  imgPath,
  description,
  likes,
  youLiked,
}) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  const toggleIsLiked = () => {
    dispatch(toggleLike(id));
  };

  return (
    
    <div className="feedpost__link">
      <div className="feedpost">
        <Link to={`/posts/${post.id}`} style={{ color: "white" }}>
          <h1 className="feedpost__heading">{title}</h1>
        </Link>
        <Link to={`/posts/${post.id}`}>
          <img className="feedpost__img" src={imgPath[0]} alt="" />
        </Link>
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
          <Link to={`/posts/${post.id}`}>
            <img
              className="feedpost__interaction-icon"
              src="img/comment.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
