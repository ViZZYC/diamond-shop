"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const correctEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  const correctPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (email !== correctEmail || password !== correctPassword) {
    return { error: "Invalid email or password." };
  }

  // Set secure cookie on successful login
  const cookieStore = await cookies();
  cookieStore.set("admin_session", "secure_admin_token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });

  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}
