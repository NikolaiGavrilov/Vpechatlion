import { Children } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <h1 className="header__heading">
          Впечатл
          <span style={{ textDecoration: "yellow wavy underline" }}>ион</span>
        </h1>
        <img className="header__logo-img" src="img/vpechatlion-logo.png" alt="" />
      </Link>

      <nav className="header__nav">
        <a href="#" className="header__link">
          Путешествия
        </a>
        <a href="#" className="header__link">
          Гастрономия
        </a>
        <a href="#" className="header__link">
          Спорт
        </a>
        <a href="#" className="header__link">
          Хобби и творчество
        </a>
      </nav>
    </header>
  );
};

export default Header;
