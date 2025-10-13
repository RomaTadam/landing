import React from "react";

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products__wrapper">
          <div className="products__about">
            <h2 className="products__about-title">Продукты</h2>
            <p className="products__about-text"><span className="products__firstWord">SmartFlow</span><span className="products__about-text--small"> — это экосистема</span><span className="products__about-text--big">Экосистема</span> инновационных цифровых продуктов для эффективного управления бизнес-процессами вашей компании. Наши решения объединяют передовые технологии и удобство использования, позволяя оптимизировать работу и повысить производительность на всех уровнях.</p>
            {/* <p className="products__about-text">Универсальная цифровая платформа со встроенными конструкторами, которые обеспечивают гибкую настройку под ваши бизнес-задачи без необходимости программирования.</p>
            <p className="products__about-text">Выбирая SmartFlow, вы инвестируете в надёжность, масштабируемость и инновации, обеспечивающие конкурентное преимущество вашего бизнеса в цифровую эпоху</p> */}
          </div>
          <div className="products__part">
            <div className="products__card products__card--Platform">
              <h4 className="products__card-title">SmartFlow Platform</h4>
              <div className="products__card-text"><strong>BPM</strong>-платформа со встроенными конструкторами для гибкой настройки под бизнес-задачи без необходимости программирования</div>
            </div>            
            <div className="products__card products__card--Docs">
              <h4 className="products__card-title">SmartFlow.Docs</h4>
              <div className="products__card-text">Интеллектуальная <strong>ECM</strong>-система для управления корпоративным контентом, совмещающая лучшие практики документооборота и полное соответствие законодательству РФ. Масштабируемое решение, идеально подходящее для компаний любого размера</div>
            </div>            
            <div className="products__card products__card--Archive">
              <h4 className="products__card-title">SmartFlow.Archive</h4>
              <div className="products__card-text">Современное цифровое решение для оперативного и долговременного хранения документов с соблюдением всех стандартов архивного дела РФ. Быстрый поиск, структурированное хранение и надёжный контроль доступа к корпоративному контенту</div>
            </div>
            <div className="products__card products__card--DocBuilder">
              <h4 className="products__card-title">SmartFlow.DocBuilder</h4>
              <div className="products__card-text">Удобный генератор шаблонов документов, который позволяет создавать неограниченное количество типовых документов в несколько кликов, полностью автоматизируя заполнение данных и исключая ошибки</div>
            </div>
            <div className="products__card products__card--Hub">
              <h4 className="products__card-title">SmartFlow.Hub</h4>
              <div className="products__card-text">Централизованный интеграционный центр для разрозненных сервисов ЭДО. Автоматическая маршрутизация документов между различными системами, юридическими лицами и филиалами обеспечит бесперебойный документооборот</div>
            </div>
            <div className="products__card products__card--Projects">
              <h4 className="products__card-title">SmartFlow.Projects</h4>
              <div className="products__card-text">Единый интерфейс для работы с проектами, задачами, поручениями, документами и бизнес-процессами. Визуализируйте этапы на диаграмме Ганта и контролируйте важные сроки легко и наглядно</div>
            </div>
            <div className="products__card products__card--TaskManager">
              <h4 className="products__card-title">SmartFlow.TaskManager</h4>
              <div className="products__card-text">Комплексная цифровизация корпоративных сервисов, обеспечивающая управление всеми заявками и услугами компании из единого рабочего окна</div>
            </div>
            <div className="products__card products__card--HRM">
              <h4 className="products__card-title">SmartFlow.HRM</h4>
              <div className="products__card-text">Цифровое решение для кадрового документооборота и оперативного взаимодействия с сотрудниками, полностью соответствующее нормативно-правовым актам и Трудовому кодексу РФ</div>
            </div>
          </div>
        </div>
        
        <div className="products__wrapper products__wrapper--FastCode">
          <div className="products__about">
            <h2 className="products__about-title">
              <span className="products__firstWord">FastCode</span>
            </h2>
            <p className="products__about-text">Наблюдай, оптимизируй, ускоряй</p>
          </div>
          <div className="products__part">
            <div className="products__card products__card--Platform products__card--Platform--FastCode">
              <h4 className="products__card-title">FastCode</h4>
              <div className="products__card-text">
                платформа для мониторинга эффективности разработки, позволяющая повысить качество и скорость выпуска программных продуктов за счет анализа различных метрик: количество и частота пулл-реквестов <strong>(PR)</strong>, размер <strong>PR</strong> (число строк кода, добавленных или удаленных), время выполнения задачи, активность <strong>Code Review</strong>, качество пулл-реквестов <strong>(PR)</strong>, отток кода, процент авторства кода, использование <strong>LLM</strong> в работе, стабильность кода, <strong>DORA</strong>-метрики.
              </div>
            </div>   
          </div>       
        </div>      
      </div>
    </section>
  )
}

export default Products;