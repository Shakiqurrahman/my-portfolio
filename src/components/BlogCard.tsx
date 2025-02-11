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
      <Image
        src={
          "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        alt="thumbnail"
        width={400}
        height={300}
        className="rounded-t-xl w-full"
      />
      <h2 className="text-xl font-semibold my-2">{blogData.title}</h2>
      <p className="line-clamp-2 mb-2 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum
        voluptatem velit unde consequatur enim dolorum magni ea quaerat?
        Accusantium.
      </p>
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
