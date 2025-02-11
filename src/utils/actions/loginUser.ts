"use server";

import { FormValues } from "@/app/login/page";
import { config } from "@/config/config";

export const loginUser = async (data: FormValues) => {
  const res = await fetch(`${config.apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
