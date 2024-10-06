import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/actions";
import "./ModalWindow.scss";

const ModalWindow = ({
  id,
  title,
  imgPath,
  description,
  likes,
  youLiked,
  commentIDs,
  openModal,
  closeModal,
  toggleIsLiked,
  updateCommentsAmount,
}) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const users = useSelector((state) => state.users.users);
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === id)
  );
  const [newComment, setNewComment] = useState("");
  const [commentsAmount, setCommentsAmount] = useState(
    post.commentIDs.length + 1
  );

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ postId: id, text: newComment }));
    setCommentsAmount(commentsAmount + 1);
    updateCommentsAmount(commentsAmount);
    setNewComment("");
  };

  const getUserByCommentId = (commentId) => {
    const user = users.find((user) => user.userComments.includes(commentId));
    return user
      ? user
      : {
          username: "Неизвестный мимокрокодил",
          avatar: "img/users-img/unknown.png",
        };
  };

  const getUserByPostId = () => {
    const user = users.find((user) => user.userPosts.includes(id));
    return user ? user : {
      username: "Неизвестный мимокрокодил",
      avatar: "img/users-img/unknown.png",
    };
  };

  return (
    <div className="modal-window">
      <span className="modal-window__close" onClick={closeModal}>
        &times;
      </span>
      <div className="modal-window__content">
        <h1 className="modal-window__heading">{title}</h1>
        {getUserByPostId() && 
        <div className="modal-window__post-author">
          <img className="modal-window__author-pic"src={getUserByPostId().avatar} alt="" />
          <h2 className="modal-window__author-name">{getUserByPostId().username}</h2>
          </div>}
        <p>Всего изображений: {imgPath.length}</p>
        {imgPath.map((img, index) => (
          <img className="modal-window__img" key={index} src={img} alt="" />
        ))}
        <p className="modal-window__description">{description}</p>
        <div className="modal-window__likes-number">
          <span>{likes}</span>
          <img
            onClick={toggleIsLiked}
            className="modal-window__interaction-icon"
            src={youLiked ? "img/like-added.svg" : "img/like-empty.svg"}
            alt=""
          />
        </div>
        <div className="modal-window__comments">
          <form onSubmit={handleCommentSubmit} className="modal-window__form">
            <textarea
              className="modal-window__input"
              type="text"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Напишите комментарий..."
            />
            <button className="modal-window__button" type="submit">
              Добавить комментарий
            </button>
          </form>
          <div className="comments-list">
            {comments
              .filter((comment) => comment.postId === id)
              .map((comment) => (
                <div className="comment__flex">
                  <img
                    className="comment__avatar"
                    src={getUserByCommentId(comment.id).avatar}
                    alt="аватарка пользователя"
                  />
                  <div className="field-container">
                    <div key={comment.id} className="comment__field">
                      <div className="comment__triangle"></div>
                      <p className="comment__author">
                        {getUserByCommentId(comment.id).username}
                      </p>
                      <p className="comment__author-text">{comment.text}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
