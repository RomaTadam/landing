import React from "react";
import personIcon from '../assets/images/person_icon.svg'

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="achievements_wrapper">
          {/* <div className="achievements__card achievements__card--first">
            <div className="achievements__title achievements__title--big">7 лет</div>
            <div className="achievements__text">опыта в IT-аутстаффинге и разработке</div>
          </div> */}
          <div className="achievements__part">
            <div className="achievements__card">
              <div className="achievements__title">50+</div>
              <div className="achievements__text">успешно реализованных проектов нашими специалистами и менеджерами</div>
            </div>
            <div className="achievements__card">
              <div className="achievements__title">25 <img src={personIcon} alt="perosn" /></div>
              <div className="achievements__text">специалистов в штате компании с высоким уровнем компетенций</div>
            </div>
            <div className="achievements__card">
              <div className="achievements__title">3</div>
              <div className="achievements__text">рабочих дня на подбор команды и оперативный старт работ</div>
            </div>
            <div className="achievements__card">
              <div className="achievements__title">18</div>
              <div className="achievements__text">проверенных партнеров для быстрого масштабирования</div>
            </div>
            <div className="achievements__card">
              <div className="achievements__title">24 часа</div>
              <div className="achievements__text">доступность менеджера для оперативного решения вопросов</div>
            </div>
            <div className="achievements__card">
              <div className="achievements__title">90%+</div>
              <div className="achievements__text">индекс удовлетворенности клиентов итогами работы</div>
            </div>          
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Achievements;