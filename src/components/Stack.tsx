import React from "react";
import frontReact from '../assets/images/front_react.svg'
import frontVue from '../assets/images/front_vue.svg'
import testRegress from '../assets/images/test_regress.svg'
import testAutoqa from '../assets/images/test_autoqa.svg'
import testLoadtest from '../assets/images/test_loadtest.svg'
import analyticsSys from '../assets/images/analytics_system2.svg'
import analyticsBus from '../assets/images/analytics_business.svg'
import backendJava from '../assets/images/backend_java.svg'
import backendC from '../assets/images/backend_c.svg'
import backendGolang from '../assets/images/backend_golang.svg'
// import backendSpring from '../assets/images/backend_spring.svg'
import mobileUx from '../assets/images/mobile_ux.svg'
// import mobileSwift from '../assets/images/mobile_swift.svg'
import mobileAndroid from '../assets/images/mobile_android.svg'
import mobileIos from '../assets/images/mobile_ios.svg'

const Stack = () => {
  return (
    <section className="stack" id="stack">
      <div className="container">
        <div className="stack__wrapper">
          <div className="stack__about">
            <span className="stack__about--red">Работаем с актуальным стеком,</span> который закрывает задачи любого уровня сложности
          </div>
          <div className="stack__tech">
            
            <div className="stack__tech--first">
              <div className="stack__card stack__front">
                <div className="stack__text">Front-end</div>
                <div className="stack__card-box">
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={frontReact} alt="react" />
                    </div>
                    <p className="stack__name">React</p>
                  </div>
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={frontVue} alt="vue" />
                    </div>
                    <p className="stack__name">Vue</p>
                  </div>
                </div>
              </div>

              <div className="stack__card stack__test">
                <div className="stack__text">Тестирование</div>
                <div className="stack__card-box">
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={testRegress} alt="regress" />
                    </div>
                    <p className="stack__name">Регресс</p>
                  </div>
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={testAutoqa} alt="autotest" />
                    </div>
                    <p className="stack__name">«Автотесты»</p>
                  </div>
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={testLoadtest} alt="loadtest" />
                    </div>
                    <p className="stack__name">Нагрузка</p>
                  </div>
                </div>
              </div>

              <div className="stack__card stack__analytics">
                <div className="stack__text">Аналитика</div>
                <div className="stack__card-box">
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={analyticsSys} alt="sys analytics" />
                    </div>
                    <p className="stack__name">Системная</p>
                  </div>
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={analyticsBus} alt="business" />
                    </div>
                    <p className="stack__name">Бизнес</p>
                  </div>
                </div>
              </div>              
            </div>

            <div className="stack__tech--second">
              <div className="stack__card stack__backend">
                <div className="stack__text">Back-end</div>
                <div className="stack__card-box">
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={backendJava} alt="java" />
                    </div>
                    <p className="stack__name">Java</p>
                  </div>
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={backendC} alt="c" />
                    </div>
                    <p className="stack__name">C#</p>
                  </div>
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={backendGolang} alt="golang" />
                    </div>
                    <p className="stack__name">GoLang</p>
                  </div>
                  {/* <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={backendSpring} alt="spring" />
                    </div>
                    <p className="stack__name">Spring</p>
                  </div> */}
                </div>
              </div>

              <div className="stack__card stack__mobile">
                <div className="stack__text">MOBILE</div>
                <div className="stack__card-box">
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={mobileUx} alt="ux ui" />
                    </div>
                    <p className="stack__name">UX / UI</p>
                  </div>
                  {/* <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={mobileSwift} alt="swift" />
                    </div>
                    <p className="stack__name">Swift</p>
                  </div> */}
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={mobileAndroid} alt="android sdk/ndk" />
                    </div>
                    <p className="stack__name">Android <br /> SDK/NDK</p>
                  </div>
                  <div className="stack__card-wrapper">
                    <div className="stack__sircle">
                      <img className="stack__sircle-img" src={mobileIos} alt="ios" />
                    </div>
                    <p className="stack__name">IOS</p>
                  </div>
                </div>
              </div>              
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Stack;