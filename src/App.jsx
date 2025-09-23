import react from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Hero from './sections/hero';
import Projects from './sections/Projects';
// import Experience from './sections/Experience';
import Contact from './sections/Contact';

export default function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Projects />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}
