import "./TravelPage.scss";
import Header from "../Header/Header";
// import FeedPost from "../FeedPost/FeedPost";
import Footer from "../Footer/Footer";
// import { useSelector } from "react-redux";
import Feed from "../Feed/Feed";

const TravelPage = () => {
  // Извлекаем массив постов

  return (
    <>
      <Header />
      <div className="travel-page">
        <div className="container">
          <section className="travel-welcome">
            <h1 className="travel-welcome__heading">Путешествия и места</h1>
            <div className="travel-welcome__description">
              <div className="travel-welvoce_left">
                <div className="train-window">
                  <img
                    src="img/travel-pic.png"
                    alt="Человек"
                    className="person"
                  />
                  <div className="background"></div>
                </div>
              </div>
              <div className="travel-welcome__right">
                Путешествия делают жизнь ярче. Не знаете, куда поехать, или
                просто хотите вдохновиться историями от наших пользователей?
                Обязательно почитайте ленту новостей ниже и поделитесь
                собственными незабываемыми воспоминаниями!
              </div>
            </div>
          </section>
          <Feed category="Travel" />
          {/* <section className="feed">
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
          </section> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TravelPage;
