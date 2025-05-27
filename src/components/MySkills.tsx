import {
  SiDigitalocean,
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";

const MySkills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-3xl" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 text-3xl" />,
    },
    { name: "Git", icon: <SiGit className="text-red-600 text-3xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-blue-400 text-3xl" />,
    },
    { name: "React", icon: <SiReact className="text-sky-400 text-3xl" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-100 text-3xl" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-700 text-3xl" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-orange-500 text-3xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-3xl" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-800 text-3xl" />,
    },
    { name: "Prisma", icon: <SiPrisma className="text-gray-100 text-3xl" /> },
    { name: "Zod", icon: <SiZod className="text-purple-600 text-3xl" /> },
    {
      name: "React Hook Form",
      icon: <SiReacthookform className="text-pink-500 text-3xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
    },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-3xl" /> },

    { name: "Figma", icon: <SiFigma className="text-pink-600 text-3xl" /> },
    {
      name: "Deployment (VPS)",
      icon: <SiDigitalocean className="text-blue-700 text-3xl" />,
    },
  ];

  return (
    <section className="max-width mb-0 md:mb-32">
      <h2 className="text-3xl font-bold text-center mb-16">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            {skill.icon}
            <span className="text-sm font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
