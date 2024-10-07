import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import "./Header.scss";

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
        {!loggedIn ? (
          <Link to="/login" className="header__link">
            Aвторизоваться
          </Link>
        ) : (
          <div>
            <div className="header__user-info">
              <Link to="/myprofile">
                <span className="header__username">{currentUser.username}</span>
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
      </nav>
    </header>
  );
};

export default Header;
