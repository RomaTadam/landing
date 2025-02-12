import React from "react";
import vacanciesGo from '../assets/images/vacancies_go.svg'
import vacanciesRight from '../assets/images/vacancies_right.svg'

const Vacancies = () => {
  return (
    <section className="vacancies" id="vacancies">
      <div className="container">
        <div className="vacancies__wrapper">
          <h3 className="vacancies__title">Вакансии</h3>
          <div className="vacancies__box">

            <div className="vacancies__card">
              <div className="vacancies__card-row">
                <p className="vacancies__card-badge">Разработка</p>
                <p className="vacancies__card-badge">Удаленно</p>
                <img className="vacancies__card-img" src={vacanciesGo} alt="link" />
              </div>
              <h4 className="vacancies__card-title">Golang разработчик</h4>
              <p className="vacancies__card-salary">от 180 000 ₽ • 1 500 ₽ / час</p>
            </div>

            <div className="vacancies__card">
              <div className="vacancies__card-row">
                <p className="vacancies__card-badge">Дизайн</p>
                <p className="vacancies__card-badge">Удаленно или офис</p>
                <img className="vacancies__card-img" src={vacanciesGo} alt="link" />
              </div>
              <h4 className="vacancies__card-title">Ведущий веб дизайнер UI</h4>
              <p className="vacancies__card-salary">от 140 000 ₽ • 1 200 ₽ / час</p>
            </div>

            <div className="vacancies__card">
              <div className="vacancies__card-row">
                <p className="vacancies__card-badge">Менеджмент</p>
                <p className="vacancies__card-badge">Офис</p>
                <img className="vacancies__card-img" src={vacanciesGo} alt="link" />
              </div>
              <h4 className="vacancies__card-title">Project Manager (разработка)</h4>
              <p className="vacancies__card-salary">от 180 000 ₽ • 1 500 ₽ / час</p>
            </div>

            <div className="vacancies__card">
              <div className="vacancies__card-row">
                <p className="vacancies__card-badge">Тестирование</p>
                <p className="vacancies__card-badge">Удаленно</p>
                <img className="vacancies__card-img" src={vacanciesGo} alt="link" />
              </div>
              <h4 className="vacancies__card-title">Инженер ручного тестирования QA Junior</h4>
              <p className="vacancies__card-salary">от 180 000 ₽ • 1 500 ₽ / час</p>
            </div>

            <div className="vacancies__card">
              <div className="vacancies__card-row">
                <p className="vacancies__card-badge">Разработка</p>
                <p className="vacancies__card-badge">Удаленно</p>
                <img className="vacancies__card-img" src={vacanciesGo} alt="link" />
              </div>
              <h4 className="vacancies__card-title">Golang разработчик</h4>
              <p className="vacancies__card-salary">от 180 000 ₽ • 1 500 ₽ / час</p>
            </div>
            
            <div className="vacancies__card">
              <div className="vacancies__card-row">
                <p className="vacancies__card-badge">Разработка</p>
                <p className="vacancies__card-badge">Удаленно</p>
                <img className="vacancies__card-img" src={vacanciesGo} alt="link" />
              </div>
              <h4 className="vacancies__card-title">Golang разработчик</h4>
              <p className="vacancies__card-salary">от 180 000 ₽ • 1 500 ₽ / час</p>
            </div>

          </div>
          <a className="vacancies__bigButton" href="">
            Все вакансии
            <img className="vacancies__bigButton-right" src={vacanciesRight} alt="" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Vacancies;