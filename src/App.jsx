import react from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Hero from './sections/hero';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
// import Experience from './sections/Experience';
import Contact from './sections/Contact';

export default function App() {

  return (
    <div className="min-h-screen flex flex-col bg-[#1f1f1f]">
      <Hero />
      <TechStack />
      <Projects />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}
