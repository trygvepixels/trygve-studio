import BlogListClient from "./BlogListClient";

export const metadata = {
    title: "Blog & Insights | Architecture & Design Trends | Trygve Studio",
    description:
        "Insights on architecture design, interior trends, construction costs in Lucknow, and project management from the experts at Trygve Studio.",
    alternates: {
        canonical: "https://trygvestudio.com/blogs",
    },
};

export default function BlogsPage() {
    return <BlogListClient />;
}
