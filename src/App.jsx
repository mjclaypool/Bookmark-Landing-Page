import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Downloads from './components/Downloads';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './index.css'

function App() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Features />
      <Downloads />
      <FAQ />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App
