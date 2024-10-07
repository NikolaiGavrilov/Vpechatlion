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

  const startIndex = (currentPage - 1) * postsPerPage;

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="feed">
      {currentPosts.length > 0 ? (
        <div className="feed__box">
          <h2 className="feed__heading">Лента впечатлений</h2>
          <div className="feed__content">
            {currentPosts.map((post) => (
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
            ))}
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
      ) : (
        <div className="feed__box">
          <h2 className="feed__heading">Лента впечатлений пока что пуста</h2>
        </div>
      )}
    </section>
  );
};

export default Feed;
