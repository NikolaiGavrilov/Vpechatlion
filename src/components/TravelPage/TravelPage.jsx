import "./TravelPage.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Feed from "../Feed/Feed";

// Страница тематического раздела "Путешествия и места" с новостной лентой по данной категории (фильтруется внутри компонента Feed по категории Travel)
const TravelPage = () => {
  return (
    <>
      <Header />
      <div className="travel-page">
        <div className="container">
          <section className="travel-welcome">
            <h1 className="travel-welcome__heading">Путешествия и места</h1>
            <div className="travel-welcome__description">
              <div className="travel-welcome_left">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TravelPage;
