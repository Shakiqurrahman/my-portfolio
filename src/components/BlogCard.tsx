import { dateFormatter } from "@/utils/dateFormatter";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export interface IBlogCardData {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  isPublished: boolean;
  author: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
}
const BlogCard = ({ blogData }: { blogData: IBlogCardData }) => {
  return (
    <div className="p-4 bg-neutral-900 rounded-xl">
      {blogData.thumbnail && (
        <Image
          src={blogData.thumbnail}
          alt="thumbnail"
          width={400}
          height={300}
          className="rounded-t-xl w-full h-[200px]"
        />
      )}
      <h2 className="text-xl font-semibold my-2">{blogData.title}</h2>
      <p className="line-clamp-2 mb-2 text-gray-300">{blogData.content}</p>
      <p className="text-sm text-blue-400">
        Published by : {blogData.author.name} |{" "}
        {dateFormatter(blogData.createdAt)}
      </p>
      <Link href={`/blogs/${blogData._id}`}>
        <Button className="mt-4" variant="gray" size="lg">
          Read More
        </Button>
      </Link>
    </div>
  );
};

export default BlogCard;
