// Force everything under /admin to be dynamic (never statically prerendered)
export const dynamic = "force-dynamic";

// Optional hardening (skip caching/prefetch at build)
export const fetchCache = "force-no-store";
export const revalidate = 0;

import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard | Trygve Studio",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }) {
  return <div className="-mt-20 bg-[#F4F1EC]">{children}</div>;
}
