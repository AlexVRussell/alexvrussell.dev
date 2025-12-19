import react, { use } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Hero from './sections/hero';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
// import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Terminal from "./vm/terminal";

export default function App() {
  // lock in terminal until access is granted
  const [isTerminalLocked, setIsTerminalLocked] = react.useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#1f1f1f]">
    {isTerminalLocked ? (
        // LOCKED STATE - Terminal only
        <Terminal onAccessGranted={() => setIsTerminalLocked(false)} />
      ) : (
        // UNLOCKED STATE - full website
        <>
      <Hero />
      <TechStack />
      <Projects />
      {/* <Experience /> */}
      <Contact />
    </>
      )}

    </div>
  );
}
