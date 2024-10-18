import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions";
import "./PostForm.scss";
import { useSelector } from "react-redux";

// Компонент, отвечающий за вызов формы добавления новой публикации вида FeedPost в новостную ленту Feed.
const PostForm = ({ onClose }) => {
  const users = useSelector((state) => state.users.users);
  const { loggedIn, userID } = useSelector((state) => state.loggedIn);
  const currentUser = users.find((user) => user.userID === userID);

  const [currentUsersPosts, setCurrentUsersPosts] = useState(
    currentUser.userPosts
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      description,
      imgPath: [],
      likes: 0,
      youLiked: false,
      commentIDs: [],
      category,
    };
    dispatch(addPost(newPost));
    currentUsersPosts.push(newPost.id);
    console.log(currentUsersPosts);
    setCurrentUsersPosts();
    onClose();
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        className="post-form__input"
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="post-form__input"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select
        className="post-form__input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="" disabled>
          Выберите категорию
        </option>
        <option value="Travel">Travel</option>
        <option value="Culinary">Culinary</option>
        <option value="Creativity">Creativity</option>
      </select>

      <p style={{ color: "red" }}>
        Извините, загрузка фото временно невозможна
      </p>

      <button className="post-form__button" type="submit">
        <span className="post-form__button-text">Опубликовать</span>
      </button>
      <button className="post-form__button" type="button" onClick={onClose}>
        <span className="post-form__button-text">Я передумал</span>
      </button>
    </form>
  );
};
export default PostForm;
