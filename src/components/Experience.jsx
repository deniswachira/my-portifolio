
import { FaChalkboardTeacher, FaIndustry, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Software Engineer",
    company: "Britam — Nairobi, Kenya",
    icon: <FaBriefcase className="text-4xl text-blue-400 mb-2" />,
    color: "border-blue-400",
    accent: "from-blue-500/20 to-transparent",
    date: "February 2026 - Present",
    highlights: [
      "Delivering 4 enterprise projects across Betalab, GI & BAM units.",
      "Led in-house rebuild of 2 vendor-dependent systems, cutting licensing costs.",
      "Building full-stack features within cross-functional Agile squads.",
    ],
    tech: ["React", "ASP.NET", "Flutter", "REST APIs"],
  },
  {
    title: "Software Development Technical Trainer",
    company: "Teach2Give",
    icon: <FaChalkboardTeacher className="text-4xl text-orange-400 mb-2" />,
    color: "border-orange-400",
    accent: "from-orange-500/20 to-transparent",
    date: "April 2025 - January 2026",
    highlights: [
      "Train students in modern software development practices.",
      "Deliver hands-on instruction and mentorship on real-world projects.",
    ],
    tech: ["JavaScript", "React", "Node.js", "Git"],
  },
  {
    title: "Software Engineering Industrial Attachee",
    company: "Teach2Give",
    icon: <FaIndustry className="text-4xl text-red-400 mb-2" />,
    color: "border-red-400",
    accent: "from-red-500/20 to-transparent",
    date: "May 2024 - July 2024",
    highlights: [
      "Completed intensive training in modern web development.",
      "Collaborated on team projects demonstrating problem-solving skills.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
  // {
  //   title: "Software Engineering Industrial Attachee",
  //   company: "Mungania Tea Factory Limited",
  //   icon: <FaLeaf className="text-4xl text-green-300 mb-2" />,
  //   color: "border-green-300",
  //   date: "July 2022 – August 2022",
  //   description:
  //     "Worked in the office to help build and maintain Mungania’s server systems. Main responsibilities included building and optimizing SQL DB aggregation pipelines for specific queries.",
  // },
];

const Experience = () => {
  return (
    <div className="md:px-10 px-7 my-8" id="experience">
      <hr />
      <div className="md:flex my-7 items-center justify-center">
        <div className="text-primary text-4xl font-bold items-center text-center">
          🧑‍💻 Experience 🧑‍💻
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`relative w-80 bg-neutral text-neutral-content rounded-2xl shadow-xl border-t-4 ${exp.color} overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col p-6`}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${exp.accent} pointer-events-none`} />
            <div className="relative flex flex-col flex-1">
              <div className="flex items-center justify-center">{exp.icon}</div>
              <h2 className="font-semibold text-lg text-center mt-2 text-orange-500">{exp.title}</h2>
              <h3 className="text-blue-300 font-medium text-sm text-center mb-2 uppercase tracking-wide">{exp.company}</h3>
              <span className="self-center bg-blue-900/40 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                {exp.date}
              </span>
              <ul className="text-white/90 text-sm space-y-1.5 mb-4 flex-1">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/10">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium bg-white/5 text-blue-200 px-2 py-0.5 rounded-md border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;