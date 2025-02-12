import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer_copyright">© Сodestaff , 2024</p>
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="">Политика конфиденциальности</a>
              </li>
              <li className="footer__menu-item">
                <a className="footer__menu-link" href="">Пользовательское соглашение</a>
              </li>
            </ul>
          </nav>
          <p className="footer__inn">ООО «Сodestaff» ИНН: 3657483956</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;