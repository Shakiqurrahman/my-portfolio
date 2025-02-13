"use server";

import { BlogFormData } from "@/app/(withDashboard)/dashboard/add-blog/page";
import { config } from "@/config/config";

export const addBlog = async (data: BlogFormData) => {
  const res = await fetch(`${config.apiUrl}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const blogsInfo = await res.json();
  return blogsInfo;
};

export const updateBlog = async (id: string, data: Partial<BlogFormData>) => {
  const res = await fetch(`${config.apiUrl}/blogs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const blogsInfo = await res.json();
  return blogsInfo;
};

export const deleteBlog = async (id: string) => {
  await fetch(`${config.apiUrl}/blogs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  return;
};
