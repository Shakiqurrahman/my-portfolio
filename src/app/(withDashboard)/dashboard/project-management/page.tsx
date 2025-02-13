import ProjectCard, { IProjectData } from "@/components/ProjectCard";
import { config } from "@/config/config";
import Link from "next/link";

const ProjectManagement = async () => {
  const data = await fetch(`${config.apiUrl}/projects`, {
    cache: "no-store",
  });
  const response = await data.json();

  const projectsData = response?.data;
  return (
    <div className="px-4 lg:px-10 my-16">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-8">
        <h1 className="text-2xl text-center font-semibold">
          Project Management
        </h1>
        <Link href={"/dashboard/add-project"}>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300">
            Add New Project
          </button>
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 text-white">
        {projectsData?.map((project: IProjectData) => (
          <ProjectCard
            key={project._id}
            projectData={project}
            fromDashboard={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
