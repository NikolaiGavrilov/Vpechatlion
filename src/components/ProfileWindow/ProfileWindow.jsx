import React from "react";
import { useSelector } from "react-redux";
import './ProfileWindow.scss';

const ProfileWindow = ({ profileID , setProfileWindowOpen}) => {
  const users = useSelector((state) => state.users.users);
  const user = users.find((user) => user.userID.toString() === profileID);

  if (!user) {
    return <div>User not found!</div>;
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
            alt={user.username || 'User Avatar'}
          />
        )}
        <h1 className="user-profile__username">{user.username}</h1>
        <p className="user-profile__description">{user.description || 'No description available.'}</p>

        <h2>Posts:</h2>
        <ul>
          {user.userPosts && user.userPosts.length > 0 ? (
            user.userPosts.map((postId) => (
              <li key={postId}>Post ID: {postId}</li>
            ))
          ) : (
            <li>No posts available.</li>
          )}
        </ul>

        <h2>Comments:</h2>
        <ul>
          {user.userComments && user.userComments.length > 0 ? (
            user.userComments.map((commentId) => (
              <li key={commentId}>Comment ID: {commentId}</li>
            ))
          ) : (
            <li>No comments available.</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default ProfileWindow;