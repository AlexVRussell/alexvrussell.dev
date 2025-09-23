 export default function Projects() {
  const projects = [
    {
      title: "syfty",
      description:
        "A Tinder-style app for cleaning up Spotify liked songs. Built with React Native and Expo.",
      tech: ["React", "JavaScript", "Expo", "Spotify API"],
      demoGif: "/assets/syfty-demo-gif.gif",
      logo: "/assets/syfty-logo-nobg.png",
      // tiktok img link
      // instagram img link
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
    }
  ];

// Stack the two smaller project cards vertically on small screens as normal. but on larger screens display the 2 smaller images stacked vertically next to the larger project card on the left.

return (
    <section id="projects" class="bg-[#1f1f1f] text-white px-6 py-16">
        <h1 class="text-3xl font-bold text-center mb-12">
            Here are some of my favourite projects.
        </h1>

        <div class="flex flex-col lg:flex-row lg:items-start gap-8">
            {projects.map((project, idx) => (
                <div
                    key={idx}
                    class="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition lg:w-1/3 flex flex-col"
                >   
                    <div class="flex items-center">
                        <h3 class="text-2xl font-semibold mb-2">{project.title}</h3>

                        {project.logo && (
                            <img src={project.logo} alt={`${project.title} demo`} class="flex w-[50px] h-auto mb-4" />
                        )}
                    </div>

                    <p class="text-gray-400 mb-4">{project.description}</p>

                    <p class="text-sm text-blue-400 mb-4">
                        {project.tech.join(" • ")}
                    </p>

                    {project.demoImg && (
                        <img src={project.demoImg} alt={`${project.title} demo`} class="w-full h-90 mb-4 border-4 border-gray-700 rounded-lg" />
                    )}
                    <div class="flex justify-center">
                        {project.demoGif && (
                            <img src={project.demoGif} alt={`${project.title} demo`} class="max-w-full max-h-[500px] mb-4 border-4 border-gray-700 rounded-lg" />
                        )}
                    </div>
                </div>
            ))}
        </div>
    </section>
);
}