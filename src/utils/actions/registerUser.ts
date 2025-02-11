"use server";

import { UserData } from "@/app/register/page";
import { config } from "@/config/config";

export const registerUser = async (data: UserData) => {
  const res = await fetch(`${config.apiUrl}/auth/register`, {
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
