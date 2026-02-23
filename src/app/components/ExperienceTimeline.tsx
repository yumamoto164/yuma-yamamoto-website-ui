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
  const [pinnedExp, setPinnedExp] = useState<number | null>(null);

  const visibleExp = hoveredExp !== null ? hoveredExp : pinnedExp;

  return (
    <div>
      <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
        Experience
      </h3>
      <div className="relative">
        {/* Horizontal line — year 16px + gap 4px + dot-center 8px = 28px */}
        <div className="absolute top-7 left-0 right-0 h-px bg-gray-300" />
        {/* Arrow at end of line */}
        <div className="absolute top-[23px] right-0 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-gray-300" />

        {/* Entries */}
        <div className="flex justify-between">
          {experiences.map((exp, index) => {
            const colors = colorClasses[exp.color];
            const isVisible = visibleExp === index;
            const isLogoOnly = logoOnlyCompanies.includes(exp.company);
            const isLast = index === experiences.length - 1;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-1 relative w-28"
              >
                {/* Year */}
                <span className="text-xs text-gray-400">{exp.year}</span>

                {/* Dot */}
                <button
                  className={`${isLast ? "w-6 h-6 animate-pulse -mt-1" : "w-4 h-4"} rounded-full ${colors.bg} relative z-10 hover:scale-125 transition-transform ring-2 ring-white ${
                    isVisible ? `ring-offset-1 ${colors.ring}` : ""
                  }`}
                  onMouseEnter={() => setHoveredExp(index)}
                  onMouseLeave={() => setHoveredExp(null)}
                  onClick={() =>
                    setPinnedExp((prev) => (prev === index ? null : index))
                  }
                  aria-label={`${exp.title} at ${exp.company}`}
                />

                {/* Title — centered */}
                <span
                  className={`text-center ${colors.text} mt-1 w-full leading-tight ${isLast ? "text-sm font-bold" : "text-xs font-medium"}`}
                >
                  {exp.title}
                </span>

                {/* Company (left) + Logo (right) */}
                <div
                  className={`flex items-center w-full mt-1 ${isLogoOnly ? "justify-center" : "justify-between"}`}
                >
                  {!isLogoOnly && (
                    <span className="text-xs text-gray-400 leading-tight">
                      {exp.company}
                    </span>
                  )}
                  {companyLogos[exp.company] && (
                    <img
                      src={companyLogos[exp.company]}
                      alt={exp.company}
                      className={`rounded object-contain ${isLogoOnly ? "h-12 w-auto" : "w-12 h-12"}`}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail card */}
        {visibleExp !== null && (
          <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
            <p
              className={`text-xs font-semibold ${colorClasses[experiences[visibleExp].color].text} mb-1`}
            >
              {experiences[visibleExp].title} ·{" "}
              {experiences[visibleExp].company}
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              {experiences[visibleExp].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
