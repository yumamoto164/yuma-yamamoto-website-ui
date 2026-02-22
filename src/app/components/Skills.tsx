import { Code2, Database, Brain } from "lucide-react";

const DEVICONS_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-8 h-8 text-blue-600" />,
    technologies: [
      { name: "HTML", logo: `${DEVICONS_BASE}/html5/html5-original.svg` },
      { name: "CSS", logo: `${DEVICONS_BASE}/css3/css3-original.svg` },
      { name: "JavaScript", logo: `${DEVICONS_BASE}/javascript/javascript-original.svg` },
      { name: "TypeScript", logo: `${DEVICONS_BASE}/typescript/typescript-original.svg` },
      { name: "React", logo: `${DEVICONS_BASE}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICONS_BASE}/nextjs/nextjs-original.svg` },
    ],
  },
  {
    category: "Backend & Data",
    icon: <Database className="w-8 h-8 text-purple-600" />,
    technologies: [
      { name: "Python", logo: `${DEVICONS_BASE}/python/python-original.svg` },
      { name: "Pandas", logo: `${DEVICONS_BASE}/pandas/pandas-original.svg` },
    ],
  },
  {
    category: "AI & ML",
    icon: <Brain className="w-8 h-8 text-green-600" />,
    technologies: [
      { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain" },
      { name: "LangGraph", logo: "https://cdn.simpleicons.org/langchain" },
      { name: "PyTorch", logo: `${DEVICONS_BASE}/pytorch/pytorch-original.svg` },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl mb-4 text-center text-gray-900">Skills & Technologies</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies I use to build powerful applications
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                {skillGroup.icon}
                <h3 className="text-xl text-gray-900">{skillGroup.category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {skillGroup.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-10 h-10 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-gray-700 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
