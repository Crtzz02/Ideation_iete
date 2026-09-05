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
  eventDateDisplay: "September 30th, 2026",
  eventTimeDisplay: "09:00 AM - 05:00 PM IST",
  eventVenueDisplay: "GST Auditorium, SIES GST, Nerul",
  eligibilityDisplay: "Open to All Engineering, Tech & Science Students",
  
  // Target date for live countdown timer (ISO format: YYYY-MM-DDTHH:mm:ss)
  countdownTarget: "2026-09-30T09:00:00+05:30",
  
  // Official External Registration Links
  unstopLink: "https://unstop.com/o/3B4bZaP?utm_medium=Share&utm_source=ietesie2631&utm_campaign=Online_coding_challenge",
  googleFormLink: "https://forms.cloud.microsoft/r/qZgBQRDG3g",

  // Notice for team / admin preview
  adminNotice: {
    enabled: false,
    message: ""
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
      { number: "₹30,000+", label: "Prize Pool" },
      { number: "Exciting", label: "Goodies" },
      { number: "National", label: "Participation Certificates" }
    ]
  },

  // Section 04: Themes & Problem Tracks
  tracksNotice: "🔒 Problem Statements (PS) will be revealed live on Event Day (September 30th, 2026).",
  tracks: [
    {
      id: "ai-health",
      icon: "Activity",
      title: "Healthcare & Biotech AI",
      tagline: "Smart Diagnostics & Patient Care",
      description: "Pioneering AI algorithms, wearable health telemetry, early-detection diagnostics, and bio-tech solutions for accessible medical infrastructure."
    },
    {
      id: "edtech-ai",
      icon: "GraduationCap",
      title: "Smart Education & EdTech",
      tagline: "Adaptive & Immersive Learning",
      description: "Transforming learning experiences with personalized AI tutors, immersive AR/VR labs, accessibility tools, and automated skill mapping."
    },
    {
      id: "social-good",
      icon: "Globe",
      title: "AI for Social Good & Green Tech",
      tagline: "Sustainability & Climate Resilience",
      description: "Addressing global societal challenges—clean energy optimization, carbon footprint tracking, disaster relief robotics, and smart agriculture."
    },
    {
      id: "robotics-iot",
      icon: "Cpu",
      title: "Automation, Robotics & IoT",
      tagline: "Hardware × Software Fusion",
      description: "Autonomous micro-robots, IoT smart sensors, industrial automation, edge computing, and sensor fusion applications."
    },
    {
      id: "smart-cities",
      icon: "Building2",
      title: "Smart Cities & Infrastructure",
      tagline: "Intelligent Urban Mobility",
      description: "Next-gen urban planning, real-time traffic signal optimization, intelligent waste management, and green building telemetry."
    },
    {
      id: "fintech-web3",
      icon: "ShieldCheck",
      title: "FinTech & Cybersecurity",
      tagline: "Secure Digital Financial Systems",
      description: "AI-driven fraud prevention, biometric authorization, decentralized privacy protocols, and secure transaction verification."
    }
  ],

  // Section 05: Event Timeline / Schedule
  timeline: [
    {
      step: "01",
      date: "September 5, 2026",
      time: "10:00 AM",
      title: "Registration Opens",
      description: "Registration opens for all student teams.",
      status: "completed"
    },
    {
      step: "02",
      date: "September 24, 2026",
      time: "11:59 PM",
      title: "Registration Deadline",
      description: "Final date to submit team registration.",
      status: "upcoming"
    },
    {
      step: "03",
      date: "September 30, 2026",
      time: "09:00 AM",
      title: "Main Event: Pitch Presentation Day",
      description: "Live pitch presentation at GST Auditorium, SIES GST, Nerul.",
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
          "Exciting Goodies"
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
          "Exciting Goodies"
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
          "Exciting Goodies"
        ],
        highlightColor: "bronze"
      }
    ],
    specialCategory: [
      {
        title: "All Participants",
        reward: "Participation Certificates",
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
      answer: "Fees: Non-IETE Members (Team of 3: ₹400, Team of 4: ₹450), IETE Members (Team of 3: ₹200, Team of 4: ₹250)."
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
    }
  ],

  // Section 10: Coordinator Contacts & Social Links
  coordinators: [
    {
      name: "Shlok",
      role: "Event Coordinator",
      phone: "+91 76780 16216",
      whatsapp: "https://wa.me/917678016216",
      avatarBg: "linear-gradient(135deg, #1A5CFF, #00C8FF)"
    },
    {
      name: "Ayaan",
      role: "Event Coordinator",
      phone: "+91 87797 92225",
      whatsapp: "https://wa.me/918779792225",
      avatarBg: "linear-gradient(135deg, #00C8FF, #9D4EDD)"
    }
  ],

  // Official Email & Social handles
  officialEmail: "iete-council@siesgst.ac.in",
  socialLinks: {
    instagram: "https://www.instagram.com/iete_siesgst?igsi=OWZyMDZra2FsZGR1",
    linkedin: "https://www.linkedin.com/company/iete-siesgst/"
  },

  footer: {
    address: "IETE Student Chapter, Department of Electronics & Telecommunication Engineering",
    copyright: "© 2026 IDEATION - IETE. All rights reserved.",
    tagline: "Empowering Next-Generation Tech Innovators"
  }
};
