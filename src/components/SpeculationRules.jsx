"use client";

import Script from "next/script";

export default function SpeculationRules() {
    return (
        <Script
            id="speculation-rules"
            type="speculationrules"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    prerender: [
                        {
                            source: "list",
                            urls: ["/projects", "/services", "/blogs", "/about-us"],
                        },
                        {
                            source: "document",
                            where: {
                                and: [
                                    { href_matches: "/*" },
                                    { not: { href_matches: ["/api/*", "/_next/*", "/static/*"] } }
                                ]
                            },
                            eagerness: "moderate"
                        }
                    ]
                })
            }}
        />
    );
}
