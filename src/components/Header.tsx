import React, { useState } from "react";
import logo from "../assets/images/LogoV2_small_light.png";
import hamburger from "../assets/images/hamburger_menu.svg";
import mobileMenuClose from "../assets/images/mobile_menu_close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    document.body.style.overflow = "auto";
    setIsMenuOpen(false);
  };

  const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.href = "mailto:info@codestaff.ru";
  };

  const openSideMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSideMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header className="header" id="header">
      <div className="header__bg">
        <div className="container">
          <div className="header__top">
            <div className="header__logo">
              <img src={logo} alt="CodeStaff logo" />
            </div>
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <a
                    onClick={(e) => handleClick(e, "#products")}
                    href="#products"
                    className="header__menu-link"
                  >
                    Продукты
                  </a>
                </li>
                <li className="header__menu-item">
                  <a
                    onClick={(e) => handleClick(e, "#services")}
                    href="#services"
                    className="header__menu-link"
                  >
                    Услуги
                  </a>
                </li>
                <li className="header__menu-item">
                  <a
                    onClick={(e) => handleClick(e, "#stack")}
                    href="#stack"
                    className="header__menu-link"
                  >
                    Стек
                  </a>
                </li>
                {/* <li className="header__menu-item">
                  <a
                    onClick={(e) => handleClick(e, "#achievements")}
                    href="#achievements"
                    className="header__menu-link"
                  >
                    О нас
                  </a>
                </li> */}
                <li className="header__menu-item">
                  <a
                    onClick={(e) => handleClick(e, "#weopen")}
                    href="#weopen"
                    className="header__menu-link"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__contactWrapper">
              <a
                className="header__phone"
                href="tel:+74957982020"
                onClick={handleEmailClick}
              >
                Для&nbsp;звонков +7&nbsp;(495)&nbsp;798&#8209;20&#8209;20
              </a>
              <a
                className="header__mail"
                href="mailto:info@codestaff.ru"
                onClick={handleEmailClick}
              >
                info@codestaff.ru
              </a>              
            </div>
            <div 
              className="header__hamburger"
              onClick={openSideMenu}
            >
              <img src={hamburger} alt="menu" />
            </div>

            <div 
              className={`header__overlay ${isMenuOpen ? 'open' : ''}`}
              onClick={closeSideMenu}
            />

            <div 
              className={`header__sideMenu ${isMenuOpen ? 'open' : ''}`}
              id="sideMenu"
            >
              <div className="header__sideMenu-close">
                <img 
                  src={mobileMenuClose} alt="menu"
                  onClick={closeSideMenu} 
                />
              </div>
              <nav className="header__sideMenu-nav">
                <ul className="header__sideMenu-list">
                  <li className="header__sideMenu-item">
                    <a
                      onClick={(e) => handleClick(e, "#products")}
                      href="#products"
                      className="header__sideMenu-link"
                    >
                      Продукты
                    </a>
                  </li>
                  <li className="header__sideMenu-item">
                    <a
                      onClick={(e) => handleClick(e, "#services")}
                      href="#services"
                      className="header__sideMenu-link"
                    >
                      Услуги
                    </a>
                  </li>
                  <li className="header__sideMenu-item">
                    <a
                      onClick={(e) => handleClick(e, "#stack")}
                      href="#stack"
                      className="header__sideMenu-link"
                    >
                      Стек
                    </a>
                  </li>
                  {/* <li className="header__sideMenu-item">
                    <a
                      onClick={(e) => handleClick(e, "#achievements")}
                      href="#achievements"
                      className="header__sideMenu-link"
                    >
                      О нас
                    </a>
                  </li> */}
                  <li className="header__sideMenu-item">
                    <a
                      onClick={(e) => handleClick(e, "#weopen")}
                      href="#weopen"
                      className="header__sideMenu-link"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
              <a
                className="header__sideMenu-mail"
                href="tel:+74957982020"
                onClick={handleEmailClick}
              >
                +7&nbsp;(495)&nbsp;798&#8209;20&#8209;20 <br /> 
                Для звонков
              </a>
              <a
                className="header__sideMenu-mail"
                href="mailto:info@codestaff.ru"
                onClick={handleEmailClick}
              >
                info@codestaff.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
