import "./DetailedPost.scss";
import { useSelector } from "react-redux";
import React from "react";
import { useParams } from "react-router-dom";

const DetailedPost = () => {
  const { id } = useParams(); // Получаем id из параметров
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === parseInt(id)) // Преобразуем id в число
  );

  return (
    <>
      <section>
        <h1>{post.title}</h1> {/* Используйте post.title вместо post.heading */}
        <p>{post.description}</p>
        {post.imgPath.map((postImg, index) => (
          <img key={index} src={postImg} alt="" /> // Добавлено key для картинок
        ))}
      </section>
    </>
  );
};

export default DetailedPost;