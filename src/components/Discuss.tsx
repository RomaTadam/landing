import React from "react";
import logoText from "../assets/images/big_new_logo_text.svg";

const Discuss = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.querySelector("#formtask");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="discuss" id="discuss">
      <div className="container">
        <div className="discuss__wrapper">
          {/* <h1 className="discuss__title">codestaff</h1> */}
          <div className="discuss__logoWrapper">
            <img src={logoText} className="discuss__logo" alt="CodeStaff logo" />
          </div>
          <div className="discuss__content">
            <p className="discuss__text">
              Технологии под контролем экспертов
            </p>
            <a
              className="discuss__button"
              href="#formtask"
              onClick={handleClick}
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discuss;
