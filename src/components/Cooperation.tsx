import React, { useState } from "react";

const Cooperation = () => {
  const [selectedScheme, setSelectedScheme] = useState("time");
  const [flipKey, setFlipKey] = useState(0);

  const content = {
    time: {
      how: {
        light: "Повременная схема сотрудничества. ",
        text: "Оплата рассчитывается за фактически выполненный объём работ. Отчётный период составляет 1 календарный месяц.",
      },
      features: [
        {
          title: "Приоритеты",
          text: "Можно изменять приоритетность реализации задач",
        },
        {
          title: "Отчетность",
          text: "Прозрачный почасовой отчет по выполненным задачам",
        },
        { title: "Быстрый старт", text: "Работы стартуют без предоплаты" },
      ],
    },
    rate: {
      how: {
        light: "Фиксированная оплата за оказанные услуги в месяц. ",
        text: "Расчет происходит исходя из заранее обговорённых коммерческих условий.",
      },
      features: [
        {
          title: "Постановка задачи",
          text: "Постановка задач осуществляется Заказчиком",
        },
        {
          title: "Предоплата",
          text: "Оказание услуг осуществляется после предоплаты",
        },
        {
          title: "Прозрачность",
          text: "Прозрачное понимание стоимости услуг за месяц",
        },
      ],
    },
  };

  const handleSchemeClick = (scheme) => {
    setSelectedScheme(scheme);
    setFlipKey((prev) => prev + 1);
  };

  return (
    <section className="cooperation" id="cooperation">
      <div className="container">
        <div className="cooperation__wrapper">
          <div className="cooperation__schemes">
            <p className="cooperation__title">Схемы сотрудничества</p>
            <div className="cooperation__schemes-box">
              <h3
                className={`cooperation__schemes-card ${
                  selectedScheme === "time"
                    ? "cooperation__schemes-card--time"
                    : "cooperation__schemes-card--rate"
                }`}
                onClick={() => handleSchemeClick("time")}
              >
                Time & Material
              </h3>
              <h3
                className={`cooperation__schemes-card ${
                  selectedScheme === "rate"
                    ? "cooperation__schemes-card--time"
                    : "cooperation__schemes-card--rate"
                }`}
                onClick={() => handleSchemeClick("rate")}
              >
                Monthly Rate
              </h3>
              <div className="cooperation__schemes-hr"></div>
            </div>
          </div>

          <div className="cooperation__row">
            <div className="cooperation__how">
              <p className="cooperation__title cooperation__title--opacity">
                как работаем?
              </p>
              <div key={`how-${flipKey}`} className="animate-flip">
                <p className="cooperation__how-text">
                  <span className="cooperation__how-light">
                    {content[selectedScheme].how.light}
                  </span>
                  {content[selectedScheme].how.text}
                </p>
              </div>
            </div>

            <div className="cooperation__strong">
              <p className="cooperation__title cooperation__title--opacity">
                Особенности
              </p>
              <div className="cooperation__strong-box">
                {content[selectedScheme].features.map((feature, index) => (
                  <div
                    key={index}
                    className="cooperation__strong-card animate-flip"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="cooperation__strong-sircles">
                      {[...Array(index + 1)].map((_, i) => (
                        <div
                          key={i}
                          className={`cooperation__strong-sircle ${
                            i === 0
                              ? ""
                              : `cooperation__strong-sircle--${
                                  i === 1 ? "two" : "three"
                                }`
                          }`}
                        />
                      ))}
                    </div>
                    <h4 className="cooperation__strong-title">
                      {feature.title}
                    </h4>
                    <p className="cooperation__strong-text">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
