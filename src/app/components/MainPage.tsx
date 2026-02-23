import { PROFESSIONAL_START_DATE } from "../constants/constants";
import { getYearsOfExperience } from "../utils";
import { SkillsGrid } from "./SkillsGrid";
import { ExperienceTimeline } from "./ExperienceTimeline";
import profilePic from "../../images/profile_pic.jpg";

export function MainPage() {
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
              <p className="text-base text-gray-500 mt-1">
                UMass Amherst · B.S. Mathematics & Data Science · 2023
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

        {/* Experience Timeline */}
        <ExperienceTimeline />
      </div>
    </section>
  );
}
