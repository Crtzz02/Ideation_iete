// Centralized Event Configuration for IDEATION
// The committee/head can easily update all event details, links, dates, and contacts here!

export const eventConfig = {
  // Brand & Headline Settings
  eventName: "IDEATION '26",
  eventSubtitle: "Idea Presentation Competition",
  organizer: "IETE Student Forum",
  organizerFull: "Institution of Electronics and Telecommunication Engineers",
  tagline: "Pitch your idea. Own the stage.",
  approvedTaglineNotice: "[TEMP TAGLINE] Official committee head tagline will update here.",
  
  // Event Key Meta Information
  eventDateDisplay: "October 24 - 25, 2026",
  eventTimeDisplay: "09:00 AM - 05:00 PM IST",
  eventVenueDisplay: "Main Campus Auditorium & Online Hybrid",
  eligibilityDisplay: "Open to All Engineering, Tech & Science Students",
  
  // Target date for live countdown timer (ISO format: YYYY-MM-DDTHH:mm:ss)
  countdownTarget: "2026-10-24T09:00:00+05:30",
  
  // Google Form Link (Will be updated by head; if set to fallback mode, site uses built-in form)
  googleFormLink: "https://forms.google.com/sample-ideation-registration-link",
  useExternalGoogleForm: false, // Set to true if committee prefers redirecting directly to Google Form

  // Notice for team / admin preview
  adminNotice: {
    enabled: true,
    message: "⚡ Temporary Event Data Loaded — Update real dates, prizes, tracks, rules, FAQs & Google Form link in src/config/eventConfig.js once received from Committee Head."
  },

  // Section 03: About The Event
  about: {
    badge: "HUMAN × AI ERA",
    heading: "Where Visionary Ideas Become Breakthroughs",
    paragraphs: [
      "IDEATION is IETE's flagship Idea Presentation Competition where student innovators pitch groundbreaking tech concepts before industry experts.",
      "Open to all branches and years. Turn your draft into reality, earn national recognition, and compete for ₹50,000+ in prizes and incubation support."
    ],
    highlights: [
      { number: "₹50,000+", label: "Prize Pool & Grants" },
      { number: "6+", label: "Innovative Problem Tracks" },
      { number: "500+", label: "Expected Innovators" },
      { number: "1:1", label: "Industry Mentorship" }
    ]
  },

  // Section 04: Themes & Problem Tracks
  tracks: [
    {
      id: "ai-health",
      icon: "Activity",
      title: "Healthcare & Biotech AI",
      tagline: "Smart Diagnostics & Patient Care",
      description: "Pioneering AI algorithms, wearable health telemetry, early-detection diagnostics, and bio-tech solutions for accessible medical infrastructure.",
      sampleTopics: ["AI early symptom detection", "Remote patient monitoring", "Smart prosthetic control", "Genetic data analytics"]
    },
    {
      id: "edtech-ai",
      icon: "GraduationCap",
      title: "Smart Education & EdTech",
      tagline: "Adaptive & Immersive Learning",
      description: "Transforming learning experiences with personalized AI tutors, immersive AR/VR labs, accessibility tools, and automated skill mapping.",
      sampleTopics: ["Adaptive learning path generators", "VR science laboratory simulators", "AI anti-cheat assessment tools"]
    },
    {
      id: "social-good",
      icon: "Globe",
      title: "AI for Social Good & Green Tech",
      tagline: "Sustainability & Climate Resilience",
      description: "Addressing global societal challenges—clean energy optimization, carbon footprint tracking, disaster relief robotics, and smart agriculture.",
      sampleTopics: ["Precision agriculture & crop disease AI", "Smart water distribution management", "Renewable energy grid forecasting"]
    },
    {
      id: "robotics-iot",
      icon: "Cpu",
      title: "Automation, Robotics & IoT",
      tagline: "Hardware × Software Fusion",
      description: "Autonomous micro-robots, IoT smart sensors, industrial automation, edge computing, and sensor fusion applications.",
      sampleTopics: ["Autonomous drone surveillance", "Smart factory defect detection", "Edge AI for embedded devices"]
    },
    {
      id: "smart-cities",
      icon: "Building2",
      title: "Smart Cities & Infrastructure",
      tagline: "Intelligent Urban Mobility",
      description: "Next-gen urban planning, real-time traffic signal optimization, intelligent waste management, and green building telemetry.",
      sampleTopics: ["Traffic bottleneck prediction", "Smart municipal waste collection", "EV charging network optimization"]
    },
    {
      id: "fintech-web3",
      icon: "ShieldCheck",
      title: "FinTech & Cybersecurity",
      tagline: "Secure Digital Financial Systems",
      description: "AI-driven fraud prevention, biometric authorization, decentralized privacy protocols, and secure transaction verification.",
      sampleTopics: ["Real-time transaction fraud detection", "Zero-knowledge identity verification", "Cyber threat hunting bots"]
    }
  ],

  // Section 05: Event Timeline / Schedule
  timeline: [
    {
      step: "01",
      date: "September 15, 2026",
      time: "10:00 AM",
      title: "Registration & Abstract Submission Opens",
      description: "Submit your team details and a 2-page idea abstract outlining problem statement, proposed methodology, and key impact.",
      status: "upcoming"
    },
    {
      step: "02",
      date: "October 10, 2026",
      time: "11:59 PM",
      title: "Registration Deadline",
      description: "Final deadline to register team members and submit initial presentation abstracts. Late entries will not be accepted.",
      status: "upcoming"
    },
    {
      step: "03",
      date: "October 15, 2026",
      time: "06:00 PM",
      title: "Shortlisted Teams Announced",
      description: "Top selected entries move forward to the preparation stage and receive jury feedback for pitch deck refining.",
      status: "upcoming"
    },
    {
      step: "04",
      date: "October 18, 2026",
      time: "04:00 PM",
      title: "Mentorship & Pitch Deck Masterclass",
      description: "Exclusive online interactive session with pitch experts on slide design, business viability, and presentation delivery.",
      status: "upcoming"
    },
    {
      step: "05",
      date: "October 24, 2026",
      time: "09:30 AM",
      title: "Main Event: Pitch Presentation Day",
      description: "Live 8-minute pitch + 4-minute Q&A with judge panel. Demonstrations, prototypes, and slides evaluated in person/online.",
      status: "upcoming"
    },
    {
      step: "06",
      date: "October 25, 2026",
      time: "03:00 PM",
      title: "Grand Finale & Prize Distribution",
      description: "Valedictory ceremony, keynote address by industry leaders, award ceremony, and certificate distribution.",
      status: "upcoming"
    }
  ],

  // Section 06: Prizes & Recognition
  prizes: {
    podium: [
      {
        rank: 1,
        title: "1st Place Winner",
        badge: "🥇 Champion",
        amount: "₹15,000",
        perks: [
          "Official Champion Trophy & Medals",
          "Certificate of Distinction from IETE",
          "6-Month Incubation & Patent Assistance",
          "Direct Mentorship with Industry CTOs",
          "Featured Spotlight in IETE Tech Magazine"
        ],
        highlightColor: "gold"
      },
      {
        rank: 2,
        title: "2nd Place Runner-Up",
        badge: "🥈 First Runner-Up",
        amount: "₹10,000",
        perks: [
          "Runner-Up Trophy & Medals",
          "Certificate of Distinction from IETE",
          "3-Month Incubation Mentorship",
          "Voucher Credits for Cloud Computing"
        ],
        highlightColor: "silver"
      },
      {
        rank: 3,
        title: "3rd Place Runner-Up",
        badge: "🥉 Second Runner-Up",
        amount: "₹5,000",
        perks: [
          "Second Runner-Up Trophy & Medals",
          "Certificate of Distinction from IETE",
          "Tech Goodies & Swag Kit"
        ],
        highlightColor: "bronze"
      }
    ],
    specialCategory: [
      {
        title: "Most Innovative Idea Award",
        reward: "₹5,000 + Trophy",
        description: "Awarded to the team demonstrating the highest degree of novelty and creative technical approach."
      },
      {
        title: "Best Pitch & Presentation",
        reward: "₹5,000 + Trophy",
        description: "Awarded for exceptional slide design, public speaking, structured Q&A defense, and clarity."
      },
      {
        title: "All Participants",
        reward: "National E-Certificates",
        description: "Official verified IETE Certificate of Participation awarded to every registered team that presents."
      }
    ]
  },

  // Section 07: Rules & Guidelines
  rules: [
    {
      id: "eligibility",
      title: "Eligibility & Team Composition",
      icon: "Users",
      rules: [
        "Teams can consist of 1 to 4 members.",
        "Open to undergraduate (B.E./B.Tech/B.Sc/B.CA) and postgraduate (M.Tech/M.Sc/M.CA) students from any discipline.",
        "Cross-department and inter-college team formations are encouraged.",
        "Each participant can be a member of only ONE registered team."
      ]
    },
    {
      id: "idea",
      title: "Idea Originality & Submission Rules",
      icon: "Lightbulb",
      rules: [
        "The submitted concept must be original work of the team.",
        "Plagiarism, copying existing patent implementations without credit, or submitting identical work from prior competitions is strictly prohibited.",
        "Submissions must include a 2-page PDF abstract covering: Problem Statement, Proposed Solution, Tech Stack, and Expected Impact."
      ]
    },
    {
      id: "presentation",
      title: "Presentation Format & Time Limits",
      icon: "Monitor",
      rules: [
        "Pitch Duration: 8 Minutes for slide deck presentation + 4 Minutes for Jury Q&A.",
        "Presentation slides must be submitted in PDF / PPTX format at least 3 hours prior to session start.",
        "Working prototypes, hardware demos, or live software POCs earn bonus evaluation points."
      ]
    },
    {
      id: "judging",
      title: "Judging Criteria Breakdown",
      icon: "CheckCircle2",
      rules: [
        "Innovation & Originality (30 Points)",
        "Technical Feasibility & Implementation Plan (25 Points)",
        "Societal Impact & Practical Application (25 Points)",
        "Presentation Clarity & Q&A Defense (20 Points)"
      ]
    }
  ],

  // Section 09: Frequently Asked Questions
  faqs: [
    {
      question: "Who can participate in IDEATION '26?",
      answer: "IDEATION is open to all current undergraduate and postgraduate students from any academic branch or college. Whether you study CS, ECE, Mechanical, Biotechnology, or Business, you are eligible to register."
    },
    {
      question: "What is the maximum team size?",
      answer: "Teams can have between 1 to 4 members. You can register as an individual lone innovator or create a team of up to 4 students."
    },
    {
      question: "Is there any registration fee?",
      answer: "No! Registration for IDEATION '26 is completely FREE for all student teams."
    },
    {
      question: "Does my idea have to be fully coded or built?",
      answer: "No. IDEATION is an Idea Presentation Competition. You do not need a 100% finished product. However, having proof-of-concept wireframes, architecture diagrams, or hardware mockups will strengthen your presentation score."
    },
    {
      question: "Can team members be from different colleges or departments?",
      answer: "Yes! Inter-college and multi-disciplinary teams are warmly welcomed and encouraged."
    },
    {
      question: "What format should the final presentation be in?",
      answer: "Presentations should be delivered using a slide deck (PPTX or PDF) within an 8-minute window, followed by a 4-minute Q&A session with the judges."
    },
    {
      question: "Will all participants receive certificates?",
      answer: "Yes! All verified participants who complete their presentation will receive an official digital Certificate of Participation backed by the IETE student forum."
    },
    {
      question: "What happens if we receive new updates from the committee?",
      answer: "The site is built dynamically. Updates to tracks, deadlines, prizes, and links will reflect automatically as soon as the committee head updates the configuration file."
    }
  ],

  // Section 10: Coordinator Contacts & Social Links
  coordinators: [
    {
      name: "Sholk",
      phone: "+91 7678016216",
      
      
    },
    {
      name: "Ayaan",
      
      phone: "+91 8779792225",
     
    },
   
  ],

  // Social handles & Footer Links
  socialLinks: {
    instagram: "https://instagram.com/iete_student_forum",
    linkedin: "https://linkedin.com/company/iete-student-chapter",
    twitter: "https://twitter.com/iete_official",
    github: "https://github.com/iete-web-team",
    youtube: "https://youtube.com/@iete_events"
  },

  footer: {
    address: "IETE Student Chapter, Department of Electronics & Telecommunication Engineering",
    copyright: "© 2026 IDEATION - IETE. All rights reserved.",
    tagline: "Empowering Next-Generation Tech Innovators"
  }
};
