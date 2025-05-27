import { IProjectData } from "@/components/ProjectCard";
import { config } from "@/config/config";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export const generateStaticParams = async () => {
  const res = await fetch(`${config.apiUrl}/projects`);
  const { data: projects } = await res.json();

  return projects.slice(0, 3).map((project: IProjectData) => ({
    projectId: project.id,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const res = await fetch(`${config.apiUrl}/projects/${projectId}`);
  const { data: projects } = await res.json();

  return {
    title: projects?.name
      ? `${projects?.name} | Shakiqur Rahman`
      : "Shakiqur Rahman",
    description: projects?.description,
  };
}
const projectDetails = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const res = await fetch(`${config.apiUrl}/projects/${projectId}`);
  const { data } = (await res.json()) || {};

  const project: IProjectData = data;
  return (
    <div className="max-width mt-12">
      {project.thumbnail && (
        <Image
          className="rounded-xl w-full sm:w-2/3"
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={800}
        />
      )}
      <h2 className="mt-4 mb-2 text-3xl font-semibold">{project.title}</h2>
      <div className="flex gap-3 text-sm text-blue-400">
        <Link
          href={project.sourceLink || ""}
          className="flex items-center gap-1"
          target="_blank"
        >
          <FaGithub />
          Github
        </Link>
        <Link
          href={project.liveLink || ""}
          className="flex items-center gap-1"
          target="_blank"
        >
          <FiLink />
          Live Link
        </Link>
      </div>
      <p className="mt-4 text-gray-300 text-justify">{project.description}</p>
    </div>
  );
};

export default projectDetails;
