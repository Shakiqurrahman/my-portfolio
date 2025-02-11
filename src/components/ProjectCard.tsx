import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { Button } from "./ui/button";

export interface IProjectData {
  _id: string;
  name: string;
  description: string;
  githubLink: string;
  liveLink: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}
const ProjectCard = ({ projectData }: { projectData: IProjectData }) => {
  return (
    <div className="p-4 bg-neutral-900 rounded-xl">
      {projectData.thumbnail && (
        <Image
          src={projectData.thumbnail}
          alt="thumbnail"
          width={400}
          height={500}
          className="rounded-t-xl w-full h-[200px]"
        />
      )}
      <h2 className="text-xl font-semibold my-2 line-clamp-2">
        {projectData.name}
      </h2>
      <p className="line-clamp-2 mb-2 text-gray-300">
        {projectData.description}
      </p>
      <div className="flex gap-3 text-sm text-blue-400">
        <Link
          href={projectData.githubLink}
          className="flex items-center gap-1"
          target="_blank"
        >
          <FaGithub />
          Github
        </Link>
        <Link
          href={projectData.liveLink}
          className="flex items-center gap-1"
          target="_blank"
        >
          <FiLink />
          Live Link
        </Link>
      </div>
      <Link href={`/projects/${projectData._id}`}>
        <Button className="mt-4" variant="gray" size="lg">
          View Details
        </Button>
      </Link>
    </div>
  );
};

export default ProjectCard;
