import React, { useState } from "react";
import FeedPost from "../FeedPost/FeedPost";
import { useSelector } from "react-redux";
import "./Feed.scss";

const Feed = ({ category }) => {
  const posts = useSelector((state) => state.posts.posts);

  const filteredPosts = category
    ? posts.filter((post) => post.category === category)
    : posts;

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("newest");

  const startIndex = (currentPage - 1) * postsPerPage;

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOrder === "newest") {
      return b.id - a.id;
    } else {
      return a.id - b.id;
    }
  });

  const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "newest" ? "oldest" : "newest"));
  };

  return (
    <section className="feed">
      <div className="feed__box">
        <h2 className="feed__heading">Лента впечатлений</h2>
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
