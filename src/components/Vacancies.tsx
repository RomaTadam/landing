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
              <h4 className="vacancies__card-title">Java back-разработчик (middle)</h4>
              <p className="vacancies__card-salary">от 140 000 ₽</p>
            </div>

            <div className="vacancies__card">
              <div className="vacancies__card-row">
                <p className="vacancies__card-badge">Разработка</p>
                <p className="vacancies__card-badge">Удаленно</p>
                <img className="vacancies__card-img" src={vacanciesGo} alt="link" />
              </div>
              <h4 className="vacancies__card-title">Golang разработчик (senior)</h4>
              <p className="vacancies__card-salary">от 165 000 ₽</p>
            </div>

            <div className="vacancies__card">
              <div className="vacancies__card-row">
                <p className="vacancies__card-badge">Тестирование</p>
                <p className="vacancies__card-badge">Удаленно</p>
                <img className="vacancies__card-img" src={vacanciesGo} alt="link" />
              </div>
              <h4 className="vacancies__card-title">Инженер QA (middle)</h4>
              <p className="vacancies__card-salary">от 55 000 ₽</p>
            </div>

            <div className="vacancies__card">
              <div className="vacancies__card-row">
                <p className="vacancies__card-badge">Аналитика</p>
                <p className="vacancies__card-badge">Удаленно или офис</p>
                <img className="vacancies__card-img" src={vacanciesGo} alt="link" />
              </div>
              <h4 className="vacancies__card-title">Системный аналитик (senior)</h4>
              <p className="vacancies__card-salary">от 150 000 ₽</p>
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