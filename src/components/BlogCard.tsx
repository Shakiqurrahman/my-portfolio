"use client";

import { deleteBlog } from "@/utils/actions/blogActions";
import { dateFormatter } from "@/utils/dateFormatter";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

export interface IBlogCardData {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  isPublished: boolean;
  authorName: string;
  createdAt: string;
}

const BlogCard = ({
  blogData,
  fromDashboard,
}: {
  fromDashboard?: boolean;
  blogData: IBlogCardData;
}) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteBlog(id);
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete blog. Please try again later.");
    }
  };
  return (
    <div className="p-4 bg-neutral-900 rounded-xl">
      {blogData.thumbnail && (
        <Image
          src={blogData?.thumbnail}
          alt="thumbnail"
          width={400}
          height={300}
          className="rounded-t-xl w-full h-[200px]"
        />
      )}
      <Link href={`/blogs/${blogData._id}`} className="group">
        <h2 className="text-xl font-semibold my-2">{blogData.title}</h2>
        <p className="line-clamp-2 mb-2 text-gray-300 group-hover:underline">
          {blogData.content}
        </p>
      </Link>
      <p className="text-sm text-blue-400">
        Published by : {blogData.authorName} |{" "}
        {dateFormatter(blogData.createdAt)}
      </p>
      {fromDashboard ? (
        <div className="flex gap-4 justify-between">
          <Link
            className="w-full"
            href={`/dashboard/update-blog/${blogData._id}`}
          >
            <Button className="mt-4 w-full" variant="gray" size="lg">
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => handleDelete(blogData._id)}
            type="button"
            className="mt-4 w-full"
            variant="gray"
            size="lg"
          >
            Delete
          </Button>
        </div>
      ) : (
        <Link href={`/blogs/${blogData._id}`}>
          <Button className="mt-4" variant="gray" size="lg">
            Read More
          </Button>
        </Link>
      )}
    </div>
  );
};

export default BlogCard;
