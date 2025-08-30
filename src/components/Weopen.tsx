import React from "react";
import formtaskAvatar from "../assets/images/formtask_alex_small.jpg";

const Weopen = () => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const target = document.querySelector("#formtask");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="weopen" id="weopen">
      <div className="container">
        <div className="weopen__wrapper">
          <div className="weopen__text">
            <p className="weopen__text-title">Мы открыты к сотрудничеству</p>
            <h2 className="weopen__text-about">
              Можете заполнить{" "}
              <a
                onClick={handleClick}
                href="#formtask"
                className="weopen__text-about--link"
              >
                бриф
              </a>
              , написать нам{" "}
              <a href="mailto:info@codestaff.ru" className="weopen__text-about--link">
                на почту
              </a>{" "}
              или{" "}
              <a href="https://t.me/Alexey_CodeStaff" className="weopen__text-about--link">
                в телеграм
              </a>
            </h2>
          </div>
          <div className="weopen__text-person">
            <div className="formtask__tellus--card">
              {/* <p className="formtask__tellus-status">online</p> */}
              <div className="formtask__person">
                <img src={formtaskAvatar} alt="avatar" />
                <div className="formtask__person-box">
                  <h5 className="formtask__person-name">Менеджер</h5>
                  <p className="formtask__person-status">Sales-менеджер</p>
                </div>
              </div>
              <div className="formtask__info">
                <p className="formtask__info-title">Телефон менеджера:</p>
                <h4 className="formtask__info-phone">+7 (495) 798-20-20</h4>
              </div>
            </div>
          </div>
        </div>
        <h1 className="discuss__title">codestaff</h1>
      </div>
    </section>
  );
};

export default Weopen;
