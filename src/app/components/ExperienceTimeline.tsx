import { useState } from "react";
import { experiences, colorClasses } from "../constants/constants";
import westernMassPioneersLogo from "../../images/western_mass_pioneers.png";
import umassSoccerLogo from "../../images/umass_amherst_logo.png";
import libertyMutualLogo from "../../images/liberty_mutual_logo.png";
import optumLogo from "../../images/optum_logo.png";
const companyLogos: Record<string, string> = {
  "Western Mass Pioneers": westernMassPioneersLogo,
  "UMass Women's Soccer": umassSoccerLogo,
  "Liberty Mutual": libertyMutualLogo,
  Optum: optumLogo,
};

const logoOnlyCompanies = ["Liberty Mutual", "Optum"];

export function ExperienceTimeline() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  return (
    <div>
      <h3 className="text-sm font-semibold tracking-widest text-gray-400 dark:text-gray-300 uppercase mb-4">
        Experience
      </h3>
      <div className="relative">
        {/* Horizontal line — year 16px + gap 4px + dot-center 8px = 28px */}
        <div className="absolute top-7 left-0 right-0 h-px bg-gray-300 dark:bg-gray-600" />
        {/* Arrow at end of line */}
        <div className="absolute top-[23px] right-0 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-gray-300 dark:border-l-gray-600" />

        {/* Entries */}
        <div className="flex justify-between">
          {experiences.map((exp, index) => {
            const colors = colorClasses[exp.color];
            const isHovered = hoveredExp === index;
            const isLogoOnly = logoOnlyCompanies.includes(exp.company);
            const isFirst = index === 0;
            const isLast = index === experiences.length - 1;
            const popoverAlign = isFirst
              ? "left-0"
              : isLast
                ? "right-0"
                : "left-1/2 -translate-x-1/2";
            const tailAlign = isFirst
              ? "left-10"
              : isLast
                ? "right-10"
                : "left-1/2 -translate-x-1/2";

            return (
              <div
                key={index}
                className="flex flex-col items-center gap-1 relative w-28"
                onMouseEnter={() => setHoveredExp(index)}
                onMouseLeave={() => setHoveredExp(null)}
              >
                {/* Year */}
                <span className="text-xs text-gray-400 dark:text-gray-300">{exp.year}</span>

                {/* Dot */}
                <button
                  className={`${isLast ? "w-6 h-6 animate-pulse -mt-1" : "w-4 h-4"} rounded-full ${colors.bg} relative z-10 hover:scale-125 transition-transform ring-2 ring-white dark:ring-gray-900 ${
                    isHovered ? `ring-offset-1 ${colors.ring}` : ""
                  }`}
                  aria-label={`${exp.title} at ${exp.company}`}
                />

                {/* Title — centered */}
                <span
                  className={`text-center ${colors.text} ${colors.darkText} mt-1 w-full leading-tight ${isLast ? "text-sm font-bold" : "text-xs font-medium"}`}
                >
                  {exp.title}
                </span>

                {/* Company (left) + Logo (right) */}
                <div
                  className={`flex items-center w-full mt-1 ${isLogoOnly ? "justify-center" : "justify-between"}`}
                >
                  {!isLogoOnly && (
                    <span className="text-xs text-gray-400 dark:text-gray-300 leading-tight">
                      {exp.company}
                    </span>
                  )}
                  {companyLogos[exp.company] && (
                    <img
                      src={companyLogos[exp.company]}
                      alt={exp.company}
                      className={`rounded object-contain ${isLogoOnly ? "h-12 w-auto" : "w-12 h-12"} ${exp.invertLogoInDark ? "dark:invert" : ""}`}
                    />
                  )}
                </div>

                {/* Popover */}
                {isHovered && (
                  <div
                    className={`absolute bottom-full mb-2 z-50 w-72 ${popoverAlign}`}
                  >
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl p-3">
                      {/* Arrow tail pointing down toward dot */}
                      <div
                        className={`absolute -bottom-[6px] w-3 h-3 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 rotate-45 ${tailAlign}`}
                      />
                      {exp.popoverImage && (
                        <img
                          src={exp.popoverImage}
                          alt={exp.company}
                          className="w-full object-contain rounded-lg mb-2"
                        />
                      )}
                      <p
                        className={`text-xs font-semibold ${colors.text} ${colors.darkText} mb-1`}
                      >
                        {exp.title} · {exp.company}
                      </p>
                      <ul className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed list-disc list-inside space-y-1">
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
