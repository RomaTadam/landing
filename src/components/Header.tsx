import React from 'react'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/hamburger_menu.svg'

const Header = () => {
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
                  <a href="#services" className="header__menu-link">Услуги</a>
                </li>
                <li className="header__menu-item">
                  <a href="#stack" className="header__menu-link">Стек</a>
                </li>
                <li className="header__menu-item">
                  <a href="#achievements" className="header__menu-link">О нас</a>
                </li>
                <li className="header__menu-item">
                  <a href="#weopen" className="header__menu-link">Контакты</a>
                </li>
              </ul>
            </nav>
            <a className="header__mail" href="mailto:info@codestaff.ru" >info@codestaff.ru</a>
            <div className='header__hamburger'>
              <img src={hamburger} alt="menu" />
            </div>
          </div>
        </div>        
      </div>
    </header>
  )
};

export default Header