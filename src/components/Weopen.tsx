import React from "react";
import formtaskAvatar from '../assets/images/formtask_avatar.jpg'

const Weopen = () => {
  return (
    <section className="weopen" id="weopen">
      <div className="container">
        <div className="weopen__wrapper">
          <div className="weopen__text">
            <p className="weopen__text-title">Мы открыты к сотрудничеству</p>
            <h2 className="weopen__text-about">
              Можете заполнить <a href="" className="weopen__text-about--link">бриф</a>, написать нам <a href="" className="weopen__text-about--link">на почту</a> или <a href="" className="weopen__text-about--link">в телеграм</a>
            </h2>
          </div>
          <div className="weopen__text-person">
            <div className="formtask__tellus--card">
              <p className="formtask__tellus-status">online</p>
              <div className="formtask__person">
                <img src={formtaskAvatar} alt="avatar" />
                <div className="formtask__person-box">
                  <h5 className="formtask__person-name">Константин</h5>
                  <p className="formtask__person-status">Sales-менеджер</p>
                </div>
              </div>
              <div className="formtask__info">
                <p className="formtask__info-title">Телефон менеджера:</p>
                <h4 className="formtask__info-phone">+7 (999) 312-21-54</h4>
              </div>
            </div>
          </div>
        </div>
        <h1 className="discuss__title">codestaff</h1>
      </div>
    </section>
  )
}

export default Weopen;