import { useState } from "react";
import {
  experiences,
  colorClasses,
  PROFESSIONAL_START_DATE,
  skills,
} from "../constants/constants";
import { getYearsOfExperience } from "../utils";
import { SkillsGrid } from "./SkillsGrid";
import profilePic from "../../images/profile_pic.jpg";

export function MainPage() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [pinnedExp, setPinnedExp] = useState<number | null>(null);

  const visibleExp = hoveredExp !== null ? hoveredExp : pinnedExp;

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Hero */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start mb-12">
          {/* Left — photo + name */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={profilePic}
              alt="Yuma Yamamoto"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Yuma Yamamoto
              </h1>
              <p className="text-xl text-gray-600 mt-1">
                Software Developer & AI Engineer
              </p>
              <p className="text-lg text-gray-400 mt-1">
                {getYearsOfExperience(PROFESSIONAL_START_DATE)} years of
                experience
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Self-taught software engineer focused on building web
                applications and integrating AI agents into production systems.
                I started my software journey applying{" "}
                <strong>machine learning</strong> and{" "}
                <strong>statistical analysis</strong> to soccer data, which gave
                me a deep appreciation for data-driven thinking that I carry
                into every project.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today I specialize in React and Python, with a growing focus on
                <strong> AI observability</strong> and{" "}
                <strong>agentic system evaluation</strong>.
              </p>
            </div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Skills
            </h3>
            <SkillsGrid />
          </div>
        </div>

        {/* Overview strip */}
        <div>
          {/* Horizontal Timeline */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Experience
            </h3>
            <div className="relative">
              {/* Horizontal line — sits at center of the dots (year 16px + gap 4px + dot-center 8px = 28px) */}
              <div className="absolute top-7 left-0 right-0 h-px bg-gray-300" />

              {/* Entries */}
              <div className="flex justify-between">
                {experiences.map((exp, index) => {
                  const colors = colorClasses[exp.color];
                  const isVisible = visibleExp === index;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-1 relative"
                    >
                      {/* Year */}
                      <span className="text-xs text-gray-400">{exp.year}</span>

                      {/* Dot */}
                      <button
                        className={`w-4 h-4 rounded-full ${colors.bg} relative z-10 hover:scale-125 transition-transform ring-2 ring-white ${
                          isVisible ? `ring-offset-1 ${colors.ring}` : ""
                        }`}
                        onMouseEnter={() => setHoveredExp(index)}
                        onMouseLeave={() => setHoveredExp(null)}
                        onClick={() =>
                          setPinnedExp((prev) =>
                            prev === index ? null : index,
                          )
                        }
                        aria-label={`${exp.title} at ${exp.company}`}
                      />

                      {/* Title + company */}
                      <span
                        className={`text-xs text-center font-medium ${colors.text} mt-1 max-w-[64px] leading-tight`}
                      >
                        {exp.title}
                      </span>
                      <span className="text-xs text-center text-gray-400 max-w-[64px] leading-tight">
                        {exp.company}
                      </span>
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
        </div>
      </div>
    </section>
  );
}
