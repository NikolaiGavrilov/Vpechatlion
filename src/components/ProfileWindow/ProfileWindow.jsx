import React from "react";
import { useSelector } from "react-redux";
import "./ProfileWindow.scss";

// Компонент, отвечающий за второе модальное окно с профилем пользователя, в который мы переходим из первого модального окна ModalWindow, кликнув по аватару автора поста или автора комментария. Представляет пользователю информацию о выбранном участнике соцсети "Впечатлион".
const ProfileWindow = ({ profileID, setProfileWindowOpen }) => {
  const users = useSelector((state) => state.users.users);
  const comments = useSelector((state) => state.comments.comments);
  const posts = useSelector((state) => state.posts.posts);
  const user = users.find((user) => user.userID.toString() === profileID);

  if (!user) {
    return <div>Не удалось найти этого пользователя T_T</div>;
  }

  const handleCloseProfileWindow = () => {
    setProfileWindowOpen(false);
  };

  return (
    <section className="user-profile">
      <span className="user-profile__close" onClick={handleCloseProfileWindow}>
        &times;
      </span>
      <div className="user-profile__content">
        {user.avatar && (
          <img
            className="user-profile__avatar"
            src={user.avatar}
            alt={user.username || "User Avatar"}
          />
        )}
        <h1 className="user-profile__username">{user.username}</h1>
        <p className="user-profile__description">
          {user.userDescription || "No description available."}
        </p>
        <p className="user-profile__description">
          Кол-во впечатлений: {user.userPosts.length}
        </p>
        <p className="user-profile__description">
          Кол-во отзывов на впечатления: {user.userComments.length}
        </p>
        <p className="user-profile__description">
          Список опубликованных впечатлений:
        </p>
        <ul>
          {user.userPosts && user.userPosts.length > 0 ? (
            user.userPosts.map((postId) => {
              const post = posts.find((p) => p.id === postId);
              return post ? (
                <li key={post.id}>
                  <span className="user-profile__coloured">{post.title}</span>
                </li>
              ) : (
                <li key={postId}>Пост №{postId} не обнаружен и вероятно был удалён.</li>
              );
            })
          ) : (
            <li>Увы, постов не найдено.</li>
          )}
        </ul>

        <p className="user-profile__description">Cписок комментариев:</p>
        <ul>
          {user.userComments && user.userComments.length > 0 ? (
            comments
              .filter((comment) => user.userComments.includes(comment.id))
              .map((comment) => {
                const post = posts.find((post) =>
                  post.commentIDs.includes(comment.id)
                );
                const postTitle = post ? post.title : "Неизвестный пост";

                return (
                  <li key={comment.id}>
                    "
                    <span className="user-profile__coloured">
                      {comment.text}
                    </span>
                    " под постом "
                    <span className="user-profile__coloured">{postTitle}</span>"
                  </li>
                );
              })
          ) : (
            <li>Пользователь не оставлял комментариев</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default ProfileWindow;
