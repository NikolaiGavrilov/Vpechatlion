import React, { useState } from "react";
import "./ModalWindow.scss";

const ModalWindow = ({
  id,
  title,
  imgPath,
  description,
  likes,
  youLiked,
  openModal,
  closeModal,
  toggleIsLiked,
}) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="modal-window">
      <span className="modal-window__close" onClick={closeModal}>
        &times;
      </span>
      <div className="modal-window__content">
        <h1 className="modal-window__heading">{title}</h1>
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
            <input
              className="modal-window__input"
              type="text"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Напишите комментарий..."
            />
            <button type="submit">Добавить комментарий</button>
          </form>
          <div className="comments-list">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <p className="comment__author">Автор</p>
                <p className="comment__author-text">{comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;