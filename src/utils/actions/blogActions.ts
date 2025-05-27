"use server";

import { config } from "@/config/config";

export const getBlogById = async (id: string) => {
  const res = await fetch(`${config.apiUrl}/blogs/${id}`);
  const blogInfo = await res.json();
  return blogInfo?.data;
};
