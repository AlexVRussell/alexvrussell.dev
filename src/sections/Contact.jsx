import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <section>
            <h2>Contact me?</h2>
            <p>here are my links to all relevant services {"(again)"}</p>
            <div>
                <a href="https://github.com/AlexVRussell" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} class="hover:text-blue-400 transition" />
                </a>
                <a href="https://linkedin.com/in/alexvrussell" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} class="hover:text-blue-400 transition" />
                </a>
                <a href="mailto:syftytheapp@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} class="hover:text-blue-400 transition" />
                </a>
            </div>
        </section>
    )
}