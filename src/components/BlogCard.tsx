"use client";

import { dateFormatter } from "@/utils/dateFormatter";
import Image from "next/image";
import Link from "next/link";

export interface IBlogCardData {
  id: string;
  title: string;
  description: string;
  thumbnail?: string | null;
  createdAt: string;
  updatedAt: string;
}

const BlogCard = ({ blogData }: { blogData: IBlogCardData }) => {
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
      <Link href={`/blogs/${blogData.id}`} className="group">
        <h2 className="text-xl font-semibold my-2">{blogData.title}</h2>
        <p className="line-clamp-2 mb-2 text-gray-300 group-hover:underline">
          {blogData.description}
        </p>
      </Link>
      <p className="text-sm text-blue-400">
        Published by : Shakiqur Rahman |{" "}
        {blogData.createdAt && dateFormatter(blogData.createdAt)}
      </p>
    </div>
  );
};

export default BlogCard;
