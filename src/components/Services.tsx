import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__wrapper">
          <div className="services__about">
            <h2 className="services__about-title">Услуги</h2>
            <p className="services__about-text">Предоставляем комплекс IT-услуг, которые помогут вашему бизнесу масштабироваться, сократить затраты и быстрее вывести продукт на рынок</p>
          </div>
          <div className="services__part">
            <div className="services__card services__card--outstaffing">
              <h4 className="services__title">Аутстаффинг</h4>
              <div className="services__text">Подбор квалифицированных специалистов по IT-профилям, быстро расширяем или сокращаем команду под нужды проекта</div>
            </div>
            <div className="services__card services__card--qa">
              <h4 className="services__title">QA и тестирование</h4>
              <div className="services__text">Предлагаем полное покрытие тестированием: функциональное, ручное и нагрузочное.</div>
            </div>
            <div className="services__card services__card--mvp">
              <h4 className="services__title">Разработка MVP</h4>
              <div className="services__text">Быстро выводим минимально жизнеспособные продукты на рынок, позволяя тестировать идеи без больших затрат</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;