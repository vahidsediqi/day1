import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Results from './components/Results'
import Process from './components/Process'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#05050a', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Results />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
