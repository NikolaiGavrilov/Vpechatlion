import React from "react";
import FeedPost from "../FeedPost/FeedPost";
import { useSelector } from "react-redux";
import "./Feed.scss";

const Feed = ({ category }) => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <section className="feed">
      <div className="feed__box">
        <h2 className="feed__heading">Лента впечатлений</h2>
        <div className="feed__content">
          {posts.map((post) => (
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
      </div>
    </section>
  );
};

export default Feed;
