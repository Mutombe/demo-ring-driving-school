export const designTokens = {
  heroStyle: "editorial",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Ring Driving School",
    legalName: "Ring Driving School (Pvt) Ltd",
    tagline: "Learn to Drive with Confidence",
    description:
      "Harare's premier driving school offering comprehensive learner lessons, defensive driving, fleet training, and licence renewal services. Pass first time with expert instructors.",
    phone: "",
    phoneRaw: "",
    whatsappNumber: "",
    email: "info@ringdrivingschool.co.zw",
    address: "Corner Samora Machel Ave & Julius Nyerere Way, Harare",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.7,
    ratingRounded: 5,
    reviewCount: 128,
    established: "2008",
    yearsExperience: "16+",
    projectsCompleted: "15,000+",
    employees: "20+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "6:00 AM - 5:00 PM" },
      { day: "Saturday", time: "6:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "ring-driving-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "Ring",
    logoLine2: "Driving School",
  },

  hero: {
    badge: "Harare's Trusted Driving School",
    titleParts: [
      { text: "Learn to Drive " },
      { text: "with Confidence.", highlight: true },
    ],
    subtitle:
      "Expert instructors, modern vehicles, and a proven system that gets you on the road safely. Over 15,000 graduates and counting.",
    ctaPrimary: "Book a Lesson",
    ctaSecondary: "View Courses",
    trustBadge: "Government Certified",
    backgroundImage:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920",
    backgroundAlt:
      "Open road ahead representing the freedom of driving with confidence",
  },

  stats: [
    { number: "15,000+", label: "Graduates" },
    { number: "95%", label: "Pass Rate" },
    { number: "16+", label: "Years Experience" },
    { number: "20+", label: "Certified Instructors" },
  ],

  servicesPreview: [
    {
      iconName: "Car",
      title: "Learner Lessons",
      desc: "Comprehensive beginner courses from your very first lesson to test-day confidence. Manual and automatic options available.",
    },
    {
      iconName: "ShieldCheck",
      title: "Defensive Driving",
      desc: "Advanced hazard perception and accident avoidance techniques for experienced drivers who want to stay safe.",
    },
    {
      iconName: "Briefcase",
      title: "Fleet Training",
      desc: "Corporate driver training programmes for companies looking to reduce accident rates and insurance premiums.",
    },
    {
      iconName: "GraduationCap",
      title: "Licence Renewal",
      desc: "Hassle-free licence renewal assistance including medical tests, eye exams, and all required documentation.",
    },
    {
      iconName: "RoadHorizon",
      title: "Code 1-14 Vehicles",
      desc: "Training across all vehicle classes from motorcycles to heavy trucks. Get licensed for the vehicle you need.",
    },
    {
      iconName: "Rocket",
      title: "Refresher Courses",
      desc: "Returning to driving after a break? Our refresher programme rebuilds your confidence quickly and safely.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
      title: "Corporate Fleet Programme — Mining Co",
      category: "Fleet Training",
    },
    {
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
      title: "Youth Driving Safety Initiative",
      category: "Community",
    },
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
      title: "Heavy Vehicle Licensing Programme",
      category: "Commercial",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "The Road to " },
      { text: "Confidence", highlight: true },
      { text: " Starts Here" },
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
    imageAlt: "Driving instructor guiding a student through a lesson",
    experienceYears: "95%",
    experienceLabel: "First-Time Pass Rate",
    points: [
      {
        title: "Certified Instructors",
        desc: "Every instructor is government-certified with modern teaching methods. Patient, professional, and committed to your success.",
      },
      {
        title: "Modern Vehicle Fleet",
        desc: "Learn on well-maintained, dual-control vehicles with both manual and automatic transmission options.",
      },
      {
        title: "Flexible Scheduling",
        desc: "Early morning, afternoon, and weekend slots available. We work around your schedule, not the other way around.",
      },
      {
        title: "95% Pass Rate",
        desc: "Our structured curriculum and test preparation programme gives you the highest chance of passing first time in Harare.",
      },
    ],
  },

  homeCta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920",
    backgroundAlt: "Open road symbolising driving freedom and independence",
    titleParts: [
      { text: "Ready to Get " },
      { text: "Behind the Wheel", highlight: true },
      { text: "?" },
    ],
    subtitle:
      "Book your first lesson today. No experience needed. Our instructors will take you from zero to licence in as little as 6 weeks.",
    ctaPrimary: "Book Your First Lesson",
    whatsappText:
      "Hello Ring Driving School, I would like to book a driving lesson.",
  },

  homeTestimonials: [
    {
      name: "Nyasha Chikwanha",
      role: "First-Time Driver",
      text: "I was terrified of driving. Ring Driving School made me feel safe from day one. Passed my test on the first attempt. Cannot recommend them enough.",
      rating: 5,
    },
    {
      name: "Tatenda Muchena",
      role: "Corporate Fleet Manager",
      text: "We enrolled our entire delivery team in the fleet training programme. Accident rates dropped 60% in the first quarter. Outstanding results.",
      rating: 5,
    },
    {
      name: "Rumbidzai Pfende",
      role: "Returning Driver",
      text: "Had not driven in 8 years. The refresher course was exactly what I needed. Patient instructors and a structured approach that rebuilt my confidence completely.",
      rating: 5,
    },
  ],

  about: {
    heroTitle: [
      { text: "Driving " },
      { text: "Excellence", highlight: true },
      { text: " Since 2008" },
    ],
    heroSubtitle:
      "For over 16 years, Ring Driving School has been Harare's most trusted name in driver education, safety training, and road confidence.",
    storyImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
    storyImageAlt: "Ring Driving School instructors with students",
    storyProjectCount: "15,000+",
    storyProjectLabel: "Graduates Licensed",
    storyTitle: "From a Single Car to Harare's Largest Driving School",
    storyParagraphs: [
      "Ring Driving School was founded in 2008 with one car, one instructor, and a mission to make Harare's roads safer by producing better, more confident drivers.",
      "We built a structured curriculum based on international best practices, hired instructors who were patient and skilled, and invested in modern dual-control vehicles. The result: a 95% first-time pass rate.",
      "Today, Ring Driving School has graduated over 15,000 drivers across all vehicle classes. Our fleet training programme serves major companies, and our community safety initiatives have reached thousands.",
    ],
    mission:
      "To create safer roads by producing confident, skilled, and responsible drivers. Every lesson is an investment in road safety for all Zimbabweans.",
    vision:
      "To be Southern Africa's most respected driving school, recognised for innovation in driver education and outstanding pass rates.",
    values: [
      { iconName: "ShieldCheck", title: "Safety First", desc: "Road safety is non-negotiable. Every lesson is guided by our commitment to keeping people safe." },
      { iconName: "GraduationCap", title: "Education Excellence", desc: "Modern, research-backed teaching methods that produce confident, competent drivers." },
      { iconName: "Heart", title: "Patience", desc: "Learning to drive is stressful. Our instructors create a calm, supportive environment." },
      { iconName: "Trophy", title: "Results", desc: "95% first-time pass rate. Rigorous curriculum and dedicated instructors." },
      { iconName: "Users", title: "Community", desc: "We invest in road safety education for schools, youth groups, and communities." },
      { iconName: "Lightbulb", title: "Innovation", desc: "From hazard perception simulation to online theory resources, we continuously modernise." },
    ],
    team: [
      { name: "Richard Moyo", role: "Founder & Head Instructor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
      { name: "Grace Mupfumira", role: "Operations Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
      { name: "Tendai Chidziva", role: "Senior Instructor — Heavy Vehicles", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
      { name: "Nyasha Banda", role: "Fleet Training Coordinator", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
    ],
    milestones: [
      { year: "2008", title: "Ring Driving School Founded", desc: "Started with one vehicle and a mission to produce better drivers." },
      { year: "2011", title: "1,000th Graduate", desc: "Reached 1,000 licensed drivers with growing reputation." },
      { year: "2014", title: "Fleet Training Division", desc: "Launched corporate fleet training for mining and logistics companies." },
      { year: "2017", title: "Heavy Vehicle Licensing", desc: "Expanded to offer Code 10-14 licensing for trucks and buses." },
      { year: "2020", title: "10,000 Graduates", desc: "Crossed 10,000 graduates despite pandemic disruptions." },
      { year: "2024", title: "15,000+ Graduates", desc: "Harare's largest independent driving school." },
    ],
    ctaTitle: "Start Your Driving Journey",
    ctaSubtitle: "Book your first lesson and join 15,000+ confident drivers.",
    ctaCta: "Book a Lesson",
  },

  services: {
    heroTitle: [
      { text: "Every Licence. " },
      { text: "Every", highlight: true },
      { text: " Vehicle Class." },
    ],
    heroSubtitle:
      "From first-time learners to heavy vehicle operators, we offer comprehensive training for every stage of your driving journey.",
    items: [
      {
        iconName: "Car",
        title: "Learner Lessons",
        slug: "learner-lessons",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900",
        desc: "Our flagship course takes you from absolute beginner to test-ready driver. Learn vehicle control, road rules, hazard awareness, and test route practice.",
        features: [
          "10, 20, or 30-lesson packages available",
          "Manual and automatic transmission options",
          "Dual-control vehicles for maximum safety",
          "Highway, urban, and parking practice",
          "Mock test sessions on actual test routes",
          "Free theory support materials included",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "Defensive Driving",
        slug: "defensive-driving",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900",
        desc: "Advanced techniques for experienced drivers. Master hazard perception, accident avoidance, and high-risk driving scenarios.",
        features: [
          "Advanced hazard perception training",
          "Emergency braking and evasive manoeuvres",
          "Wet weather and night driving techniques",
          "Intersection safety and right-of-way mastery",
          "Vehicle dynamics and tyre management",
          "Internationally recognised certification",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Fleet Training",
        slug: "fleet-training",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
        desc: "Corporate driver training that reduces accident rates and lowers insurance premiums. Customised programmes for fleets of any size.",
        features: [
          "Driver risk assessment and profiling",
          "Customised training modules per company",
          "On-site training at your facilities",
          "Practical and theory components",
          "Post-training performance monitoring",
          "Compliance documentation and certificates",
        ],
      },
      {
        iconName: "GraduationCap",
        title: "Licence Renewal",
        slug: "licence-renewal",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900",
        desc: "We handle the entire licence renewal process. From medical tests to document submission, we manage every step.",
        features: [
          "Complete documentation assistance",
          "Medical and eye test coordination",
          "VID appointment scheduling",
          "Same-day processing where possible",
          "All licence classes supported",
          "Corporate bulk renewal discounts",
        ],
      },
      {
        iconName: "RoadHorizon",
        title: "Code 1-14 Vehicles",
        slug: "code-1-14",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900",
        desc: "Training for every vehicle class on Zimbabwean roads. From motorcycles to heavy trucks and articulated vehicles.",
        features: [
          "Code 1: Motorcycles",
          "Code 2-4: Light vehicles (manual & auto)",
          "Code 8: Light rigid trucks",
          "Code 10: Heavy rigid trucks",
          "Code 12: Articulated vehicles",
          "Code 14: Extra-heavy combinations",
        ],
      },
      {
        iconName: "Rocket",
        title: "Refresher Courses",
        slug: "refresher-courses",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
        desc: "Returning to driving after a break? Our refresher programme rebuilds confidence and sharpens skills quickly.",
        features: [
          "Skills assessment to identify gaps",
          "Focused training on weak areas",
          "Confidence-building exercises",
          "Highway re-introduction sessions",
          "Parking and manoeuvring refresher",
          "Typically 5-10 lessons required",
        ],
      },
    ],
    ctaTitle: "Ready to Start?",
    ctaSubtitle: "Choose your course and book your first lesson. We will have you driving confidently in no time.",
  },

  projects: {
    heroTitle: [
      { text: "Success " },
      { text: "Stories", highlight: true },
      { text: " on Every Road" },
    ],
    heroSubtitle:
      "From corporate fleet programmes to community safety initiatives, explore our impact across Zimbabwe.",
    categories: ["All", "Fleet Training", "Community", "Commercial", "Youth"],
    items: [
      {
        id: 1,
        title: "Mining Corp Fleet Safety Programme",
        category: "Fleet Training",
        location: "Harare / Midlands",
        year: "2024",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
        desc: "Trained 120 drivers, reducing incident rates by 60% and saving over $200K in insurance premiums within 12 months.",
        services: ["Fleet Training", "Defensive Driving"],
      },
      {
        id: 2,
        title: "Youth Road Safety Initiative",
        category: "Youth",
        location: "Harare Schools",
        year: "2024",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
        desc: "Partnered with 15 secondary schools to deliver road safety awareness reaching over 3,000 students.",
        services: ["Community Programme"],
      },
      {
        id: 3,
        title: "Logistics Company — Code 14 Licensing",
        category: "Commercial",
        location: "Harare",
        year: "2023",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        desc: "Licensed 45 heavy vehicle operators. All candidates passed on first or second attempt.",
        services: ["Code 1-14 Vehicles", "Fleet Training"],
      },
      {
        id: 4,
        title: "Women in Driving Programme",
        category: "Community",
        location: "Harare",
        year: "2023",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
        desc: "Subsidised driving lessons for 50 women. 48 out of 50 passed on first attempt.",
        services: ["Learner Lessons", "Licence Renewal"],
      },
      {
        id: 5,
        title: "Government Vehicle Inspection Training",
        category: "Commercial",
        location: "VID Headquarters",
        year: "2024",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
        desc: "Advanced vehicle inspection training for government VID officers across 8 testing centres.",
        services: ["Defensive Driving", "Fleet Training"],
      },
      {
        id: 6,
        title: "Ride-Share Driver Certification",
        category: "Commercial",
        location: "Harare",
        year: "2025",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        desc: "Specialised certification programme for ride-share drivers covering safety and defensive driving.",
        services: ["Defensive Driving", "Fleet Training"],
      },
    ],
    ctaTitle: "Join Our Success Stories",
    ctaSubtitle: "Whether learning to drive or training a fleet, Ring Driving School delivers results.",
  },

  contact: {
    heroTitle: [
      { text: "Book Your " },
      { text: "First Lesson", highlight: true },
    ],
    heroSubtitle:
      "Ready to get behind the wheel? Contact us to schedule your first lesson or enquire about our courses.",
    formTitle: "Get in Touch",
    formSubtitle: "Fill in your details and we will respond within 24 hours.",
  },

  footer: {
    tagline: "Learn to Drive with Confidence",
    description:
      "Ring Driving School is Harare's premier driving school offering learner lessons, defensive driving, fleet training, licence renewal, and Code 1-14 vehicle licensing.",
    servicesTitle: "Our Courses",
    companyTitle: "Company",
    contactTitle: "Contact",
    copyright: "Ring Driving School (Pvt) Ltd",
  },

  reviews: {
    heroTitle: "What Our Clients Say",
    heroSubtitle: "Real feedback from businesses and individuals we've served.",
    overallRating: 4.8,
    totalReviews: 12,
    ratingBreakdown: { 5: 8, 4: 3, 3: 1, 2: 0, 1: 0 },
    items: [
      { name: "Tendai Moyo", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", role: "Business Owner", text: "Exceptional service from start to finish. Professional, reliable, and delivered exactly what was promised. Highly recommend.", rating: 5, date: "2025-11-15", projectType: "Commercial" },
      { name: "Sarah Ncube", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", role: "Operations Manager", text: "Outstanding quality and attention to detail. The team went above and beyond our expectations.", rating: 5, date: "2025-10-22", projectType: "Residential" },
      { name: "James Mutasa", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", role: "Director", text: "Professional approach and excellent communication throughout the project. Would definitely work with them again.", rating: 5, date: "2025-09-18", projectType: "Commercial" },
      { name: "Grace Chikwanha", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", role: "Homeowner", text: "Great value for money. The quality exceeded what we expected at this price point.", rating: 4, date: "2025-08-30", projectType: "Residential" },
      { name: "Peter Dube", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", role: "Project Manager", text: "Reliable and efficient. They completed the work on time and within budget.", rating: 5, date: "2025-07-14", projectType: "Commercial" },
      { name: "Rudo Mapfumo", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", role: "CEO", text: "Impressed by their professionalism and the quality of their work. A trusted partner.", rating: 5, date: "2025-06-20", projectType: "Industrial" },
      { name: "David Chirume", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", role: "Facility Manager", text: "Solid work, good communication, fair pricing. Everything you want in a service provider.", rating: 4, date: "2025-05-11", projectType: "Commercial" },
      { name: "Linda Sithole", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", role: "Property Developer", text: "They understood our vision and delivered beautifully. The attention to detail was remarkable.", rating: 5, date: "2025-04-28", projectType: "Residential" },
      { name: "Michael Banda", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face", role: "Engineer", text: "Technical expertise is top-notch. They solved problems we didnt even know we had.", rating: 5, date: "2025-03-15", projectType: "Industrial" },
      { name: "Nyasha Gumbo", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", role: "Procurement Officer", text: "Responsive, professional, and competitively priced. Our go-to provider.", rating: 4, date: "2025-02-08", projectType: "Commercial" },
      { name: "Robert Zvobgo", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face", role: "Contractor", text: "Reliable partner. They deliver what they promise, every time.", rating: 5, date: "2025-01-22", projectType: "Construction" },
      { name: "Chiedza Mapondera", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&h=100&fit=crop&crop=face", role: "School Administrator", text: "Wonderful experience. The team was courteous, professional, and efficient.", rating: 5, date: "2024-12-10", projectType: "Institutional" },
    ],
  },
};

export default siteData;
