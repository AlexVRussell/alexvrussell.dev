export default function Projects() {
    const projects = [
        {
            title: "syfty",
            description:
                "A Tinder-style app for cleaning up Spotify liked songs. Designed to be used on mobile devices," +
                " allowing users to quickly swipe through their playlists (specifically the liked playlist), to remove and curate their music.",
            tech: ["React", "JavaScript", "Expo", "Spotify API"],
            demoGif: "/assets/syfty-demo-gif.gif",
            logo: "/assets/syfty-logo-nobg.png",
            // may include links to syfty's tik tok and/or ig
        },
        {
            title: "Spotify Stat Tracker",
            description:
                "Using the Spotify API allows users to count and track their listens minutes over time, as well as their top artists and tracks.",
            tech: ["Python", "Flask", "SQLite", "Spotify API"],
            demoImg: "/assets/spotify-stat-tracker-demo.png",
        },
        {
            title: "Text-based Hangman Game",
            description: "A simple text-based hangman game built in Java that runs in the console.",
            tech: ["Java"],
            demoImg: "/assets/hangmangame.png",
        },
    ];

    return (
        <section id="projects" className="bg-[#1f1f1f] text-white px-6 py-16">
            <div className="flex flex-col text-3xl justify-center text-center font-bold w-full text-center mb-[5rem]">
                <h1>
                    Here are some of my favourite projects.
                </h1>
                <p>_______________________________________</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition lg:w-1/3 flex flex-col"
                    >
                        <div className="flex items-center">
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            {project.logo && (
                                <img
                                    src={project.logo}
                                    alt={`${project.title} logo`}
                                    className="flex w-[50px] h-auto mb-4 ml-2"
                                />
                            )}
                        </div>

                        <p className="text-gray-400 mb-4">{project.description}</p>

                        <p className="text-sm text-blue-400 mb-4">
                            {project.tech.join(" • ")}
                        </p>

                        {project.demoImg && (
                            <img
                                src={project.demoImg}
                                alt={`${project.title} demo`}
                                className="w-full h-90 mb-4 border-4 border-gray-700 rounded-lg"
                            />
                        )}
                        <div className="flex justify-center">
                            {project.demoGif && (
                                <img
                                    src={project.demoGif}
                                    alt={`${project.title} demo`}
                                    className="w-auto h-[500px] mb-4 border-4 border-gray-700 rounded-lg"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
