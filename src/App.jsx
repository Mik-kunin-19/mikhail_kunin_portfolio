import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-darkPurple text-softWhite min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
