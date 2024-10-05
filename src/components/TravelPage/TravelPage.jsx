
import "./TravelPage.scss";
import Header from "../Header/Header";
import FeedPost from "../FeedPost/FeedPost";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const TravelPage = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <>
      <Header />

      <div className="main-page">
        <div className="container">
          <section className="main-welcome">
            <h1 className="main-welcome__heading">Путешествия</h1>
            <div className="main-welcome__description">
              <div className="main-welvoce_left">
                <div className="train-window">
                  <img
                    src="img/travel-pic.png"
                    alt="Человек"
                    className="person"
                  />
                  <div className="background"></div>
                </div>
              </div>
              <div className="main-welcome__right">
                Путешествия делают жизнь ярче. Не знаете, куда поехать, или
                просто хотите вдохновиться историями от наших пользователей?
                Обязательно почитайте ленту новостей ниже и поделитесь
                собственными незабываемыми воспоминаниями!
              </div>
            </div>
          </section>
          <section className="travel-feed">
            <h2 className="travel-feed__heading">Лента впечатлений</h2>
            <div className="travel-feed__content">
              {posts.map((post) => (
                <FeedPost
                  id={post.id}
                  key={post.id}
                  title={post.title}
                  imgPath={post.imgPath}
                  description={post.description}
                  likes={post.likes}
                  youLiked={post.youLiked}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TravelPage;
