import "./FeedPost.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../../redux/actions";
import React, { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

const FeedPost = ({
  id,
  title,
  imgPath,
  description,
  likes,
  youLiked,
  commentIDs,
}) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === id)
  );

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleIsLiked = () => {
    dispatch(toggleLike(id));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="feedpost">
      <div className="feedpost__heading" onClick={openModal}>
        <h1>{title}</h1>
      </div>
      <img
        className="feedpost__img"
        src={imgPath[0]}
        alt=""
        onClick={openModal}
      />
      <p className="feedpost__preview-text">
        {description.split(" ").slice(0, 12).join(" ")} ...
      </p>
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
        <div className="feedpost__comments-number">
          <img
            className="feedpost__interaction-icon"
            src="img/comment.svg"
            alt=""
            onClick={openModal}
          />
          <span>{commentIDs.length}</span>
        </div>
      </div>

      {isModalOpen && (
        <ModalWindow
          id={id}
          title={title}
          imgPath={imgPath}
          description={description}
          likes={likes}
          youLiked={youLiked}
          openModal={openModal}
          closeModal={closeModal}
          toggleIsLiked={toggleIsLiked}
        />
      )}
    </div>
  );
};

export default FeedPost;
