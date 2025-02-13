import { IBlogCardData } from "@/components/BlogCard";
import { config } from "@/config/config";
import { dateFormatter } from "@/utils/dateFormatter";
import Image from "next/image";

export const generateStaticParams = async () => {
  const res = await fetch(`${config.apiUrl}/blogs`);
  const { data: blogs } = await res.json();

  return blogs.slice(0, 3).map((blog: IBlogCardData) => ({
    blogId: blog._id,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const res = await fetch(`${config.apiUrl}/blogs/${blogId}`);
  const { data: blog } = await res.json();

  return {
    title: blog?.title ? `${blog.title} | Shakiqur Rahman` : "Shakiqur Rahman",
    description: blog?.description,
  };
}

const blogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`${config.apiUrl}/blogs/${blogId}`);
  const { data } = (await res.json()) || {};

  const blog: IBlogCardData = data;
  return (
    <div className="max-width mt-12">
      {blog.thumbnail && (
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          width={600}
          height={800}
          className="rounded-xl w-full sm:w-2/3"
        />
      )}
      <h2 className="mt-4 mb-2 text-3xl font-semibold">{blog.title}</h2>
      <p className="text-sm text-blue-400">
        Published by : {blog.authorName} | {dateFormatter(blog.createdAt)}
      </p>
      <p className="mt-4 text-gray-300 text-justify">{blog.content}</p>
    </div>
  );
};

export default blogDetailsPage;
