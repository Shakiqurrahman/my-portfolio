"use server";

import { config } from "@/config/config";

export const getProjectById = async (id: string) => {
  const res = await fetch(`${config.apiUrl}/projects/${id}`);
  const projectInfo = await res.json();
  return projectInfo?.data;
};
