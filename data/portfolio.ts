export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools';
  level: number; // 1-5
}

export interface Experience {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  type: 'work' | 'education';
  location?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  liveUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  valueProposition: string;
  about: string;
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Kathan Parag Shah",
  title: "Computer Science and Economics Major",
  valueProposition: "Building innovative solutions with modern technologies",
  about: "My journey into the intersection of technology and economics began with a fascination for how digital systems can solve real world problems and drive economic growth. As a Computer Science and Economics double major at Arizona State University I have seen firsthand that the most impactful solutions emerge when technical innovation meets economic insight. What drives me is the potential to build technology that not only functions beautifully but also generates meaningful economic value.\n\nWhether I am building full stack applications or analyzing market trends I approach each challenge with the belief that great software should be both technically robust and economically viable. When I am not prototyping new features or digging into data you will find me exploring new cities, gliding across the ice at my local rink or curled up with a classic 1990s movie. Travel, ice skating and vintage cinema keep my creativity sharp and remind me that the best ideas often come from life outside the code.",
  email: "kathanshah04@gmail.com",
  phone: "+1 (602) 815-0971",
  location: "Tempe, AZ",
  linkedin: "https://www.linkedin.com/in/kathan-shah-90ba43263/",
  github: "https://github.com/kathanparagshah",
  resumeUrl: "/Kathan Parag Shah | CV.pdf"
};

export const skills: Skill[] = [
  // Top 5 Languages - Most Important for Data Science
  { name: "Python", category: "Languages", level: 92 },
  { name: "R", category: "Languages", level: 78 },
  { name: "SQL", category: "Languages", level: 85 },
  { name: "Julia", category: "Languages", level: 65 },
  { name: "Scala", category: "Languages", level: 62 },
  
  // Top 5 Frameworks & Libraries - Core Data Science Tools
  { name: "NumPy", category: "Frameworks", level: 90 },
  { name: "Pandas", category: "Frameworks", level: 88 },
  { name: "Scikit-learn", category: "Frameworks", level: 82 },
  { name: "Matplotlib", category: "Frameworks", level: 87 },
  { name: "Seaborn", category: "Frameworks", level: 85 },
  
  // Top 5 Tools - Essential Data Science Platforms
  { name: "Jupyter Notebooks", category: "Tools", level: 95 },
  { name: "Git", category: "Tools", level: 88 },
  { name: "Excel", category: "Tools", level: 93 },
  { name: "Power BI", category: "Tools", level: 75 },
  { name: "GitHub", category: "Tools", level: 86 },
  
  // All other technologies (will only appear in "All Technologies" section)
  { name: "TensorFlow", category: "Frameworks", level: 68 },
  { name: "PyTorch", category: "Frameworks", level: 65 },
  { name: "Plotly", category: "Frameworks", level: 80 },
  { name: "Streamlit", category: "Frameworks", level: 77 },
  { name: "ggplot2", category: "Frameworks", level: 73 },
  { name: "tidyr", category: "Frameworks", level: 76 },
  { name: "dplyr", category: "Frameworks", level: 78 },
  { name: "Shiny", category: "Frameworks", level: 70 },
  { name: "Flask", category: "Frameworks", level: 60 },
  { name: "FastAPI", category: "Frameworks", level: 58 },
  { name: "Tableau", category: "Tools", level: 65 },
  { name: "Stata", category: "Tools", level: 72 },
  { name: "QGIS", category: "Tools", level: 68 },
  { name: "MongoDB", category: "Tools", level: 45 },
  { name: "PostgreSQL", category: "Tools", level: 62 },
  { name: "AWS", category: "Tools", level: 58 },
  { name: "Azure", category: "Tools", level: 55 },
  { name: "GCP", category: "Tools", level: 52 },
  { name: "Docker", category: "Tools", level: 60 },
  { name: "Kubernetes", category: "Tools", level: 48 },
  { name: "Apache Spark", category: "Tools", level: 63 },
  { name: "Hadoop", category: "Tools", level: 56 },
];

export const experiences: Experience[] = [
  {
    role: "Security Aide",
    organization: "ASU Gammage",
    startDate: "Feb 2025",
    endDate: "Present",
    achievements: [
      "As Security Aide at ASU Gammage, I conduct regular patrols across campus to ensure safety and deter potential threats, monitor surveillance systems and respond swiftly to security incidents, enforce campus protocols while assisting students and staff during busy periods, and maintain order to create a secure environment for all."
    ],
    type: "work",
    location: "Tempe, AZ"
  },
  {
    role: "Information Technology Support Specialist",
    organization: "W.P. Carey School of Business",
    startDate: "Nov 2024",
    endDate: "Jan 2025",
    achievements: [
      "In my role as Information Technology Support Specialist, I optimized IT support processes to enhance efficiency and user satisfaction, implemented system-wide improvements using Django and Git to ensure a seamless IT infrastructure, and streamlined troubleshooting protocols to reduce downtime and improve response times."
    ],
    type: "work",
    location: "Tempe, AZ"
  },
  {
    role: "Technology Assistant",
    organization: "Sun Devil Athletics",
    startDate: "Oct 2023",
    endDate: "Nov 2024",
    achievements: [
      "As Technology Assistant for Sun Devil Athletics, I managed the setup, maintenance, and troubleshooting of over 150 systems to ensure uninterrupted operations, resolved 95 percent of technical issues within 24 hours to minimize disruptions, and led training sessions that increased staff proficiency and boosted operational efficiency by 30 percent."
    ],
    type: "work",
    location: "Tempe, AZ"
  },
  {
    role: "Desk Assistant",
    organization: "University Housing",
    startDate: "Oct 2023",
    endDate: "Nov 2023",
    achievements: [
      "While serving as Desk Assistant in University Housing, I monitored residential areas and conducted safety patrols for more than 300 students, enhanced safety protocols in collaboration with housing staff to reduce incidents and unauthorized access, and documented key hazards and security breaches to foster a safer living environment."
    ],
    type: "work",
    location: "Tempe, AZ"
  },
  {
    role: "Program Activator",
    organization: "Changemaker Central",
    startDate: "Sep 2023",
    endDate: "Nov 2023",
    achievements: [
      "As Program Activator at Changemaker Central, I coordinated seven outreach events that engaged over 100 participants, led interactive workshops to boost community participation and skills, and collaborated closely with leadership to refine event strategies for enhanced overall impact."
    ],
    type: "work",
    location: "Tempe, AZ"
  },
  {
    role: "Software Engineering Intern",
    organization: "Tizzy Cloud Computing PVT. LTD.",
    startDate: "Nov 2020",
    endDate: "Nov 2020",
    achievements: [
      "As Software Engineering Intern at Tizzy Cloud Computing, I gained comprehensive experience in FTP and PhpMyAdmin administration while working in a dynamic hybrid environment. I developed essential client presentation skills and mastered web server management techniques, contributing to cloud computing infrastructure projects that enhanced my understanding of distributed systems and server-side technologies."
    ],
    type: "work",
    location: "Mumbai, Maharashtra, India"
  },
  {
    role: "Software Engineering Intern",
    organization: "Mukesoft IT Services and IT Consulting",
    startDate: "May 2020",
    endDate: "May 2020",
    achievements: [
      "During my Software Engineering Internship at Mukesoft IT Services and IT Consulting, I developed proficiency in MySQL database management and data analysis techniques. I created responsive web applications using HTML, CSS, and PHP, gaining valuable hands-on experience in full-stack development while contributing to client projects that improved my understanding of software development lifecycle and IT consulting practices."
    ],
    type: "work",
    location: "Mumbai, Maharashtra, India"
  },
  {
    role: "Bachelor of Science in Economics & Computer Science",
    organization: "Arizona State University",
    startDate: "Aug 2022",
    endDate: "May 2026",
    achievements: [
      "• Grade: GPA 3.81",
      "• Pursuing dual degree combining quantitative economics with advanced computer science fundamentals",
      "• Coursework includes Data Structures & Algorithms, Software Engineering, Econometrics, and Statistical Analysis",
      "• Active in technology and business communities",
      "• Developing skills in both technical implementation and economic modeling"
    ],
    type: "education",
    location: "Tempe, AZ"
  },
  {
    role: "High School",
    organization: "Lakshya Institute",
    startDate: "2020",
    endDate: "2021",
    achievements: [
      "• Prepping for JEE Exam",
      "• Completed Higher Secondary Certificate with focus on Science stream",
      "• Strong foundation in Mathematics, Physics, and Chemistry",
      "• Prepared for engineering studies with rigorous coursework",
      "• Developed analytical thinking and problem-solving skills essential for computer science"
    ],
    type: "education",
    location: "Mumbai, Maharashtra, India"
  },
  {
    role: "Elementary and Middle School",
    organization: "JBCN International School",
    startDate: "2012",
    endDate: "2020",
    achievements: [
      "• Completed International General Certificate of Secondary Education (IGCSE) curriculum",
      "• Leadership role as Prefect in Interact Club (2018)",
      "• Developed community service and organizational skills",
      "• Athletic excellence: Javelin Throw Gold Medalist (2019, 2020)",
      "• Multi-sport athlete in Football (2018-2020), Handball (2019-2020), and Cricket (2020)",
      "• International curriculum fostering global perspective and critical thinking abilities"
    ],
    type: "education",
    location: "Mumbai, Maharashtra, India"
  }
];

export const projects: Project[] = [
  {
    title: "Wheel Strategy Options",
    description: "Advanced options trading platform with covered call screening and strategy optimization tools",
    technologies: ["React", "Node.js", "Financial APIs", "Chart.js", "TypeScript"],
    impact: "Helps traders optimize covered call strategies with real-time market data",
    liveUrl: "https://wheelstrategyoptions.com/covered-call-screener",
    codeUrl: "https://github.com/atitkothari/pt-wss.git",
    featured: true
  },
  {
    title: "MegaShop E-Commerce",
    description: "Full-featured e-commerce platform with modern UI, product catalog, and shopping cart functionality",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "E-commerce APIs"],
    impact: "Complete e-commerce solution with enhanced user experience and modern design",
    liveUrl: "https://kathanparagshah.github.io/MegaShop/",
    codeUrl: "https://github.com/kathanparagshah/MegaShop.git",
    featured: true
  },
  {
    title: "Mean Variance Standard Deviation Calculator",
    description: "Statistical analysis tool for calculating mean, variance, and standard deviation from numerical datasets",
    technologies: ["Python", "NumPy", "Statistical Analysis", "Data Processing"],
    impact: "FreeCodeCamp project demonstrating statistical computation and data analysis skills",
    codeUrl: "https://github.com/kathanparagshah/Mean-Variance-Standard-Deviation-Calculator.git",
    featured: true
  },
  {
    title: "Demographic Data Analyzer",
    description: "Data analysis project exploring demographic patterns and statistical insights from census data",
    technologies: ["Python", "Pandas", "Data Analysis", "Statistical Computing"],
    impact: "FreeCodeCamp project showcasing data manipulation and demographic analysis capabilities",
    codeUrl: "https://github.com/kathanparagshah/Demographic-Data-Analyzer.git",
    featured: false
  },
  {
    title: "Medical Data Visualizer",
    description: "Healthcare data visualization tool exploring relationships between cardiac disease, body measurements, and lifestyle choices",
    technologies: ["Python", "Matplotlib", "Seaborn", "Pandas", "Data Visualization"],
    impact: "Visualizes medical examination data with categorical plots and correlation heat maps",
    codeUrl: "https://github.com/kathanparagshah/Medical-Data-Visualizer.git",
    featured: false
  },
  {
    title: "Page View Time Series Visualizer",
    description: "Time series analysis tool for visualizing website traffic patterns using line charts, bar charts, and box plots",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Time Series Analysis"],
    impact: "Analyzes daily page views and identifies yearly and monthly growth patterns",
    codeUrl: "https://github.com/kathanparagshah/Page-View-Time-Series-Visualizer.git",
    featured: false
  },
  {
    title: "Sea Level Predictor",
    description: "Environmental data analysis project predicting future sea level changes using historical data and linear regression",
    technologies: ["Python", "Pandas", "Matplotlib", "Linear Regression", "Environmental Data"],
    impact: "Provides sea level predictions and trend analysis for climate change research",
    codeUrl: "https://github.com/kathanparagshah/Sea-Level-Predictor.git",
    featured: false
  }
];