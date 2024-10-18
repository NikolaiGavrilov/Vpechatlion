import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Feed from "../Feed/Feed";
import "./CreativityPage.scss";

// Страница тематического раздела "Творчество и хобби" с новостной лентой по данной категории (фильтруется внутри компонента Feed по категории Creativity)
const CreativityPage = () => {
  return (
    <>
      <Header />
      <div className="creativity-page">
        <div className="container">
          <section className="creativity-page__welcome">
            <h1 className="creativity-page__heading">Творчество и хобби</h1>
            <div className="creativity-page__description">
              <div className="creativity-page__right">
                Каждый из нас имеет увлечения, которые помогают выразить себя и
                развить личные качества. На этой странице вы можете узнать о
                различных хобби, вдохновиться творческими проектами других
                пользователей и рассказать историю о ваших собственных
                креативных начинаниях.
              </div>
            </div>
          </section>

          <Feed category="Creativity" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreativityPage;
