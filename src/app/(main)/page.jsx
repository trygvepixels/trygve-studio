import HomeClient from "./HomeClient";

export const metadata = {
    title: "Trygve Studio | Award-Winning Architects in Lucknow (ISO Certified)",
    description:
        "Lucknow's top-rated architecture firm specializing in luxury villas, premium interiors & turnkey construction. 200+ projects delivered. 2026 Edition.",
    alternates: {
        canonical: "https://trygvestudio.com/",
    },
};

export default function HomePage() {
    return <HomeClient />;
}
