import "./FeedPost.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike, deletePost } from "../../redux/actions";
import React, { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

// Компонент поста в ленте с кратким содержанием. Помимо ознакомления с информацией есть возможность поставить или убрать лайк под этим постом, удалить его, если он принадлежит пользователю, с аккаунта которого выполнен вход. Предусмотрена возможность открытия модального окна ModalWindow с полным содержанием поста и расширенным функционалом.
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
  const { loggedIn, userID } = useSelector((state) => state.loggedIn);
  const users = useSelector((state) => state.users.users);
  const currentUser = users.find((user) => user.userID === userID);

  const [isModalOpen, setModalOpen] = useState(false);
  const [commentsAmount, setCommentsAmount] = useState(post.commentIDs.length);

  const toggleIsLiked = () => {
    dispatch(toggleLike(id));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const updateCommentsAmount = (newAmount) => {
    setCommentsAmount(newAmount);
  };

  const handleDeletePost = () => {
    dispatch(deletePost(id));
  };

  const isCurrentUserAuthor = currentUser?.userPosts?.includes(post.id);

  return (
    <article className="feedpost">
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
          <img
            onClick={toggleIsLiked}
            className="feedpost__interaction-icon"
            src={youLiked ? "img/like-added.svg" : "img/like-empty.svg"}
            alt=""
          />
        </div>
        <div className="feedpost__comments-number">
          <img
            className="feedpost__interaction-icon"
            src="img/comment.svg"
            alt=""
            onClick={openModal}
          />
          <span>{commentsAmount}</span>
        </div>
        {isCurrentUserAuthor && (
          <img
            className="feedpost__delete-button"
            src="img/delete-icon.svg"
            alt="иконка корзины"
            onClick={handleDeletePost}
          />
        )}
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
          updateCommentsAmount={updateCommentsAmount}
        />
      )}
    </article>
  );
};

export default FeedPost;
