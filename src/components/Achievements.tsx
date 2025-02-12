import React from "react";
import personIcon from '../assets/images/person_icon.svg'

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="achievements_wrapper">
          <div className="achievements__card achievements__card--first">
            <div className="achievements__title achievements__title--big">7 лет</div>
            <div className="achievements__text">опыта в IT-аутстаффинге и разработке</div>
          </div>
          <div className="achievements__part">
            <div className="achievements__card">
              <div className="achievements__title">90%</div>
              <div className="achievements__text">клиентов остаются с нами для долгосрочного сотрудничества</div>
            </div>
            <div className="achievements__card">
              <div className="achievements__title">24 часа</div>
              <div className="achievements__text">на подбор и старт команды</div>
            </div>
            <div className="achievements__card">
              <div className="achievements__title">15 <img src={personIcon} alt="perosn" /></div>
              <div className="achievements__text">специалистов в штате</div>
            </div>
            <div className="achievements__card">
              <div className="achievements__title">40+</div>
              <div className="achievements__text">успешно реализованных проектов</div>
            </div>          
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Achievements;