import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer_copyright">©CODESTAFF, 2024</p>
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <span className="footer__menu-link">Политика конфиденциальности</span>
              </li>
              <li className="footer__menu-item">
                <span className="footer__menu-link">Пользовательское соглашение</span>
              </li>
            </ul>
          </nav>
          <p className="footer__inn">ООО «КОДСТАФФ» ИНН 7300038488</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;