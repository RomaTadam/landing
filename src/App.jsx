import Achievements from './components/Achievements'
import Cooperation from './components/Cooperation'
// import Clients from './components/Clients'
import Discuss from './components/Discuss'
import Faq from './components/Faq'
import Footer from './components/Footer'
import FormTask from './components/FormTask'
import Header from './components/Header'
import Products from './components/Products'
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
          <Products />
          <Separator mobile />
          <Services />
          <Separator mobile />
          <Stack />
          <FormTask />
              {/* <Clients /> */}
          <Separator mobile />
          <Cooperation />
          <Separator mobile />
              {/* <Team /> */}
          <Vacancies />
          <Faq />
          <Separator mobile />
          <Weopen />
          <Separator mobile />
          <Footer />
      </main>
    </>
  )
}

export default App
