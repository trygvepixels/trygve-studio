"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  IndianRupee,
  Home,
  DraftingCompass,
} from "lucide-react";
import TrustReviewedBlock from "@/components/TrustReviewedBlock";

// 2026 Lucknow Market Pricing Data
const PRICING_CONFIG = {
  services: {
    architecture: {
      name: "Architecture Design Only",
      description: "Plans, 3D Elevations, Structural Drawings",
      icon: DraftingCompass,
    },
    turnkey: {
      name: "Complete Turnkey Construction",
      description: "Design + Materials + End-to-End Construction",
      icon: Building2,
    },
    interior: {
      name: "Interior Design & Execution",
      description: "Custom woodwork, furniture, lighting",
      icon: Home,
    },
  },
  packages: {
    turnkey: {
      standard: {
        name: "Standard",
        pricePerSqft: 1650,
        desc: "Reliable quality, vitrified tiles, standard electricals.",
      },
      premium: {
        name: "Premium",
        pricePerSqft: 2150,
        desc: "High-quality finishes, modular kitchen, premium fixtures.",
      },
      luxury: {
        name: "Luxury",
        pricePerSqft: 2850,
        desc: "Italian marble, smart home integration, signature facade.",
      },
    },
    architecture: {
      standard: {
        name: "Essential Design",
        pricePerSqft: 45,
        desc: "Floor plans, 2D elevations, and basic structural drawings.",
      },
      premium: {
        name: "Comprehensive 3D + MEP",
        pricePerSqft: 85,
        desc: "Detailed 3D renders, VR walk-through, complete MEP drawings.",
      },
    },
    interior: {
      standard: {
        name: "Standard",
        pricePerSqft: 1450,
        desc: "Premium laminate finish, standard hardware, basic lighting.",
      },
      premium: {
        name: "Premium",
        pricePerSqft: 1850,
        desc: "Acrylic/PU finish, Hettich/Hafele hardware, designer lighting.",
      },
      luxury: {
        name: "Luxury",
        pricePerSqft: 2650,
        desc: "Veneer, imported hardware, smart automation, dedicated designer.",
      },
    },
  },
  regions: {
    gomtiNagar: { name: "Gomti Nagar / Extension", multiplier: 1.05 },
    hazratganj: { name: "Hazratganj / Mahanagar", multiplier: 1.05 },
    amarShaheed: { name: "Amar Shaheed Path Area", multiplier: 1.0 },
    other: { name: "Other Lucknow Areas", multiplier: 1.0 },
  },
  addons: {
    lda: {
      name: "LDA Map Approval Assistance",
      price: 35000,
      desc: "Navigate the complex 2026 bylaws smoothly.",
    },
    soil: {
      name: "Soil Testing & Topography",
      price: 1200,
      desc: "Essential for robust structural design.",
    },
    walkthrough: {
      name: "Premium VR 3D Walkthrough",
      price: 15000,
      desc: "Experience your unbuilt home in VR.",
    },
  },
};

export default function PriceCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    serviceType: "",
    region: "",
    area: "",
    package: "",
    addons: [],
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };

      if (field === "serviceType" && prev.serviceType !== value) {
        updated.package = "";
      }

      return updated;
    });
  };

  const toggleAddon = (addon) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(addon)
        ? prev.addons.filter((a) => a !== addon)
        : [...prev.addons, addon],
    }));
  };

  const calculatePrice = () => {
    let total = 0;
    const { serviceType, area, package: pkg, addons, region } = formData;

    if (!area || !serviceType || !pkg) return 0;

    const sqftArea = parseInt(area) || 0;
    const basePrice =
      PRICING_CONFIG.packages[serviceType]?.[pkg]?.pricePerSqft || 0;

    total = sqftArea * basePrice;

    const multiplier = PRICING_CONFIG.regions[region]?.multiplier || 1.0;
    total = total * multiplier;

    addons.forEach((addon) => {
      total += PRICING_CONFIG.addons[addon]?.price || 0;
    });

    return Math.round(total);
  };

  const totalPrice = calculatePrice();

  const steps = [
    {
      title: "Project Basics",
      component: (
        <Step1Basics formData={formData} updateFormData={updateFormData} />
      ),
    },
    {
      title: "Quality & Finish",
      component: (
        <Step2Package formData={formData} updateFormData={updateFormData} />
      ),
    },
    {
      title: "Add-ons",
      component: (
        <Step3Addons formData={formData} toggleAddon={toggleAddon} />
      ),
    },
    {
      title: "Get Your Estimate",
      component: (
        <Step4Contact formData={formData} updateFormData={updateFormData} />
      ),
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.serviceType && formData.region && formData.area;
      case 1:
        return formData.package;
      case 2:
        return true;
      case 3:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    const payload = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      location:
        PRICING_CONFIG.regions[formData.region]?.name || "Price Calculator",
      projectType:
        PRICING_CONFIG.services[formData.serviceType]?.name ||
        "Price Calculator Inquiry",
      budget: totalPrice ? `Rs ${totalPrice.toLocaleString("en-IN")}` : "",
      timeline: "Calculator Estimate Request",
      message: [
        `Package: ${
          PRICING_CONFIG.packages[formData.serviceType]?.[formData.package]
            ?.name || "N/A"
        }`,
        `Area: ${formData.area || "N/A"} sq.ft`,
        `Add-ons: ${
          formData.addons.length
            ? formData.addons
                .map((addon) => PRICING_CONFIG.addons[addon]?.name || addon)
                .join(", ")
            : "None"
        }`,
      ].join(" | "),
      estimatedPrice: totalPrice,
      page:
        typeof window !== "undefined"
          ? window.location.pathname
          : "/price-calculator",
      website: formData.website,
      submissionType: "price-calculator",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Failed to submit");
      }

      alert(
        `Thank you! Your estimated budget is ₹${totalPrice.toLocaleString(
          "en-IN"
        )}. A Trygve Studio architect will contact you shortly.`
      );
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC] px-3 pt-32 pb-10 font-sans text-gray-900 sm:px-4 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-7 text-center md:mb-12">
          <h1 className="mb-3 text-2xl leading-tight tracking-tight md:mb-4 md:text-4xl">
            Lucknow Construction Cost Calculator 2026
          </h1>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-gray-600 md:text-lg">
            Estimate your home construction, architecture, or interior budget in
            Lucknow using current 2026 rates, finish levels, and project scope.
          </p>
        </div>

        {/* Form Container */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:flex-row">
          {/* Main Form Area */}
          <div className="w-full p-4 sm:p-6 md:p-10 lg:w-2/3 lg:p-12">
            {/* Step Indicators */}
            <div className="relative mb-7 flex items-center justify-between md:mb-12">
              <div className="absolute left-0 top-1/2 -z-10 h-0.5 w-full -translate-y-1/2 bg-gray-100" />

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white px-1.5 sm:px-2"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all md:h-10 md:w-10 md:text-base ${
                      index <= currentStep
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {index < currentStep ? <Check size={16} /> : index + 1}
                  </div>

                  <span
                    className={`mt-3 hidden text-xs font-medium uppercase tracking-wide sm:block ${
                      index <= currentStep ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="min-h-[260px] md:min-h-[360px]"
              >
                {steps[currentStep].component}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between gap-3 border-t border-gray-100 pt-5 md:mt-12 md:pt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:text-black disabled:opacity-0 md:gap-2 md:px-6 md:py-3 md:text-base"
              >
                <ArrowLeft size={16} />
                Back
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="flex items-center gap-1.5 bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50 md:gap-2 md:px-8 md:py-3 md:text-base"
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="flex items-center gap-1.5 bg-[#234D7E] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1a3a60] disabled:cursor-not-allowed disabled:opacity-50 md:gap-2 md:px-8 md:py-3 md:text-base"
                >
                  <Check size={16} />
                  View Final Estimate
                </button>
              )}
            </div>
          </div>

          {/* Real-time Summary Sidebar */}
          <div className="flex w-full flex-col justify-between border-t border-gray-100 bg-gray-50 p-4 sm:p-6 md:p-10 lg:w-1/3 lg:border-l lg:border-t-0 lg:p-12">
            <div>
              <h3 className="mb-5 border-b border-gray-200 pb-3 text-base font-medium md:mb-8 md:pb-4 md:text-lg">
                Your Project Outline
              </h3>

              <div className="space-y-4 text-sm md:space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="font-light text-gray-500">
                    Service Type
                  </span>
                  <span className="font-medium">
                    {PRICING_CONFIG.services[formData.serviceType]?.name ||
                      "Not selected"}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-light text-gray-500">
                    Location / Area
                  </span>
                  <span className="font-medium">
                    {PRICING_CONFIG.regions[formData.region]?.name ||
                      "Not selected"}
                    {formData.area ? ` • ${formData.area} sq.ft` : ""}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-light text-gray-500">
                    Quality Tier
                  </span>
                  <span className="font-medium">
                    {formData.package && formData.serviceType
                      ? PRICING_CONFIG.packages[formData.serviceType][
                          formData.package
                        ]?.name
                      : "Not selected"}
                  </span>
                </div>

                {formData.addons.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <span className="font-light text-gray-500">
                      Additional Services
                    </span>
                    <ul className="space-y-1 font-medium">
                      {formData.addons.map((addon) => (
                        <li key={addon} className="flex gap-2">
                          <Check size={15} className="mt-0.5 text-[#234D7E]" />
                          {PRICING_CONFIG.addons[addon].name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-5 md:mt-12 md:pt-8">
              <span className="mb-2 block text-sm font-light text-gray-500">
                Estimated Investment
              </span>

              <div className="flex items-center text-2xl font-light tracking-tight md:text-4xl">
                <IndianRupee
                  size={24}
                  className="mr-1 text-gray-400 md:h-8 md:w-8"
                />
                {totalPrice > 0 ? totalPrice.toLocaleString("en-IN") : "---"}
              </div>

              <p className="mt-3 text-xs leading-relaxed text-gray-400 md:mt-4">
                *This is a baseline estimate based on prevailing 2026 rates in
                Lucknow. Final cost depends on specific material selections and
                site conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl md:mt-10">
          <TrustReviewedBlock
            reviewedBy="Ar. Harsh Vardhan"
            reviewerRole="Lead Architect, Trygve Studio"
            reviewedOn="May 2026"
            note="This calculator is an early planning tool based on current Lucknow market observations and internal project ranges. It should not be treated as a final commercial quote."
          />
        </div>

        {/* Trust Signals */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-center text-xs text-gray-500 md:mt-12 md:gap-8 md:text-sm">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-green-600" />
            Transparent 2026 Pricing
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-green-600" />
            Trusted for 200+ Projects
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-green-600" />
            Lucknow Local Experts
          </span>
        </div>

        {/* GEO Semantic Pricing Data block */}
        <section className="mx-auto mt-10 max-w-4xl rounded-xl border border-gray-200 bg-white p-4 sm:p-5 md:mt-20 md:p-8">
          <h2 className="mb-4 text-xl font-medium md:mb-6 md:text-2xl">
            Standard Pricing Index (2026 Estimate)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="px-3 py-2.5 font-normal md:px-4 md:py-3">
                    Service Category
                  </th>
                  <th className="px-3 py-2.5 font-normal md:px-4 md:py-3">
                    Package Tier
                  </th>
                  <th className="px-3 py-2.5 font-normal md:px-4 md:py-3">
                    Base Rate (per sq.ft)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2.5 md:px-4 md:py-3">
                    Turnkey Construction
                  </td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3">Standard</td>
                  <td className="px-3 py-2.5 font-medium md:px-4 md:py-3">
                    ₹1,550
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2.5 md:px-4 md:py-3">
                    Turnkey Construction
                  </td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3">Premium</td>
                  <td className="px-3 py-2.5 font-medium md:px-4 md:py-3">
                    ₹1,950
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2.5 md:px-4 md:py-3">
                    Turnkey Construction
                  </td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3">Luxury</td>
                  <td className="px-3 py-2.5 font-medium md:px-4 md:py-3">
                    ₹2,650
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2.5 md:px-4 md:py-3">
                    Interior Design
                  </td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3">Standard</td>
                  <td className="px-3 py-2.5 font-medium md:px-4 md:py-3">
                    ₹1,250
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2.5 md:px-4 md:py-3">
                    Interior Design
                  </td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3">Premium</td>
                  <td className="px-3 py-2.5 font-medium md:px-4 md:py-3">
                    ₹1,650
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2.5 md:px-4 md:py-3">
                    Interior Design
                  </td>
                  <td className="px-3 py-2.5 md:px-4 md:py-3">Luxury</td>
                  <td className="px-3 py-2.5 font-medium md:px-4 md:py-3">
                    ₹2,350
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-gray-400">
            *Pricing data provided for Trygve Studio&apos;s Lucknow operations.
            Actual project costs may vary based on specific geographical and
            material requirements.
          </p>
        </section>

        <section className="mx-auto mt-6 max-w-4xl rounded-xl border border-gray-200 bg-white p-4 sm:p-5 md:mt-10 md:p-8">
          <h2 className="mb-3 text-xl font-medium md:mb-4 md:text-2xl">
            Methodology & Source Notes
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-gray-600 md:space-y-4 md:text-base">
            <p>
              The rates shown here are derived from internal project planning
              ranges, current material and labour assumptions, and
              locality-specific execution experience in Lucknow.
            </p>
            <p>
              Final cost can change based on structural system, site condition,
              facade complexity, material brands, finish level, regulatory scope
              and delivery timeline.
            </p>
            <p>
              For a final estimate, we recommend a consultation, site review and
              scope discussion before any commercial commitment is made.
            </p>
          </div>
        </section>

        {/* SEO Injection */}
        <div className="mt-10 border-t border-gray-200 pt-8 md:mt-20 md:pt-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-2xl font-light leading-tight text-gray-900 md:mb-6 md:text-3xl">
              Construction Cost per sq ft in Lucknow (2026 Guide)
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-gray-600 md:mb-8 md:text-base">
              If you are researching the{" "}
              <strong>construction rate in Lucknow</strong>, it&apos;s
              important to understand that costs vary significantly based on
              material quality and geographical challenges (e.g., Gomti
              Nagar&apos;s soil requirements). For a complete turnkey project in
              2026, the average construction cost in Lucknow ranges from ₹1,650
              to ₹2,850 per sq. ft.
            </p>

            <div className="mb-6 overflow-x-auto md:mb-8">
              <table className="w-full min-w-[620px] border-collapse text-left text-xs md:text-sm">
                <thead>
                  <tr>
                    <th className="border-b-2 border-gray-200 p-3 font-medium text-gray-900 md:p-4">
                      Construction Class
                    </th>
                    <th className="border-b-2 border-gray-200 p-3 font-medium text-gray-900 md:p-4">
                      Cost per Sq. Ft.
                    </th>
                    <th className="border-b-2 border-gray-200 p-3 font-medium text-gray-900 md:p-4">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="p-3 md:p-4">C-Class (Standard)</td>
                    <td className="p-3 font-medium md:p-4">
                      ₹1,650 - ₹1,850
                    </td>
                    <td className="p-3 md:p-4">
                      Investment properties, basic rentals
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 md:p-4">B-Class (Premium)</td>
                    <td className="p-3 font-medium md:p-4">
                      ₹2,150 - ₹2,350
                    </td>
                    <td className="p-3 md:p-4">
                      Personal homes, modern apartments
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 md:p-4">A-Class (Luxury)</td>
                    <td className="p-3 font-medium md:p-4">₹2,850+</td>
                    <td className="p-3 md:p-4">
                      High-end villas, smart homes in Ansal/Gomti Nagar
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-3 text-lg font-medium text-gray-900 md:mb-4 md:text-xl">
              Why use our House Construction Cost Calculator?
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-gray-600 md:text-base">
              Unlike generic online estimators, our{" "}
              <strong>building construction cost calculator</strong> is
              calibrated specifically for the Lucknow market. It factors in
              current (2026) raw material rates in Uttar Pradesh—including
              cement, steel, and LDA approval margins—giving you the most
              precise <strong>home construction cost in Lucknow</strong> before
              you even speak to an architect.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mx-auto mt-10 max-w-4xl md:mt-20">
          <h2 className="mb-5 text-2xl font-light leading-tight text-gray-900 md:mb-8 md:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 md:space-y-6">
            <details className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-4 md:p-6">
              <summary className="flex items-center justify-between gap-4 text-sm font-medium text-gray-900 md:text-base">
                What is the house construction cost per sq ft in Lucknow in
                2026?
                <span className="shrink-0 text-xl text-gray-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:mt-4 md:text-base">
                In 2026, the average house construction cost in Lucknow ranges
                from ₹1,650 to ₹2,850 per square foot for turnkey projects.
                Standard construction starts at ₹1,650/sq ft with vitrified
                tiles and basic fixtures. Premium construction with modular
                kitchens costs ₹2,150/sq ft. Luxury construction with Italian
                marble and smart home integration costs ₹2,850+ per sq ft.
                These rates include materials, labour, and basic approvals for
                the Lucknow market.
              </p>
            </details>

            <details className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-4 md:p-6">
              <summary className="flex items-center justify-between gap-4 text-sm font-medium text-gray-900 md:text-base">
                What is the average construction rate in Lucknow?
                <span className="shrink-0 text-xl text-gray-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:mt-4 md:text-base">
                The average construction rate in Lucknow for a residential
                project in 2026 is approximately ₹2,150 per square foot (premium
                tier). This includes structural work, finishing, plumbing,
                electrical, and interior woodwork. Premium localities like Gomti
                Nagar and Hazratganj may cost 5% more due to logistics and soil
                conditions. For architecture-only services (design drawings
                without construction), rates start at ₹45/sq ft.
              </p>
            </details>

            <details className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-4 md:p-6">
              <summary className="flex items-center justify-between gap-4 text-sm font-medium text-gray-900 md:text-base">
                How much do architects charge in Lucknow?
                <span className="shrink-0 text-xl text-gray-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:mt-4 md:text-base">
                Architects in Lucknow typically charge between ₹45 and ₹85 per
                square foot for design services. The Essential Design package
                (floor plans, 2D elevations, structural drawings) costs ₹45/sq
                ft. The Comprehensive 3D + MEP package (detailed 3D renders, VR
                walkthrough, complete MEP drawings) costs ₹85/sq ft. For a 2,000
                sq ft home, architecture fees would range from ₹90,000 to
                ₹1,70,000. Many firms, including Trygve Studio, offer free
                initial consultations.
              </p>
            </details>

            <details className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-4 md:p-6">
              <summary className="flex items-center justify-between gap-4 text-sm font-medium text-gray-900 md:text-base">
                What is turnkey construction cost in Lucknow?
                <span className="shrink-0 text-xl text-gray-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:mt-4 md:text-base">
                Turnkey construction in Lucknow costs between ₹1,650 and ₹2,850
                per square foot in 2026. A turnkey project includes everything
                from architectural design and structural engineering to material
                procurement, construction, interior work, and LDA approvals —
                you get a ready-to-move-in home. For a 2,000 sq ft home, the
                total turnkey cost ranges from ₹33 lakhs (standard) to ₹57 lakhs
                (luxury).
              </p>
            </details>

            <details className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-4 md:p-6">
              <summary className="flex items-center justify-between gap-4 text-sm font-medium text-gray-900 md:text-base">
                Is construction cheaper in outer Lucknow areas?
                <span className="shrink-0 text-xl text-gray-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 md:mt-4 md:text-base">
                Yes, construction costs in outer Lucknow areas like Amar Shaheed
                Path, Kursi Road, and Sultanpur Road are typically 5% lower than
                premium localities such as Gomti Nagar and Hazratganj. This
                difference is due to lower logistics costs, easier material
                access, and simpler soil conditions. However, the core material
                and labour rates remain similar across Lucknow, so the
                difference is modest — roughly ₹80-140 per sq ft on the base
                rate.
              </p>
            </details>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400 md:mt-8 md:text-sm">
            Last updated: April 2026 · Pricing data by Trygve Studio, Lucknow
          </p>
        </section>
      </div>
    </div>
  );
}

// --- Steps Components ---

function Step1Basics({ formData, updateFormData }) {
  return (
    <div className="space-y-5 md:space-y-8">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900 md:mb-4">
          What do you need help with?
        </label>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {Object.entries(PRICING_CONFIG.services).map(([key, service]) => {
            const Icon = service.icon;
            const isSelected = formData.serviceType === key;

            return (
              <button
                key={key}
                onClick={() => updateFormData("serviceType", key)}
                className={`rounded-lg border p-4 text-left transition-all md:p-5 ${
                  isSelected
                    ? "border-black bg-gray-50 ring-1 ring-black"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Icon
                  size={22}
                  className={`mb-2.5 md:mb-3 ${
                    isSelected ? "text-black" : "text-gray-400"
                  }`}
                />
                <h4 className="mb-1 text-sm font-medium md:text-base">
                  {service.name}
                </h4>
                <p className="text-xs leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 md:mb-3">
            Total Area (Sq.Ft)
          </label>
          <input
            type="number"
            value={formData.area}
            onChange={(e) => updateFormData("area", e.target.value)}
            placeholder="e.g. 2000"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm transition-all focus:border-black focus:outline-none focus:ring-1 focus:ring-black md:p-4 md:text-base"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 md:mb-3">
            Project Location
          </label>

          <div className="relative">
            <MapPin
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 md:left-4"
            />
            <select
              value={formData.region}
              onChange={(e) => updateFormData("region", e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 p-3 pl-10 text-sm transition-all focus:border-black focus:outline-none focus:ring-1 focus:ring-black md:p-4 md:pl-12 md:text-base"
            >
              <option value="">Select an area in Lucknow</option>
              {Object.entries(PRICING_CONFIG.regions).map(([key, region]) => (
                <option key={key} value={key}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2Package({ formData, updateFormData }) {
  const packages = PRICING_CONFIG.packages[formData.serviceType];

  if (!packages) {
    return (
      <div className="text-sm italic text-gray-500 md:text-base">
        Please select a service type in the previous step first.
      </div>
    );
  }

  return (
    <div className="space-y-5 md:space-y-6">
      <p className="mb-4 text-sm leading-relaxed text-gray-500 md:mb-6">
        Select the level of finish and detail you require for your{" "}
        {formData.area} sq.ft space.
      </p>

      <div className="grid grid-cols-1 gap-3 md:gap-4">
        {Object.entries(packages).map(([key, pkg]) => {
          const isSelected = formData.package === key;

          return (
            <button
              key={key}
              onClick={() => updateFormData("package", key)}
              className={`flex flex-col justify-between gap-3 rounded-lg border p-4 text-left transition-all md:flex-row md:items-center md:gap-6 md:p-6 ${
                isSelected
                  ? "border-black bg-gray-50 ring-1 ring-black"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div>
                <h4 className="mb-1.5 text-base font-medium md:mb-2 md:text-lg">
                  {pkg.name}
                </h4>
                <p className="text-sm leading-relaxed text-gray-500 md:max-w-md">
                  {pkg.desc}
                </p>
              </div>

              <div className="shrink-0 text-left md:text-right">
                <div className="flex items-center text-lg font-medium tracking-tight md:justify-end md:text-xl">
                  <IndianRupee size={17} />
                  {pkg.pricePerSqft}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  Base Per Sq.Ft
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step3Addons({ formData, toggleAddon }) {
  return (
    <div>
      <p className="mb-4 text-sm leading-relaxed text-gray-500 md:mb-6">
        Popular professional services frequently requested by our Lucknow
        clients.
      </p>

      <div className="grid grid-cols-1 gap-3 md:gap-4">
        {Object.entries(PRICING_CONFIG.addons).map(([key, addon]) => {
          const isSelected = formData.addons.includes(key);

          return (
            <button
              key={key}
              onClick={() => toggleAddon(key)}
              className={`flex flex-col gap-3 rounded-lg border p-4 text-left transition-all sm:flex-row sm:items-center sm:justify-between md:p-5 ${
                isSelected
                  ? "border-[#234D7E] bg-[#234D7E]/5 ring-1 ring-[#234D7E]"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border ${
                    isSelected
                      ? "border-[#234D7E] bg-[#234D7E]"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isSelected && <Check size={14} className="text-white" />}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 md:text-base">
                    {addon.name}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {addon.desc}
                  </p>
                </div>
              </div>

              <div className="shrink-0 pl-9 text-sm font-medium sm:pl-0 md:text-base">
                + ₹{addon.price.toLocaleString("en-IN")}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step4Contact({ formData, updateFormData }) {
  return (
    <div className="max-w-lg space-y-4 md:space-y-6">
      <p className="mb-5 text-sm leading-relaxed text-gray-500 md:mb-8">
        Your estimate is ready. Enter your details below and an architect will
        reach out to discuss the specifics of your plot and vision.
      </p>

      <div>
        <input
          type="text"
          value={formData.website}
          onChange={(e) => updateFormData("website", e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <label className="mb-2 block text-sm font-medium text-gray-900">
          Full Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
          placeholder="e.g. Rahul Verma"
          className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm transition-all focus:border-black focus:outline-none focus:ring-1 focus:ring-black md:p-4 md:text-base"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          placeholder="rahul@example.com"
          className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm transition-all focus:border-black focus:outline-none focus:ring-1 focus:ring-black md:p-4 md:text-base"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData("phone", e.target.value)}
          placeholder="+91 98765 43210"
          className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm transition-all focus:border-black focus:outline-none focus:ring-1 focus:ring-black md:p-4 md:text-base"
        />
      </div>
    </div>
  );
}