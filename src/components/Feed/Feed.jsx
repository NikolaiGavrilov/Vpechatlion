import React, { useState } from "react";
import FeedPost from "../FeedPost/FeedPost";
import PostForm from "../PostForm/PostForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions";
import "./Feed.scss";

// Компонент новостной ленты, в который передается категория (по ней осуществляется фильтрация на страницах с разными тематическими разделами). Реализован функционал сортировки по дате публикации от новых постов к старым и наоборот, реализована пагинация с указанием номеров страниц (на каждой странице по умолчанию 6 постов). Содержит в себе сортируемые и фильтруемые компоненты FeedPost и форму добавления поста - компонент PostForm (только у авторизованных пользователей).
const Feed = ({ category }) => {
  const posts = useSelector((state) => state.posts.posts);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredPosts = category
    ? posts.filter((post) => post.category === category)
    : posts;

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("newest");

  const startIndex = (currentPage - 1) * postsPerPage;

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return sortOrder === "newest" ? b.id - a.id : a.id - b.id;
  });

  const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "newest" ? "oldest" : "newest"));
  };
  const { loggedIn, userID } = useSelector((state) => state.loggedIn);
  const toggleFormOpen = () => setIsFormOpen(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleShareImpressionsClick = () => {
    if (!loggedIn) {
      setErrorMessage(
        "Пожалуйста, авторизуйтесь, чтобы иметь возможность публиковать свой контент"
      );
      return;
    }
    setIsFormOpen(true);
    setErrorMessage("");
  };

  return (
    <section className="feed">
      <div className="feed__box">
        <h2 className="feed__heading">Лента впечатлений</h2>
        <button
          onClick={handleShareImpressionsClick}
          className="feed__tell-btn"
        >
          <span className="feed__tell-btn-text">Поделиться впечатлением</span>
        </button>
        {errorMessage && (
          <div className="feed__tell-error-message">{errorMessage}</div>
        )}
        {isFormOpen && <PostForm onClose={() => setIsFormOpen(false)} />}
        <button onClick={toggleSortOrder} className="feed__sorting-btn">
          <span className="feed__sorting-text">
            {sortOrder === "newest" ? "Показать старые" : "Показать новые"}
          </span>
        </button>
        <div className="feed__content">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <FeedPost
                id={post.id}
                key={post.id}
                title={post.title}
                imgPath={post.imgPath}
                description={post.description}
                likes={post.likes}
                youLiked={post.youLiked}
                commentIDs={post.commentIDs}
              />
            ))
          ) : (
            <div>Нет постов для отображения</div>
          )}
        </div>
        <div className="feed__pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={`feed__pagination-button ${
                  currentPage === page ? "active" : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                <span className="feed__pagination-num">{page}</span>
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Feed;
