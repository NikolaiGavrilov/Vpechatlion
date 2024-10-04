import React from "react";
import "./TravelPage.scss";
import Header from "../Header/Header";
import FeedPost from "../FeedPost/FeedPost";
import Footer from "../Footer/Footer";

const TravelPage = () => {
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
                  <div class="background"></div>
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

              <FeedPost />
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TravelPage;
