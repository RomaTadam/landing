import React from "react";

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products__wrapper">
          <div className="products__about">
            <h2 className="products__about-title">Продукты</h2>
            <p className="products__about-text"><span className="products__firstWord">SmartFlow</span> — это экосистема инновационных цифровых продуктов для эффективного управления бизнес-процессами вашей компании. Наши решения объединяют передовые технологии и удобство использования, позволяя оптимизировать работу и повысить производительность на всех уровнях.</p>
            <p className="products__about-text">Универсальная цифровая платформа со встроенными конструкторами, которые обеспечивают гибкую настройку под ваши бизнес-задачи без необходимости программирования.</p>
            <p className="products__about-text">Выбирая SmartFlow, вы инвестируете в надёжность, масштабируемость и инновации, обеспечивающие конкурентное преимущество вашего бизнеса в цифровую эпоху.</p>
          </div>
          <div className="products__part">
            <div className="products__card products__card--product">
              <h4 className="products__card-title">SmartFlow.Docs</h4>
              <div className="products__card-text">Интеллектуальная ECM-система для управления корпоративным контентом, совмещающая лучшие практики документооборота и полное соответствие законодательству РФ. Масштабируемое решение, идеально подходящее для компаний любого размера.</div>
            </div>            
            <div className="products__card products__card--product">
              <h4 className="products__card-title">SmartFlow.Archive</h4>
              <div className="products__card-text">Современное цифровое решение для оперативного и долговременного хранения документов с соблюдением всех стандартов архивного дела РФ. Быстрый поиск, структурированное хранение и надёжный контроль доступа к корпоративному контенту.</div>
            </div>
            <div className="products__card products__card--product">
              <h4 className="products__card-title">SmartFlow.DocBuilder</h4>
              <div className="products__card-text">Удобный генератор шаблонов документов, который позволяет создавать неограниченное количество типовых документов в несколько кликов, полностью автоматизируя заполнение данных и исключая ошибки.</div>
            </div>
            <div className="products__card products__card--product">
              <h4 className="products__card-title">SmartFlow.TaskManager</h4>
              <div className="products__card-text">Комплексная цифровизация корпоративных сервисов, обеспечивающая управление всеми заявками и услугами компании из единого рабочего окна.</div>
            </div>
            <div className="products__card products__card--product">
              <h4 className="products__card-title">SmartFlow.Projects</h4>
              <div className="products__card-text">Единый интерфейс для работы с проектами, задачами, поручениями, документами и бизнес-процессами. Визуализируйте этапы на диаграмме Ганта и контролируйте важные сроки легко и наглядно.</div>
            </div>
            <div className="products__card products__card--product">
              <h4 className="products__card-title">SmartFlow.Hub</h4>
              <div className="products__card-text">Централизованный интеграционный центр для разрозненных сервисов ЭДО. Автоматическая маршрутизация документов между различными системами, юридическими лицами и филиалами обеспечит бесперебойный документооборот.</div>
            </div>
            <div className="products__card products__card--product">
              <h4 className="products__card-title">SmartFlow.HRM</h4>
              <div className="products__card-text">Цифровое решение для кадрового документооборота и оперативного взаимодействия с сотрудниками, полностью соответствующее нормативно-правовым актам и Трудовому кодексу РФ.</div>
            </div>
          </div>
          <p className="products__about-text"><span className="products__firstWord">FastCode</span> — платформа для мониторинга эффективности разработки, позволяющая повысить качество и скорость выпуска программных продуктов за счет анализа различных метрик: количество и частота пулл-реквестов (PR), размер PR (число строк кода, добавленных или удаленных), время выполнения задачи, активность Code Review, качество пулл-реквестов (PR), отток кода, процент авторства кода, использование LLM в работе, стабильность кода, DORA-метрики.</p>
        </div>
      </div>
    </section>
  )
}

export default Products;