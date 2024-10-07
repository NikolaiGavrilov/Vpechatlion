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
        <img
          className="header__logo-img"
          src="img/vpechatlion-logo.png"
          alt=""
        />
      </Link>

      <nav className="header__nav">
        <Link to="/travel" href="#" className="header__link">
          Путешествия и места
        </Link>
        <Link to="/culinary" href="#" className="header__link">
          Еда и кулинария
        </Link>
        <a href="#" className="header__link">
          Творчество
        </a>
      </nav>
    </header>
  );
};

export default Header;
