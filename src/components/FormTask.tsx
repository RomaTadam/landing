import React from "react";
import formtaskAvatar from '../assets/images/formtask_avatar.jpg'
import formtaskClip from '../assets/images/formtask_clip.svg'

const FormTask = () => {
  return (
    <section className="formtask">
      <div className="container">
        <div className="formtask__wrapper" id="formtask">
          <div className="formtask__tellus">
            <div className="formtask__tellus--about">
              <h2 className="formtask__tellus-title">Расскажите нам о своей задаче</h2>
              <p className="formtask__tellus-text">Оставьте заявку, и мы подберем опытную команду для IT решений вашего бизнеса</p>
            </div>
            <div className="formtask__tellus--card" >
              <p className="formtask__tellus-status">online</p>
              <div className="formtask__person">
                <img src={formtaskAvatar} alt="avatar" />
                <div className="formtask__person-box">
                  <h5 className="formtask__person-name">Константин</h5>
                  <p className="formtask__person-status">Sales-менеджер</p>
                </div>
              </div>
              <div className="formtask__info">
                <p className="formtask__info-title">Телефон менеджера:</p>
                <h4 className="formtask__info-phone">+7 (999) 312-21-54</h4>
              </div>
            </div>
          </div>
          <div className="formtask__form">
            <form>
              <div className="formtask__form-wrapper">
                <div className="formtask__small">
                  <input 
                    className="formtask__form-name"
                    placeholder="Как к вам обращаться?" 
                    type="text" 
                    name="name" 
                    id="name" 
                  />
                  <input 
                    className="formtask__form-mail" 
                    placeholder="Электронная почта" 
                    type="email" 
                    name="mail" 
                    id="mail" 
                  />
                </div>
                <textarea 
                  className="formtask__form-task"
                  placeholder="Опишите задачу"
                  name="task" 
                  id="task" 
                ></textarea>
                <input 
                  className="formtask__form-file" 
                  type="file" 
                  name="file" 
                  id="file" 
                  placeholder="Прикрепить файл" 
                />
                <label 
                  className="formtask__form-label"
                  htmlFor="file"
                >
                  <img className="formtask__form-clip" src={formtaskClip} alt="" />
                  Прикрепить файл
                </label>
                <button 
                  className="formtask__form-submit"
                  type="submit" 
                >Обсудить проект</button>
                <p className="formtask__form-text">
                  Нажимая на кнопку «Обсудить проект» я принимаю условия <a href="" className="formtask__form-link">политики конфедиценциальности</a>, <a href="" className="formtask__form-link">пользовательского соглашения</a> и <a href="" className="formtask__form-link">публичной оферты</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormTask;