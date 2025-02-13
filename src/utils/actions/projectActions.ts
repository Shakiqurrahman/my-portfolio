"use server";

import { IFormData } from "@/app/(withDashboard)/dashboard/add-project/page";
import { config } from "@/config/config";

export const addProject = async (data: IFormData) => {
  const res = await fetch(`${config.apiUrl}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const projectsInfo = await res.json();
  return projectsInfo;
};

export const getProjectById = async (id: string) => {
  const res = await fetch(`${config.apiUrl}/projects/${id}`);
  const projectInfo = await res.json();
  return projectInfo?.data;
};

export const updateProject = async (id: string, data: Partial<IFormData>) => {
  const res = await fetch(`${config.apiUrl}/projects/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const projectInfo = await res.json();
  return projectInfo;
};

export const deleteProject = async (id: string) => {
  await fetch(`${config.apiUrl}/projects/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  return;
};
