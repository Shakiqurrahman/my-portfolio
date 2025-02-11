import ProjectCard, { IProjectData } from "@/components/ProjectCard";
import { config } from "@/config/config";

const ProjectPage = async () => {
  const data = await fetch(`${config.apiUrl}/projects`, {
    cache: "no-store",
  });
  const response = await data.json();

  const projectsData = response?.data;
  return (
    <section className="max-width mt-12 mb-20">
      <h2 className="text-3xl font-bold text-center mb-8">All Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData?.map((project: IProjectData) => (
          <ProjectCard key={project._id} projectData={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
