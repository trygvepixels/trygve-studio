const interiorDesignCities = [
  {
    cityName: "Lucknow",
    citySlug: "lucknow",
    stateName: "Uttar Pradesh",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    introCopy:
      "Transform your home with a modern, functional interior design built for Lucknow lifestyles. We combine strong space planning with durable materials and clean execution—so your interiors look great today and stay practical for years.",
    designStyles: [
      "Warm modern minimal",
      "Premium wood + warm lighting",
      "Smart storage for compact layouts",
      "Timeless neutrals with texture",
    ],
    whyChooseBullets: [
      "City-ready planning for apartments, villas and offices in Lucknow.",
      "Detailed 3D visualization before execution to reduce redesign risk.",
      "End-to-end execution: design, materials, installation and handover.",
      "Quality checks at every stage to protect finish and functionality.",
    ],
    areas: [
      "Gomti Nagar",
      "Hazratganj",
      "Indira Nagar",
      "Aliganj",
      "Rajajipuram",
      "Mahanagar",
      "Jankipuram",
      "Ashiyana",
      "Chinhat",
      "Alambagh",
      "Faizabad Road",
      "IT City",
    ],
  },
  {
    cityName: "Delhi",
    citySlug: "delhi",
    stateName: "Delhi",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?v=2",
    introCopy:
      "Get interior design that feels bright, breathable and timeless for Delhi homes. We focus on practical layouts, smart lighting and material choices that suit Delhi’s day-to-day living needs.",
    designStyles: [
      "Modern luxe with clean lines",
      "Earthy tones + marble-inspired textures",
      "Space-efficient modular living",
      "Statement lighting & accent walls",
    ],
    whyChooseBullets: [
      "Local know-how for apartment living across Delhi NCR.",
      "3D-first design approach to align expectations early.",
      "Turnkey project execution with clear timelines.",
      "Design solutions that balance aesthetics with durability.",
    ],
    areas: [
      "Saket",
      "Greater Kailash",
      "South Extension",
      "Vasant Kunj",
      "Dwarka",
      "Rajouri Garden",
      "Janakpuri",
      "Karol Bagh",
      "Lajpat Nagar",
      "Noida Sector 62",
      "Gurugram Golf Course Extension",
    ],
  },
  {
    cityName: "Mumbai",
    citySlug: "mumbai",
    stateName: "Maharashtra",
    heroImage:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e",
    introCopy:
      "Interior design for Mumbai that’s functional, stylish and built for fast-paced living. We plan for compact spaces, natural light and durable finishes so your home stays effortless—day after day.",
    designStyles: [
      "Contemporary coastal warmth",
      "Modular storage + sleek finishes",
      "Glossy accents with matte balance",
      "Luxury lighting layers",
    ],
    whyChooseBullets: [
      "Space planning optimized for Mumbai apartments.",
      "Material selection for long-term durability in humid zones.",
      "3D visualization and detailed execution planning.",
      "End-to-end delivery: design to installation.",
    ],
    areas: [
      "Bandra",
      "Juhu",
      "Andheri West",
      "Powai",
      "Lower Parel",
      "Prabhadevi",
      "Thane West",
      "Borivali West",
      "Khar",
      "Navi Mumbai (Vashi)",
    ],
  },
  {
    cityName: "Bengaluru",
    citySlug: "bengaluru",
    stateName: "Karnataka",
    aliases: ["Bangalore"],
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    introCopy:
      "Modern interior design for Bengaluru homes and offices—built around lifestyle, work patterns and comfort. We design with clean aesthetics and practical ergonomics for everyday living.",
    designStyles: [
      "Modern minimal with soft neutrals",
      "Warm wood + fabric textures",
      "Work-from-home optimized layouts",
      "Light-led interiors",
    ],
    whyChooseBullets: [
      "Planning optimized for apartments, villas and co-working spaces.",
      "3D previews to finalize layouts before execution.",
      "Turnkey approach with structured project management.",
      "Consistent design language across rooms.",
    ],
    areas: [
      "Indiranagar",
      "Koramangala",
      "HSR Layout",
      "Jayanagar",
      "JP Nagar",
      "Whitefield",
      "Malleshwaram",
      "MG Road",
    ],
  },
  {
    cityName: "Hyderabad",
    citySlug: "hyderabad",
    stateName: "Telangana",
    heroImage:
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
    introCopy:
      "Premium interior design that suits Hyderabad’s climate and home styles. We focus on ventilation, lighting and durable finishes—so your interiors feel comfortable and look refined every season.",
    designStyles: [
      "Contemporary warm neutrals",
      "Clean modular kitchens",
      "Statement wall textures",
      "Balanced lighting design",
    ],
    whyChooseBullets: [
      "Local design considerations for practical daily living.",
      "3D-first planning to speed up execution with fewer changes.",
      "Materials curated for long-lasting performance.",
      "Design-to-delivery execution with transparent milestones.",
    ],
    areas: [
      "Banjara Hills",
      "Jubilee Hills",
      "Kondapur",
      "Gachibowli",
      "Madhapur",
      "Hitech City",
      "Himayatnagar",
      "Secunderabad",
    ],
  },
  {
    cityName: "Chennai",
    citySlug: "chennai",
    stateName: "Tamil Nadu",
    heroImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    introCopy:
      "Interior design for Chennai that’s bright, breathable and built for coastal living. We plan layouts for airflow, create layered lighting and choose finishes that stay beautiful over time.",
    designStyles: [
      "Modern coastal minimal",
      "Matte finishes with warm highlights",
      "Smart modular storage",
      "Soft neutral palettes",
    ],
    whyChooseBullets: [
      "Comfort-first planning for apartments and commercial spaces.",
      "Detailed materials and lighting selections.",
      "Structured project timelines with consistent updates.",
      "End-to-end execution and handover support.",
    ],
    areas: [
      "Adyar",
      "T Nagar",
      "Anna Nagar",
      "Ekkaduthangal",
      "Velachery",
      "OMR (Old Mahabalipuram Road)",
      "Guindy",
      "Sholinganallur",
    ],
  },
  {
    cityName: "Kolkata",
    citySlug: "kolkata",
    stateName: "West Bengal",
    heroImage:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    introCopy:
      "Design interiors for Kolkata that feel warm, elegant and timeless. We create comfortable spaces with thoughtful layout, refined textures and practical storage for everyday living.",
    designStyles: [
      "Classic-modern fusion",
      "Warm wood + premium textures",
      "Curated lighting for evenings",
      "Comfort-led space planning",
    ],
    whyChooseBullets: [
      "City-aware design with functional layouts.",
      "3D visualization for better decisions before execution.",
      "Turnkey delivery with reliable timelines.",
      "Quality checks to protect finishes.",
    ],
    areas: [
      "Salt Lake",
      "New Town",
      "Kankurgachi",
      "Ballygunge",
      "Gariahat",
      "Behala",
      "Park Street",
      "Lake Town",
    ],
  },
  {
    cityName: "Pune",
    citySlug: "pune",
    stateName: "Maharashtra",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    introCopy:
      "Interior design in Pune that feels modern, calm and highly livable. We focus on smart layouts, clean aesthetics and durable finishes for long-term comfort in everyday life.",
    designStyles: [
      "Minimal modern with warm accents",
      "Wood + stone-inspired texture",
      "Storage-driven interiors",
      "Soft lighting and calm palettes",
    ],
    whyChooseBullets: [
      "Planning tailored for Pune apartments and workspaces.",
      "3D design previews to finalize layouts quickly.",
      "Turnkey execution with structured milestones.",
      "Material choices for durability and comfort.",
    ],
    areas: [
      "Baner",
      "Bavdhan",
      "Aundh",
      "Kothrud",
      "Hinjewadi",
      "Viman Nagar",
      "Wakad",
      "Kalyani Nagar",
    ],
  },
  {
    cityName: "Ahmedabad",
    citySlug: "ahmedabad",
    stateName: "Gujarat",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    introCopy:
      "Ahmedabad interiors that balance style, comfort and durability. We craft layouts that work with your daily routine—paired with modern finishes and clean execution.",
    designStyles: [
      "Modern warm neutrals",
      "Minimal + premium textures",
      "Smart modular kitchens",
      "Accent lighting & false ceiling ideas",
    ],
    whyChooseBullets: [
      "Practical design approach for apartment living.",
      "3D-first workflow for faster alignment.",
      "Turnkey execution with quality checkpoints.",
      "Design solutions that stay functional long-term.",
    ],
    areas: [
      "Thaltej",
      "S.G. Highway",
      "Prahlad Nagar",
      "Navrangpura",
      "Gota",
      "Bopal",
      "Vastrapur",
      "Gandhinagar (nearby)",
    ],
  },
  {
    cityName: "Jaipur",
    citySlug: "jaipur",
    stateName: "Rajasthan",
    heroImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    introCopy:
      "Interior design in Jaipur with timeless aesthetics and modern comfort. We design spaces that feel premium, functional and well planned for everyday living.",
    designStyles: [
      "Timeless luxe with modern lines",
      "Warm metallic + neutral balance",
      "Curated lighting and textures",
      "Modular storage solutions",
    ],
    whyChooseBullets: [
      "City-friendly design decisions for comfort and longevity.",
      "Advanced 3D visualization before execution.",
      "End-to-end project management and delivery.",
      "Quality materials and consistent finishing.",
    ],
    areas: [
      "Malviya Nagar",
      "C-Scheme",
      "Vaishali Nagar",
      "Mansarovar",
      "Sodala",
      "MI Road",
      "Jagatpura",
    ],
  },
  {
    cityName: "Kanpur",
    citySlug: "kanpur",
    stateName: "Uttar Pradesh",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?v=3",
    introCopy:
      "Modern interior design for Kanpur that’s functional, comfortable and built to last. We focus on smart storage, clean finishes and practical layouts for families and offices.",
    designStyles: [
      "Warm modern minimal",
      "Space-efficient modular living",
      "Balanced lighting design",
      "Textured neutrals and premium woods",
    ],
    whyChooseBullets: [
      "Designs optimized for apartment layouts and daily flow.",
      "3D-first process for fewer execution changes.",
      "Turnkey execution from design to installation.",
      "Quality checks at each milestone.",
    ],
    areas: [
      "Civil Lines",
      "Govind Nagar",
      "Swaroop Nagar",
      "Saket Nagar",
      "Jajmau",
      "Kanpur Cantonment",
      "Nawabganj",
      "Triveni Nagar",
    ],
  },
  {
    cityName: "Nagpur",
    citySlug: "nagpur",
    stateName: "Maharashtra",
    heroImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    introCopy:
      "Premium interior design for Nagpur homes and workspaces. We create refined interiors with clean lines, durable finishes and smart storage designed for everyday comfort.",
    designStyles: [
      "Modern elegant neutrals",
      "Premium wood + matte textures",
      "Lighting-led design",
      "Modular and customizable layouts",
    ],
    whyChooseBullets: [
      "City-relevant planning for families and businesses.",
      "Advanced 3D visualization for confident decisions.",
      "Structured execution and clear project milestones.",
      "Quality-focused material selection and installation.",
    ],
    areas: [
      "Dharampeth",
      "Dhantoli",
      "Manish Nagar",
      "Wathoda",
      "Sakkardara",
      "Ramdaspeth",
      "Lakshmi Nagar",
    ],
  },
  {
    cityName: "Indore",
    citySlug: "indore",
    stateName: "Madhya Pradesh",
    heroImage:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    introCopy:
      "Interior design in Indore that blends modern aesthetics with comfortable functionality. We plan smart layouts, durable finishes and refined lighting to make your spaces feel premium and easy to live in.",
    designStyles: [
      "Contemporary luxe with warm highlights",
      "Matte textures + premium wood",
      "Functional modular storage",
      "Statement lighting and accent walls",
    ],
    whyChooseBullets: [
      "Tailored layouts for apartment and villa interiors.",
      "3D visualization for better pre-execution alignment.",
      "Turnkey service delivery with structured timelines.",
      "Quality checks to protect finish and durability.",
    ],
    areas: [
      "Vijay Nagar",
      "Annapurna Road",
      "Indrapuri",
      "Palasia",
      "Scheme 54",
      "MG Road",
      "Rajendra Nagar",
    ],
  },
  {
    cityName: "Chandigarh",
    citySlug: "chandigarh",
    stateName: "Chandigarh",
    heroImage:
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7",
    introCopy:
      "Chandigarh interior design that feels calm, premium and built for comfort. We focus on clean aesthetics, practical layouts and durable finishes for long-term satisfaction.",
    designStyles: [
      "Modern minimalist",
      "Luxury textures with soft tones",
      "Open layout planning",
      "Lighting-led ambience",
    ],
    whyChooseBullets: [
      "Designs optimized for Chandigarh’s lifestyle and space planning needs.",
      "3D visualization before execution.",
      "End-to-end execution and finishing quality.",
      "Clear project milestones and updates.",
    ],
    areas: [
      "Sector 7",
      "Sector 8",
      "Sector 9",
      "Sector 10",
      "Elante",
      "Sahibzada Ajit Singh Nagar (Mohali nearby)",
      "Tricity (Zirakpur nearby)",
    ],
  },
  {
    cityName: "Kochi",
    citySlug: "kochi",
    stateName: "Kerala",
    aliases: ["Cochin"],
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    introCopy:
      "Kochi interior design that’s modern, comfortable and designed for everyday living. We craft bright, breathable spaces with thoughtful lighting, durable finishes and efficient storage.",
    designStyles: [
      "Warm modern tropical",
      "Natural textures + soft lighting",
      "Modular kitchens and storage",
      "Elegant, timeless neutrals",
    ],
    whyChooseBullets: [
      "Comfort-first design for residential and office spaces.",
      "3D previews and clear execution planning.",
      "Turnkey delivery with quality checks.",
      "Material selection for long-term performance.",
    ],
    areas: [
      "Ernakulam",
      "Kakkanad",
      "Vyttila",
      "Marine Drive",
      "Edappally",
      "Palarivattom",
      "Kochi Fort area",
    ],
  },
  {
    cityName: "Surat",
    citySlug: "surat",
    stateName: "Gujarat",
    heroImage:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    introCopy:
      "Surat interior design with modern style and strong functionality. We plan smart storage, durable finishes and clean design language for homes and commercial spaces.",
    designStyles: [
      "Modern warm minimal",
      "Premium textures and matte finishes",
      "Lighting-led interiors",
      "Modular living solutions",
    ],
    whyChooseBullets: [
      "Local execution approach for city timelines.",
      "3D-first design process with fewer changes.",
      "Turnkey delivery from design to installation.",
      "Quality material selection and consistent finishing.",
    ],
    areas: [
      "Adajan",
      "Udhna",
      "Surat Dumas Road",
      "Varachha",
      "Rander",
      "Magdalla",
      "Begumpura",
    ],
  },
  {
    cityName: "Bhubaneswar",
    citySlug: "bhubaneswar",
    stateName: "Odisha",
    heroImage:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    introCopy:
      "Bhubaneswar interior design that feels premium, practical and comfortable. We focus on functional layouts, smart storage and lighting that makes everyday spaces feel better.",
    designStyles: [
      "Contemporary warm neutrals",
      "Texture-led interiors",
      "Space-efficient modular solutions",
      "Soft ambient lighting",
    ],
    whyChooseBullets: [
      "Design solutions built for local lifestyles and daily needs.",
      "3D visualization before execution.",
      "Turnkey delivery with structured milestones.",
      "Quality-focused installation and finishing.",
    ],
    areas: [
      "Nayapalli",
      "Khandagiri",
      "Chandrasekharpur",
      "Patia",
      "IRC Village",
      "BDA Colony",
      "Saheed Nagar",
    ],
  },
  {
    cityName: "Guwahati",
    citySlug: "guwahati",
    stateName: "Assam",
    heroImage:
      "https://images.unsplash.com/photo-1537726235470-8504e3beef77",
    introCopy:
      "Guwahati interior design that’s designed for comfort and everyday usability. We create refined interiors with durable finishes, efficient storage and thoughtful lighting for modern living.",
    designStyles: [
      "Modern elegant neutrals",
      "Wood + texture combinations",
      "Modular kitchens and storage",
      "Layered lighting ambience",
    ],
    whyChooseBullets: [
      "City-aware design approach for practical living.",
      "3D-first design and execution planning.",
      "Turnkey service with consistent quality checks.",
      "Durable material selection for long-term satisfaction.",
    ],
    areas: [
      "GS Road",
      "Ulubari",
      "Beltola",
      "Zoo Tiniali",
      "Garchuk",
      "Six Mile",
      "Pan Bazaar",
    ],
  },
  {
    cityName: "Coimbatore",
    citySlug: "coimbatore",
    stateName: "Tamil Nadu",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    introCopy:
      "Coimbatore interior design that feels modern, comfortable and built for long-term usability. We focus on clean aesthetics, smart storage and durable finishes for homes and offices.",
    designStyles: [
      "Modern minimal with warm tones",
      "Premium textures and soft lighting",
      "Ergonomic layouts for daily flow",
      "Modular storage and kitchens",
    ],
    whyChooseBullets: [
      "Layout planning for homes, offices and commercial spaces.",
      "3D visualization before execution.",
      "Turnkey delivery with project milestones.",
      "Quality checks at each stage.",
    ],
    areas: [
      "RS Puram",
      "Ganapathy",
      "Peelamedu",
      "Saibaba Colony",
      "Ukkadam",
      "Singanallur",
      "Podanur",
    ],
  },
  {
    cityName: "Patna",
    citySlug: "patna",
    stateName: "Bihar",
    heroImage:
      "https://images.unsplash.com/photo-1611895491442-65c7e5dde8e8",
    introCopy:
      "Patna interior design with modern comfort and practical layouts. We create warm, premium interiors with smart storage, refined finishes and layered lighting tailored to daily living.",
    designStyles: [
      "Warm modern minimal",
      "Wood + matte textures",
      "Optimized space planning",
      "Soft ambient lighting",
    ],
    whyChooseBullets: [
      "City-aware design decisions for homes and offices in Patna.",
      "3D-first visualization before execution starts.",
      "Turnkey service delivery with milestone tracking.",
      "Quality checks at each stage to protect finishes.",
    ],
    areas: [
      "Boring Road",
      "Kankarbagh",
      "Fraser Road",
      "Anisabad",
      "Gardiner Road",
      "Rajendra Nagar",
      "Saidpur",
    ],
  },
];

export { interiorDesignCities };

