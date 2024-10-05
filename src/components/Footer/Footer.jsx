import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <p>Николай Гаврилов</p>
        <p>nikolaisibir@mail.ru</p>
        <p>Москва, 2024</p>
      </div>
      <div className="footer__networks-icons">
        <img className="footer__icon" src="img/telegram.svg" alt="" />
        <a href="https://github.com/NikolaiGavrilov">
          <img className="footer__icon" src="img/github.svg" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
