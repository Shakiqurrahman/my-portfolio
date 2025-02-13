"use client";
import { deleteProject } from "@/utils/actions/projectActions";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
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
const ProjectCard = ({
  projectData,
  fromDashboard,
}: {
  projectData: IProjectData;
  fromDashboard?: boolean;
}) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteProject(id);

      toast.success("Project deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete project. Please try again later.");
    }
  };
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
      {fromDashboard ? (
        <div className="flex gap-4 justify-between">
          <Link
            className="w-full"
            href={`/dashboard/update-project/${projectData._id}`}
          >
            <Button className="mt-4 w-full" variant="gray" size="lg">
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => handleDelete(projectData._id)}
            type="button"
            className="mt-4 w-full"
            variant="gray"
            size="lg"
          >
            Delete
          </Button>
        </div>
      ) : (
        <Link href={`/projects/${projectData._id}`}>
          <Button className="mt-4" variant="gray" size="lg">
            View Details
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
