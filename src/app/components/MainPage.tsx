import { ChevronDown } from "lucide-react";

export function MainPage() {
  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      const offset = 80;
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — intro */}
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 text-gray-900">
            Hi, I'm <span className="text-blue-600">Yuma Yamamoto</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Full Stack Developer & AI Engineer
          </p>
          <button
            onClick={scrollToSkills}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors animate-bounce"
          >
            <span>Explore My Work</span>
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Right — about */}
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            I build scalable web applications and AI-powered solutions —
            bridging elegant frontend experiences with powerful backend systems
            using modern JavaScript frameworks and Python-based AI tools.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open source, or sharing knowledge with the developer
            community.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-blue-50 px-4 py-2 rounded-lg">
              <p className="text-sm text-gray-500">Years of Experience</p>
              <p className="text-2xl text-blue-600">5+</p>
            </div>
            <div className="bg-purple-50 px-4 py-2 rounded-lg">
              <p className="text-sm text-gray-500">Projects Completed</p>
              <p className="text-2xl text-purple-600">30+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
