import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { ZigZagTimeline } from './components/ui/ZigZagTimeline';
import './App.css';

function App() {
  return (
    <>
      <ScrollProgress />
      <ZigZagTimeline />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
