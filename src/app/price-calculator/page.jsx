"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Bed, 
  ChefHat, 
  Sofa, 
  Bath, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Check,
  IndianRupee
} from "lucide-react";

// Pricing data
const PRICING_CONFIG = {
  packages: {
    essentials: { 
      name: "Essentials", 
      pricePerSqft: 1499, 
      description: "Perfect starter package with quality materials",
      features: ["Basic Laminate", "Standard Hardware", "Basic Lighting", "1 Year Warranty"]
    },
    premium: { 
      name: "Premium", 
      pricePerSqft: 1999, 
      description: "Enhanced finishes and better materials",
      features: ["Premium Laminate", "Soft-Close Hardware", "Designer Lighting", "5 Year Warranty", "Free 3D Design"]
    },
    luxe: { 
      name: "Luxe", 
      pricePerSqft: 2799, 
      description: "Top-tier materials and finishes",
      features: ["Acrylic/PU Finish", "Imported Hardware", "Smart Lighting", "10 Year Warranty", "Free 3D Design", "Dedicated Designer"]
    },
  },
  rooms: {
    kitchen: { name: "Kitchen", basePrice: 150000, icon: ChefHat },
    bedroom: { name: "Bedroom", basePrice: 120000, icon: Bed },
    living: { name: "Living Room", basePrice: 100000, icon: Sofa },
    bathroom: { name: "Bathroom", basePrice: 80000, icon: Bath },
  },
  addons: {
    electrical: { name: "Electrical Work", price: 25000 },
    plumbing: { name: "Plumbing", price: 30000 },
    painting: { name: "False Ceiling & Painting", price: 45000 },
    flooring: { name: "Flooring", price: 60000 },
  },
  cityMultiplier: {
    mumbai: 1.2,
    delhi: 1.15,
    bangalore: 1.1,
    hyderabad: 1.0,
    pune: 1.05,
    chennai: 1.0,
    gurgaon: 1.15,
  },
};

// Default carpet areas by BHK
const DEFAULT_CARPET_AREA = {
  "1": 450,
  "2": 750,
  "3": 1100,
  "4": 1500,
};

export default function PriceCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    bhk: "",
    city: "",
    carpetArea: "",
    selectedRooms: [],
    package: "",
    addons: [],
    name: "",
    email: "",
    phone: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      
      // Auto-fill carpet area when BHK changes
      if (field === "bhk" && value) {
        updated.carpetArea = DEFAULT_CARPET_AREA[value];
      }
      
      return updated;
    });
  };

  const toggleRoom = (room) => {
    setFormData((prev) => ({
      ...prev,
      selectedRooms: prev.selectedRooms.includes(room)
        ? prev.selectedRooms.filter((r) => r !== room)
        : [...prev.selectedRooms, room],
    }));
  };

  const toggleAddon = (addon) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(addon)
        ? prev.addons.filter((a) => a !== addon)
        : [...prev.addons, addon],
    }));
  };

  // Calculate total price
  const calculatePrice = () => {
    let total = 0;
    const { carpetArea, selectedRooms, package: pkg, addons, city } = formData;

    if (!carpetArea || !pkg) return 0;

    // Base price from selected package and area
    const packagePrice = PRICING_CONFIG.packages[pkg]?.pricePerSqft || 0;
    total = carpetArea * packagePrice;

    // Add room base prices
    selectedRooms.forEach((room) => {
      total += PRICING_CONFIG.rooms[room]?.basePrice || 0;
    });

    // Add addons
    addons.forEach((addon) => {
      total += PRICING_CONFIG.addons[addon]?.price || 0;
    });

    // Apply city multiplier
    const multiplier = PRICING_CONFIG.cityMultiplier[city?.toLowerCase()] || 1.0;
    total = total * multiplier;

    return Math.round(total);
  };

  const totalPrice = calculatePrice();

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.bhk && formData.city && formData.carpetArea;
      case 1:
        return formData.selectedRooms.length > 0;
      case 2:
        return formData.package;
      case 3:
        return true; // Addons are optional
      case 4:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

 const handleSubmit = async () => {
  const payload = {
    ...formData,
    estimatedPrice: totalPrice,
    timestamp: new Date().toISOString(),
  };
  
  console.log("Sending payload:", payload); // Debug log
  
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwqLLkkiJUIN3VuDHGhzimgY7WEQfohFq00qzFwEDBtxHA1xdD1QVYp4ozB56K4nGw/exec", {
      method: "POST",
      mode: "no-cors", // Add this temporarily to bypass CORS
      headers: { 
        "Content-Type": "text/plain" // Change to text/plain
      },
      body: JSON.stringify(payload),
    });

    console.log("Response status:", response.status);
    console.log("Response:", response);
    
    // Since we're using no-cors, we can't read the response
    // So we assume success if no error is thrown
    alert(`Thank you! Your estimated price is ₹${totalPrice.toLocaleString('en-IN')}. Our team will contact you soon!`);
    
  } catch (error) {
    console.error("Full error:", error);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    alert("Something went wrong. Please try again or call us directly.");
  }
};


  const steps = [
    {
      title: "Property Details",
      component: <Step1PropertyDetails formData={formData} updateFormData={updateFormData} />,
    },
    {
      title: "Select Rooms",
      component: <Step2RoomSelection formData={formData} toggleRoom={toggleRoom} />,
    },
    {
      title: "Choose Package",
      component: <Step3PackageSelection formData={formData} updateFormData={updateFormData} />,
    },
    {
      title: "Add-ons",
      component: <Step4Addons formData={formData} toggleAddon={toggleAddon} />,
    },
    {
      title: "Contact Details",
      component: <Step5Contact formData={formData} updateFormData={updateFormData} totalPrice={totalPrice} />,
    },
  ];

  return (
    <div className="min-h-screen pt-40 bg-gradient-to-br from-red-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Home Interior Price Calculator
          </h1>
          <p className="text-gray-600">Get an instant estimate for your dream home</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      index <= currentStep
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index < currentStep ? <Check size={20} /> : index + 1}
                  </div>
                  <p className="text-xs mt-2 text-gray-600 text-center hidden sm:block">
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all ${
                      index < currentStep ? "bg-red-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Form Content */}
            <div className="lg:col-span-2 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {steps[currentStep].title}
                  </h2>
                  {steps[currentStep].component}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <ArrowLeft size={20} />
                  Back
                </button>
                
                {currentStep < steps.length - 1 ? (
                  <button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Check size={20} />
                    Get Quote
                  </button>
                )}
              </div>
            </div>

            {/* Price Summary Sidebar */}
            <div className="bg-gradient-to-br from-red-600 to-purple-700 text-white p-8">
              <h3 className="text-xl font-bold mb-6">Your Estimate</h3>
              
              <div className="space-y-4 mb-8">
                {formData.bhk && (
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Property</span>
                    <span className="font-semibold">{formData.bhk} BHK</span>
                  </div>
                )}
                
                {formData.carpetArea && (
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Carpet Area</span>
                    <span className="font-semibold">{formData.carpetArea} sq ft</span>
                  </div>
                )}
                
                {formData.package && (
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Package</span>
                    <span className="font-semibold">
                      {PRICING_CONFIG.packages[formData.package]?.name}
                    </span>
                  </div>
                )}
                
                {formData.selectedRooms.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Rooms</span>
                    <span className="font-semibold">{formData.selectedRooms.length} selected</span>
                  </div>
                )}
                
                {formData.addons.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Add-ons</span>
                    <span className="font-semibold">{formData.addons.length} selected</span>
                  </div>
                )}
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="text-sm opacity-90 mb-2">Estimated Total</div>
                <div className="text-4xl font-bold flex items-center gap-2">
                  <IndianRupee size={32} />
                  {totalPrice > 0 ? totalPrice.toLocaleString('en-IN') : '--'}
                </div>
                <p className="text-xs opacity-75 mt-2">*Final price may vary based on customization</p>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={18} />
                  <span className="font-semibold text-sm">Why Choose Us?</span>
                </div>
                <ul className="text-xs space-y-1 opacity-90">
                  <li>✓ 45-day delivery guarantee</li>
                  <li>✓ 10-year warranty</li>
                  <li>✓ Free 3D design</li>
                  <li>✓ 600+ design experts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 1: Property Details
function Step1PropertyDetails({ formData, updateFormData }) {
  const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", "Gurgaon"];
  
  return (
    <div className="space-y-6">
      {/* BHK Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Select BHK Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["1", "2", "3", "4"].map((bhk) => (
            <button
              key={bhk}
              onClick={() => updateFormData("bhk", bhk)}
              className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                formData.bhk === bhk
                  ? "border-red-600 bg-red-50 text-red-700"
                  : "border-gray-200 hover:border-red-300"
              }`}
            >
              <Home className="mx-auto mb-2" size={24} />
              {bhk} BHK
            </button>
          ))}
        </div>
      </div>

      {/* City Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Select City
        </label>
        <select
          value={formData.city}
          onChange={(e) => updateFormData("city", e.target.value)}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
        >
          <option value="">Choose your city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Carpet Area */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Carpet Area (sq ft)
        </label>
        <input
          type="number"
          value={formData.carpetArea}
          onChange={(e) => updateFormData("carpetArea", e.target.value)}
          placeholder="e.g., 1000"
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
        />
        <p className="text-xs text-gray-500 mt-2">
          Auto-filled based on BHK. You can edit this.
        </p>
      </div>
    </div>
  );
}

// Step 2: Room Selection
function Step2RoomSelection({ formData, toggleRoom }) {
  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">Select the rooms you want to furnish</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(PRICING_CONFIG.rooms).map(([key, room]) => {
          const Icon = room.icon;
          const isSelected = formData.selectedRooms.includes(key);
          
          return (
            <button
              key={key}
              onClick={() => toggleRoom(key)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                isSelected
                  ? "border-red-600 bg-red-50"
                  : "border-gray-200 hover:border-red-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    isSelected ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{room.name}</h4>
                  <p className="text-sm text-gray-500">
                    From ₹{room.basePrice.toLocaleString('en-IN')}
                  </p>
                </div>
                {isSelected && (
                  <Check className="text-red-600" size={24} />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Step 3: Package Selection
function Step3PackageSelection({ formData, updateFormData }) {
  return (
    <div className="space-y-4">
      {Object.entries(PRICING_CONFIG.packages).map(([key, pkg]) => {
        const isSelected = formData.package === key;
        
        return (
          <button
            key={key}
            onClick={() => updateFormData("package", key)}
            className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
              isSelected
                ? "border-red-600 bg-red-50"
                : "border-gray-200 hover:border-red-300"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-xl text-gray-900">{pkg.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">
                  ₹{pkg.pricePerSqft}
                </div>
                <div className="text-xs text-gray-500">per sq ft</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-4">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check size={16} className="text-green-600" />
                  {feature}
                </div>
              ))}
            </div>
          </button>
        );
      })}
    </div>
  );
}

// Step 4: Addons
function Step4Addons({ formData, toggleAddon }) {
  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">Enhance your interiors with these services (optional)</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(PRICING_CONFIG.addons).map(([key, addon]) => {
          const isSelected = formData.addons.includes(key);
          
          return (
            <button
              key={key}
              onClick={() => toggleAddon(key)}
              className={`p-5 rounded-xl border-2 transition-all text-left ${
                isSelected
                  ? "border-red-600 bg-red-50"
                  : "border-gray-200 hover:border-red-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{addon.name}</h4>
                  <p className="text-red-600 font-bold mt-1">
                    +₹{addon.price.toLocaleString('en-IN')}
                  </p>
                </div>
                {isSelected && (
                  <Check className="text-red-600" size={24} />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Step 5: Contact Details
function Step5Contact({ formData, updateFormData, totalPrice }) {
  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h3 className="font-bold text-green-900 mb-2">Your Estimated Price</h3>
        <div className="text-3xl font-bold text-green-700">
          ₹{totalPrice.toLocaleString('en-IN')}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
          placeholder="Enter your name"
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          placeholder="your.email@example.com"
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData("phone", e.target.value)}
          placeholder="+91 98765 43210"
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
        />
      </div>

      <p className="text-xs text-gray-500">
        By submitting, you agree to receive communications from our team. We respect your privacy.
      </p>
    </div>
  );
}
