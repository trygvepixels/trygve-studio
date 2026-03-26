import BlogDetails from "../[slug]/page";

export const metadata = {
    title: "Architect Ki Fees Kitni Hoti Hai? Honest 2026 Rates (Lucknow Guide)",
    description:
        "Overpaying your architect? Know the real 2026 fees — city-wise breakdown for Lucknow, Delhi & Mumbai. Per sq ft rates, percentage fees & how to negotiate. Free calculator included.",
    alternates: {
        canonical: "https://trygvestudio.com/blogs/how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide",
    },
    openGraph: {
        title: "Architect Fees in India 2026 — Honest City-Wise Rates You Need to Know",
        description: "City-wise breakdown: Lucknow, Delhi, Mumbai. Price per sq ft + percentage fees for residential & commercial. Don't overpay — read this first.",
        url: "https://trygvestudio.com/blogs/how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide",
    }
};

export default async function Page() {
    const params = Promise.resolve({
        slug: "how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide"
    });
    return <BlogDetails params={params} />;
}
