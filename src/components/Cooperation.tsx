import React from "react";

const Cooperation = () => {
  return (
    <section className="cooperation" id="cooperation">
      <div className="container">
        <div className="cooperation__wrapper">

          <div className="cooperation__schemes">
            <p className="cooperation__title">Схемы сотрудничества</p>
            <div className="cooperation__schemes-box">
              <h3 className="cooperation__schemes-card cooperation__schemes-card--time">Time & Material</h3>
              <h3 className="cooperation__schemes-card cooperation__schemes-card--rate">Monthly Rate</h3>
              <div className="cooperation__schemes-hr"></div>
            </div>
          </div>

          <div className="cooperation__row">
            <div className="cooperation__how">
              <p className="cooperation__title cooperation__title--opacity">как работаем?</p>
              <p className="cooperation__how-text">
                <span className="cooperation__how-light">Повременная схема сотрудничества.</span> Оплата рассчитывается за фактически выполненный объём работ. Отчётный период составляет 1 календарный месяц.
              </p>
            </div>

            <div className="cooperation__strong">
              <p className="cooperation__title cooperation__title--opacity">Особенности</p>
              <div className="cooperation__strong-box">
                <div className="cooperation__strong-card">
                  <p className="cooperation__strong-sircle"></p>
                  <h4 className="cooperation__strong-title">Приоритеты</h4>
                  <p className="cooperation__strong-text">Можно изменять приоритетность реализации задач</p>
                </div>
                <div className="cooperation__strong-card">
                  <p className="cooperation__strong-sircle"></p>
                  <p className="cooperation__strong-sircle--two"></p>
                  <h4 className="cooperation__strong-title">Отчетность</h4>
                  <p className="cooperation__strong-text">Прозрачный почасовой отчет по выполненным задачам</p>
                </div>
                <div className="cooperation__strong-card">
                  <p className="cooperation__strong-sircle"></p>
                  <p className="cooperation__strong-sircle--two"></p>
                  <p className="cooperation__strong-sircle--three"></p>
                  <h4 className="cooperation__strong-title">Быстрый старт</h4>
                  <p className="cooperation__strong-text">Работы стартуют без предоплаты</p>
                </div>
              </div>
            </div>            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cooperation;