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
}) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const state = useSelector((state) => state); // Получаем все состояние
  console.log(state); // Выводим состояние в консоль
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === id)
  );

  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const commentData = {
        id: Date.now(),
        postId: id,
        text: newComment,
      };
      dispatch(addComment(commentData));
      // Обновите commentIDs в состоянии постов
      const updatedPost = {
        ...post,
        commentIDs: [...post.commentIDs, commentData.id],
      };
      // Отправьте экшен для обновления поста (нужен соответствующий экшен и редюсер)
      // dispatch(updatePost(updatedPost));
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
            {comments
              .filter((comment) => comment.postId === id)
              .map((comment) => (
                <div key={comment.id} className="comment">
                  <p className="comment__author">Автор</p>
                  <p className="comment__author-text">{comment.text}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
