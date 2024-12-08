"use server";
import { redirect } from "next/navigation";

export const bypassInterceptingRoute = (url) => {
  redirect(url);
};
