// src/app/admin/layout.jsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "dev_secret_change_me");

async function requireAuth() {
  const cookieStore = await cookies();             // <-- await this
  const token = cookieStore.get("token")?.value;   // now safe to read

  if (!token) redirect("/");

  try {
    await jwtVerify(token, secret);
  } catch {
    redirect("/");
  }
}

export default async function AdminLayout({ children }) {
  await requireAuth();
  return <>{children}</>;
}