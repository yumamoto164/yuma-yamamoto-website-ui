import { skills } from "../constants/constants";

export function SkillsGrid() {
  return (
    <div className="space-y-3">
      {skills.map((group) => (
        <div key={group.category} className="flex items-center gap-3">
          <span className="text-sm text-gray-500 w-28 shrink-0">
            {group.category}
          </span>
          <div className="flex flex-wrap gap-4">
            {group.technologies.map((tech) => (
              <div key={tech.name} className="relative group/icon">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-10 h-10 hover:scale-110 transition-transform"
                />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none z-10">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
