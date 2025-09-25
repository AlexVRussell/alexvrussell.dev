import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <section className="flex flex-col justify-center items-center text-white mb-6">
            <p className="mb-12 text-gray-400">_________________________________</p> {/** is this normal? im too lazy to do anything more then spam underscores */}
            <h2>Contact me?</h2>
            <p>here are my links to all relevant services {"(again)"}</p>
            <div class="flex mb-6 gap-6 mt-4 text-2xl">
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