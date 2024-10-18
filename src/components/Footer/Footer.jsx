import "./Footer.scss";

// Футер сайта, по содержанию ограничивается контактными данными.
const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__contacts">
        <p>Николай Гаврилов</p>
        <p>nikolaisibir@mail.ru</p>
        <p>Москва, 2024</p>
      </div>
      <div className="footer__networks-icons">
        <a href="https://t.me/mn0g0liky">
          <img className="footer__icon" src="img/telegram.svg" alt="" />
        </a>
        <a href="https://github.com/NikolaiGavrilov">
          <img className="footer__icon" src="img/github.svg" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
