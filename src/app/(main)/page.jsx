import HomeClient from "./HomeClient";

export const metadata = {
    title: "Trygve Studio - Premium Architecture & Interior Design in Lucknow",
    description:
        "Transform your space with Trygve Studio. Leading architects and interior designers in Lucknow specializing in luxury residential, commercial, and turnkey projects.",
    alternates: {
        canonical: "https://trygvestudio.com/",
    },
};

export default function HomePage() {
    return <HomeClient />;
}
