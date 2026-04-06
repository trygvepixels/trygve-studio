import BlogListClient from "./BlogListClient";

export const metadata = {
    title: "Architecture & Design Blog | Latest Trends & Costs | Trygve Studio",
    description:
        "Stay updated with the latest architecture trends, home design tips, and construction cost insights in Lucknow. Expert advice from Trygve Studio designers.",
    alternates: {
        canonical: "https://trygvestudio.com/blogs",
    },
};

export default function BlogsPage() {
    return <BlogListClient />;
}
