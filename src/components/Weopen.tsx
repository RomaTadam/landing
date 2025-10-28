import React from "react";
import formtaskAvatar from "../assets/images/formtask_alex_small.jpg";
import logoText from "../assets/images/big_new_logo_text.svg";

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
                на почту&nbsp;
              </a>{" "}
              или{" "}
              <a href="https://t.me/code_staff" target="_blank" className="weopen__text-about--link" rel="nofollow noreferrer noopener">
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
                <h4 className="formtask__info-phone">
                  <a href="https://t.me/code_staff" target="_blank" className="weopen__info-phone-link">
                    +7 (903) 798-20-20
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* <h1 className="discuss__title">codestaff</h1> */}
        <div className="weopen__logoWrapper">
          <img src={logoText} className="weopen__logo" alt="CodeStaff logo" />
        </div>
      </div>
    </section>
  );
};

export default Weopen;
