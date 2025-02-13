import BlogCard, { IBlogCardData } from "@/components/BlogCard";
import { config } from "@/config/config";
import Link from "next/link";

const BlogManagement = async () => {
  const data = await fetch(`${config.apiUrl}/blogs`, {
    cache: "no-store",
  });
  const response = await data.json();

  const blogs = response?.data;
  return (
    <div className="px-4 lg:px-10 my-16">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-8">
        <h1 className="text-2xl text-center font-semibold">Blog Management</h1>
        <Link href={"/dashboard/add-blog"}>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300">
            Add New Blog
          </button>
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 text-white">
        {blogs?.map((blog: IBlogCardData) => (
          <BlogCard key={blog._id} blogData={blog} fromDashboard={true} />
        ))}
      </div>
    </div>
  );
};

export default BlogManagement;
