const MySkills = () => {
  const skills = [
    { name: "JavaScript", level: 90, color: "bg-yellow-400" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
    { name: "React", level: 90, color: "bg-blue-400" },
    { name: "Node.js", level: 80, color: "bg-green-800" },
    { name: "Express js", level: 95, color: "bg-orange-500" },
    { name: "MongoDB", level: 90, color: "bg-green-600" },
    { name: "Next js", level: 75, color: "bg-gray-900" },
    { name: "Deployment ( VPS )", level: 95, color: "bg-blue-700" },
  ];
  return (
    <section className="max-width mb-0 md:mb-32">
      <h2 className="text-3xl font-bold text-center mb-16">My Skills</h2>
      <div className="grid md:grid-cols-2 gap-y-3 gap-x-8 md:gap-x-16">
        {skills?.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1.5">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-sm text-gray-300">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`${skill.color} h-3 rounded-full bg-opacity-70`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
