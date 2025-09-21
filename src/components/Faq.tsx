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
      answer: 'Аутсорсинг предполагает полную или частичную реализацию проекта силами CodeStaff. Это позволит вам сфокусироваться на приоритетных задачах и снизит нагрузку на штатных специалистов, а масштабирование команды, выстраивание процесса разработки, координацию команды и проведение демонстраций мы забираем на себя.<br> Аутстаффинг предоставляет вам возможность сформировать команду из штатных специалистов CodeStaff. Благодаря этому наши клиенты нивелируют риски налоговой нагрузки, чрезмерного масштабирования HR направления, подводных камней при трудоустройстве кандидатов и оценки их навыков. Наши специалисты полностью подстраиваются под ваши процессы и существующий workflow',
    },
    {
      id: 2,
      question: 'Как происходит контроль и управление удаленной командой?',
      answer: 'Контроль и управление командой осуществляется силами наших аккаунт-менеджеров, руководителей технических направлений, а также специалистов HR. Каждый из них держит руку на пульсе и предоставляет всю необходимую актуальную информацию по прогрессу',
    },
    {
      id: 3,
      question: 'Как рассчитывается стоимость аутстаффинговых услуг?',
      answer: 'Стоимость наших услуг формируется исходя из прозрачных для вас пунктов:<ul class="faq__card-answer--list"><li class="faq__card-answer--item">Заработная плата сотрудника</li><li class="faq__card-answer--item">Упрощенная система налогообложения</li><li class="faq__card-answer--item">Минимальные косвенные расходы</li><li class="faq__card-answer--item">Приемлемая маржинальность</li></ul>',
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
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                ></p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq;