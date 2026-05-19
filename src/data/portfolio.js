import {
  Award,
  BrainCircuit,
  Car,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Github,
  GraduationCap,
  Leaf,
  Linkedin,
  Mail,
  MessageSquareText,
  RadioTower,
  Rocket,
  Satellite,
  Sparkles,
  TerminalSquare,
  Waves
} from "lucide-react";

export const profile = {
  name: "Suryakshar Konchada",
  initials: "SK",
  role: "AI/ML Engineer - ECE Student - Communication Systems Enthusiast",
  location: "Hyderabad, India",
  email: "konchadasuryakshar@gmail.com",
  phone: "+91 93923 03750",
  github: "https://github.com/suryakshar1205",
  githubUsername: "suryakshar1205",
  linkedin: "https://linkedin.com/in/suryakshar-konchada-b73159257",
  resumes: [
    {
      id: "ai",
      label: "AI/ML Resume",
      name: "Suryakshar_Konchada_AI_ML_Resume.pdf",
      url: "/Suryakshar_Konchada_Resume.pdf",
      extension: "pdf",
      bestFor: "AI/ML, NLP, computer vision, data science, and applied AI roles.",
      accent: "from-cyan-beam to-plasma"
    },
    {
      id: "core",
      label: "ECE/Core Resume",
      name: "Suryakshar_Konchada_ECE_Core_Resume.pdf",
      url: "/Suryakshar_Konchada_Core_Resume.pdf",
      extension: "pdf",
      bestFor: "Electronics, telecom, embedded systems, wireless communication, and signal processing roles.",
      accent: "from-plasma to-violet-pulse"
    }
  ],
  headline:
    "Building intelligent systems across AI/ML, computer vision, NLP, wireless communication, and signal processing.",
  typingPhrases: [
    "Training text and vision models from real datasets",
    "Connecting AI with Electronics and Communication Engineering",
    "Building practical tools around intelligent workflows",
    "Turning experiments into practical engineering systems"
  ],
  summary:
    "I am an AI/ML-focused Electronics and Communication Engineering student at JNTUH. I build across NLP, computer vision, communication systems, and AI + ECE applications, with a focus on practical engineering outcomes.",
  stats: [
    { value: "Multiple", label: "Engineering Projects" },
    { value: "8.13", label: "Academic CGPA" },
    { value: "Cross-domain", label: "AI + ECE Focus" },
    { value: "2027", label: "Integrated B.Tech + M.Tech" }
  ]
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#featured-projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const storyChapters = [
  {
    title: "The foundation",
    text:
      "ECE gave me a systems lens: signals, telecom, hardware, MATLAB/Simulink, and communication networks."
  },
  {
    title: "The AI layer",
    text:
      "AI/ML became the layer I use for classification, prediction, vision, NLP, and adaptive decision-making."
  },
  {
    title: "The product bridge",
    text:
      "Full-stack development helps me turn experiments into usable tools, dashboards, and intelligent interfaces."
  }
];

export const skills = [
  {
    title: "AI/ML",
    icon: BrainCircuit,
    story:
      "I use ML as a practical engineering layer: cleaning data, shaping features, training models, evaluating tradeoffs, and turning experiments into usable systems.",
    items: ["Machine Learning", "Deep Learning", "CNNs", "Scikit-learn", "TensorFlow", "Model Evaluation"]
  },
  {
    title: "Computer Vision",
    icon: Cpu,
    story:
      "My vision work focuses on image classification and diagnosis-style workflows, from preprocessing to CNN and transformer-based approaches.",
    items: ["OpenCV", "Image Classification", "CIFAR-10", "Vision Transformers", "Data Augmentation"]
  },
  {
    title: "NLP",
    icon: MessageSquareText,
    story:
      "I build text pipelines that move from raw language into useful features, sentiment models, and classification systems.",
    items: ["Text Classification", "Sentiment Analysis", "TF-IDF", "Tokenization", "Word Embeddings", "NLTK"]
  },
  {
    title: "Application Prototyping",
    icon: Code2,
    story:
      "I build simple interfaces and prototypes to make AI outputs easier to test, explain, and use.",
    items: ["Flask", "HTML", "CSS", "JavaScript", "SQLAlchemy"]
  },
  {
    title: "ECE + Wireless Systems",
    icon: RadioTower,
    story:
      "My ECE background helps me think about AI beyond screens: sensors, signals, communication networks, and embedded decisions.",
    items: ["Wireless Communication", "Telecom Systems", "OFDM", "Beamforming", "MATLAB", "Simulink"]
  },
  {
    title: "Signal Processing",
    icon: Waves,
    story:
      "I connect DSP concepts with intelligent systems, especially where noisy real-world measurements need stable decisions.",
    items: ["DSP", "RLS/LMS", "MVDR", "Adaptive Filters", "Signal Analysis"]
  },
  {
    title: "Programming Languages",
    icon: TerminalSquare,
    story:
      "Python is my core AI language, with JavaScript for interfaces, C++ for embedded-style systems, and MATLAB for engineering simulation.",
    items: ["Python", "JavaScript", "C/C++", "MATLAB"]
  },
  {
    title: "Tools & Frameworks",
    icon: Database,
    story:
      "I use the supporting stack needed to make projects reproducible, maintainable, and easier to improve later.",
    items: ["Git", "Vite", "Pandas", "NumPy", "Flask-Migrate", "Data Analysis"]
  }
];

export const engineeringDomains = [
  {
    title: "NLP Systems",
    icon: MessageSquareText,
    description:
      "Text pipelines that convert raw language into sentiment, classification, and reusable ML outputs.",
    projects: ["Twitter Sentiment Analysis", "Coincent AI NLP Work"],
    tools: ["Python", "TF-IDF", "NLTK", "Scikit-learn"]
  },
  {
    title: "Computer Vision Systems",
    icon: Cpu,
    description:
      "Image intelligence for classification and diagnosis-style workflows using preprocessing, CNNs, and transformer thinking.",
    projects: ["Plant Disease Detection", "CIFAR-10 ViT"],
    tools: ["CNNs", "OpenCV", "TensorFlow", "Data Augmentation"]
  },
  {
    title: "Edge AI + Embedded Systems",
    icon: Car,
    description:
      "Sensor-driven decision systems where software, electronics, and real-time control logic meet the physical world.",
    projects: ["High Beam Assist"],
    tools: ["ESP32", "C++", "Sensors", "Relay Control"]
  },
  {
    title: "Wireless Communication + AI",
    icon: RadioTower,
    description:
      "AI thinking applied to telecom workflows, communication networks, signals, and reliability.",
    projects: ["BSNL Internship", "ECE Systems Practice"],
    tools: ["Telecom", "Wireless", "MATLAB", "Signal Analysis"]
  },
  {
    title: "AI Application Prototypes",
    icon: Rocket,
    description:
      "Lightweight AI tools and interfaces that make workflows easier to use and demonstrate.",
    projects: ["Digital Notice Board", "Spoorthi AI"],
    tools: ["Flask", "JavaScript", "HTML/CSS", "SQLAlchemy"]
  },
  {
    title: "Predictive ML Pipelines",
    icon: BrainCircuit,
    description:
      "Structured ML workflows for classification, regression, analytics, feature engineering, and evaluation.",
    projects: ["Car Price Predictor", "IPL Winning Prediction", "Breast Cancer Detection"],
    tools: ["Pandas", "NumPy", "Scikit-learn", "Model Metrics"]
  }
];

export const whatIBuild = [
  {
    title: "AI Classification Pipelines",
    description:
      "End-to-end systems that move from raw data to preprocessing, feature extraction, model training, and prediction.",
    signal: "data -> features -> model -> decision"
  },
  {
    title: "Computer Vision Diagnosis Systems",
    description:
      "Image workflows for detecting visual patterns, especially classification tasks with real-world interpretation.",
    signal: "image -> preprocessing -> cnn/vit -> class"
  },
  {
    title: "Embedded Decision Systems",
    description:
      "Sensor-based systems where microcontrollers react to real conditions and make fast control decisions.",
    signal: "sensor -> threshold -> logic -> actuator"
  },
  {
    title: "AI Workflow Tools",
    description:
      "Simple tools and dashboards that package intelligent workflows into usable demos.",
    signal: "interface -> service -> model/output -> user"
  },
  {
    title: "Telecom + AI Workflows",
    description:
      "Communication-system thinking connected with AI-assisted monitoring, analysis, and automation ideas.",
    signal: "network -> telemetry -> analysis -> insight"
  },
  {
    title: "Signal Processing Experiments",
    description:
      "Research-style explorations around waveforms, filters, spectrum behavior, and adaptive signal decisions.",
    signal: "signal -> transform -> filter -> estimate"
  }
];

export const currentlyExploring = [
  "Vision Transformers",
  "RAG Systems",
  "Edge AI",
  "Wireless AI Systems",
  "Beamforming / DSP"
];

export const featuredProjects = [
  {
    title: "Digital Notice Board",
    github: "https://github.com/suryakshar1205/Digital-Notice-Board",
    icon: Rocket,
    type: "Academic Utility System",
    description:
      "An academic notice platform with admin workflows, schedules, document previews, and student-facing utilities.",
    stack: ["Flask", "SQLAlchemy", "JavaScript", "HTML/CSS"],
    visual: "notice",
    problem: "Academic updates often get scattered across different channels, making it harder for students to find timely notices and schedules.",
    pipeline: ["Admin creates notice", "Backend stores content", "Students view updates", "Documents and timetable data stay organized"],
    outcome: "A structured academic communication tool with a cleaner student-facing workflow.",
    decisions: ["Kept the interface direct and admin-friendly", "Structured the project so it can grow beyond static notices"]
  },
  {
    title: "Plant Disease Detection",
    github: "https://github.com/suryakshar1205/Plant-Disease-detection",
    icon: Leaf,
    type: "Computer Vision",
    description:
      "A computer vision workflow for detecting plant disease patterns from leaf imagery using preprocessing and CNN classification.",
    stack: ["Python", "CNN", "Computer Vision", "Image Processing"],
    visual: "vision",
    problem: "Plant disease detection needs fast visual analysis so crop issues can be identified earlier.",
    pipeline: ["Leaf image input", "Image preprocessing", "CNN feature learning", "Disease class prediction"],
    outcome: "A computer vision pipeline that demonstrates diagnosis-style classification from image data.",
    decisions: ["Focused on preprocessing quality", "Used CNN-based classification for visual pattern recognition"]
  },
  {
    title: "Twitter Sentiment Analysis",
    github: "https://github.com/suryakshar1205/Twitter-Sentiment-Analysis",
    icon: MessageSquareText,
    type: "NLP System",
    description:
      "An NLP pipeline for tweet sentiment classification using preprocessing, TF-IDF vectorization, and ML models.",
    stack: ["NLP", "TF-IDF", "Scikit-learn", "Python"],
    visual: "nlp",
    problem: "Social text is noisy, short, and inconsistent, so the system needs careful preprocessing before classification.",
    pipeline: ["Raw tweet text", "Tokenization and cleanup", "TF-IDF vectorization", "Sentiment classifier"],
    outcome: "A reusable NLP pipeline for converting text into sentiment predictions.",
    decisions: ["Used classic ML for interpretability", "Prioritized preprocessing because text quality drives model quality"]
  },
  {
    title: "Spoorthi AI",
    github: "https://github.com/suryakshar1205/spoorthi_ai",
    demo: "https://spoorthi-ai.vercel.app",
    icon: Sparkles,
    type: "AI Prototype",
    description:
      "A hosted AI prototype for intelligent interactions and event/support workflows.",
    stack: ["Python", "AI", "Automation", "Prototype"],
    visual: "ai",
    problem: "Event and user-support workflows benefit from quick, intelligent interactions instead of static information pages.",
    pipeline: ["User query", "AI interaction layer", "Response workflow", "Live web experience"],
    outcome: "A hosted AI prototype available as a real live site.",
    decisions: ["Shipped a live Vercel deployment", "Kept the prototype focused on practical interaction flow"]
  },
  {
    title: "High Beam Assist",
    github: "https://github.com/suryakshar1205/High-Beam-Assist",
    icon: Car,
    type: "Embedded AI + ECE",
    description:
      "An ESP32-based night-driving assist system for automatic high/low beam switching.",
    stack: ["ESP32", "C++", "LDR Sensors", "Relay Control", "Embedded Systems"],
    visual: "embedded",
    problem: "Manual high-beam switching can reduce safety during night driving when lighting conditions change quickly.",
    pipeline: ["Ambient light sensing", "Signal thresholding", "ESP32 decision logic", "Relay-controlled beam switch"],
    outcome: "An embedded ECE safety system that connects sensor input with real-time control.",
    decisions: ["Used simple sensor logic for predictable behavior", "Focused on fast physical response instead of overcomplicated AI"]
  }
];

export const projects = [
  {
    title: "Digital Notice Board",
    github: "https://github.com/suryakshar1205/Digital-Notice-Board",
    description:
      "Academic notice platform with admin tools, timetable handling, and student-facing updates.",
    stack: ["HTML", "Flask", "SQLAlchemy", "JavaScript"]
  },
  {
    title: "Plant Disease Detection",
    github: "https://github.com/suryakshar1205/Plant-Disease-detection",
    description:
      "Leaf-image disease detection using preprocessing and CNN-based computer vision.",
    stack: ["CNN", "Computer Vision", "Python", "Image Processing"]
  },
  {
    title: "Twitter Sentiment Analysis",
    github: "https://github.com/suryakshar1205/Twitter-Sentiment-Analysis",
    description:
      "Tweet sentiment classification with tokenization, vectorization, and ML techniques.",
    stack: ["NLP", "TF-IDF", "Machine Learning", "Python"]
  },
  {
    title: "Spoorthi AI",
    github: "https://github.com/suryakshar1205/spoorthi_ai",
    description:
      "Live AI prototype for intelligent event and support interactions.",
    stack: ["Python", "AI", "Prototype"]
  },
  {
    title: "High Beam Assist",
    github: "https://github.com/suryakshar1205/High-Beam-Assist",
    description:
      "ESP32 high-beam assist using LDR sensors and relay control.",
    stack: ["C++", "ESP32", "Sensors", "ECE"]
  },
  {
    title: "IPL Winning Prediction",
    github: "https://github.com/suryakshar1205/IPL-WINNING-PREDICTION",
    description:
      "IPL win-probability predictor using second-innings match-state features.",
    stack: ["Sports Analytics", "Logistic Regression", "Pandas"]
  },
  {
    title: "Car Price Predictor",
    github: "https://github.com/suryakshar1205/CAR-PRICE-PREDICTOR",
    description:
      "Used-car price prediction using regression and engineered vehicle features.",
    stack: ["Regression", "Feature Engineering", "Scikit-learn"]
  },
  {
    title: "Breast Cancer Detection",
    github: "https://github.com/suryakshar1205/BREAST-CANCER-DETECTION",
    description:
      "Medical AI classifier for benign and malignant tumour prediction.",
    stack: ["Classification", "Healthcare ML", "Python"]
  },
  {
    title: "Iris Multiclassification",
    github: "https://github.com/suryakshar1205/IRIS-MULTICLASSIFICATION",
    description:
      "Classical supervised ML project for Iris species classification.",
    stack: ["KNN", "SVM", "Scikit-learn"]
  },
  {
    title: "Flappy Bird Clone",
    github: "https://github.com/suryakshar1205/flappy-bird",
    description:
      "Python game clone with gameplay loops, collision logic, and scoring.",
    stack: ["Python", "Game Logic", "Pygame"],
    icon: Gamepad2
  }
];

export const experience = [
  {
    role: "Telecommunication + AI-ECE Intern",
    company: "BSNL",
    date: "Recent Internship",
    icon: Satellite,
    points: [
      "Explored telecom infrastructure and AI opportunities in communication-system workflows.",
      "Connected ECE foundations with signals, routing, reliability, and intelligent automation ideas."
    ],
    stack: ["Telecom", "AI + ECE", "Communication Networks", "Systems Engineering"]
  },
  {
    role: "AI/ML Intern",
    company: "Coincent AI",
    date: "April 2024 - May 2024",
    icon: BrainCircuit,
    points: [
      "Built text and image classification models using Python and deep learning frameworks.",
      "Improved NLP classification accuracy from 75% to 90% through feature engineering.",
      "Implemented a Vision Transformer for CIFAR-10 image classification."
    ],
    stack: ["Python", "Machine Learning", "NLP", "Vision Transformers", "Computer Vision"]
  },
  {
    role: "Hackathon & Campus Builder",
    company: "Campus + National Events",
    date: "2024 - 2026",
    icon: Award,
    points: [
      "Participated in Smart India Hackathon 2024 and 2025 with rapid prototyping work.",
      "Selected to Round 2 in MSME Idea Hackathon 4.0; won 2nd Prize at E-Papyrus."
    ],
    stack: ["Rapid Prototyping", "Presentation", "Problem Solving"]
  }
];

export const certifications = [
  { title: "AI For Everyone", issuer: "DeepLearning.AI - Coursera", icon: GraduationCap },
  { title: "Generative AI for Everyone", issuer: "DeepLearning.AI - Coursera", icon: Sparkles },
  { title: "Python for Data Science & AI", issuer: "IBM - Coursera", icon: Code2 },
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI - Coursera", icon: BrainCircuit },
  { title: "5-Day Generative AI Workshop", issuer: "Kaggle", icon: Sparkles }
];

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", value: "github.com/suryakshar1205", href: profile.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/suryakshar-konchada", href: profile.linkedin, icon: Linkedin }
];
