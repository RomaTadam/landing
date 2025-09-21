import React, { useState } from "react";
import vacanciesGo from '../assets/images/vacancies_go.svg'
import vacanciesRight from '../assets/images/vacancies_right.svg'

const Vacancies = () => {
  const [openCards, setOpenCards] = useState<Set<number>>(new Set());
  const [closingCards, setClosingCards] = useState<Set<number>>(new Set());

  const vacancies = [
    {
      category: 'Разработка',
      location: 'Удаленно',
      title: 'Java back-разработчик (middle)',
      // salary: 'от 140 000 ₽',
      description: `
        <ul class="vacancies__list">
          <li>Высшее профессиональное образование в сфере информационных технологий, магистратура</li>
          <li>Опыт работы не менее 2-х лет, для уровня «Middle»</li>
          <li>Умение программировать на языках Java (Spring Framework)</li>
          <li>СУБД: SQL, PostgreSQL</li>
          <li>Будет преимуществом знание Elasticsearch</li>
          <li>Умение работать с Git</li>
          <li>Знание протоколов передачи данных через клиентские приложения (http и https)</li>
          <li>Понимание этапов разработки продуктов (SDLC)</li>
          <li>Понимание масштабирования, устройства кэширования и асинхронных запросов;</li>
          <li>Знание методологии управления проектами Agile</li>
        </ul>
      `,
    },
    {
      category: 'Разработка',
      location: 'Удаленно',
      title: 'Golang разработчик (senior)',
      salary: 'от 165 000 ₽',
      description: `
        <ul class="vacancies__list">
          <li>Опыт работы Go (Gin, goroutines, драйвер PostgreSQL pq) не менее 5 лет</li>
          <li>Базы данных: PostgreSQL, MongoDB, Redis</li>
          <li>DevOps: Docker, GitHub Actions (CI/CD), базовое понимание Kubernetes</li>
          <li>Тестирование: Go testing framework (опыт с Jest или Mocha тоже подойдёт)</li>
          <li>Инструменты: Git, Jira (или аналогичные)</li>
          <li>Уверенные знания одного из дополнительных языков: Nest.js (TypeScript) или Java</li>
        </ul>
      `,
    },
    {
      category: 'Тестирование',
      location: 'Удаленно',
      title: 'Инженер QA (middle)',
      salary: 'от 55 000 ₽',
      description: `
        <ul class="vacancies__list">
          <li>Уверенное владение техниками тест-дизайна, опыт в тестировании от 3х лет</li>
          <li>Опыт тестирования приложений, работающих в Kubernetes</li>
          <li>Навыки работы с системами контроля версия (Git), знание и понимание принципов CI/CD</li>
          <li>Базовый опыт работы с системами сбора и визуализации метрик и мониторинга (Prometheus, Grafana, стек ELK)</li>
          <li>Опыт работы с СУБД PostgreSQL</li>
          <li>Знаете один из языков программирования: С#, Java, Kotlin, Python или Go</li>
          <li>Умеете работать с API (REST/SOAP)</li>
        </ul>
      `,
    },
    {
      category: 'Аналитика',
      location: 'Удаленно или офис',
      title: 'Системный аналитик (senior)',
      salary: 'от 150 000 ₽',
      description: `
        <ul class="vacancies__list">
          <li>Опыт работы в качестве системного аналитика не менее 5 лет</li>
          <li>Знание архитектурных подходов для проектирования высоконагруженных автоматизированных систем</li>
          <li>Представление о форматах данных, применяемых в веб: XML, HTML, JSON, WSDL</li>
          <li>Понимание способов взаимодействия браузера и сервера: куки, сессии, HTTP, AJAX, сокеты</li>
          <li>Знания в области технологий: REST, SOAP, SQL, шифрование, балансировка нагрузки</li>
          <li>Примеры самостоятельно разработанных ТЗ, алгоритмов, интерфейсов</li>
        </ul>
      `,
    },
  ];

  const handleCardClick = (index: number) => {
    setOpenCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
        setClosingCards((prevClosing) => {
          const nextClosing = new Set(prevClosing);
          nextClosing.add(index);
          return nextClosing;
        });
      } else {
        setClosingCards((prevClosing) => {
          if (prevClosing.has(index)) {
            const nextClosing = new Set(prevClosing);
            nextClosing.delete(index);
            return nextClosing;
          }
          return prevClosing;
        });
        next.add(index);
      }
      return next;
    });
  };

  const handleAnimationEnd = (index: number) => {
    setClosingCards((prevClosing) => {
      if (!prevClosing.has(index)) return prevClosing;
      const nextClosing = new Set(prevClosing);
      nextClosing.delete(index);
      return nextClosing;
    });
  };

  return (
    <section className="vacancies" id="vacancies">
      <div className="container">
        <div className="vacancies__wrapper">
          <h3 className="vacancies__title">Вакансии</h3>
          <div className="vacancies__box">
            {vacancies.map((vacancy, index) => {
              const isOpen = openCards.has(index);
              const isClosing = closingCards.has(index);
              return (
                <div
                  key={index}
                  className={`vacancies__card ${
                    (isOpen || isClosing) ? 'vacancies__card--active' : ''
                  } ${isOpen && !isClosing ? 'animate-flip' : ''} ${isClosing ? 'animate-flip--out' : ''}`}
                  onClick={() => handleCardClick(index)}
                  onAnimationEnd={() => handleAnimationEnd(index)}
                >
                  <div className="vacancies__card-row">
                    <p className="vacancies__card-badge">{vacancy.category}</p>
                    <p className="vacancies__card-badge">{vacancy.location}</p>
                    <img className="vacancies__card-img" src={vacanciesGo} alt="link" />
                  </div>
                  <h4 className="vacancies__card-title">{vacancy.title}</h4>
                  <p className="vacancies__card-salary">{vacancy.salary}</p>
                  {isOpen && !isClosing && (
                    <div
                      className="vacancies__card-description"
                      dangerouslySetInnerHTML={{ __html: vacancy.description }}
                    />
                  )}
                </div>
              );
            })}
          </div>
          {/* <span className="vacancies__bigButton">
            Все вакансии
            <img className="vacancies__bigButton-right" src={vacanciesRight} alt="" />
          </span> */}
        </div>
      </div>
    </section>
  )
}

export default Vacancies;