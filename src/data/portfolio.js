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
  role: "AI/ML Engineer - ECE Student - Full Stack Developer",
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
      bestFor: "AI/ML, NLP, computer vision, data science, and full-stack AI roles.",
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
    "Building intelligent systems across Artificial Intelligence, Computer Vision, NLP, Wireless Communication, Signal Processing, and Modern Web Technologies.",
  typingPhrases: [
    "Training text and vision models from real datasets",
    "Connecting AI with Electronics and Communication Engineering",
    "Building full-stack tools around intelligent workflows",
    "Turning experiments into practical engineering projects"
  ],
  summary:
    "I am an AI/ML-focused Electronics and Communication Engineering student at JNTUH. My work began with Python models and data preprocessing, then expanded into NLP, computer vision, transformer-based image classification, full-stack tools, and embedded/ECE systems. I like projects where intelligence has to meet the physical world: signals, sensors, telecom networks, dashboards, and real users.",
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
      "ECE gave me the hardware-and-signals lens: communication systems, MATLAB/Simulink, telecom ideas, and the discipline of thinking in systems rather than isolated code."
  },
  {
    title: "The AI layer",
    text:
      "AI/ML became the layer I use to make systems adaptive: text classification, sentiment analysis, CNNs, Vision Transformers, feature engineering, and model optimization."
  },
  {
    title: "The product bridge",
    text:
      "Full-stack development helps me package the work into tools people can actually use, from academic dashboards to intelligent assistants and polished portfolio experiences."
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
    title: "Web Development",
    icon: Code2,
    story:
      "I like building interfaces around intelligence, especially tools that make AI outputs understandable and accessible.",
    items: ["React", "Tailwind CSS", "Flask", "HTML", "CSS", "JavaScript", "SQLAlchemy"]
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
      "Text pipelines that turn raw language into features, classifications, sentiment signals, and reusable ML outputs.",
    projects: ["Twitter Sentiment Analysis", "Coincent AI NLP Work"],
    tools: ["Python", "TF-IDF", "NLTK", "Scikit-learn"]
  },
  {
    title: "Computer Vision Systems",
    icon: Cpu,
    description:
      "Image-based intelligence for classification and diagnosis-style workflows using preprocessing, CNNs, and transformer thinking.",
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
      "A growing focus on using AI thinking around telecom workflows, communication networks, signals, and reliability.",
    projects: ["BSNL Internship", "ECE Systems Practice"],
    tools: ["Telecom", "Wireless", "MATLAB", "Signal Analysis"]
  },
  {
    title: "Full Stack AI Products",
    icon: Rocket,
    description:
      "Interfaces and backend systems that make AI work understandable, accessible, and useful for real users.",
    projects: ["Digital Notice Board", "Spoorthi AI"],
    tools: ["React", "Tailwind", "Flask", "SQLAlchemy"]
  },
  {
    title: "Predictive ML Pipelines",
    icon: BrainCircuit,
    description:
      "Structured ML workflows for classification, regression, analytics, feature engineering, and model evaluation.",
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
    title: "Full-Stack AI Tools",
    description:
      "Web products and dashboards that package intelligent workflows into usable interfaces.",
    signal: "frontend -> backend -> model/service -> user"
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
    type: "Full-Stack Academic System",
    description:
      "A full-stack academic notice platform with admin workflows, timetable handling, document previews, and student-facing utility features.",
    stack: ["Flask", "SQLAlchemy", "JavaScript", "HTML/CSS"],
    visual: "notice",
    problem: "Academic updates often get scattered across different channels, making it harder for students to find timely notices and schedules.",
    pipeline: ["Admin creates notice", "Backend stores content", "Students view updates", "Documents and timetable data stay organized"],
    outcome: "A structured academic communication tool with a cleaner student-facing workflow.",
    decisions: ["Kept the interface direct and admin-friendly", "Used a full-stack structure so the system can grow beyond static notices"]
  },
  {
    title: "Plant Disease Detection",
    github: "https://github.com/suryakshar1205/Plant-Disease-detection",
    icon: Leaf,
    type: "Computer Vision",
    description:
      "A deep-learning computer vision workflow for detecting plant disease patterns from leaf imagery using preprocessing and CNN-based classification.",
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
      "An NLP pipeline for classifying tweet sentiment with tokenization, stop-word removal, TF-IDF vectorization, and ML classification.",
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
      "An AI-focused prototype exploring intelligent interactions and event/product support workflows through a fast Python-based implementation.",
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
      "A smart night-driving assist system using ESP32, LDR sensors, and relay control to switch between high and low beams based on ambient light conditions.",
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
      "Full-stack academic notice platform with admin workflows, timetable handling, document preview, and student-facing utility features.",
    stack: ["HTML", "Flask", "SQLAlchemy", "JavaScript"]
  },
  {
    title: "Plant Disease Detection",
    github: "https://github.com/suryakshar1205/Plant-Disease-detection",
    description:
      "Computer vision project for identifying plant disease patterns from leaf images using preprocessing and CNN-based classification workflows.",
    stack: ["CNN", "Computer Vision", "Python", "Image Processing"]
  },
  {
    title: "Twitter Sentiment Analysis",
    github: "https://github.com/suryakshar1205/Twitter-Sentiment-Analysis",
    description:
      "NLP pipeline for classifying tweet sentiment with tokenization, stop-word removal, vectorization, and classical ML techniques.",
    stack: ["NLP", "TF-IDF", "Machine Learning", "Python"]
  },
  {
    title: "Spoorthi AI",
    github: "https://github.com/suryakshar1205/spoorthi_ai",
    description:
      "AI-focused prototype exploring intelligent interactions and event/product support workflows through a fast Python-based implementation.",
    stack: ["Python", "AI", "Prototype"]
  },
  {
    title: "High Beam Assist",
    github: "https://github.com/suryakshar1205/High-Beam-Assist",
    description:
      "Smart high-beam assist system using ESP32, LDR sensors, and relay switching to improve night-driving safety.",
    stack: ["C++", "ESP32", "Sensors", "ECE"]
  },
  {
    title: "IPL Winning Prediction",
    github: "https://github.com/suryakshar1205/IPL-WINNING-PREDICTION",
    description:
      "Live match probability engine using second-innings features like runs left, balls left, wickets, CRR, and RRR.",
    stack: ["Sports Analytics", "Logistic Regression", "Pandas"]
  },
  {
    title: "Car Price Predictor",
    github: "https://github.com/suryakshar1205/CAR-PRICE-PREDICTOR",
    description:
      "Regression model estimating used-car prices from engineered vehicle age, fuel, transmission, and usage features.",
    stack: ["Regression", "Feature Engineering", "Scikit-learn"]
  },
  {
    title: "Breast Cancer Detection",
    github: "https://github.com/suryakshar1205/BREAST-CANCER-DETECTION",
    description:
      "Medical AI classification workflow for distinguishing malignant and benign tumours from structured dataset features.",
    stack: ["Classification", "Healthcare ML", "Python"]
  },
  {
    title: "Iris Multiclassification",
    github: "https://github.com/suryakshar1205/IRIS-MULTICLASSIFICATION",
    description:
      "Classical ML comparison for multi-class flower classification using supervised learning workflows.",
    stack: ["KNN", "SVM", "Scikit-learn"]
  },
  {
    title: "Flappy Bird Clone",
    github: "https://github.com/suryakshar1205/flappy-bird",
    description:
      "Python game clone exploring interactive loops, collision logic, scoring, and responsive gameplay mechanics.",
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
      "Worked around telecom infrastructure and communication-system workflows while studying how AI can support network monitoring, automation, and decision-making.",
      "Connected ECE foundations with applied intelligence: signals, routing, reliability, and opportunities for AI-assisted communication systems."
    ],
    stack: ["Telecom", "AI + ECE", "Communication Networks", "Systems Engineering"]
  },
  {
    role: "AI/ML Intern",
    company: "Coincent AI",
    date: "April 2024 - May 2024",
    icon: BrainCircuit,
    points: [
      "Developed machine learning models for text classification and image classification using Python and deep learning frameworks.",
      "Built an NLP text-classification system processing 50,000+ samples and improved accuracy from 75% to 90% through feature engineering and hyperparameter tuning.",
      "Implemented a Vision Transformer for CIFAR-10 image classification, moving from a CNN baseline toward stronger 85-90% performance."
    ],
    stack: ["Python", "Machine Learning", "NLP", "Vision Transformers", "Computer Vision"]
  },
  {
    role: "Hackathon & Campus Builder",
    company: "Campus + National Events",
    date: "2024 - 2026",
    icon: Award,
    points: [
      "Participated in Smart India Hackathon 2024 and 2025 with applied problem-solving and rapid prototyping.",
      "Selected to Round 2 in MSME Idea Hackathon 4.0 and won 2nd Prize at E-Papyrus, Spoorthi National Symposium."
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
