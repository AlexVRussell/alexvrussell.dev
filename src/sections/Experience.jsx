export default function Experience() {
    const experience = [
        {
            title: "Software Developer Intern",
            company: "RBC", 
            location: "Toronto, ON",
            description: "",
            tech: ["Node.js", "TypeScript", "PostgreSQL", "React", "Azure"],
            date: "May 2026 - August 2026",
        },
        {
            title: "Software Developer",
            company: "ChemAR - Faculty of Chemistry at Dalhousie University", 
            location: "Halifax, NS",
            description: "",
            tech: ["JavaScript", "Three.js", "Node.js", "Azure"],
            date: "September 2025 - December 2025",
        },
    ];
    return (
        <section id="experience" className="flex flex-col items-center bg-[#1f1f1f] text-white px-6 py-16">
            <h1 className="text-3xl font-bold text-center mb-[10rem]">
                My Professional Experience.
            </h1>
            <div className="flex flex-col lg:items-start gap-8 w-[75%] mx-auto">
                {experience.map((exp, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full"
                    >
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-gray-300">{exp.company}</p>
                        <p className="text-gray-400">{exp.location}</p>
                        <p className="text-gray-400">{exp.date}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {exp.tech.map((tech, i) => (
                                <span key={i} className="bg-[#3a3a3a] px-3 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )) }
            </div>
        </section>
    );
}