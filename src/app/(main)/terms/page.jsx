import React from "react";

export const metadata = {
    title: "Terms and Conditions",
    description: "Terms and Conditions for Trygve Studio - Understanding our service agreements.",
};

const TermsAndConditions = () => {
    return (
        <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
                    Terms and Conditions
                </h1>
                <p className="mt-4 text-zinc-600">
                    Effective Date: January 2026
                </p>
            </div>

            <div className="prose prose-zinc max-w-none">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">1. Agreement to Terms</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        By accessing or using the website of Trygve Studio, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the website or use our services.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">2. Intellectual Property Rights</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        Unless otherwise stated, Trygve Studio and/or its licensors own the intellectual property rights for all material on this website, including all architectural designs, 3D visualizations, and written content. You may access this from Trygve Studio for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">3. Professional Services</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        Any architectural, engineering, or project management services provided by Trygve Studio are subject to separate formal agreements and contracts. The information on this website is for general informational purposes and does not constitute a binding contract for specific project delivery.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">4. User Obligations</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        You agree not to use the website for any purpose that is prohibited by these Terms. You are responsible for all of your activity in connection with the website.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">5. Limitation of Liability</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        In no event shall Trygve Studio, nor its directors, employees, partners, or agents, be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">6. Governing Law</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">7. Contact Information</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <div className="mt-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
                        <p className="font-semibold text-zinc-900">Trygve Studio Private Limited</p>
                        <p className="text-zinc-600">Plot No. 728, Kursi Road, Gudamba, BKT, Lucknow, UP – 226026</p>
                        <p className="text-zinc-600">Email: faisal.saif@trygvestudio.com</p>
                        <p className="text-zinc-600">Phone: +91 95544 40400</p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default TermsAndConditions;
