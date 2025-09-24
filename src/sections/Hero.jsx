// Hero.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section class="flex flex-col items-center justify-center min-h-screen bg-[#1f1f1f] text-white px-6">
      
      <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Hi, I'm{" "}
        <ReactTyped
            strings={["Alex :)", " a Software Developer.",]}
            typeSpeed={90}
            backSpeed={30}
            loop
            cursorChar="|"
            showCursor={true}
        />
      </h1>
      <p class="text-lg sm:text-xl text-gray-300 text-center max-w-md leading-relaxed">
        Interested in all things software development, but mostly working with{" "}
        <span class="text-blue-400 font-semibold">React</span>.
      </p>

      {/* Social icons */}
      <div class="flex gap-6 mt-10 text-2xl">
        <a href="https://github.com/AlexVRussell" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} class="hover:text-white-400 transition" />
        </a>
        <a href="https://linkedin.com/in/alexvrussell" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} class="hover:text-blue-400 transition" />
        </a>
        <a href="mailto:syftytheapp@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} class="hover:text-blue-400 transition" />
        </a>
      </div>
    </section>
  );
}
