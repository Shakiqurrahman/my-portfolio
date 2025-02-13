"use server";

import { IContactInfo } from "@/app/(publicLayout)/contact/page";
import { config } from "@/config/config";

export const submitContact = async (data: IContactInfo) => {
  const res = await fetch(`${config.apiUrl}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const messagesInfo = await res.json();
  return messagesInfo;
};
