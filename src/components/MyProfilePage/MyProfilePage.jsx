import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./MyProfilePage.scss";

// Страница с личным профилем авторизованного пользователя. Содержит информацию о нем, его достижениях на сайте, его постах и комментариях. В будущем страница будет дополнена возможностью редактирования информации в профиле, удаления профиля, персонализации оформления профиля и другими функциями. Переход на страницу возможен по клику на аватар текущего пользователя в хедере (появляется у авторизованных пользователей).
const MyProfilePage = ({ user }) => {
  const comments = useSelector((state) => state.comments.comments);
  const posts = useSelector((state) => state.posts.posts);
  return (
    <>
      <Header />
      <div className="my-profile">
        <div className="container">
          <section className="my-profile__info">
            <div className="my-profile__content">
              {user.avatar && (
                <img
                  className="my-profile__avatar"
                  src={user.avatar}
                  alt={user.username || "User Avatar"}
                />
              )}
              <h1 className="my-profile__username">{user.username}</h1>
              <p className="my-profile__description">
                {user.userDescription || "No description available."}
              </p>
              <p className="my-profile__description">
                Кол-во впечатлений: {user.userPosts.length}
              </p>
              <p className="my-profile__description">
                Кол-во отзывов на впечатления: {user.userComments.length}
              </p>
              <p className="my-profile__description">
                Список опубликованных впечатлений:
              </p>
              <ul>
                {user.userPosts && user.userPosts.length > 0 ? (
                  user.userPosts.map((postId) => {
                    const post = posts.find((p) => p.id === postId);
                    return post ? (
                      <li key={post.id}>
                        <span className="my-profile__coloured">
                          {post.title}
                        </span>
                      </li>
                    ) : (
                      <li key={postId}>
                        Пост №{postId} не обнаружен и вероятно был удалён.
                      </li>
                    );
                  })
                ) : (
                  <li>Увы, постов не найдено.</li>
                )}
              </ul>

              <p className="my-profile__description">Cписок комментариев:</p>
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
                          <span className="user-profile__coloured">
                            {postTitle}
                          </span>
                          "
                        </li>
                      );
                    })
                ) : (
                  <li>Пользователь не оставлял комментариев</li>
                )}
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProfilePage;
