import { config } from "@/config/config";
import Link from "next/link";
import ProjectCard, { IProjectData } from "./ProjectCard";
import { Button } from "./ui/button";

const LatestProjects = async () => {
  const data = await fetch(`${config.apiUrl}/projects`, {
    next: {
      revalidate: 30,
    },
  });
  const response = await data.json();

  const projectsData = response?.data;
  return (
    <section className="max-width mt-12 mb-20">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData?.slice(0, 6)?.map((project: IProjectData) => (
          <ProjectCard key={project.id} projectData={project} />
        ))}
      </div>
      <Link href={`/projects`} className="flex justify-center mt-14">
        <Button variant="gray" size="lg">
          See More
        </Button>
      </Link>
    </section>
  );
};

export default LatestProjects;
