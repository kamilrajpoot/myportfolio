export const profile = {
  name: "Muhammad Kamil Toor",
  shortName: "M. Kamil",
  role: "AI Developer / Full-Stack Developer / Digital Product Maker",
  location: "Pakistan",
  phone: "+92 307 860 8899",
  email: "kamiltoor@gmail.com",
  university: "University of Management and Technology",
  degree: "Bachelor of Science in Artificial Intelligence",
  educationPeriod: "October 2023 – June 2027",
  linkedin: "https://www.linkedin.com/in/kamiltoor/",
  github: "https://github.com/kamilrajpoot",
};

export const skills = [
  "Python",
  "JavaScript",
  "C++",
  "React",
  "Node.js",
  "MongoDB",
  "PyTorch",
  "LangChain",
  "FAISS",
  "Computer Vision",
  "REST APIs",
  "JWT Auth",
  "Git/GitHub",
];

export const certifications = [
  {
    id: "ai-engineer-associate",
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp",
    date: "August 2026",
    idCode: "AIEDA0013178735517",
    file: "/public/certs/ai-engineer-associate.pdf",
  },
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    issuer: "DataCamp",
    date: "August 2026",
    idCode: "AIF0024169670761",
    file: "/public/certs/ai-fundamentals.pdf",
  },
  {
    id: "PDA0017398601907",
    title: "Python Data Associate",
    issuer: "DataCamp",
    date: "September 2026",
    idCode: "PDA0017398601907",
    file: "/public/certs/PDA0017398601907.pdf",
  },
  {
    id: "10675827_11005757_1788200789254",
    title: "Full Stack Development",
    issuer: "SimpliLearn",
    date: "September 2026",
    idCode: "10675827_11005757_1788200789254",
    file: "/public/certs/10675827_11005757_1788200789254.pdf",
  },
  {
    id: "n8n-masterclass",
    title: "N8N Masterclass for AI Chatbots",
    issuer: "DataCrumbs",
    date: "January 2026",
    file: "/public/certs/MUHAMMAD KAMIL TOOR_N8n_Chatbot_Lab_certificate.pdf",
  },
  {
    id: "ai-voice-chatbot",
    title: "Building AI Voice Chatbot Masterclass",
    issuer: "DataCrumbs",
    date: "October 2025",
    file: "/public/certs/MUHAMMAD KAMIL TOOR_Building_AI_Voice_Agent_Masterclass_certificate.pdf",
  },
];

export const badges = [
  { name: "AI Engineer", icon: "Brain" },
  { name: "MERN Stack", icon: "Code" },
  { name: "RAG Systems", icon: "Database" },
  { name: "Automation", icon: "Zap" },
];

export const services = [
  {
    index: "01",
    slug: "ai-product-development",
    title: "AI Product Development",
    description:
      "Intelligent products that combine machine learning, automation, and focused user experiences.",
    tags: ["Python", "PyTorch", "Automation"],
    intro:
      "I turn AI ideas into usable products by combining model capability, backend logic, and a focused user experience.",
    includes: [
      "AI product planning and technical direction",
      "Model and LLM integration",
      "Automation workflows",
      "Conversational interfaces",
      "Prototype-to-product development",
      "Deployment-ready architecture",
    ],
    stack: ["Python", "PyTorch", "LangChain", "React", "Node.js", "Gradio"],
    relatedProjectSlugs: [
      "voice-chatbot",
      "e-commerce-rag-chatbot",
      "emotion-sense-ai",
    ],
  },
  {
    index: "02",
    slug: "web-development",
    title: "Web Development",
    description:
      "Full-stack MERN applications with responsive React interfaces and reliable product workflows.",
    intro:
      "Full-stack React and Node.js applications designed for real users, real data, and reliable product workflows.",
    tags: ["React", "Node.js", "MongoDB"],
    includes: [
      "Responsive React frontend development",
      "REST API integration",
      "JWT authentication",
      "Admin panels and dashboards",
      "Database-backed features",
      "Payments and file uploads",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Git"],
    relatedProjectSlugs: [
      "ajlal-international",
      "everlion-international",
      "habitron",
    ],
  },
  {
    index: "03",
    slug: "llm-rag-systems",
    title: "LLM & RAG Systems",
    description:
      "Grounded chatbots and retrieval systems that keep answers connected to useful source material.",
    intro:
      "Search, retrieve, and generate with systems that keep answers connected to useful source material.",
    tags: ["LangChain", "RAG", "FAISS"],
    includes: [
      "Document ingestion pipelines",
      "Vector search and retrieval",
      "Prompt design",
      "Grounded question answering",
      "Chatbot interfaces",
      "Retrieval evaluation and refinement",
    ],
    stack: [
      "LangChain",
      "FAISS",
      "Rasa",
      "Sentence Transformers",
      "Groq",
      "Python",
    ],
    relatedProjectSlugs: [
      "e-commerce-rag-chatbot",
      "movie-rag-system",
      "ai-chatbot-rasa-langchain",
    ],
  },
  {
    index: "04",
    slug: "computer-vision-ml",
    title: "Computer Vision & ML",
    description:
      "Applied machine learning systems for recognizing patterns, predicting outcomes, and making visual data useful.",
    intro:
      "Applied machine learning systems for recognizing patterns, predicting outcomes, and making visual data useful.",
    tags: ["CNNs", "Vision Transformers", "PyTorch"],
    includes: [
      "Image classification",
      "CNN pipelines",
      "Vision Transformer experiments",
      "Regression models",
      "Data preprocessing",
      "Image Preprocessing and Augmentation",
      "Custom loss functions and training loops",
      "Transfer Learning (Fine-Tuning )",
      "Evaluation Metrics and Visualization",
      "Model evaluation",
    ],
    stack: [
      "Python",
      "PyTorch",
      "CNNs",
      "Vision Transformers",
      "NumPy",
      "Pandas",
    ],
    relatedProjectSlugs: [
      "handwritten-digit-recognizer",
      "traffic-sign-recognition",
      "emotion-sense-ai",
      "student-score-prediction",
    ],
  },
];

export const projects = [
  {
    slug: "ajlal-international",
    title: "AJLAL International",
    client: "Cosmetics Brand",
    year: "SELECTED WORK",
    category: "Web Development",
    description:
      "MERN e-commerce storefront and admin panel for a cosmetics brand.",
    detail:
      "Built a complete commerce experience with customer-facing shopping flows and an admin panel for product and order operations.",
    tags: ["MERN", "JWT", "Stripe", "Cloudinary"],
    featured: true,
    serviceSlugs: ["web-development"],
    bullets: [
      "Product, order, and review management",
      "JWT authentication",
      "Cloudinary image uploads",
      "Cash on delivery and Stripe integration",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl: null,
    images: null,
  },
  {
    slug: "everlion-international",
    title: "Everlion International",
    client: "Apparel Manufacturer",
    year: "SELECTED WORK",
    category: "Web Development",
    description:
      "MERN business and catalog website for an apparel manufacturer.",
    detail:
      "Created a catalog and inquiry experience with protected administration and an email-based contact workflow.",
    tags: ["MERN", "JWT", "Nodemailer"],
    featured: true,
    serviceSlugs: ["web-development"],
    bullets: [
      "Business catalog experience",
      "JWT-protected admin area",
      "Nodemailer contact system",
      "Inquiry-focused information architecture",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl: null,
    images: null,
  },
  {
    slug: "habitron",
    title: "Habitron",
    client: "Personal Product",
    year: "SELECTED WORK",
    category: "Web Development",
    description:
      "Full-stack MERN habit tracker with JWT auth, custom scheduling, and a visual analytics dashboard including a GitHub-style completion heatmap.",
    detail:
      "A full-stack productivity product (React 19 + Vite frontend, Express/TypeScript + MongoDB backend) that turns daily habits into trackable streaks and visual analytics. Supports boolean, numeric, duration, count, and avoidance-type habits with flexible scheduling (daily, weekdays-only, times-per-week, every-N-days, monthly, or custom). Backend features JWT access/refresh token auth, bcrypt password hashing, Zod-ready schema validation, and a REST API for habits, completions, and analytics.",
    tags: [
      "React 19",
      "Vite",
      "Express",
      "TypeScript",
      "MongoDB",
      "JWT Auth",
      "Analytics",
    ],
    featured: true,
    serviceSlugs: ["web-development", "ai-product-development"],
    bullets: [
      "JWT-based authentication with access + refresh tokens",
      "Custom habit scheduling: daily, weekdays-only, times-per-week, every-N-days, monthly",
      "Analytics dashboard with heatmap, weekly trends, and category breakdowns",
      "REST API built with Express, TypeScript, and MongoDB/Mongoose",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/kamilrajpoot/Habitron",
    pdfUrl: null,
    images: null,
  },
  {
    slug: "e-commerce-rag-chatbot",
    title: "E-commerce RAG Chatbot",
    client: "AI Product",
    year: "AI / RAG",
    category: "AI / RAG",
    description:
      "RAG-powered shopping assistant using FAISS, Sentence Transformers, Groq LLaMA 3.3 70B, and Gradio.",
    detail:
      "Designed a shopping assistant that retrieves relevant product information before generating a response.",
    tags: ["FAISS", "RAG", "Groq", "Gradio"],
    featured: true,
    serviceSlugs: ["ai-product-development", "llm-rag-systems"],
    bullets: [
      "Retrieval-augmented product answers",
      "FAISS vector search",
      "Sentence Transformers embeddings",
      "Gradio interface",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl: null,
    images: null,
  },
  {
    slug: "voice-chatbot",
    title: "Voice Chatbot",
    client: "AI Automation",
    year: "AI / AUTOMATION",
    category: "AI / ML",
    description:
      "AI-driven voice bot for sales and customer support call automation.",
    detail:
      "An AI voice workflow focused on automating repetitive sales and customer support conversations.",
    tags: ["Voice AI", "Automation", "Python"],
    featured: true,
    serviceSlugs: ["ai-product-development"],
    bullets: [
      "Voice-based interaction flow",
      "Sales support automation",
      "Customer support automation",
      "AI product workflow design",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl: null,
    images: null,
  },
  {
    slug: "ai-chatbot-rasa-langchain",
    title: "AI Chatbot — Rasa/LangChain",
    client: "Conversational AI",
    year: "AI / NLP",
    category: "AI / ML",
    description:
      "Intent-based chatbot resolving customer queries and reducing agent workload by 40%.",
    detail:
      "Built a conversational system around intent recognition and language-model-assisted responses.",
    tags: ["Rasa", "LangChain", "NLP"],
    featured: false,
    serviceSlugs: ["ai-product-development", "llm-rag-systems"],
    bullets: [
      "Intent-based query handling",
      "Customer support conversation flows",
      "Rasa integration",
      "LangChain integration",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl: null,
    images: null,
  },
  {
    slug: "movie-rag-system",
    title: "Movie RAG System",
    client: "AI Product",
    year: "AI / RAG",
    category: "AI / RAG",
    description:
      "RAG chatbot delivering grounded movie recommendations and Q&A.",
    detail:
      "A retrieval-based movie assistant designed to answer questions using relevant movie information.",
    tags: ["RAG", "Recommendations", "Python"],
    featured: false,
    serviceSlugs: ["llm-rag-systems"],
    bullets: [
      "Grounded movie recommendations",
      "Retrieval-based Q&A",
      "Conversational interface",
      "Prompt and response refinement",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl: null,
    images: null,
  },
  {
    slug: "handwritten-digit-recognizer",
    title: "Handwritten Digit Recognizer",
    client: "Machine Learning",
    year: "COMPUTER VISION",
    category: "Computer Vision",
    description:
      "CNN model recognizing handwritten digits with 97% test accuracy.",
    detail:
      "A computer-vision classification model trained to recognize handwritten digits.",
    tags: ["CNN", "PyTorch", "Classification"],
    featured: false,
    serviceSlugs: ["computer-vision-ml"],
    bullets: [
      "Image preprocessing",
      "CNN model training",
      "Classification evaluation",
      "97% stated test accuracy",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl: null,
    images: null,
  },
  {
    slug: "traffic-sign-recognition",
    title: "Traffic Sign Recognition",
    client: "Computer Vision",
    year: "COMPUTER VISION",
    category: "Computer Vision",
    description: "CNN-based classifier for real-time traffic sign detection.",
    detail:
      "A vision model focused on recognizing traffic-sign patterns for real-time use cases.",
    tags: ["CNN", "PyTorch", "Real Time"],
    featured: false,
    serviceSlugs: ["computer-vision-ml"],
    bullets: [
      "Image classification",
      "CNN architecture",
      "Traffic-sign categories",
      "Real-time recognition direction",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl: null,
    images: null,
  },
  {
    slug: "emotion-sense-ai",
    title: "Emotion Sense AI",
    client: "Deep Learning",
    year: "COMPUTER VISION",
    category: "Computer Vision",
    description: "Deep-learning model for real-time emotion recognition.",
    detail:
      "An applied deep-learning project exploring real-time emotion recognition from visual input.",
    tags: ["Deep Learning", "Vision", "Python"],
    featured: false,
    serviceSlugs: ["computer-vision-ml", "ai-product-development"],
    bullets: [
      "Visual input processing",
      "Emotion classes",
      "Deep-learning workflow",
      "Real-time recognition direction",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl: null,
    images: null,
  },
  {
    slug: "student-score-prediction",
    title: "Student Score Prediction",
    client: "Machine Learning",
    year: "MACHINE LEARNING",
    category: "AI / ML",
    description:
      "Regression model forecasting academic performance with 85% stated prediction confidence.",
    detail:
      "A regression-based project exploring academic performance forecasting.",
    tags: ["Regression", "Python", "Pandas"],
    featured: false,
    serviceSlugs: ["computer-vision-ml"],
    bullets: [
      "Data preparation",
      "Regression modeling",
      "Academic performance forecasting",
      "85% stated prediction confidence",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl: null,
    images: null,
  },
  {
    slug: "effihyvit-v2",
    title: "EffiHyViT-v2 Research Paper",
    client: "Research",
    year: "RESEARCH",
    category: "Research",
    description:
      "Evaluated 6 vision architectures (3 CNNs, 2 ViTs, and a novel CNN-Transformer hybrid, EffiHyViT-v2) for pneumonia detection.",
    detail:
      "Authored IEEE-format paper benchmarking ResNet50, DenseNet121, EfficientNet-B0, ViT-Base/16, and Swin-Base against a novel hybrid architecture (EffiHyViT-v2) featuring a depthwise-separable convolutional stem, CBAM attention, dynamic positional encoding, local-global fusion transformer blocks, and an expert-token classification head. Evaluated on a 6,046-image held-out RSNA test set with full classification reports, confusion matrices, and Grad-CAM analysis. Includes a transparent, literature-grounded discussion of why the hybrid underperformed simpler pretrained backbones and concrete directions (self-supervised pretraining, staged fine-tuning) for closing the gap.",
    tags: ["CNN", "Vision Transformer", "Hybrid Architecture", "RSNA Dataset"],
    featured: false,
    serviceSlugs: ["computer-vision-ml"],
    bullets: [
      "Benchmarked ResNet50, DenseNet121, EfficientNet-B0, ViT-Base/16, and Swin-Base under one matched training protocol",
      "Designed EffiHyViT-v2: CBAM attention, dynamic positional encoding generator, local-global fusion transformer",
      "EfficientNet-B0 top performer at 86% accuracy / 0.86 weighted F1 on 6,046-image RSNA test set",
      "Confusion matrix, ROC, and Grad-CAM analysis across all six models",
      "Transparent root-cause analysis of hybrid model's recall gap vs. pretrained baselines",
    ],
    liveUrl: null,
    githubUrl: null,
    pdfUrl:
      "/projects/A Comparative Study of CNN, Vision Transformer, and Hybrid Deep Learning Architectures for Pneumonia Detection and Localization Using Chest X-Rays, with a Proposed EffiHyViT-v2 Model.pdf",

    images: null,
  },
];

export const processSteps = [
  [
    "01",
    "Understand",
    "I clarify the user, the problem, the desired result, and the constraints before choosing a technology.",
  ],
  [
    "02",
    "Break It Down",
    "I convert the idea into a clear flow, data model, interface structure, and small deliverable milestones.",
  ],
  [
    "03",
    "Design The Experience",
    "I create a focused interface with strong hierarchy, responsive behavior, and motion that supports meaning.",
  ],
  [
    "04",
    "Build The System",
    "I implement frontend, APIs, authentication, data handling, and AI/ML logic as connected product pieces.",
  ],
  [
    "05",
    "Test The Assumptions",
    "I check user flows, edge cases, model behavior, responsiveness, performance, and error states.",
  ],
  [
    "06",
    "Refine And Ship",
    "I remove unnecessary complexity, improve the final details, document the result, and prepare it for real use.",
  ],
];

export const marqueeWords = [
  "AI",
  "WEB",
  "RAG",
  "MOTION",
  "PRODUCT",
  "AUTOMATE",
  "BUILD",
  "DEPLOY",
];

export const getService = (slug) =>
  services.find((service) => service.slug === slug);
export const getProject = (slug) =>
  projects.find((project) => project.slug === slug);
