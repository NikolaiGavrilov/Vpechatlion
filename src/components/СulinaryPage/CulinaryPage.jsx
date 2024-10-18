import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Feed from "../Feed/Feed";
import "./CulinaryPage.scss";

// Страница тематического раздела "Кулинария и еда" с новостной лентой по данной категории (фильтруется внутри компонента Feed по категории Culinary)
const CulinaryPage = () => {
  return (
    <>
      <Header />
      <div className="culinary-page">
        <div className="container">
          <section className="culinary-page__welcome">
            <h1 className="culinary-page__heading">Кулинария и еда</h1>
            <div className="culinary-page__description">
              <div className="culinary-page__right">
                Кулинария — это уникальное искусство, способное вызывать яркие
                эмоции и пробуждать воспоминания. Каждое блюдо, созданное с
                любовью и вниманием, рассказывает свою историю, а сочетания
                ингредиентов образуют неповторимые вкусовые симфонии. Хотите
                попробовать что-то новое или поделиться своими кулинарными
                открытиями? Почитайте ленту впечатлений в этом разделе и
                расскажите собственную историю!
              </div>
            </div>
          </section>

          <Feed category="Culinary" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CulinaryPage;
