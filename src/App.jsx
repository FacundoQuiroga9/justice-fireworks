import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Gender from './components/Gender/Gender'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Gender />
      <Contact />
      <Footer />
    </>
  )
}

export default App
