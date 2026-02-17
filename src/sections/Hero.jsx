// Hero.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section>

      <div className="flex flex-col items-center justify-center min-h-[75vh] bg-[#1f1f1f] text-white px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Hi, I'm{" "}
          <ReactTyped
            strings={["Alex :)", " a Software Developer."]}
            typeSpeed={90}
            backSpeed={30}
            loop
            cursorChar="|"
            showCursor={true}
          />
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 text-center lg:w-1/2 sm:w-md leading-relaxed">
          Currently in my 4th year at{" "}
          <span className="text-blue-400 font-semibold">Dalhousie University</span>.{" "}
          Interested in all things software development. I will be joining <span className="text-blue-400 font-semibold">RBC</span> as a Software Developer Intern this summer!
        </p>

        {/* Social icons */}
        <div className="flex gap-6 mt-10 text-2xl">
          <a href="https://github.com/AlexVRussell" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-gray-400" />
          </a>
          <a href="https://linkedin.com/in/alexvrussell" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-400" />
          </a>
          <a href="mailto:syftytheapp@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
          </a>
        </div>
      </div>

      <div className="text-center mb-[10rem] animate-pulse">
        <FontAwesomeIcon icon={faMouse} className="text-3xl text-gray-400" />
        <div className="text-sm mt-2 text-gray-400">
          <p>Scroll to see more</p>
        </div>
      </div>

    </section>
  );
}
