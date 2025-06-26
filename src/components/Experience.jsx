
import { FaChalkboardTeacher, FaUsers, FaIndustry, } from "react-icons/fa";

const experiences = [
  {
    title: "Software Development Technical Trainer",
    company: "Teach2Give",
    icon: <FaChalkboardTeacher className="text-4xl text-orange-400 mb-2" />,
    color: "border-orange-400",
    date: "May 2024 – Present",
    description:
      "As a Software Development Technical Trainer at Teach2Give, I focus on equipping students with the knowledge and skills necessary to succeed in the tech world. My responsibilities include delivering practical instruction and offering hands-on guidance to help learners grasp key concepts in software development.",
  },
  {
    title: "Software Engineering Industrial Attachee",
    company: "Teach2Give",
    icon: <FaIndustry className="text-4xl text-red-400 mb-2" />,
    color: "border-red-400",
    date: "May 2024 – July 2024",
    description:
      "Participated in an intensive, hands-on software engineering training program focused on modern web development technologies and practices. Engaged in collaborative projects, demonstrating strong teamwork and problem-solving abilities.",
  },
  {
    title: "Community Co-Lead",
    company: "Kenya Data Platform User Group",
    icon: <FaUsers className="text-4xl text-yellow-400 mb-2" />,
    color: "border-yellow-400",
    date: "October 2022 – Present",
    description:
      "I help drive learning and engagement around data and AI technologies. Our focus lies in Data Platforms, while also exploring Developer Technologies infused with AI advancements. I actively contribute to organizing events, sharing insights, and creating technical course content tailored for our growing audience.",
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
        <div className="text-primary text-5xl font-bold items-center text-center">
          🧑‍💻 Experience 🧑‍💻
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`w-80 bg-neutral text-neutral-content rounded-xl shadow-xl border-t-4 ${exp.color} transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col items-center p-6`}
          >
            {exp.icon}
            <h2 className="font-semibold text-xl mt-2 mb-1 text-orange-500">{exp.title}</h2>
            <h3 className="text-blue-300 font-medium mb-2 uppercase">{exp.company}</h3>
            <p className="text-white text-sm italic mb-4">{exp.description}</p>
            <span className="bg-blue-900/30 text-blue-200 px-4 py-1 rounded-full text-xs font-semibold">
              {exp.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;