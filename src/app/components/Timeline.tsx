import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react";

export function Timeline() {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of AI-powered web applications, mentoring junior developers, and architecting scalable solutions using React, Next.js, and Python.",
      image: "https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcxNjAzNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Rocket className="w-6 h-6" />,
      color: "blue",
    },
    {
      year: "2022 - 2024",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description: "Developed and maintained multiple client projects using React, TypeScript, and Python. Implemented AI features using LangChain and PyTorch.",
      image: "https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzE2MDQ4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Briefcase className="w-6 h-6" />,
      color: "purple",
    },
    {
      year: "2021 - 2022",
      title: "Junior Developer",
      company: "StartUp Labs",
      description: "Started my professional journey building responsive web applications. Learned modern development practices and agile methodologies.",
      image: "https://images.unsplash.com/photo-1543058871-74a1d669ba70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMGdyYWR1YXRpb258ZW58MXx8fHwxNzcxNjkxNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Award className="w-6 h-6" />,
      color: "green",
    },
    {
      year: "2019 - 2021",
      title: "Computer Science Degree",
      company: "University Name",
      description: "Graduated with honors. Focused on software engineering, algorithms, and artificial intelligence. Built strong foundation in computer science principles.",
      image: "https://images.unsplash.com/photo-1646759967491-1f291f471134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBkZXNrJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzcxNjA4NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      bgLight: "bg-blue-50",
      border: "border-blue-200",
    },
    purple: {
      bg: "bg-purple-500",
      text: "text-purple-600",
      bgLight: "bg-purple-50",
      border: "border-purple-200",
    },
    green: {
      bg: "bg-green-500",
      text: "text-green-600",
      bgLight: "bg-green-50",
      border: "border-green-200",
    },
    orange: {
      bg: "bg-orange-500",
      text: "text-orange-600",
      bgLight: "bg-orange-50",
      border: "border-orange-200",
    },
  };

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl mb-4 text-center text-gray-900">My Journey</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          A storytelling roadmap of my professional experience and growth
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = colorClasses[exp.color as keyof typeof colorClasses];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className={`inline-block px-4 py-1 rounded-full text-sm mb-2 ${colors.bgLight} ${colors.text}`}>
                      {exp.year}
                    </div>
                    <h3 className="text-2xl mb-1 text-gray-900">{exp.title}</h3>
                    <p className={`text-sm mb-3 ${colors.text}`}>{exp.company}</p>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Center icon */}
                  <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full ${colors.bg} text-white shadow-lg md:mx-auto`}>
                    {exp.icon}
                  </div>

                  {/* Image */}
                  <div className="md:w-5/12">
                    <div className={`rounded-lg overflow-hidden shadow-lg border-2 ${colors.border}`}>
                      <ImageWithFallback
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
