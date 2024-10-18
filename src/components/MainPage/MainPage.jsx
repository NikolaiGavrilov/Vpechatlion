import React, { useEffect } from "react";
import "./MainPage.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Главная страница сайта "Впечатлион". Кратко излагает концепцию этой социальной сети, представляет пользователю существующие категории, оформленные с использованием созданных в Stable Diffusion изображений и анимации. В нижней части приводит некоторую статистику о пользователях, постах и категориях. 
const MainPage = () => {
  const comments = useSelector((state) => state.comments.comments);
  const users = useSelector((state) => state.users.users);
  const posts = useSelector((state) => state.posts.posts);

  const topPostAuthor = users.reduce((prev, current) => {
    return current.userPosts.length > prev.userPosts.length ? current : prev;
  }, users[0]);

  const topCommentAuthor = users.reduce((prev, current) => {
    return current.userComments.length > prev.userComments.length
      ? current
      : prev;
  }, users[0]);

  const topLikedPost = posts.reduce((prev, current) => {
    return current.likes > prev.likes ? current : prev;
  }, posts[0]);

  const categoryCount = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  const topCategory = Object.keys(categoryCount).reduce((prev, current) => {
    return categoryCount[current] > categoryCount[prev] ? current : prev;
  }, Object.keys(categoryCount)[0]);

  function determineTopCaterogyName(topCategory) {
    switch (topCategory) {
      case "Travel":
        return "Путешествия и места";
      case "Culinary":
        return "Кулинария и еда";
      case "Creativity":
        return "Творчество и хобби";
      default:
        return "Категория не найдена";
    }
  }
  useEffect(() => {
    const categories = document.querySelectorAll(".main-page__category-pic");
    const centerX = 0;
    const centerY = 0;
    const radius = 30;
    let angle = 0;

    const animate = () => {
      angle += 0.02;

      categories.forEach((category, index) => {
        const x = centerX + radius * Math.cos(angle + (index * Math.PI) / 3);
        const y = centerY + radius * Math.sin(angle + (index * Math.PI) / 3);
        category.style.transform = `translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="main-page">
        <div className="container">
          <section className="main-page-categories-content">
            <h1 className="main-page__heading">
              Откройся миллиону впечатлений!
            </h1>
            <div className="main-page__categories">
              <Link to="/travel" className="main-page__category-pic travel">
                <h2 className="main-page__category-name travel-text">
                  Путешествия и места
                </h2>
              </Link>

              <Link to="/culinary" className="main-page__category-pic culinary">
                <h2 className="main-page__category-name culinary-text">
                  Кулинария и еда
                </h2>
              </Link>

              <Link
                to="/creativity" className="main-page__category-pic creativity">
                <h2 className="main-page__category-name creativity-text">
                  Творчество и хобби
                </h2>
              </Link>
            </div>
          </section>
          <section className="main-page-welcome-word">
            <div className="main-page__welcome">
              <h2>Добро пожаловать!</h2>
              <p>
                Вы попали на сайт "Впечатлион", социальную сеть, миссия которой
                - обмен впечатлениями между пользователями.
              </p>
              <p>
                Для удобства пользователей контент нашего онлайн-сообщества
                разделен на категории. Мы приглашаем вас исследовать любую из
                них и погрузиться в мир удивительных впечатлений, а также
                поделиться с нами своими собственными!
              </p>
            </div>
          </section>
          <section className="main-page-some-statistics">
            <div className="main-page__stats">
              <h2 className="main-page__stats-heading">Немного о нас</h2>
              <div className="main-page__stats-categories">
                <div className="main-page__stats-category">
                  <p className="main-page__stats-category-title">
                    Самый впечатлительный автор:
                  </p>
                  <div>
                    <img
                      className="main-page__stats-img"
                      src={topPostAuthor.avatar}
                      alt=""
                    />
                    <p className="main-page__stats-colored">
                      {topPostAuthor.username}
                    </p>
                    <p>Кол-во постов: {topPostAuthor.userPosts.length}</p>
                  </div>
                </div>
                <div className="main-page__stats-category">
                  <p className="main-page__stats-category-title">
                    Самый общительный комментатор:
                  </p>
                  <div>
                    <img
                      className="main-page__stats-img"
                      src={topCommentAuthor.avatar}
                      alt=""
                    />
                    <p className="main-page__stats-colored">
                      {topCommentAuthor.username}
                    </p>
                    <p>
                      Кол-во комментариев:{" "}
                      {topCommentAuthor.userComments.length}
                    </p>
                  </div>
                </div>
                <div className="main-page__stats-category">
                  <div>
                    <p className="main-page__stats-category-title">
                      Самый любимый пост наших пользователей:
                    </p>
                    <img
                      className="main-page__stats-img"
                      src={topLikedPost.imgPath[0]}
                      alt=""
                    />
                    <p className="main-page__stats-colored">
                      {topLikedPost.title}
                    </p>
                    <p>Кол-во лайков: {topLikedPost.likes}</p>
                  </div>
                </div>
                <div className="main-page__stats-category">
                  <p className="main-page__stats-category-title">
                    Самая популярная категория:
                  </p>
                  <p className="main-page__stats-colored">
                    {determineTopCaterogyName(topCategory)}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainPage;
