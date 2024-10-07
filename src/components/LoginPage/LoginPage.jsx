import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./LoginPage.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const users = useSelector((state) => state.users.users);
  const loggedIn = useSelector((state) => state.loggedIn.loggedIn);
  const dispatch = useDispatch();


  const [isLogged, setIsLogged] = useState(loggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");


    const user = users.find((user) => user.username === username);
    if (!user) {
      setErrorMessage("Такой пользователь не найден");
      return;
    }

    if (user.password !== password) {
      setErrorMessage("Введён неверный пароль");
      return;
    }


    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { userID: user.userID }, 
    });
    setIsLogged(true); 
    console.log("Успешный вход:", user);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <Header />
      <div className="login-page">
        <div className="container">
          <section className="login-page__content">
            <div className="login-page__form">
              {isLogged ? (
                <div>
                  <h2>Поздравляем, {username}. Вход выполнен.</h2>
                  <Link to="/">
                    {" "}
                    <button>Перейти на главную страницу</button>
                  </Link>
                </div>
              ) : (
                <>
                  <h2>Вход</h2>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="username">Логин:</label>
                      <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Пароль:</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    {errorMessage && (
                      <div style={{ color: "red" }}>{errorMessage}</div>
                    )}
                    <button type="submit">Войти</button>
                  </form>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
