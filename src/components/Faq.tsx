import React, { useState } from "react";
import faqPlus from '../assets/images/faq_plus.svg'
import faqMinus from '../assets/images/faq_minus.svg'

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleClass = (id) => {
    setActiveId(activeId === id ? null : id);
  }

  const faqItems = [
    {
      id: 1,
      question: 'Чем аутстаффинг отличается от аутсорсинга?',
      answer: 'Чем аутстаффинг отличается от аутсорсинга?',
    },
    {
      id: 2,
      question: 'Какие плюсы и минусы аутстаффинга для бизнеса?',
      answer: 'Аутстаффинг помогает бизнесу снизить налоговую нагрузку, быстро привлекать нужных специалистов и гибко масштабировать команду без лишних HR-затрат, позволяя сосредоточиться на стратегических задачах. Однако у этого подхода есть и минусы: ограниченный контроль над сотрудниками, риски качества работы, низкая вовлеченность в корпоративную культуру, возможные юридические сложности и вопросы безопасности данных.',
    },
    {
      id: 3,
      question: 'Как происходит контроль и управление удаленной командой?',
      answer: 'Как происходит контроль и управление удаленной командой?',
    },
    {
      id: 4,
      question: 'Как рассчитывается стоимость аутстаффинговых услуг?',
      answer: 'Как рассчитывается стоимость аутстаффинговых услуг?',
    },
  ];

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__wrapper">
          <h2 className="faq__title">Частые вопросы</h2>
          <div className="faq__box">

            {faqItems.map((item, index) => (
              <div 
                className="faq__card"
                key={item.id}
                onClick={() => toggleClass(item.id)} 
              >
                <h5 className="faq__card-question">
                  {item.question}
                  <img 
                    className="faq__card-img" 
                    alt="minus" 
                    src={activeId === item.id ? faqMinus : faqPlus} 
                  />
                </h5>
                <p 
                  className={`faq__card-answer 
                    ${activeId === item.id ? 'active' : ''}`
                  }
                >
                  {item.answer}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq;