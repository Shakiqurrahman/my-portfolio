import BlogCard, { IBlogCardData } from "@/components/BlogCard";
import { config } from "@/config/config";

const blogPage = async () => {
  const data = await fetch(`${config.apiUrl}/blogs`, {
    cache: "reload",
  });
  const response = await data.json();

  const blogs = response?.data;
  return (
    <section className="max-width mt-12 mb-20">
      <h2 className="text-3xl font-bold text-center mb-8">All Blogs</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((blog: IBlogCardData) => (
          <BlogCard key={blog.id} blogData={blog} />
        ))}
      </div>
    </section>
  );
};

export default blogPage;
