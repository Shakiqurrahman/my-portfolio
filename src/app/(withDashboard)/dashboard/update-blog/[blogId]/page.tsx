"use client";
import { getBlogById, updateBlog } from "@/utils/actions/blogActions";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface BlogFormData {
  title?: string;
  content?: string;
  authorName?: string;
  thumbnail?: string;
}

const UpdateBlogPage = () => {
  const router = useRouter();
  const { blogId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    content: "",
    authorName: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (!blogId) return;
    const fetchBlog = async (blogId: string) => {
      setIsLoading(true);
      try {
        const data = await getBlogById(blogId);
        // Update form data with the fetched blog data
        if (data) {
          setFormData({
            title: data.title || "",
            content: data.content || "",
            authorName: data.authorName || "",
            thumbnail: data.thumbnail || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch blog data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog(blogId as string);
  }, [blogId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await updateBlog(blogId as string, formData);
      if (!res) {
        toast.error("Failed to update blog");
        return;
      }
      if (res?.success) {
        toast.success("Blog updated successfully!");
        router.push("/dashboard/blog-management");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      toast.error("Failed to update blog");
    }
  };

  return (
    <section className="px-4 lg:px-10 my-16">
      <h1 className="text-2xl text-center font-semibold">Update Blog</h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="title"
              className="block text-base font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-900 rounded-md p-3 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="authorName"
              className="block text-base font-medium text-gray-700"
            >
              Author Name
            </label>
            <input
              id="authorName"
              name="authorName"
              type="text"
              value={formData.authorName}
              onChange={handleChange}
              className="mt-1 block w-full sm:text-sm border border-gray-900 rounded-md p-3 outline-none"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="thumbnail"
            className="block text-base font-medium text-gray-700"
          >
            Thumbnail URL
          </label>
          <input
            id="thumbnail"
            name="thumbnail"
            type="text"
            value={formData.thumbnail}
            onChange={handleChange}
            className="mt-1 block w-full sm:text-sm border border-gray-900 rounded-md p-3 outline-none"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="content"
            className="block text-base font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="mt-1 block w-full sm:text-sm border border-gray-900 rounded-md p-3 outline-none h-[250px]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 px-8 py-2.5 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Update
        </button>
      </form>
      {isLoading && (
        <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0 z-[99999999] backdrop-blur-sm">
          <AiOutlineLoading3Quarters className="text-5xl animate-spin" />
        </div>
      )}
    </section>
  );
};

export default UpdateBlogPage;
