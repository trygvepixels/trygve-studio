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
  Sparkles
} from "lucide-react";

// 2026 Lucknow Market Pricing Data
const PRICING_CONFIG = {
  services: {
    architecture: { name: "Architecture Design Only", description: "Plans, 3D Elevations, Structural Drawings", icon: DraftingCompass },
    turnkey: { name: "Complete Turnkey Construction", description: "Design + Materials + End-to-End Construction", icon: Building2 },
    interior: { name: "Interior Design & Execution", description: "Custom woodwork, furniture, lighting", icon: Home },
  },
  packages: {
    turnkey: {
      standard: { name: "Standard", pricePerSqft: 1650, desc: "Reliable quality, vitrified tiles, standard electricals." },
      premium: { name: "Premium", pricePerSqft: 2150, desc: "High-quality finishes, modular kitchen, premium fixtures." },
      luxury: { name: "Luxury", pricePerSqft: 2850, desc: "Italian marble, smart home integration, signature facade." }
    },
    architecture: {
      standard: { name: "Essential Design", pricePerSqft: 45, desc: "Floor plans, 2D elevations, and basic structural drawings." },
      premium: { name: "Comprehensive 3D + MEP", pricePerSqft: 85, desc: "Detailed 3D renders, VR walk-through, complete MEP drawings." }
    },
    interior: {
      standard: { name: "Standard", pricePerSqft: 1450, desc: "Premium laminate finish, standard hardware, basic lighting." },
      premium: { name: "Premium", pricePerSqft: 1850, desc: "Acrylic/PU finish, Hettich/Hafele hardware, designer lighting." },
      luxury: { name: "Luxury", pricePerSqft: 2650, desc: "Veneer, imported hardware, smart automation, dedicated designer." }
    }
  },
  regions: {
    gomtiNagar: { name: "Gomti Nagar / Extension", multiplier: 1.05 },
    hazratganj: { name: "Hazratganj / Mahanagar", multiplier: 1.05 },
    amarShaheed: { name: "Amar Shaheed Path Area", multiplier: 1.0 },
    other: { name: "Other Lucknow Areas", multiplier: 1.0 },
  },
  addons: {
    lda: { name: "LDA Map Approval Assistance", price: 35000, desc: "Navigate the complex 2026 bylaws smoothly." },
    soil: { name: "Soil Testing & Topography", price: 1200, desc: "Essential for robust structural design." },
    walkthrough: { name: "Premium VR 3D Walkthrough", price: 15000, desc: "Experience your unbuilt home in VR." },
  }
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
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };

      // Reset package if service type changes because packages are service-dependent
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

  // Calculate total price based on realistic parameters
  const calculatePrice = () => {
    let total = 0;
    const { serviceType, area, package: pkg, addons, region } = formData;

    if (!area || !serviceType || !pkg) return 0;

    const sqftArea = parseInt(area) || 0;

    // Get Base Price per sq ft based on service and package
    const basePrice = PRICING_CONFIG.packages[serviceType]?.[pkg]?.pricePerSqft || 0;
    total = sqftArea * basePrice;

    // Apply Region Multiplier (Logistics/Labor differences in areas)
    const multiplier = PRICING_CONFIG.regions[region]?.multiplier || 1.0;
    total = total * multiplier;

    // Add flat-fee Addons
    addons.forEach((addon) => {
      total += PRICING_CONFIG.addons[addon]?.price || 0;
    });

    return Math.round(total);
  };

  const totalPrice = calculatePrice();

  const nextStep = () => { if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1); };
  const prevStep = () => { if (currentStep > 0) setCurrentStep(currentStep - 1); };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.serviceType && formData.region && formData.area;
      case 1: return formData.package;
      case 2: return true; // Addons are optional
      case 3: return formData.name && formData.email && formData.phone;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      serviceName: PRICING_CONFIG.services[formData.serviceType]?.name,
      packageName: PRICING_CONFIG.packages[formData.serviceType]?.[formData.package]?.name,
      regionName: PRICING_CONFIG.regions[formData.region]?.name,
      estimatedPrice: totalPrice,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbx-fEc6gUTXne3hmbHK-kZEBdwYXaM68dP8SUfDyPHjEFJHx7ZrHpf1g9X2xtg1SOdn/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });

      alert(`Thank you! Your estimated budget is ₹${totalPrice.toLocaleString('en-IN')}. A Trygve Studio architect will contact you shortly.`);
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again or call us directly.");
    }
  };

  const steps = [
    { title: "Project Basics", component: <Step1Basics formData={formData} updateFormData={updateFormData} /> },
    { title: "Quality & Finish", component: <Step2Package formData={formData} updateFormData={updateFormData} /> },
    { title: "Add-ons", component: <Step3Addons formData={formData} toggleAddon={toggleAddon} /> },
    { title: "Get Your Estimate", component: <Step4Contact formData={formData} updateFormData={updateFormData} /> },
  ];

  return (
    <div className="min-h-screen pt-40 pb-20 bg-[#F4F1EC] px-4 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Header aligned with Trygve Studio brand */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Lucknow Construction & Architecture Calculator
          </h1>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Get an accurate, data-driven budget estimate for your 2026 project in Lucknow.
            No hidden costs, just transparent numbers.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row border border-gray-100">

          {/* Main Form Area */}
          <div className="w-full lg:w-2/3 p-8 md:p-12">

            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-12 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-100 -z-10"></div>
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center bg-white px-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${index <= currentStep ? "bg-black text-white" : "bg-gray-100 text-gray-400"
                    }`}>
                    {index < currentStep ? <Check size={18} /> : index + 1}
                  </div>
                  <span className={`text-xs mt-3 font-medium tracking-wide uppercase hidden sm:block ${index <= currentStep ? "text-black" : "text-gray-400"}`}>
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
                className="min-h-[360px]"
              >
                {steps[currentStep].component}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-100">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2 px-6 py-3 font-medium transition-colors disabled:opacity-0 text-gray-500 hover:text-black"
              >
                <ArrowLeft size={18} /> Back
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 px-8 py-3 bg-black text-white font-medium hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 px-8 py-3 bg-[#234D7E] text-white font-medium hover:bg-[#1a3a60] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Check size={18} /> View Final Estimate
                </button>
              )}
            </div>
          </div>

          {/* Real-time Summary Sidebar */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-8 md:p-12 border-l border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium mb-8 pb-4 border-b border-gray-200">Your Project Outline</h3>

              <div className="space-y-6 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 font-light">Service Type</span>
                  <span className="font-medium">{PRICING_CONFIG.services[formData.serviceType]?.name || "Not selected"}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 font-light">Location / Area</span>
                  <span className="font-medium">
                    {PRICING_CONFIG.regions[formData.region]?.name || "Not selected"}
                    {formData.area ? ` • ${formData.area} sq.ft` : ""}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 font-light">Quality Tier</span>
                  <span className="font-medium">
                    {formData.package && formData.serviceType ? PRICING_CONFIG.packages[formData.serviceType][formData.package]?.name : "Not selected"}
                  </span>
                </div>

                {formData.addons.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500 font-light">Additional Services</span>
                    <ul className="font-medium space-y-1">
                      {formData.addons.map(a => (
                        <li key={a} className="flex gap-2"><Check size={16} className="text-[#234D7E]" /> {PRICING_CONFIG.addons[a].name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <span className="text-gray-500 text-sm font-light block mb-2">Estimated Investment</span>
              <div className="text-4xl font-light tracking-tight flex items-center">
                <IndianRupee size={32} className="mr-1 text-gray-400" />
                {totalPrice > 0 ? totalPrice.toLocaleString('en-IN') : "---"}
              </div>
              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                *This is a baseline estimate based on prevailing 2026 rates in Lucknow. Final cost depends on specific material selections and site conditions.
              </p>
            </div>
          </div>

        </div>

        {/* Trust Signals */}
        <div className="mt-12 text-center text-sm text-gray-500 flex flex-wrap justify-center gap-8">
          <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> Transparent 2026 Pricing</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> Trusted for 200+ Projects</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> Lucknow Local Experts</span>
        </div>

        {/* GEO Semantic Pricing Data block - Visible to search engines and users for transparency */}
        <section className="mt-20 max-w-4xl mx-auto rounded-xl border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-medium mb-6">Standard Pricing Index (2026 Estimate)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-3 px-4 font-normal">Service Category</th>
                  <th className="py-3 px-4 font-normal">Package Tier</th>
                  <th className="py-3 px-4 font-normal">Base Rate (per sq.ft)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Turnkey Construction</td>
                  <td className="py-3 px-4">Standard</td>
                  <td className="py-3 px-4 font-medium">₹1,550</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Turnkey Construction</td>
                  <td className="py-3 px-4">Premium</td>
                  <td className="py-3 px-4 font-medium">₹1,950</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Turnkey Construction</td>
                  <td className="py-3 px-4">Luxury</td>
                  <td className="py-3 px-4 font-medium">₹2,650</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Interior Design</td>
                  <td className="py-3 px-4">Standard</td>
                  <td className="py-3 px-4 font-medium">₹1,250</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Interior Design</td>
                  <td className="py-3 px-4">Premium</td>
                  <td className="py-3 px-4 font-medium">₹1,650</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Interior Design</td>
                  <td className="py-3 px-4">Luxury</td>
                  <td className="py-3 px-4 font-medium">₹2,350</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            *Pricing data provided for Trygve Studio's Lucknow operations. Actual project costs may vary based on specific geographical and material requirements.
          </p>
        </section>

        {/* SEO Injection: Construction Cost Guide */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Construction Cost per sq ft in Lucknow (2026 Guide)</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              If you are researching the <strong>construction rate in Lucknow</strong>, it's important to understand that costs vary significantly based on material quality and geographical challenges (e.g., Gomti Nagar's soil requirements). For a complete turnkey project in 2026, the average construction cost in Lucknow ranges from ₹1,650 to ₹2,850 per sq. ft.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 border-gray-200 p-4 font-medium text-gray-900">Construction Class</th>
                    <th className="border-b-2 border-gray-200 p-4 font-medium text-gray-900">Cost per Sq. Ft.</th>
                    <th className="border-b-2 border-gray-200 p-4 font-medium text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="p-4">C-Class (Standard)</td>
                    <td className="p-4 font-medium">₹1,650 - ₹1,850</td>
                    <td className="p-4">Investment properties, basic rentals</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">B-Class (Premium)</td>
                    <td className="p-4 font-medium">₹2,150 - ₹2,350</td>
                    <td className="p-4">Personal homes, modern apartments</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4">A-Class (Luxury)</td>
                    <td className="p-4 font-medium">₹2,850+</td>
                    <td className="p-4">High-end villas, smart homes in Ansal/Gomti Nagar</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-gray-900 mb-4">Why use our House Construction Cost Calculator?</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unlike generic online estimators, our <strong>building construction cost calculator</strong> is calibrated specifically for the Lucknow market. It factors in current (2026) raw material rates in Uttar Pradesh—including cement, steel, and LDA approval margins—giving you the most precise <strong>home construction cost in Lucknow</strong> before you even speak to an architect.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- Steps Components ---

function Step1Basics({ formData, updateFormData }) {
  return (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-4">What do you need help with?</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(PRICING_CONFIG.services).map(([key, service]) => {
            const Icon = service.icon;
            const isSelected = formData.serviceType === key;
            return (
              <button
                key={key}
                onClick={() => updateFormData("serviceType", key)}
                className={`p-5 text-left border rounded-lg transition-all ${isSelected ? 'border-black bg-gray-50 ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <Icon size={24} className={`mb-3 ${isSelected ? 'text-black' : 'text-gray-400'}`} />
                <h4 className="font-medium mb-1">{service.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{service.description}</p>
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">Total Area (Sq.Ft)</label>
          <input
            type="number"
            value={formData.area}
            onChange={(e) => updateFormData("area", e.target.value)}
            placeholder="e.g. 2000"
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">Project Location</label>
          <div className="relative">
            <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={formData.region}
              onChange={(e) => updateFormData("region", e.target.value)}
              className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all appearance-none"
            >
              <option value="">Select an area in Lucknow</option>
              {Object.entries(PRICING_CONFIG.regions).map(([key, region]) => (
                <option key={key} value={key}>{region.name}</option>
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
    return <div className="text-gray-500 italic">Please select a service type in the previous step first.</div>;
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-500 text-sm mb-6">Select the level of finish and detail you require for your {formData.area} sq.ft space.</p>

      <div className="grid grid-cols-1 gap-4">
        {Object.entries(packages).map(([key, pkg]) => {
          const isSelected = formData.package === key;
          return (
            <button
              key={key}
              onClick={() => updateFormData("package", key)}
              className={`p-6 text-left border rounded-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 ${isSelected ? 'border-black bg-gray-50 ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div>
                <h4 className="text-lg font-medium mb-2">{pkg.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed md:max-w-md">{pkg.desc}</p>
              </div>
              <div className="text-left md:text-right shrink-0">
                <div className="text-xl font-medium tracking-tight flex items-center md:justify-end">
                  <IndianRupee size={18} />{pkg.pricePerSqft}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Base Per Sq.Ft</div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  );
}

function Step3Addons({ formData, toggleAddon }) {
  return (
    <div>
      <p className="text-gray-500 text-sm mb-6">Popular professional services frequently requested by our Lucknow clients.</p>
      <div className="grid grid-cols-1 gap-4">
        {Object.entries(PRICING_CONFIG.addons).map(([key, addon]) => {
          const isSelected = formData.addons.includes(key);
          return (
            <button
              key={key}
              onClick={() => toggleAddon(key)}
              className={`p-5 text-left border rounded-lg transition-all flex items-center justify-between gap-4 ${isSelected ? 'border-[#234D7E] bg-[#234D7E]/5 ring-1 ring-[#234D7E]' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded border flex items-center justify-center shrink-0 ${isSelected ? 'bg-[#234D7E] border-[#234D7E]' : 'border-gray-300 bg-white'}`}>
                  {isSelected && <Check size={14} className="text-white" />}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{addon.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{addon.desc}</p>
                </div>
              </div>
              <div className="font-medium shrink-0">
                + ₹{addon.price.toLocaleString('en-IN')}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  );
}

function Step4Contact({ formData, updateFormData }) {
  return (
    <div className="space-y-6 max-w-lg">
      <p className="text-gray-500 text-sm mb-8">
        Your estimate is ready. Enter your details below and an architect will reach out to discuss the specifics of your plot and vision.
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
          placeholder="e.g. Rahul Verma"
          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          placeholder="rahul@example.com"
          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData("phone", e.target.value)}
          placeholder="+91 98765 43210"
          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
        />
      </div>
    </div>
  );
}
