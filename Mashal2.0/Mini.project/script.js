// Career Guide for Class 12th Students - JavaScript

// Global variables
let userData = {};
let currentSection = 0;
let hollandScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
let aptitudeScore = 0;
let selectedSubjects = [];

const sections = ['landing', 'signup', 'academic', 'holland-test', 'aptitude-test', 'results'];

// Stream-based subjects
const streamSubjects = {
    'PCM': ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'English'],
    'PCB': ['Biology', 'Physics', 'Chemistry', 'Mathematics', 'English'],
    'Commerce': ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
    'Arts': ['History', 'Geography', 'Political Science', 'Psychology', 'English', 'Literature', 'Sociology']
};

// Holland Code Questions (30 questions)
const hollandQuestions = [
    { text: "I enjoy building things with my hands", type: "R" },
    { text: "I like to solve math problems", type: "I" },
    { text: "I enjoy creative writing or drawing", type: "A" },
    { text: "I like helping people with their problems", type: "S" },
    { text: "I enjoy leading group projects", type: "E" },
    { text: "I prefer organized, systematic work", type: "C" },
    { text: "I would rather work outdoors than in an office", type: "R" },
    { text: "I enjoy conducting science experiments", type: "I" },
    { text: "I like to express myself through art or music", type: "A" },
    { text: "I enjoy teaching others new skills", type: "S" },
    { text: "I like to persuade people to my point of view", type: "E" },
    { text: "I prefer following detailed instructions", type: "C" },
    { text: "I enjoy working with tools and machines", type: "R" },
    { text: "I like to analyze data and find patterns", type: "I" },
    { text: "I enjoy performing in front of others", type: "A" },
    { text: "I prefer working in teams over working alone", type: "S" },
    { text: "I enjoy competing and winning", type: "E" },
    { text: "I like to keep accurate records", type: "C" },
    { text: "I enjoy physical activities and sports", type: "R" },
    { text: "I like to understand how things work", type: "I" },
    { text: "I enjoy decorating and designing spaces", type: "A" },
    { text: "I like to volunteer for community service", type: "S" },
    { text: "I enjoy selling products or ideas", type: "E" },
    { text: "I prefer working with numbers and calculations", type: "C" },
    { text: "I like hands-on learning better than reading", type: "R" },
    { text: "I enjoy reading scientific journals", type: "I" },
    { text: "I like to create original stories or poems", type: "A" },
    { text: "I enjoy counseling friends with problems", type: "S" },
    { text: "I like to be in charge of projects", type: "E" },
    { text: "I prefer routine tasks over unpredictable ones", type: "C" }
];

// Aptitude Test Questions (15 questions)
const aptitudeQuestions = [
    {
        question: "If 2x + 5 = 13, what is the value of x?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "What comes next in the sequence: 2, 6, 18, 54, ?",
        options: ["108", "162", "216", "324"],
        correct: 1
    },
    {
        question: "If all roses are flowers and some flowers are red, which is necessarily true?",
        options: ["All roses are red", "Some roses might be red", "No roses are red", "All red things are flowers"],
        correct: 1
    },
    {
        question: "A train travels 240 km in 3 hours. What is its speed in km/h?",
        options: ["70", "75", "80", "85"],
        correct: 2
    },
    {
        question: "Complete the analogy: Book : Read :: Song : ?",
        options: ["Hear", "Write", "Sing", "Play"],
        correct: 0
    },
    {
        question: "If 15% of a number is 45, what is the number?",
        options: ["250", "275", "300", "325"],
        correct: 2
    },
    {
        question: "Which number should replace the question mark: 3, 9, 27, 81, ?",
        options: ["162", "243", "324", "405"],
        correct: 1
    },
    {
        question: "If A = 1, B = 2, C = 3, what is the value of 'CAB'?",
        options: ["312", "321", "123", "132"],
        correct: 0
    },
    {
        question: "A rectangle has length 12 cm and width 8 cm. What is its area?",
        options: ["88 sq cm", "92 sq cm", "96 sq cm", "104 sq cm"],
        correct: 2
    },
    {
        question: "Which word doesn't belong: Happy, Joyful, Sad, Cheerful",
        options: ["Happy", "Joyful", "Sad", "Cheerful"],
        correct: 2
    },
    {
        question: "If today is Monday, what day will it be after 100 days?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correct: 1
    },
    {
        question: "What is 25% of 80?",
        options: ["15", "20", "25", "30"],
        correct: 1
    },
    {
        question: "Complete the pattern: Triangle, Square, Pentagon, ?",
        options: ["Circle", "Hexagon", "Rectangle", "Oval"],
        correct: 1
    },
    {
        question: "If 3 apples cost ₹15, how much do 8 apples cost?",
        options: ["₹35", "₹40", "₹45", "₹50"],
        correct: 1
    },
    {
        question: "Which number is the odd one out: 2, 4, 6, 9, 8",
        options: ["2", "4", "6", "9"],
        correct: 3
    }
];

// Career Database
const careerDatabase = [
    // Engineering & Technology
    { 
        name: "Software Engineer", 
        streams: ["PCM"], 
        holland: ["I", "C"], 
        minAptitude: 8, 
        description: "Design and develop software applications",
        details: {
            overview: "Software engineers design, develop, and maintain software systems and applications.",
            skills: ["Programming languages (Python, Java, C++)", "Problem-solving", "Analytical thinking", "Team collaboration"],
            education: "Bachelor's degree in Computer Science or related field",
            salary: "₹6-25 LPA (varies by experience and company)",
            prospects: "High demand in IT industry, startups, and tech companies"
        }
    },
    { 
        name: "Mechanical Engineer", 
        streams: ["PCM"], 
        holland: ["R", "I"], 
        minAptitude: 7, 
        description: "Design and build mechanical systems",
        details: {
            overview: "Mechanical engineers design, analyze, and manufacture mechanical systems and devices.",
            skills: ["CAD software", "Thermodynamics", "Material science", "Project management"],
            education: "Bachelor's degree in Mechanical Engineering",
            salary: "₹4-15 LPA (varies by industry and experience)",
            prospects: "Opportunities in automotive, aerospace, manufacturing, and energy sectors"
        }
    },
    { 
        name: "Civil Engineer", 
        streams: ["PCM"], 
        holland: ["R", "C"], 
        minAptitude: 7, 
        description: "Design infrastructure and buildings",
        details: {
            overview: "Civil engineers plan, design, and oversee construction of infrastructure projects.",
            skills: ["AutoCAD", "Structural analysis", "Project management", "Environmental engineering"],
            education: "Bachelor's degree in Civil Engineering",
            salary: "₹3-12 LPA (varies by sector and experience)",
            prospects: "Growing demand in construction, urban planning, and infrastructure development"
        }
    },
    { 
        name: "Data Scientist", 
        streams: ["PCM"], 
        holland: ["I", "C"], 
        minAptitude: 9, 
        description: "Analyze complex data to solve problems",
        details: {
            overview: "Data scientists extract insights from large datasets to drive business decisions.",
            skills: ["Python/R programming", "Statistics", "Machine learning", "Data visualization"],
            education: "Bachelor's in Computer Science/Statistics + specialized courses",
            salary: "₹8-30 LPA (high demand field)",
            prospects: "Excellent growth opportunities in all industries embracing digital transformation"
        }
    },
    
    // Medical & Healthcare
    { 
        name: "Doctor (MBBS)", 
        streams: ["PCB"], 
        holland: ["I", "S"], 
        minAptitude: 8, 
        description: "Diagnose and treat medical conditions",
        details: {
            overview: "Medical doctors diagnose illnesses, treat patients, and promote health and wellness.",
            skills: ["Medical knowledge", "Patient care", "Decision-making", "Communication"],
            education: "MBBS (5.5 years) + optional specialization",
            salary: "₹6-50+ LPA (varies by specialization and practice)",
            prospects: "Always in demand, opportunities in hospitals, clinics, and private practice"
        }
    },
    { 
        name: "Pharmacist", 
        streams: ["PCB"], 
        holland: ["I", "C"], 
        minAptitude: 6, 
        description: "Dispense medications and advise on drug use",
        details: {
            overview: "Pharmacists prepare and dispense medications, counsel patients on drug usage.",
            skills: ["Pharmaceutical knowledge", "Attention to detail", "Customer service", "Quality control"],
            education: "Bachelor's in Pharmacy (B.Pharm) or Doctor of Pharmacy (Pharm.D)",
            salary: "₹3-8 LPA (varies by sector)",
            prospects: "Stable career with opportunities in hospitals, retail, and pharmaceutical companies"
        }
    },
    
    // Business & Commerce
    { 
        name: "Chartered Accountant", 
        streams: ["Commerce"], 
        holland: ["C", "E"], 
        minAptitude: 7, 
        description: "Manage financial accounts and auditing",
        details: {
            overview: "CAs handle financial reporting, taxation, auditing, and business advisory services.",
            skills: ["Accounting", "Taxation knowledge", "Analytical skills", "Business acumen"],
            education: "CA course (3-4 years) after 12th Commerce",
            salary: "₹6-25+ LPA (highly variable based on practice)",
            prospects: "Excellent career prospects with potential for own practice"
        }
    },
    { 
        name: "Investment Banker", 
        streams: ["Commerce"], 
        holland: ["E", "C"], 
        minAptitude: 8, 
        description: "Provide financial services to corporations",
        details: {
            overview: "Investment bankers help companies raise capital and provide financial advisory services.",
            skills: ["Financial analysis", "Market knowledge", "Communication", "Risk assessment"],
            education: "Bachelor's in Finance/Commerce + MBA preferred",
            salary: "₹8-50+ LPA (high-stress, high-reward career)",
            prospects: "Lucrative career in major financial centers and investment firms"
        }
    },
    
    // Arts & Creative
    { 
        name: "Graphic Designer", 
        streams: ["Arts"], 
        holland: ["A", "I"], 
        minAptitude: 5, 
        description: "Create visual designs for various media",
        details: {
            overview: "Graphic designers create visual concepts to communicate ideas through art and layout.",
            skills: ["Design software (Photoshop, Illustrator)", "Creativity", "Typography", "Brand understanding"],
            education: "Bachelor's in Graphic Design or related field",
            salary: "₹3-12 LPA (varies by industry and freelance work)",
            prospects: "Growing demand in digital marketing, advertising, and media companies"
        }
    },
    { 
        name: "Lawyer", 
        streams: ["Arts"], 
        holland: ["E", "I"], 
        minAptitude: 7, 
        description: "Represent clients in legal matters",
        details: {
            overview: "Lawyers provide legal advice, represent clients in court, and handle legal documentation.",
            skills: ["Legal research", "Argumentation", "Writing", "Client counseling"],
            education: "LLB (3 years after graduation) or integrated 5-year law course",
            salary: "₹3-50+ LPA (highly variable based on practice area)",
            prospects: "Diverse opportunities in corporate law, litigation, and legal consultancy"
        }
    },
    
    // Additional careers for better coverage
    { 
        name: "Electrical Engineer", 
        streams: ["PCM"], 
        holland: ["R", "I"], 
        minAptitude: 7, 
        description: "Work with electrical systems and devices",
        details: {
            overview: "Electrical engineers design and develop electrical systems, power generation, and electronic devices.",
            skills: ["Circuit design", "Power systems", "Electronics", "Problem-solving"],
            education: "Bachelor's degree in Electrical Engineering",
            salary: "₹4-18 LPA (varies by industry)",
            prospects: "Strong demand in power, electronics, and automation industries"
        }
    },
    { 
        name: "Biotechnologist", 
        streams: ["PCB"], 
        holland: ["I", "R"], 
        minAptitude: 6, 
        description: "Use biological systems for practical applications",
        details: {
            overview: "Biotechnologists apply biological processes to develop products and technologies.",
            skills: ["Laboratory techniques", "Genetic engineering", "Research methodology", "Data analysis"],
            education: "Bachelor's in Biotechnology or related field",
            salary: "₹3-12 LPA (growing field)",
            prospects: "Emerging opportunities in pharmaceuticals, agriculture, and environmental solutions"
        }
    },
    { 
        name: "Marketing Manager", 
        streams: ["Commerce", "Arts"], 
        holland: ["E", "A"], 
        minAptitude: 5, 
        description: "Develop and execute marketing strategies",
        details: {
            overview: "Marketing managers plan and execute marketing campaigns to promote products and services.",
            skills: ["Market research", "Brand management", "Digital marketing", "Communication"],
            education: "Bachelor's in Marketing, Business, or related field",
            salary: "₹4-20 LPA (varies by company size)",
            prospects: "High demand across all industries, especially in digital marketing"
        }
    },
    { 
        name: "Journalist", 
        streams: ["Arts"], 
        holland: ["A", "S"], 
        minAptitude: 4, 
        description: "Research and report news stories",
        details: {
            overview: "Journalists investigate, write, and report news and stories for various media outlets.",
            skills: ["Writing", "Research", "Communication", "Critical thinking"],
            education: "Bachelor's in Journalism, Mass Communication, or related field",
            salary: "₹2-15 LPA (varies by media outlet)",
            prospects: "Opportunities in print, digital, broadcast media, and freelance work"
        }
    },
    { 
        name: "Psychologist", 
        streams: ["Arts"], 
        holland: ["S", "I"], 
        minAptitude: 5, 
        description: "Study human behavior and mental processes",
        details: {
            overview: "Psychologists study mental processes and behavior to help people overcome challenges.",
            skills: ["Counseling", "Research", "Empathy", "Analytical thinking"],
            education: "Bachelor's + Master's in Psychology",
            salary: "₹3-12 LPA (varies by specialization)",
            prospects: "Growing awareness of mental health creates good opportunities"
        }
    },
    { 
        name: "Business Analyst", 
        streams: ["Commerce"], 
        holland: ["I", "C"], 
        minAptitude: 6, 
        description: "Analyze business processes and data",
        details: {
            overview: "Business analysts study business processes and recommend solutions for improvement.",
            skills: ["Data analysis", "Process modeling", "Communication", "Problem-solving"],
            education: "Bachelor's in Business, Economics, or related field",
            salary: "₹4-15 LPA (good growth potential)",
            prospects: "High demand as companies focus on efficiency and data-driven decisions"
        }
    },
    { 
        name: "Teacher/Professor", 
        streams: ["PCM", "PCB", "Commerce", "Arts"], 
        holland: ["S", "I"], 
        minAptitude: 4, 
        description: "Educate students in your area of expertise",
        details: {
            overview: "Teachers and professors educate students at various levels in their subject areas.",
            skills: ["Subject expertise", "Communication", "Patience", "Lesson planning"],
            education: "Bachelor's degree + B.Ed for school teaching, Master's + NET for college",
            salary: "₹3-12 LPA (varies by institution type)",
            prospects: "Stable career with good work-life balance and social impact"
        }
    },
    { 
        name: "Content Writer", 
        streams: ["Arts"], 
        holland: ["A", "I"], 
        minAptitude: 4, 
        description: "Create written content for various platforms",
        details: {
            overview: "Content writers create engaging written content for websites, blogs, and marketing materials.",
            skills: ["Writing", "SEO knowledge", "Research", "Creativity"],
            education: "Bachelor's in English, Journalism, or related field",
            salary: "₹2-10 LPA (freelance opportunities available)",
            prospects: "High demand in digital marketing and online businesses"
        }
    },
    { 
        name: "Digital Marketer", 
        streams: ["Commerce", "Arts"], 
        holland: ["A", "E"], 
        minAptitude: 4, 
        description: "Promote products and services online",
        details: {
            overview: "Digital marketers use online channels to reach and engage customers.",
            skills: ["Social media", "Google Ads", "Analytics", "Content creation"],
            education: "Bachelor's degree + digital marketing certifications",
            salary: "₹3-15 LPA (rapidly growing field)",
            prospects: "Excellent opportunities as businesses move online"
        }
    },
    { 
    name: "AI/ML Engineer", 
    streams: ["PCM"], 
    holland: ["I", "C"], 
    minAptitude: 9, 
    description: "Develop artificial intelligence and machine learning models",
    details: {
        overview: "AI/ML engineers design and implement algorithms that enable machines to learn from data.",
        skills: ["Python", "TensorFlow/PyTorch", "Statistics", "Data preprocessing"],
        education: "Bachelor's/Master's in Computer Science or related field",
        salary: "₹8-35 LPA (high demand in tech industry)",
        prospects: "Excellent growth in tech startups, AI research, and product companies"
    }
},
{ 
    name: "Robotics Engineer", 
    streams: ["PCM"], 
    holland: ["R", "I"], 
    minAptitude: 8, 
    description: "Design and build robotic systems",
    details: {
        overview: "Robotics engineers create robots and automated systems for industries, healthcare, and research.",
        skills: ["Mechanical design", "Electronics", "Programming", "Control systems"],
        education: "Bachelor's in Robotics, Mechanical or Electrical Engineering",
        salary: "₹5-20 LPA (varies by industry and experience)",
        prospects: "Growing opportunities in manufacturing, healthcare, and defense sectors"
    }
},
{ 
    name: "Interior Designer", 
    streams: ["Arts"], 
    holland: ["A", "S"], 
    minAptitude: 5, 
    description: "Plan and design interior spaces",
    details: {
        overview: "Interior designers enhance the aesthetics and functionality of interior spaces.",
        skills: ["AutoCAD", "3D modeling", "Creativity", "Color theory"],
        education: "Bachelor's in Interior Design or Architecture",
        salary: "₹3-12 LPA (varies by projects and clients)",
        prospects: "Opportunities in residential, commercial, and hospitality sectors"
    }
},
{ 
    name: "Environmental Scientist", 
    streams: ["PCB", "PCM"], 
    holland: ["R", "I"], 
    minAptitude: 6, 
    description: "Study and address environmental issues",
    details: {
        overview: "Environmental scientists research and develop solutions to protect the environment.",
        skills: ["Research", "Data analysis", "Fieldwork", "Problem-solving"],
        education: "Bachelor's/Master's in Environmental Science or related field",
        salary: "₹3-10 LPA (varies by sector)",
        prospects: "Increasing demand in government agencies, NGOs, and sustainability projects"
    }
},
{ 
    name: "Nutritionist/Dietitian", 
    streams: ["PCB"], 
    holland: ["S", "I"], 
    minAptitude: 5, 
    description: "Advise on diet and nutrition for health improvement",
    details: {
        overview: "Nutritionists assess dietary needs and create plans to promote health and manage diseases.",
        skills: ["Diet planning", "Communication", "Knowledge of nutrients", "Research"],
        education: "Bachelor's in Nutrition and Dietetics, optional certification",
        salary: "₹2-8 LPA (varies by clinic/hospital)",
        prospects: "Growing demand with increased focus on wellness and preventive healthcare"
    }
},
{ 
    name: "Event Manager", 
    streams: ["Arts", "Commerce"], 
    holland: ["E", "A"], 
    minAptitude: 5, 
    description: "Plan and organize events professionally",
    details: {
        overview: "Event managers coordinate all aspects of professional events such as weddings, conferences, and exhibitions.",
        skills: ["Organization", "Communication", "Time management", "Creativity"],
        education: "Bachelor's in Event Management, Hospitality, or related field",
        salary: "₹3-15 LPA (varies by experience and event type)",
        prospects: "Opportunities in corporate, entertainment, and wedding/event sectors"
    }
},
{ 
    name: "Animator", 
    streams: ["Arts"], 
    holland: ["A", "I"], 
    minAptitude: 5, 
    description: "Create animations for media and entertainment",
    details: {
        overview: "Animators develop visual effects and animated sequences for films, games, and advertisements.",
        skills: ["3D modeling", "Animation software (Maya, Blender)", "Creativity", "Storyboarding"],
        education: "Bachelor's in Animation, Fine Arts, or Multimedia",
        salary: "₹3-12 LPA (varies by company and projects)",
        prospects: "Growing opportunities in gaming, film, and digital media"
    }
},
{ 
    name: "Cybersecurity Analyst", 
    streams: ["PCM"], 
    holland: ["I", "C"], 
    minAptitude: 8, 
    description: "Protect computer systems and networks",
    details: {
        overview: "Cybersecurity analysts monitor and protect digital assets from cyber threats and attacks.",
        skills: ["Network security", "Ethical hacking", "Risk assessment", "Problem-solving"],
        education: "Bachelor's in Computer Science or IT + certifications (CEH, CISSP)",
        salary: "₹5-25 LPA (high demand in IT sector)",
        prospects: "Excellent growth with rising cyber threats in all industries"
    }
},
{ 
    name: "Fashion Designer", 
    streams: ["Arts"], 
    holland: ["A", "E"], 
    minAptitude: 5, 
    description: "Create clothing and accessories designs",
    details: {
        overview: "Fashion designers develop new clothing lines, accessories, and fashion concepts.",
        skills: ["Sketching", "Textile knowledge", "Trend analysis", "Creativity"],
        education: "Bachelor's in Fashion Design or Apparel Design",
        salary: "₹2-15 LPA (varies by brand and projects)",
        prospects: "Opportunities in retail, luxury brands, and freelance designing"
    }
},
{ 
    name: "Social Worker", 
    streams: ["Arts"], 
    holland: ["S", "I"], 
    minAptitude: 4, 
    description: "Support communities and improve social welfare",
    details: {
        overview: "Social workers assist individuals and communities to improve well-being and access services.",
        skills: ["Empathy", "Communication", "Problem-solving", "Organizational skills"],
        education: "Bachelor's in Social Work (BSW) or related field",
        salary: "₹2-8 LPA (varies by organization)",
        prospects: "Growing opportunities in NGOs, government agencies, and community programs"
    }
},
// Engineering & Technology
{ 
    name: "Civil Architect", 
    streams: ["PCM"], 
    holland: ["R", "A"], 
    minAptitude: 7, 
    description: "Design and plan buildings and structures",
    details: {
        overview: "Civil architects combine aesthetics with functionality in building designs.",
        skills: ["AutoCAD", "3D modeling", "Structural knowledge", "Creativity"],
        education: "Bachelor's in Architecture (B.Arch)",
        salary: "₹4-20 LPA (varies by firm and projects)",
        prospects: "High demand in construction, urban development, and architectural firms"
    }
},
{ 
    name: "Network Engineer", 
    streams: ["PCM"], 
    holland: ["I", "C"], 
    minAptitude: 7, 
    description: "Maintain and optimize computer networks",
    details: {
        overview: "Network engineers design, implement, and troubleshoot communication networks.",
        skills: ["Networking protocols", "Security", "Problem-solving", "Server management"],
        education: "Bachelor's in Computer Science/IT or Networking certifications",
        salary: "₹4-15 LPA (varies by company and expertise)",
        prospects: "High demand in IT services, telecom, and cloud infrastructure"
    }
},

// Medical & Healthcare
{ 
    name: "Nurse", 
    streams: ["PCB"], 
    holland: ["S", "I"], 
    minAptitude: 5, 
    description: "Provide patient care and assist doctors",
    details: {
        overview: "Nurses provide critical care, support patients, and coordinate treatment plans.",
        skills: ["Patient care", "Medical knowledge", "Empathy", "Communication"],
        education: "Bachelor's in Nursing (B.Sc Nursing)",
        salary: "₹2-8 LPA (varies by hospital and specialization)",
        prospects: "Consistent demand in hospitals, clinics, and community health centers"
    }
},
{ 
    name: "Physiotherapist", 
    streams: ["PCB"], 
    holland: ["S", "I"], 
    minAptitude: 6, 
    description: "Help patients recover mobility and physical health",
    details: {
        overview: "Physiotherapists assess and treat physical disabilities or injuries.",
        skills: ["Therapeutic exercises", "Patient assessment", "Communication", "Rehabilitation techniques"],
        education: "Bachelor's in Physiotherapy (BPT)",
        salary: "₹3-10 LPA (varies by clinic and experience)",
        prospects: "Growing opportunities in sports, hospitals, and rehabilitation centers"
    }
},

// Business & Commerce
{ 
    name: "Financial Analyst", 
    streams: ["Commerce"], 
    holland: ["C", "I"], 
    minAptitude: 7, 
    description: "Analyze financial data and trends",
    details: {
        overview: "Financial analysts evaluate investment opportunities and help guide business decisions.",
        skills: ["Excel & financial modeling", "Analytical skills", "Market research", "Communication"],
        education: "Bachelor's in Finance, Commerce, or Economics",
        salary: "₹5-20 LPA (varies by firm and experience)",
        prospects: "High demand in banks, investment firms, and corporate finance"
    }
},
{ 
    name: "Entrepreneur", 
    streams: ["Commerce", "Arts"], 
    holland: ["E", "A"], 
    minAptitude: 6, 
    description: "Start and manage your own business",
    details: {
        overview: "Entrepreneurs create and grow businesses while managing risks and resources.",
        skills: ["Leadership", "Business planning", "Risk management", "Networking"],
        education: "No fixed requirement; business knowledge and experience important",
        salary: "Variable, potentially unlimited",
        prospects: "High reward potential, dependent on idea, strategy, and execution"
    }
},

// Arts & Creative
{ 
    name: "UI/UX Designer", 
    streams: ["Arts", "Commerce"], 
    holland: ["A", "I"], 
    minAptitude: 6, 
    description: "Design user interfaces and improve user experience",
    details: {
        overview: "UI/UX designers create intuitive and engaging digital experiences for users.",
        skills: ["Wireframing", "Prototyping", "User research", "Design tools (Figma, Sketch)"],
        education: "Bachelor's in Design, Multimedia, or related field",
        salary: "₹4-15 LPA (varies by company and experience)",
        prospects: "High demand in IT, startups, and product companies"
    }
},
{ 
    name: "Animator & VFX Artist", 
    streams: ["Arts"], 
    holland: ["A", "I"], 
    minAptitude: 5, 
    description: "Create visual effects and animations for media",
    details: {
        overview: "Animators & VFX artists work in film, games, and digital media to produce creative content.",
        skills: ["3D modeling", "Animation software", "Storyboarding", "Creativity"],
        education: "Bachelor's in Animation, Multimedia, or Fine Arts",
        salary: "₹3-15 LPA (varies by studio and projects)",
        prospects: "Growing opportunities in gaming, film, and online media"
    }
},

// Emerging Fields
{ 
    name: "Blockchain Developer", 
    streams: ["PCM"], 
    holland: ["I", "C"], 
    minAptitude: 8, 
    description: "Develop decentralized blockchain applications",
    details: {
        overview: "Blockchain developers build applications and smart contracts on blockchain platforms.",
        skills: ["Solidity", "Ethereum/Hyperledger", "Cryptography", "Problem-solving"],
        education: "Bachelor's in Computer Science or IT + blockchain certifications",
        salary: "₹8-30 LPA (highly specialized skills)",
        prospects: "Strong demand in fintech, supply chain, and tech startups"
    }
},
{ 
    name: "Game Developer", 
    streams: ["PCM", "Arts"], 
    holland: ["I", "A"], 
    minAptitude: 7, 
    description: "Design and develop video games",
    details: {
        overview: "Game developers create interactive digital entertainment using programming and design skills.",
        skills: ["C++/C#/Python", "Game engines (Unity, Unreal)", "Problem-solving", "Creativity"],
        education: "Bachelor's in Computer Science, Game Design, or Multimedia",
        salary: "₹4-20 LPA (varies by company and game success)",
        prospects: "Growing demand with gaming industry expansion and mobile/VR platforms"
    }
},
// Engineering & Tech
{ 
    name: "Cloud Solutions Architect", 
    streams: ["PCM"], 
    holland: ["I", "C"], 
    minAptitude: 8, 
    description: "Design and manage cloud computing systems",
    details: {
        overview: "Cloud architects design, implement, and manage cloud infrastructure for businesses.",
        skills: ["AWS/Azure/GCP", "Networking", "DevOps", "Problem-solving"],
        education: "Bachelor's in Computer Science/IT or Cloud certifications",
        salary: "₹10-35 LPA (varies by experience and company)",
        prospects: "High demand in IT companies, startups, and enterprise solutions"
    }
},
{ 
    name: "Embedded Systems Engineer", 
    streams: ["PCM"], 
    holland: ["R", "I"], 
    minAptitude: 7, 
    description: "Develop hardware-software integrated systems",
    details: {
        overview: "Embedded engineers design microcontroller-based systems for devices like robotics and IoT.",
        skills: ["C/C++", "Microcontrollers", "Electronics", "Problem-solving"],
        education: "Bachelor's in Electronics/Computer Engineering",
        salary: "₹5-18 LPA (varies by company and industry)",
        prospects: "Growing demand in automotive, IoT, and industrial automation"
    }
},

// Medical & Health Sciences
{ 
    name: "Dentist (BDS)", 
    streams: ["PCB"], 
    holland: ["I", "S"], 
    minAptitude: 7, 
    description: "Treat dental issues and maintain oral health",
    details: {
        overview: "Dentists diagnose and treat oral diseases, perform surgeries, and advise on oral care.",
        skills: ["Dental procedures", "Patient care", "Manual dexterity", "Communication"],
        education: "Bachelor of Dental Surgery (BDS)",
        salary: "₹4-20 LPA (varies by specialization and clinic)",
        prospects: "Good opportunities in private clinics, hospitals, and teaching"
    }
},
{ 
    name: "Optometrist", 
    streams: ["PCB"], 
    holland: ["S", "I"], 
    minAptitude: 6, 
    description: "Assess vision and eye health",
    details: {
        overview: "Optometrists examine eyes, prescribe corrective lenses, and detect vision problems.",
        skills: ["Eye examination", "Medical knowledge", "Communication", "Attention to detail"],
        education: "Bachelor's in Optometry",
        salary: "₹2-8 LPA (varies by hospital or private practice)",
        prospects: "Growing demand with increased eye care awareness"
    }
},

// Commerce & Finance
{ 
    name: "Stock Broker", 
    streams: ["Commerce"], 
    holland: ["E", "C"], 
    minAptitude: 7, 
    description: "Trade and advise on stock investments",
    details: {
        overview: "Stock brokers facilitate buying and selling of shares and provide market insights.",
        skills: ["Market knowledge", "Analytical skills", "Communication", "Decision-making"],
        education: "Bachelor's in Finance/Commerce + licensing exams",
        salary: "₹4-20 LPA (performance-based earnings)",
        prospects: "Lucrative for skilled traders; opportunities in brokerage firms"
    }
},
{ 
    name: "Insurance Advisor", 
    streams: ["Commerce"], 
    holland: ["E", "S"], 
    minAptitude: 5, 
    description: "Provide guidance on insurance products",
    details: {
        overview: "Insurance advisors help clients select suitable insurance policies and manage risk.",
        skills: ["Communication", "Sales", "Customer service", "Financial knowledge"],
        education: "Bachelor's in Commerce/Finance or certifications",
        salary: "₹3-12 LPA (varies by commission and company)",
        prospects: "Growing industry with stable opportunities in agencies and corporations"
    }
},

// Arts & Creativity
{ 
    name: "Music Composer", 
    streams: ["Arts"], 
    holland: ["A", "I"], 
    minAptitude: 4, 
    description: "Create music for media and performances",
    details: {
        overview: "Music composers create original music for films, games, advertisements, and live performances.",
        skills: ["Music theory", "Instrument knowledge", "Digital audio software", "Creativity"],
        education: "Bachelor's in Music or Diploma in Composition",
        salary: "₹2-15 LPA (varies by projects and popularity)",
        prospects: "Opportunities in films, digital media, and live performances"
    }
},
{ 
    name: "Photographer", 
    streams: ["Arts"], 
    holland: ["A", "I"], 
    minAptitude: 4, 
    description: "Capture images for various purposes",
    details: {
        overview: "Photographers use technical and artistic skills to create professional photographs.",
        skills: ["Camera operation", "Lighting", "Photo editing", "Creativity"],
        education: "Bachelor's in Photography/Visual Arts or diploma courses",
        salary: "₹2-10 LPA (freelance opportunities available)",
        prospects: "Growing opportunities in media, fashion, advertising, and freelancing"
    }
},

// Emerging & Modern Careers
{ 
    name: "Renewable Energy Engineer", 
    streams: ["PCM"], 
    holland: ["R", "I"], 
    minAptitude: 7, 
    description: "Develop sustainable energy solutions",
    details: {
        overview: "Renewable energy engineers design systems using solar, wind, and other sustainable energy sources.",
        skills: ["Energy systems", "Project management", "Electronics", "Problem-solving"],
        education: "Bachelor's in Electrical/Mechanical Engineering + renewable energy specialization",
        salary: "₹5-18 LPA (varies by industry and experience)",
        prospects: "Growing demand due to global focus on sustainable energy"
    }
},
{ 
    name: "Drone Operator", 
    streams: ["PCM", "Arts"], 
    holland: ["I", "R"], 
    minAptitude: 5, 
    description: "Operate drones for surveys, media, and research",
    details: {
        overview: "Drone operators manage UAVs for photography, surveillance, agriculture, and mapping.",
        skills: ["Drone piloting", "Photography/Videography", "Navigation", "Technical maintenance"],
        education: "Certification courses in drone operation or engineering background",
        salary: "₹3-12 LPA (varies by sector and expertise)",
        prospects: "Rising demand in media, agriculture, defense, and logistics sectors"
    }
}
];

// Navigation functions
function nextSection() {
    if (currentSection < sections.length - 1) {
        hideCurrentSection();
        currentSection++;
        showCurrentSection();
        
        if (sections[currentSection] === 'holland-test') {
            loadHollandQuestions();
        } else if (sections[currentSection] === 'aptitude-test') {
            loadAptitudeQuestions();
        }
    }
}

function previousSection() {
    if (currentSection > 0) {
        hideCurrentSection();
        currentSection--;
        showCurrentSection();
    }
}

function hideCurrentSection() {
    document.getElementById(sections[currentSection]).classList.remove('active');
}

function showCurrentSection() {
    document.getElementById(sections[currentSection]).classList.add('active');
}

// Stream selection
function selectStream(stream, element) {
    // Clear previous selection
    document.querySelectorAll('.stream-option').forEach(option => {
        option.classList.remove('selected');
    });

    // Select new stream using the passed element (this)
    if (element && element.classList) {
        element.classList.add('selected');
    }

    const selectedInput = document.getElementById('selectedStream');
    if (selectedInput) selectedInput.value = stream;

    // Load subjects for selected stream
    loadSubjects(stream);
}

function loadSubjects(stream) {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    selectedSubjects = [];
    
    const subjects = streamSubjects[stream] || [];
    
    subjects.forEach(subject => {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'subject-option';
        subjectDiv.onclick = () => toggleSubject(subject, subjectDiv);
        subjectDiv.innerHTML = `
            <input type="checkbox" id="subject_${subject}" name="subjects" value="${subject}">
            <span>${subject}</span>
        `;
        container.appendChild(subjectDiv);
    });
}

function toggleSubject(subject, element) {
    const checkbox = element.querySelector('input');
    
    if (checkbox.checked) {
        // Deselect
        checkbox.checked = false;
        element.classList.remove('selected');
        selectedSubjects = selectedSubjects.filter(s => s !== subject);
    } else {
        // Select (max 3)
        if (selectedSubjects.length < 3) {
            checkbox.checked = true;
            element.classList.add('selected');
            selectedSubjects.push(subject);
        } else {
            showError('academic-error', 'You can select maximum 3 subjects.');
        }
    }
}

// Validation functions
function validateAndNext(sectionName) {
    if (sectionName === 'signup') {
        const form = document.getElementById('signup-form');
        const formData = new FormData(form);
        
        if (!formData.get('fullName') || !formData.get('email')) {
            showError('signup-error', 'Please fill in all required fields.');
            return;
        }
        
        userData.personal = Object.fromEntries(formData);
        
    } else if (sectionName === 'academic') {
        const stream = document.getElementById('selectedStream').value;
        
        if (!stream) {
            showError('academic-error', 'Please select your stream.');
            return;
        }
        
        if (selectedSubjects.length === 0) {
            showError('academic-error', 'Please select at least one favorite subject.');
            return;
        }
        
        userData.academic = {
            stream: stream,
            subjects: selectedSubjects
        };
    }
    
    nextSection();
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 5000);
}

// Holland Code Test Functions
function loadHollandQuestions() {
    const container = document.getElementById('holland-questions-container');
    container.innerHTML = '';
    
    hollandQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        questionDiv.innerHTML = `
            <div class="question-number">${index + 1}</div>
            <div class="question-text">${question.text}</div>
            <div class="options">
                <div class="option" onclick="selectHollandOption(${index}, 5, this)" data-value="5">
                    <input type="radio" name="holland_${index}" value="5">
                    <span>Strongly Agree</span>
                </div>
                <div class="option" onclick="selectHollandOption(${index}, 4, this)" data-value="4">
                    <input type="radio" name="holland_${index}" value="4">
                    <span>Agree</span>
                </div>
                <div class="option" onclick="selectHollandOption(${index}, 3, this)" data-value="3">
                    <input type="radio" name="holland_${index}" value="3">
                    <span>Neutral</span>
                </div>
                <div class="option" onclick="selectHollandOption(${index}, 2, this)" data-value="2">
                    <input type="radio" name="holland_${index}" value="2">
                    <span>Disagree</span>
                </div>
                <div class="option" onclick="selectHollandOption(${index}, 1, this)" data-value="1">
                    <input type="radio" name="holland_${index}" value="1">
                    <span>Strongly Disagree</span>
                </div>
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

function selectHollandOption(questionIndex, value, element) {
    const questionContainer = document.querySelectorAll('.question-container')[questionIndex];
    if (!questionContainer) return;
    const options = questionContainer.querySelectorAll('.option');

    options.forEach(option => option.classList.remove('selected'));

    if (element && element.classList) {
        element.classList.add('selected');
        const radio = element.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
    }
}

function calculateHollandScore() {
    hollandScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    
    hollandQuestions.forEach((question, index) => {
        const selectedRadio = document.querySelector(`input[name="holland_${index}"]:checked`);
        if (selectedRadio) {
            const score = parseInt(selectedRadio.value);
            hollandScores[question.type] += score;
        }
    });
    
    nextSection();
}

// Aptitude Test Functions
function loadAptitudeQuestions() {
    const container = document.getElementById('aptitude-questions-container');
    container.innerHTML = '';
    
    aptitudeQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        questionDiv.innerHTML = `
            <div class="question-number">${index + 1}</div>
            <div class="question-text">${question.question}</div>
            <div class="options">
                ${question.options.map((option, optionIndex) => `
                    <div class="option" onclick="selectAptitudeOption(${index}, ${optionIndex}, this)" data-value="${optionIndex}">
                        <input type="radio" name="aptitude_${index}" value="${optionIndex}">
                        <span>${option}</span>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

function selectAptitudeOption(questionIndex, optionIndex, element) {
    const questionContainer = document.querySelectorAll('.question-container')[questionIndex];
    if (!questionContainer) return;
    const options = questionContainer.querySelectorAll('.option');

    options.forEach(option => option.classList.remove('selected'));

    if (element && element.classList) {
        element.classList.add('selected');
        const radio = element.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
    }
}

function calculateAptitudeScore() {
    aptitudeScore = 0;
    
    aptitudeQuestions.forEach((question, index) => {
        const selectedRadio = document.querySelector(`input[name="aptitude_${index}"]:checked`);
        if (selectedRadio) {
            const selectedValue = parseInt(selectedRadio.value);
            if (selectedValue === question.correct) {
                aptitudeScore++;
            }
        }
    });
    
    generateResults();
    nextSection();
}

// Results Generation
function generateResults() {
    displayHollandResults();
    displayAptitudeResults();
    generateCareerRecommendations();
    displayNextSteps();
}

function displayHollandResults() {
    const container = document.getElementById('holland-results');
    
    const sortedTypes = Object.entries(hollandScores)
        .sort(([,a], [,b]) => b - a);
    
    const typeDescriptions = {
        R: { name: "Realistic", description: "Practical, hands-on, problem-solver. Prefers working with tools, machines, and real-world applications." },
        I: { name: "Investigative", description: "Analytical, intellectual, scientific. Enjoys research, experiments, and understanding complex concepts." },
        A: { name: "Artistic", description: "Creative, expressive, imaginative. Values originality, aesthetics, and self-expression." },
        S: { name: "Social", description: "Helpful, caring, people-oriented. Enjoys working with and helping others." },
        E: { name: "Enterprising", description: "Persuasive, ambitious, leader. Enjoys business, sales, and leadership roles." },
        C: { name: "Conventional", description: "Organized, detail-oriented, systematic. Prefers structured environments and clear procedures." }
    };
    
    container.innerHTML = `
        <div class="holland-types">
            ${sortedTypes.map(([type, score], index) => `
                <div class="holland-type ${index === 0 ? 'primary' : ''}">
                    <div class="type-letter">${type}</div>
                    <div class="type-name">${typeDescriptions[type].name}</div>
                    <div class="type-score">${score} points</div>
                    <div class="type-desc">${typeDescriptions[type].description}</div>
                </div>
            `).join('')}
        </div>
        <p style="margin-top: 20px; font-weight: 600;">
            Your Holland Code: <strong>${sortedTypes[0][0]}${sortedTypes[1][0]}${sortedTypes[2][0]}</strong>
        </p>
    `;
}

function displayAptitudeResults() {
    const container = document.getElementById('aptitude-results');
    const percentage = Math.round((aptitudeScore / aptitudeQuestions.length) * 100);
    
    let performanceLevel, performanceDesc, performanceColor;
    
    if (percentage >= 80) {
        performanceLevel = "Excellent";
        performanceDesc = "Outstanding analytical and problem-solving abilities";
        performanceColor = "#22c55e";
    } else if (percentage >= 60) {
        performanceLevel = "Good";
        performanceDesc = "Strong logical reasoning and numerical skills";
        performanceColor = "#3b82f6";
    } else if (percentage >= 40) {
        performanceLevel = "Average";
        performanceDesc = "Moderate problem-solving abilities with room for improvement";
        performanceColor = "#f59e0b";
    } else {
        performanceLevel = "Below Average";
        performanceDesc = "Consider developing analytical and mathematical skills";
        performanceColor = "#ef4444";
    }
    
    container.innerHTML = `
        <div class="aptitude-scores">
            <div class="aptitude-score">
                <div class="score-value" style="color: ${performanceColor}">${aptitudeScore}/${aptitudeQuestions.length}</div>
                <div class="score-label">Correct Answers</div>
                <div class="score-desc">${percentage}% Accuracy</div>
            </div>
            <div class="aptitude-score">
                <div class="score-value" style="color: ${performanceColor}">${performanceLevel}</div>
                <div class="score-label">Performance Level</div>
                <div class="score-desc">${performanceDesc}</div>
            </div>
        </div>
    `;
}

function generateCareerRecommendations() {
    const container = document.getElementById('career-recommendations');
    const buttonsContainer = document.getElementById('career-buttons-container');
    
    // Get user's dominant Holland types (top 3 for broader matching)
    const dominantTypes = Object.entries(hollandScores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3)
        .map(([type,]) => type);

    // Filter careers based on stream, Holland types, and aptitude score
    const userStream = userData.academic?.stream || 'General';
    
    // First try: Strict matching
    let matchingCareers = careerDatabase.filter(career => {
        const streamMatch = career.streams.includes(userStream);
        const hollandMatch = career.holland.some(type => dominantTypes.includes(type));
        const aptitudeMatch = aptitudeScore >= career.minAptitude;
        return streamMatch && hollandMatch && aptitudeMatch;
    });
    
    // Second try: Relaxed aptitude requirement (lower by 2 points)
    if (matchingCareers.length < 4) {
        const relaxedCareers = careerDatabase.filter(career => {
            const streamMatch = career.streams.includes(userStream);
            const hollandMatch = career.holland.some(type => dominantTypes.includes(type));
            const aptitudeMatch = aptitudeScore >= (career.minAptitude - 2);
            return streamMatch && hollandMatch && aptitudeMatch;
        });
        
        // Add relaxed careers that aren't already included
        relaxedCareers.forEach(career => {
            if (!matchingCareers.find(c => c.name === career.name)) {
                matchingCareers.push(career);
            }
        });
    }
    
    // Third try: Stream-only matching if still not enough
    if (matchingCareers.length < 4) {
        const streamOnlyCareers = careerDatabase.filter(career => {
            const streamMatch = career.streams.includes(userStream);
            const aptitudeMatch = aptitudeScore >= (career.minAptitude - 3);
            return streamMatch && aptitudeMatch;
        });
        
        // Add stream-only careers that aren't already included
        streamOnlyCareers.forEach(career => {
            if (!matchingCareers.find(c => c.name === career.name)) {
                matchingCareers.push(career);
            }
        });
    }
    
    // Fourth try: Show any career with reasonable aptitude match if still empty
    if (matchingCareers.length === 0) {
        matchingCareers = careerDatabase.filter(career => {
            return aptitudeScore >= (career.minAptitude - 4);
        });
    }
    
    // Sort by relevance (Holland type matches first, then aptitude compatibility)
    matchingCareers.sort((a, b) => {
        const aHollandMatches = a.holland.filter(type => dominantTypes.includes(type)).length;
        const bHollandMatches = b.holland.filter(type => dominantTypes.includes(type)).length;
        
        if (aHollandMatches !== bHollandMatches) {
            return bHollandMatches - aHollandMatches;
        }
        
        // If Holland matches are equal, sort by aptitude compatibility
        const aAptitudeGap = Math.abs(aptitudeScore - a.minAptitude);
        const bAptitudeGap = Math.abs(aptitudeScore - b.minAptitude);
        return aAptitudeGap - bAptitudeGap;
    });
    
    // Take top 12 recommendations to ensure scrolling
    const topRecommendations = matchingCareers.slice(0, 12);
    
    // Generate grid view for career recommendations
    container.innerHTML = `
        <div class="career-list">
            ${topRecommendations.map(career => {
                const hollandMatches = career.holland.filter(type => dominantTypes.includes(type)).length;
                let matchPercentage;
                
                if (hollandMatches > 0) {
                    matchPercentage = Math.round((hollandMatches / career.holland.length) * 100);
                } else {
                    // Base match on stream and aptitude compatibility
                    const streamMatch = career.streams.includes(userStream) ? 40 : 0;
                    const aptitudeMatch = aptitudeScore >= career.minAptitude ? 30 : 
                                        aptitudeScore >= (career.minAptitude - 2) ? 20 : 10;
                    matchPercentage = Math.min(streamMatch + aptitudeMatch, 70);
                }
                
                return `
                    <div class="career-item">
                        <div class="career-title">${career.name}</div>
                        <div class="career-match">${matchPercentage}% Match</div>
                        <div style="font-size: 0.9rem; margin-top: 8px; opacity: 0.9;">
                            ${career.description}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
        <p style="margin-top: 20px; font-size: 0.95rem; opacity: 0.9;">
            These recommendations are based on your ${userStream} stream, ${dominantTypes.join('')} personality type, 
            and ${Math.round((aptitudeScore/aptitudeQuestions.length)*100)}% aptitude score. Some options may have relaxed requirements to show you more opportunities.
        </p>
    `;
    
    // Generate career buttons - always show options
    buttonsContainer.innerHTML = topRecommendations.map(career => {
        const hollandMatches = career.holland.filter(type => dominantTypes.includes(type)).length;
        let matchPercentage;
        
        if (hollandMatches > 0) {
            matchPercentage = Math.round((hollandMatches / career.holland.length) * 100);
        } else {
            // Base match on stream and aptitude compatibility
            const streamMatch = career.streams.includes(userStream) ? 40 : 0;
            const aptitudeMatch = aptitudeScore >= career.minAptitude ? 30 : 
                                aptitudeScore >= (career.minAptitude - 2) ? 20 : 10;
            matchPercentage = Math.min(streamMatch + aptitudeMatch, 70);
        }
        
        return `
            <button class="career-button" onclick="showCareerDetails('${career.name}')">
                <div class="career-name">${career.name}</div>
                <div class="career-match-percent">${matchPercentage}% Match</div>
            </button>
        `;
    }).join('');
}

function displayNextSteps() {
    const container = document.getElementById('next-steps');
    const userStream = userData.academic?.stream || '';
    
    let streamSpecificAdvice = '';
    
    switch(userStream) {
        case 'PCM':
            streamSpecificAdvice = `
                <li>🎯 Consider engineering entrance exams (JEE Main, JEE Advanced)</li>
                <li>📚 Explore computer science, data science, or technical courses</li>
                <li>🔬 Look into research opportunities in your areas of interest</li>
            `;
            break;
        case 'PCB':
            streamSpecificAdvice = `
                <li>🎯 Prepare for medical entrance exams (NEET, AIIMS)</li>
                <li>🧬 Consider biotechnology, pharmacy, or life sciences</li>
                <li>🏥 Explore healthcare and medical research opportunities</li>
            `;
            break;
        case 'Commerce':
            streamSpecificAdvice = `
                <li>🎯 Consider CA, CS, CMA, or other professional courses</li>
                <li>💼 Explore business administration and management programs</li>
                <li>📈 Look into finance, marketing, and economics specializations</li>
            `;
            break;
        case 'Arts':
            streamSpecificAdvice = `
                <li>🎯 Consider law entrance exams (CLAT, AILET)</li>
                <li>📝 Explore journalism, psychology, or social sciences</li>
                <li>🎨 Look into creative fields and liberal arts programs</li>
            `;
            break;
    }
    
    container.innerHTML = `
        <ul style="text-align: left; line-height: 2;">
            ${streamSpecificAdvice}
            <li>👥 Connect with professionals in your fields of interest</li>
            <li>📖 Research colleges and universities for your chosen path</li>
            <li>💪 Develop skills relevant to your career goals</li>
            <li>🎯 Set specific, measurable career milestones</li>
            <li>📋 Create a timeline for achieving your goals</li>
            <li>🤝 Seek mentorship from industry professionals</li>
        </ul>
    `;
}

// Utility functions
function startOver() {
    currentSection = 0;
    userData = {};
    hollandScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    aptitudeScore = 0;
    selectedSubjects = [];
    
    // Hide all sections
    sections.forEach(sectionId => {
        document.getElementById(sectionId).classList.remove('active');
    });
    
    // Show landing page
    document.getElementById('landing').classList.add('active');
    
    // Reset forms
    document.getElementById('signup-form').reset();
    document.getElementById('academic-form').reset();
    document.getElementById('selectedStream').value = '';
    
    // Clear stream and subject selections
    document.querySelectorAll('.stream-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.getElementById('subjects-container').innerHTML = '';
}

function downloadResults() {
    const dominantTypes = Object.entries(hollandScores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3);

    const primaryType = dominantTypes[0] ? `${dominantTypes[0][0]} (${dominantTypes[0][1]} points)` : 'N/A';
    const secondaryType = dominantTypes[1] ? `${dominantTypes[1][0]} (${dominantTypes[1][1]} points)` : 'N/A';
    const thirdType = dominantTypes[2] ? `${dominantTypes[2][0]} (${dominantTypes[2][1]} points)` : 'N/A';

    const resultsText = `
CAREER GUIDANCE RESULTS - Class 12th
=====================================


Personal Information:
Name: ${userData.personal?.fullName || 'N/A'}
Email: ${userData.personal?.email || 'N/A'}

Academic Background:
Stream: ${userData.academic?.stream || 'N/A'}
Favorite Subjects: ${userData.academic?.subjects?.join(', ') || 'N/A'}

Holland Code Results:
Primary Type: ${primaryType}
Secondary Type: ${secondaryType}
Third Type: ${thirdType}

Aptitude Assessment:
Score: ${aptitudeScore}/${aptitudeQuestions.length} (${Math.round((aptitudeScore/aptitudeQuestions.length)*100)}%)

Career Recommendations:
[Based on your stream, personality type, and aptitude score]

Generated on: ${new Date().toLocaleDateString()}

Next Steps:
- Research recommended careers in detail
- Prepare for relevant entrance exams
- Connect with professionals in your field of interest
- Develop relevant skills and knowledge
- Create a clear action plan for your future

For more detailed guidance, consider consulting with a career counselor.
    `;
    
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'class12-career-guidance-results.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    showCurrentSection();
});

// Career Modal Functions
function showCareerDetails(careerName) {
    const career = careerDatabase.find(c => c.name === careerName);
    if (!career || !career.details) return;
    
    const modal = document.getElementById('careerModal');
    const title = document.getElementById('modalCareerTitle');
    const body = document.getElementById('modalCareerBody');
    
    title.textContent = career.name;
    
    body.innerHTML = `
        <div class="career-modal-section">
            <h4>📋 Overview</h4>
            <p>${career.details.overview}</p>
        </div>
        
        <div class="career-modal-section">
            <h4>🛠️ Key Skills Required</h4>
            <ul>
                ${career.details.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
        
        <div class="career-modal-section">
            <h4>🎓 Education Requirements</h4>
            <p>${career.details.education}</p>
        </div>
        
        <div class="career-modal-section">
            <h4>💰 Salary Range</h4>
            <p>${career.details.salary}</p>
        </div>
        
        <div class="career-modal-section">
            <h4>🚀 Career Prospects</h4>
            <p>${career.details.prospects}</p>
        </div>
        
        <div class="career-modal-section">
            <h4>📝 Brief Description</h4>
            <p>${career.description}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeCareerModal() {
    const modal = document.getElementById('careerModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('careerModal');
    if (event.target === modal) {
        closeCareerModal();
    }
}