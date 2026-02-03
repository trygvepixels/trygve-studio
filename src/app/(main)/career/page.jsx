import CareerClient from "./CareerClient";

export const metadata = {
  title: "Career | Join Trygve Studio - Architecture & Design Team",
  description:
    "Join our global architecture and design studio. Explore job opportunities and build the future of premium digital and physical experiences with Trygve Studio.",
  alternates: {
    canonical: "https://trygvestudio.com/career",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CareerPage() {
  return <CareerClient />;
}
