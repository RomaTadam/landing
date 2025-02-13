// import './App.css'
// import "./assets/styles/App.scss"
import Achievements from './components/Achievements'
import Cooperation from './components/Cooperation'
// import Clients from './components/Clients'
import Discuss from './components/Discuss'
import Faq from './components/Faq'
import Footer from './components/Footer'
import FormTask from './components/FormTask'
import Header from './components/Header'
import Separator from './components/Separator'
import Services from './components/Services'
import Stack from './components/Stack'
// import Team from './components/Team'
import Vacancies from './components/Vacancies'
import Weopen from './components/Weopen'

function App() {

  return (
    <>
      <Header />
      <main className='main'>
          <Discuss />
          <Separator />
          <Achievements />
          <Separator />
          <Services />
          <Stack />
          <FormTask />
              {/* <Clients /> */}
          <Cooperation />
          <Separator />
              {/* <Team /> */}
          <Vacancies />
          <Faq />
          <Separator />
          <Weopen />
          <Separator />
          <Footer /> 
      </main>
    </>
  )
}

export default App
