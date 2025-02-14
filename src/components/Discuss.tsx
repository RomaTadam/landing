import React from "react";

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
          <h1 className="discuss__title">codestaff</h1>
          <div className="discuss__content">
            <p className="discuss__text">
              Подбираем качественные ИТ-ресурсы, <br /> чтобы Вы развивали свой
              бизнес
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
