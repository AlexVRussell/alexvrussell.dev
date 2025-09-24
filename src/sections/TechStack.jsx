import React from "react";

const techStack = [
    { name: "React", icon: "/assets/icons/react.svg" },
    { name: "Java", icon: "/assets/icons/java.svg" },
    { name: "Python", icon: "/assets/icons/python.svg" },
    { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
    { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg" },
    //{ name: "HTML", icon: "/assets/icons/html.svg" },
    //{ name: "CSS", icon: "/assets/icons/css.svg" },
];

export default function TechStack() {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center bg-[#1f1f1f] text-white gap-20 mb-10">
            {techStack.map((tech) => (
                <div key={tech.name} class="p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                    <img src={tech.icon} alt={tech.name} class="w-16 h-16 mb-2 text-white fill-blue-500 transition" />
                </div>
            ))}
        </div>
    );
}