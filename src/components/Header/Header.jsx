import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import "./Header.scss";

// Хедер сайта. Содержит лого и навигационные ссылки на разделы, а также ссылку на авторизацию. В случае, если пользователь уже авторизован, вместо ссылки авторизации представляет краткую информацию о пользователе (аватар, имя пользователя) и содержит ссылку на выход из учетной записи.
const Header = () => {
  const dispatch = useDispatch();
  const { loggedIn, userID } = useSelector((state) => state.loggedIn);
  const users = useSelector((state) => state.users.users);
  const currentUser = users.find((user) => user.userID === userID);
  const avatar = currentUser ? currentUser.avatar : "";

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="header-content container">
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
          <Link to="/travel" className="header__link">
            Путешествия
            <br /> и места
          </Link>
          <Link to="/culinary" className="header__link">
            Кулинария
            <br /> и еда
          </Link>
          <Link to="/creativity" className="header__link">
            Творчество
            <br /> и хобби
          </Link>
          
        </nav>
        {!loggedIn ? (
            <Link to="/login" className="header__link">
              Aвторизоваться
            </Link>
          ) : (
            <div className="header__user-block">
              <div className="header__user-info">
                <Link to="/myprofile">
                  <span className="header__username">
                    {currentUser.username}
                  </span>
                </Link>
                <Link to="/myprofile">
                  <img src={avatar} alt="Avatar" className="header__avatar" />
                </Link>
              </div>
              <Link
                to="/"
                onClick={logOut}
                className="header__link"
                style={{ color: "red" }}
              >
                Выйти
              </Link>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;
