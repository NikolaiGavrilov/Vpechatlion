import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/actions";
import "./ModalWindow.scss";
import ProfileWindow from "../ProfileWindow/ProfileWindow";
import { deletePost, removeComment } from "../../redux/actions";

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
  const { loggedIn, userID } = useSelector((state) => state.loggedIn);
  const currentUser = users.find((user) => user.userID === userID);

  const [newComment, setNewComment] = useState("");
  const [commentsAmount, setCommentsAmount] = useState(post.commentIDs.length);
  const [isProfileWindowOpen, setProfileWindowOpen] = useState(false);

  const openProfileWindow = () => {
    setProfileWindowOpen(true);
  };

  const closeProfileWindow = () => {
    setProfileWindowOpen(false);
  };

  const [selectedProfileId, setSelectedProfileId] = useState(null);

  const handleProfileClick = (userID) => {
    setSelectedProfileId(userID);
    setProfileWindowOpen(true);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentID = Date.now();
    dispatch(addComment({ id: newCommentID, postId: id, text: newComment }));

    if (currentUser) {
      currentUser.userComments.push(newCommentID);
    }

    // Правильное обновление количества комментариев
    const updatedCommentsAmount = commentsAmount + 1;
    setCommentsAmount(updatedCommentsAmount);
    updateCommentsAmount(updatedCommentsAmount); // Убедитесь, что передаете новое значение
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
    return user
      ? user
      : {
          username: "Неизвестный мимокрокодил",
          avatar: "img/users-img/unknown.png",
        };
  };

  const handleDeletePost = () => {
    dispatch(deletePost(id));
  };

  const handleRemoveComment = (id) => {
    dispatch(removeComment(id));

    // Правильное обновление количества комментариев
    const updatedCommentsAmount = commentsAmount - 1;
    setCommentsAmount(updatedCommentsAmount);
    updateCommentsAmount(updatedCommentsAmount); // Убедитесь, что передаете новое значение
  };

  const isCurrentUserPostAuthor = currentUser?.userPosts?.includes(post.id);

  return (
    <div className="modal-window">
      <span className="modal-window__close" onClick={closeModal}>
        &times;
      </span>
      <div className="modal-window__content">
        <h1 className="modal-window__heading">{title}</h1>
        {getUserByPostId() && (
          <div
            className="modal-window__post-author"
            onClick={() => handleProfileClick(getUserByPostId().userID)}
          >
            <img
              className="modal-window__author-pic"
              src={getUserByPostId().avatar}
              alt=""
            />
            <h2 className="modal-window__author-name">
              {getUserByPostId().username}
            </h2>
          </div>
        )}
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
        {isCurrentUserPostAuthor && (
          <img
            className="feedpost__delete-button"
            src="img/delete-icon.svg"
            alt="иконка корзины"
            onClick={handleDeletePost}
          />
        )}
        <div className="modal-window__comments">
          {loggedIn ? (
            <form
              onSubmit={handleCommentSubmit}
              className="modal-window__form"
            >
              <textarea
                className="modal-window__input"
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Напишите комментарий..."
              />
              <button
                className="modal-window__add-comment-button"
                type="submit"
              >
                <span className="modal-window__add-comment-button-text">
                  Добавить комментарий
                </span>
              </button>
            </form>
          ) : (
            <p style={{ color: "red" }}>
              Пожалуйста, авторизуйтесь, чтобы оставить комментарий
            </p>
          )}
          <div className="comments-list">
            {comments
              .filter((comment) => comment.postId === id)
              .map((comment) => {
                const isCurrentUserCommentAuthor =
                  currentUser?.userComments?.includes(comment.id);

                return (
                  <div
                    className="comment__flex"
                    key={getUserByCommentId(comment.id).userID}
                  >
                    <img
                      className="comment__avatar"
                      src={getUserByCommentId(comment.id).avatar}
                      alt="аватарка пользователя"
                      onClick={() =>
                        handleProfileClick(
                          getUserByCommentId(comment.id).userID
                        )
                      }
                    />
                    <div className="field-container">
                      <div key={comment.id} className="comment__field">
                        <div className="comment__triangle"></div>
                        <p className="comment__author">
                          {getUserByCommentId(comment.id).username}
                        </p>
                        <p className="comment__author-text">{comment.text}</p>
                        {isCurrentUserCommentAuthor && (
                          <img
                            className="feedpost__delete-button"
                            src="img/delete-icon.svg"
                            alt="иконка корзины"
                            onClick={() => handleRemoveComment(comment.id)} // Обратите внимание, что нужно передать id комментария
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {isProfileWindowOpen && (
        <ProfileWindow
          profileID={selectedProfileId}
          setProfileWindowOpen={setProfileWindowOpen}
        />
      )}
    </div>
  );
};

export default ModalWindow;
