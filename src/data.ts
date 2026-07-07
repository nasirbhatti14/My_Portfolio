import { SkillCategory, TimelineItem, ProjectItem, CertificationItem } from './types';

export const personalInfo = {
  name: "Nasir Iqbal",
  headline: "Software Engineering Student | Python Developer",
  tagline: "Python developer | MySQL | Exploring AI & Machine Learning | Backend & Data Automation Enthusiast.",
  location: "Bahawalpur, Pakistan",
  email: "nasir.bhatti.dev@gmail.com",
  phone: "+92 317 1825630",
  linkedin: "https://linkedin.com/in/nasir-iqbal-se",
  github: "https://github.com/nasirbhatti14",
  avatarUrl: "/src/assets/images/nasir_avatar_1783373283273.jpg",
  bio: "Software Engineering student with a strong interest in programming, databases, and software development. Familiar with Python, SQL, and object-oriented programming concepts. Quick learner with good problem-solving skills, eager to gain practical experience and contribute to a professional team environment."
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    title: "Frameworks & Technologies",
    icon: "Cpu",
    skills: [
      { name: "Django", level: 50 },
      { name: "NumPy", level: 70 }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "MySQL", level: 75 }
    ]
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: "exp-1",
    role: "Software Development Intern",
    organization: "DeveloperHub Corporation",
    period: "May 2026 - Present",
    location: "Remote / Pakistan",
    type: "experience",
    details: [
      "Built web-based applications and software projects using Python and modern web technologies.",
      "Applied programming, database design, and object-oriented concepts to university and client projects.",
      "Collaborated with developers in writing clean, documented, and reusable codebase."
    ]
  },
  {
    id: "exp-2",
    role: "Twitter Outreach & Engagement Coordinator",
    organization: "Social Sphere Solutions",
    period: "March 2026 - April 2026",
    location: "Remote",
    type: "experience",
    details: [
      "Managed and grew company's presence on Twitter through targeted professional engagement.",
      "Created and posted engaging technical content, including informational threads and replies, to boost visibility.",
      "Analyzed engagement metrics to double direct traffic and grow outreach channels."
    ]
  },
  {
    id: "edu-1",
    role: "Bachelor of Software Engineering",
    organization: "The Islamia University of Bahawalpur (IUB)",
    period: "2025 - 2029",
    location: "Bahawalpur, Pakistan",
    type: "education",
    details: [
      "Current CGPA: 3.69 / 4.00",
      "Relevant Coursework: Object Oriented Programming (OOP), Data Structures & Algorithms, Digital Logic Design, Python Fundamentals, Database Management Systems (DBMS)."
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "expense-tracker",
    title: "Student Expense Tracker",
    description: "A simple command-line expense tracking application built with Python. Helps users record daily expenses, view expense history, calculate total spending, categorise receipts, and persist data locally using structured JSON storage.",
    tags: ["Python", "JSON", "CLI", "File I/O"],
    status: "active",
    hasTerminalSimulator: true,
    githubUrl: "https://github.com/nasirbhatti14/Student_Expense_Tracker"
  },
  {
    id: "library-management",
    title: "Library Management System",
    description: "A comprehensive digital cataloging and database system to manage book collections, student memberships, and loan trackings. Developed using Python with MySQL as the relational storage engine.",
    tags: ["Python", "MySQL", "SQL", "Database Systems"],
    status: "active",
    githubUrl: "https://github.com/nasirbhatti14/Library_Management_System"
  },
  {
    id: "coming-soon-1",
    title: "Django REST APIs Project",
    description: "An advanced student portal web API featuring custom authentication, course registration workflows, and secure database indexing with MySQL. Under development to practice scalable Django Rest Framework patterns.",
    tags: ["Django", "DRF", "MySQL", "REST API"],
    status: "coming-soon"
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Django REST APIs Certificate",
    issuer: "SimpliLearn SkillUp",
    date: "May 2026",
    description: "Certified in Django REST APIs with hands-on experience in building structured web APIs, configuring routes, serializers, views, and performing database migrations with Python and Django.",
    credentialUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMTMwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAxNzYyNzhfMTA0MjM1NDVfMTc3NzY0MjMwNDE5Mi5wbmciLCJ1c2VybmFtZSI6Ik5BU0lSIElRQkFMIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F5897%2FPython%2520Django%2520101%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1595707044996461589&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVr3ROM3T3L3ULNEqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUApNyCQD8AAAA%3D"
  }
];

// Helper to generate text resume
export function generateTextResume(): string {
  return `================================================================
NASIR IQBAL - SOFTWARE ENGINEERING STUDENT & PYTHON DEVELOPER
================================================================
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}

----------------------------------------------------------------
PROFESSIONAL SUMMARY
----------------------------------------------------------------
${personalInfo.bio}

----------------------------------------------------------------
EDUCATION
----------------------------------------------------------------
Bachelor of Software Engineering (2025 - 2029)
The Islamia University of Bahawalpur (IUB), Pakistan
Current CGPA: 3.69/4.00

Key Coursework:
- Object Oriented Programming & Algorithms
- Digital Logic Design
- Python Fundamentals
- Database Systems

----------------------------------------------------------------
TECHNICAL SKILLS
----------------------------------------------------------------
- Languages: Python, SQL
- Frameworks/Tech: Django, NumPy
- Tools/Platforms: Git, GitHub, VS Code, MySQL

----------------------------------------------------------------
WORK EXPERIENCE
----------------------------------------------------------------
1. Software Development Intern (May 2026 - Present)
   DeveloperHub Corporation, Pakistan
   - Built web-based applications and software projects using Python.
   - Applied programming and problem-solving skills in university and corporate settings.

2. Twitter Outreach Coordinator (March 2026 - April 2026)
   Social Sphere Solutions, Remote
   - Managed company's Twitter presence, created engaging technical threads.
   - Boosted visibility and organic brand growth through targeted engagement.

----------------------------------------------------------------
PROJECTS & CERTIFICATIONS
----------------------------------------------------------------
- Student Expense Tracker: CLI app in Python storing expenditures in JSON.
- Django REST APIs Certificate: Issued by SimpliLearn SkillUp (May 2026).

================================================================
Generated via Nasir Iqbal's Web Portfolio on ${new Date().toLocaleDateString()}
================================================================`;
}
