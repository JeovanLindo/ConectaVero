import './App.css'
import Footer from './components/sections/Footer'
import Header from './components/sections/Header'
import Main from './components/sections/Main'
import Services from './components/sections/Services'
import ServicesFibra from './components/sections/ServicesFibra'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Main id='main'/>
        <ServicesFibra id='servicesFibra'/>
        <Services id='services' />
        <Footer id='footer'/>
      </div>
    </>
  )
}

export default App