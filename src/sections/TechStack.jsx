import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

const techStack = [
    { name: "JavaScript", icon: "/assets/icons/javascript_blue.svg" },
    { name: "Python", icon: "/assets/icons/python_blue.svg" },
    { name: "Java", icon: "/assets/icons/java_blue.svg" },
    { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss_blue.svg" },
    { name: "React", icon: "/assets/icons/react_blue.svg" },
    // { name: "HTML", icon: "/assets/icons/html.svg" },
    // { name: "CSS", icon: "/assets/icons/css.svg" },
];

export default function TechStack() {
    return (
        <section>
            <div className="flex flex-row flex-wrap justify-center items-center bg-[#1f1f1f] text-white gap-20 mb-[10rem] lg:gap-32 px-6 py-16">
                <h1 className="flex text-3xl justify-center text-center font-bold w-full text-center mb-12">
                    Some of the technologies I use.
                </h1>
                {techStack.map((tech) => (
                    <div key={tech.name} className="p-4 rounded-xl shadow-lg animate-pulse hover:scale-105 transition-transform">
                        <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2 text-white fill-blue-500 transition" />
                    </div>
                ))}
            </div>

            <div className="text-center mt-[10rem] mb-[10rem] animate-pulse">
                <FontAwesomeIcon icon={faMouse} className="text-3xl text-gray-400" />
                <div className="text-sm mt-2 text-gray-400">
                    <p> Scroll to see more</p>
                </div>
            </div>

        </section>
    );
}