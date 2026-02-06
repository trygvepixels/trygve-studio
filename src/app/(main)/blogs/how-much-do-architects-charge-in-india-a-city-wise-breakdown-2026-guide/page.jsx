import BlogDetails from "../[slug]/page";

export const metadata = {
    title: "Architect Charges in India (2026 Guide) - Price Per Sq Ft Breakdown",
    description:
        "How much do architects really charge in India in 2026? Get a detailed city-wise fee breakdown (Lucknow, Delhi, Mumbai), price per sq ft insights, and save 20% on project costs.",
    alternates: {
        canonical: "https://trygvestudio.com/blogs/how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide",
    },
    openGraph: {
        title: "Architect Fees in India 2026: The Complete Price Guide",
        description: "City-wise breakdown of architectural costs, percentage fees, and price per sq ft for residential & commercial projects in India.",
        url: "https://trygvestudio.com/blogs/how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide",
    }
};

export default async function Page() {
    const params = Promise.resolve({
        slug: "how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide"
    });
    return <BlogDetails params={params} />;
}
