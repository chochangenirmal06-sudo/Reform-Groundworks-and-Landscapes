export const clientConfig = {

 // ─── BUSINESS INFO ───────────────────────────
 business: {
   name: "Reform",
   fullName: "Reform Groundworks And Landscapes",
   tagline: "Ipswich's Premier Groundworks & Landscaping Specialists.",
   heroLine1: "Ipswich's Most Trusted",
   heroLine2: "Groundworks & Landscaping Company.",
   heroSubtitle: "With over 15 years of industry experience, we bring award-winning quality, clean execution, and professional reliability to every outdoor transformation.",
   city: "Ipswich",
   state: "Suffolk",
   serviceArea: "Serving Suffolk, Essex, and South East Anglia",
   address: "Ipswich, Suffolk",
   phone: "07388 920735",
   phoneHref: "tel:07388920735",
   email: "info@reformgroundworks.com",
   contactFormEmail: "info@reformgroundworks.com",
   hours: "Mon–Sat: 8AM – 6PM", // PLACEHOLDER — verify
   established: "2011", // Based on "over 15 years experience" in 2026
   ctaLabel: "Get a Free Quote",
   trustBadges: [
     "Licensed & Insured",
     "Free Estimates",
     "5-Star Rated Service",
     "Locally Owned & Operated",
     "Award-Winning Service"
   ],
   stats: {
     projectsCompleted: "450+", // Estimate: 15 years x 30
     rating: "5.0★", 
     yearsExperience: "15+",
   },
   mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110000!2d[LNG]!3d[LAT]!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s[CITY+NAME]!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus", // PLACEHOLDER — verify
 },

 // ─── WHY CHOOSE US ───────────────────────────
 whyChooseUs: {
   headline: "Ipswich's Go-To Landscaping Pros",
   subtext: "With over 15 years of dedicated experience and an award-winning reputation, our reliable, hardworking team brings structural mastery and beautiful finishes to your home.",
 },

 // ─── BRAND ───────────────────────────────────
 logo: "/images/logo.png",

 colors: {
   primary:     "#232B32",  // Dark slate panel tone from current web theme
   primaryText: "#F5F6F8",  // Clean off-white text
   secondary:   "#334D5C",  // Supporting slate teal gradient accent
   accent:      "#42A3A1",  // Teal highlight tone from header/logo styling
   accentDark:  "#2E373E",  // Structural button background
   accentLight: "#54B5B3",  // Hover teal state
   accentText:  "#FFFFFF",  // Text on buttons
   bg:          "#FFFFFF",  // Main canvas background
   bgText:      "#2D3134",  // Main content body text
   textMuted:   "#6E767D",  // Subtitles and helper text
 },

 // ─── SOCIAL ──────────────────────────────────
 social: {
   instagram: "#", // PLACEHOLDER — verify
   facebook: "https://www.facebook.com/reformgroundwork/",
   twitter: "#",
 },

 // ─── ABOUT ───────────────────────────────────
 about: {
   headline: "A landscaping firm rooted in Ipswich, Suffolk.",
   story: [
     "Reform Groundworks And Landscapes was built on a foundation of reliability, efficiency, and flawless professionalism. With over 15 years of experience in structural building, groundworks, and landscaping, we deliver projects that combine heavy-duty resilience with pristine aesthetic finishes.",
     "Today, we proudly serve domestic and commercial clients across Suffolk, Essex, and the South East Anglia region — managing everything from complex drainage layouts and concrete footings to tailored patio installations and garden designs.",
     "We are an award-winning local company, not a distant corporate franchise. Our team lives in the community, shows up precisely on time, and treats every property layout with 110% dedication.",
   ],
   founderName: "Daniel Adams",
   founderTitle: "Founder & Lead Specialist",
   founderImage: "/images/owner.png",
   founderBio: [
     "Dan started Reform with a clear mission: to create a groundworks and landscaping company that is genuinely responsive, reliable, and completely focused on precision detail. Having built a reputation for clear communication, he guides his team on-site daily.",
     "A proud local specialist with roots deep in Suffolk, Dan and his team of skilled 'grafters' have earned consistent 5-star praise and local newspaper awards for outstanding structural quality.",
   ],
   founderCredentials: [
     "Award-Winning Local Landscaper",
     "Excavation & Structural Groundwork Specialists",
     "Over 15 Years Registered Experience"
   ],
   principles: [
     { title: "We show up.", description: "On time, every time. Reliability is how trust gets built." },
     { title: "We don't cut corners.", description: "Every edge, every mitre, every placement is deliberate." },
     { title: "We communicate.", description: "You'll always know exactly where your project stands." },
     { title: "We finish what we start.", description: "Every project is seen through to completion. No exceptions." },
   ],
 },

 // ─── SERVICES ────────────────────────────────
 services: [
   {
     active: true,
     slug: "lawn-care-maintenance",
     name: "Lawn Care & Maintenance",
     tagline: "A lawn worth coming home to.",
     description: "Professional turfing, precision seeding, and raised sleeper-edged lawn installations designed around the natural slope of your property.",
     price: "£85", // PLACEHOLDER — verify
     priceLabel: "starting residential rate", // PLACEHOLDER — verify
     badge: "MAINTENANCE",
     image: "/images/Lawn%20Care%20%26%20Maintenance1.png",
     features: ["Premium Turfing & Reseeding", "Raised Sleeper Edged Lawns", "Site Clearing & Leveling"],
   },
   {
     active: true,
     slug: "landscape-design",
     name: "Landscape Design",
     tagline: "Your vision. Our expertise.",
     description: "Complete garden remodeling and collaborative design transformations that maximize usability and home extension value.",
     price: "£499", // PLACEHOLDER — verify
     priceLabel: "for comprehensive layout planning", // PLACEHOLDER — verify
     badge: "DESIGN",
     image: "/images/Landscape%20Design1.png",
     features: ["Bespoke Garden Remodeling", "Collaborative Consultations", "Leveling Sloped & Unusable Yards"],
   },
   {
     active: false,
     slug: "irrigation-systems",
     name: "Irrigation Systems",
     tagline: "Smart water. Healthy lawn.",
     description: "Smart sprinkler installation, precision repairs and seasonal optimization that saves water and money.",
     price: "$299",
     priceLabel: "for system inspection & tune-up",
     badge: "IRRIGATION",
     image: "/images/Irrigation%20Systems1.png",
     features: ["Smart System Install", "Leak Detection & Repair", "Seasonal Calibration"],
   },
   {
     active: true,
     slug: "hardscaping-patios",
     name: "Hardscaping & Patios",
     tagline: "Outdoor spaces built to last.",
     description: "Stunning natural stone and porcelain patio extensions, custom steps, paths, and block-paved driveway installations.",
     price: "£1,500", // PLACEHOLDER — verify
     priceLabel: "for initial layout setups", // PLACEHOLDER — verify
     badge: "HARDSCAPE",
     image: "/images/Hardscaping%20%26%20Patios1.png",
     features: ["Porcelain & Stone Patios", "Custom Steps & Walkways", "Interlocking Block Paving"],
   },
   {
     active: true,
     featured: true,
     slug: "seasonal-cleanup",
     name: "Seasonal Cleanup",
     tagline: "Spring-ready. Fall-perfect. Always.",
     description: "Complete garden clearances, overgrown hedge reduction, and thorough debris removal to reset messy or decrepit spaces.",
     price: "£250", // PLACEHOLDER — verify
     priceLabel: "for complete garden clear-out", // PLACEHOLDER — verify
     badge: "SEASONAL",
     image: "/images/Seasonal%20Cleanup1.png",
     features: ["Overgrowth Clearance", "Debris & Root Removal", "Site Prep Work"],
   },
   {
     active: false,
     slug: "tree-shrub-care",
     name: "Tree & Shrub Care",
     tagline: "Healthy trees. Beautiful property.",
     description: "Careful border pruning, structural hedge reduction, and decorative trimming for clean, manageable perimeters.",
     price: "£150",
     priceLabel: "for basic run maintenance",
     badge: "TREE CARE",
     image: "/images/Tree%20%26%20Shrub%20Care1.png",
     features: ["Hedge Pruning & Reductions", "Border Management", "Root-Bound Ground Preparation"],
   },
   {
     active: false,
     slug: "mulching-soil-health",
     name: "Mulching & Soil Health",
     tagline: "Feed your soil. Grow everything.",
     description: "Premium mulch installation and soil amendment that retains moisture and feeds your plants naturally.",
     price: "£120",
     priceLabel: "for standard mulch installation",
     badge: "MULCHING",
     image: "/images/Mulching%20%26%20Soil%20Health1.png",
     features: ["Premium Mulch Install", "Soil Amendment", "Weed Suppression"],
   },
   {
     active: false,
     slug: "garden-bed-design",
     name: "Garden Bed Design",
     tagline: "Color, texture, and life — year round.",
     description: "Custom raised beds, wooden sleeper retaining borders, and planting schemes constructed for low-maintenance aesthetics.",
     price: "£350",
     priceLabel: "for individual section designs",
     badge: "GARDEN",
     image: "/images/Garden%20Bed%20Design1.png",
     features: ["Raised Wooden Sleeper Beds", "Low-Maintenance Border Plans", "Topography Leveling"],
   },
   {
     active: true,
     featured: true,
     slug: "groundworks-excavation",
     name: "Groundworks & Excavation",
     tagline: "Precision groundwork infrastructure.",
     description: "Expert heavy-duty structural digging, concrete sub-bases, grid foundations, and advanced site drainage solutions.",
     price: "£2,500",
     priceLabel: "dependent on framework scale",
     badge: "GROUNDWORKS",
     image: "/images/service-groundworks.jpg",
     features: ["Foundations, Footings & Concreting", "Drainage Grids & Gravel Systems", "Standing Water Management"],
   },
   {
     active: true,
     featured: true,
     slug: "fencing-timber-work",
     name: "Fencing & Timber Structures",
     tagline: "Secure perimeters and custom timber platforms.",
     description: "Installation of heavy-duty closed-board fencing utilizing Durapost systems, alongside custom gazebos and wooden decking options.",
     price: "£850",
     priceLabel: "minimum setup run",
     badge: "TIMBER",
     image: "/images/gallery9.jpg",
     features: ["Durapost Fencing & Trellises", "Gazebo Assembly & Outbuildings", "Timber & Composite Decking Platforms"],
   },
   {
     active: true,
     featured: true,
     slug: "garden-transformation",
     name: "Garden Transformation",
     tagline: "Complete garden makeovers from scratch.",
     description: "Full garden redesigns — from overgrown or neglected spaces to stunning outdoor areas built around your lifestyle.",
     price: "£POA",
     priceLabel: "quoted on project scope",
     badge: "TRANSFORM",
     image: "/images/gallery7.jpg",
     features: ["Full Site Clearance", "Hard & Soft Landscaping", "Planting & Feature Design"],
   },
   {
     active: true,
     featured: true,
     slug: "driveway-installation",
     name: "Driveway Installation",
     tagline: "Kerb appeal that lasts decades.",
     description: "Professional driveway installations using block paving, resin bond, or porcelain — built on solid compacted sub-base foundations.",
     price: "£2,000",
     priceLabel: "starting rate for standard driveways",
     badge: "DRIVEWAY",
     image: "/images/service-driveway.jpg",
     features: ["Block Paving Driveways", "Resin & Tarmac Options", "Full Sub-Base Preparation"],
   },
   {
     active: true,
     featured: true,
     slug: "repaving",
     name: "Repaving",
     tagline: "Refresh. Restore. Reimagine.",
     description: "Remove old, cracked, or tired paving and replace with premium natural stone, porcelain, or block paving to new-build standards.",
     price: "£750",
     priceLabel: "starting for standard areas",
     badge: "REPAVING",
     image: "/images/service-repaving.jpg",
     features: ["Old Surface Removal", "New Stone & Block Laying", "Levels & Edge Detailing"],
   },
   {
     active: true,
     slug: "grids-gravel",
     name: "Grids & Gravel",
     tagline: "Low maintenance. High impact.",
     description: "Permeable gravel grid installations for driveways, paths, and parking — eco-friendly, drainage-compliant, and built to last.",
     price: "£500",
     priceLabel: "starting for standard areas",
     badge: "GRAVEL",
     image: "/images/service-grids-gravel.jpg",
     features: ["Grid & Membrane Installation", "Gravel & Stone Supply", "Drainage Compliant Laying"],
   },
   {
     active: true,
     slug: "block-paving",
     name: "Block Paving",
     tagline: "Classic finish. Structural integrity.",
     description: "Precision block paving for driveways, patios, and paths — laid on compacted MOT sub-base with full edging restraint systems.",
     price: "£1,200",
     priceLabel: "starting for standard areas",
     badge: "BLOCK PAV.",
     image: "/images/service-block-paving.jpg",
     features: ["Herringbone & Stretcher Bond Patterns", "Compacted MOT Sub-Base", "Full Edge Restraint System"],
   },
   {
     active: true,
     slug: "gazebo-installation",
     name: "Gazebo Installation",
     tagline: "Your outdoor retreat, built to last.",
     description: "Bespoke timber and composite gazebo structures designed and installed to enhance your outdoor living area year-round.",
     price: "£1,800",
     priceLabel: "starting for standard structures",
     badge: "GAZEBO",
     image: "/images/service-gazebo.jpg",
     features: ["Custom Timber Gazebos", "Decking & Base Installation", "Treated & Weather-Resistant Finishes"],
   },
   {
     active: true,
     slug: "shed-installation",
     name: "Shed Installation",
     tagline: "Practical storage. Professionally installed.",
     description: "Supply and installation of quality timber garden sheds, concrete bases, and outbuildings built to withstand the Suffolk weather.",
     price: "£600",
     priceLabel: "starting for standard installations",
     badge: "SHED",
     image: "/images/service-shed.jpg",
     features: ["Concrete & Slab Base Preparation", "Timber Shed Assembly", "Secure Anchoring & Weatherproofing"],
   },
   {
     active: true,
     slug: "back-garden-makeovers",
     name: "Back Garden Makeovers",
     tagline: "Transform the space behind your home.",
     description: "End-to-end back garden transformations combining paving, turfing, planting, and structural features into one seamless project.",
     price: "£POA",
     priceLabel: "quoted on project scope",
     badge: "MAKEOVER",
     image: "/images/service-back-garden.jpg",
     features: ["Full Design & Installation", "Paving, Turf & Planting", "Fencing & Feature Structures"],
   },
 ],

 // ─── GALLERY ─────────────────────────────────
 gallery: [
   { src: "/images/gallery1.jpg", category: "Hardscape" },
   { src: "/images/gallery2.jgp", category: "Design" },
   { src: "/images/gallery3.jpg", category: "Groundworks" },
   { src: "/images/gallery4.jpg", category: "Timber" },
   { src: "/images/gallery5.jpg", category: "Hardscape" },
   { src: "/images/gallery6.jpg", category: "Maintenance" },
   { src: "/images/gallery7.jpg", category: "Design" },
   { src: "/images/gallery8.jpg", category: "Groundworks" },
   { src: "/images/gallery9.jpg", category: "Hardscape" },
 ],

 // ─── TESTIMONIALS ────────────────────────────
 testimonials: [
   {
     active: true,
     name: "Sally H.",
     location: "Ipswich, Suffolk",
     rating: 5,
     text: "We contacted Dan after reading the 5 star reviews. We are delighted with our garden transformation. We found Dan and his team to be knowledgeable, hardworking and friendly. The garden was finished in good time considering the weather and everything was left clean and tidy.",
   },
   {
     active: true,
     name: "Jay C.",
     location: "Ipswich, Suffolk",
     rating: 5,
     text: "Dan and Ollie have totally transformed my unusable small sloped garden into a raised sleeper edged lawn. Delighted with the speed of work, adaptability to implement change and professionalism…..great work, many thanks.",
   },
   {
     active: true,
     name: "Margaret G.",
     location: "Ipswich, Suffolk",
     rating: 5,
     text: "I am very pleased with the work Dan and his team have carried out to provide me with a new driveway. The cracked concrete has been replaced by grids and gravel which has sorted out the standing water problems, and Dan’s suggestion of …",
   },
 ],

 // ─── FAQ ─────────────────────────────────────
 faq: [
   {
     question: "Do you offer free estimates?",
     answer: "Yes — all quotes and initial site evaluations are completely free and competitive, with zero long-term obligation required.",
   },
   {
     question: "Are you licensed and insured?",
     answer: "Fully licensed, certified, and fully insured. We operate with structural safety and comprehensive liability cover across every project site.",
   },
   {
     question: "Do you offer recurring maintenance plans?",
     answer: "Yes. Alongside major block-paving and excavation overhauls, we provide custom domestic and commercial maintenance arrangements.",
   },
   {
     question: "What areas do you serve?",
     answer: "We cover the whole of Ipswich and surrounding locations across Suffolk, Essex, and South East Anglia.",
   },
   {
     question: "How far in advance should I book?",
     answer: "Routine clearances or border care can frequently begin within a single week. Comprehensive patio builds, timber structures, and structural groundwork typically require 2–4 weeks booking lead time.",
   },
 ],

}