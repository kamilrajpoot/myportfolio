const path = require("path");
const dotenv = require("dotenv");

// Always load .env from the same folder as seed.js.
dotenv.config({ path: path.resolve(__dirname, ".env") });

if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is missing.");
  console.error(`Expected .env file at: ${path.resolve(__dirname, ".env")}`);
  process.exit(1);
}

const connectDB = require("./config/db");
const Service = require("./models/Service");
const Project = require("./models/Project");

const services = [
  {
    index: "01",
    slug: "ai-product-development",
    title: "AI Product Development",
    description: "Intelligent products that combine machine learning, automation, and focused user experiences.",
    intro: "I turn AI ideas into usable products by combining model capability, backend logic, and a focused user experience.",
    tags: ["Python", "PyTorch", "Automation"],
    includes: ["AI product planning", "Model and LLM integration", "Automation workflows", "Conversational interfaces", "Prototype-to-product development", "Deployment-ready architecture"],
    stack: ["Python", "PyTorch", "LangChain", "React", "Node.js", "Gradio"],
    relatedProjectSlugs: ["voice-chatbot", "e-commerce-rag-chatbot", "emotion-sense-ai"],
    order: 1,
  },
  {
    index: "02",
    slug: "web-development",
    title: "Web Development",
    description: "Full-stack MERN applications with responsive React interfaces and reliable product workflows.",
    intro: "Full-stack React and Node.js applications designed for real users, real data, and reliable product workflows.",
    tags: ["React", "Node.js", "MongoDB"],
    includes: ["Responsive React frontend development", "REST API integration", "JWT authentication", "Admin panels and dashboards", "Database-backed features", "Payments and file uploads"],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Git"],
    relatedProjectSlugs: ["ajlal-international", "everlion-international", "habitron"],
    order: 2,
  },
  {
    index: "03",
    slug: "llm-rag-systems",
    title: "LLM & RAG Systems",
    description: "Grounded chatbots and retrieval systems that keep answers connected to useful source material.",
    intro: "Search, retrieve, and generate with systems that keep answers connected to useful source material.",
    tags: ["LangChain", "RAG", "FAISS"],
    includes: ["Document ingestion pipelines", "Vector search and retrieval", "Prompt design", "Grounded question answering", "Chatbot interfaces", "Retrieval evaluation"],
    stack: ["LangChain", "FAISS", "Rasa", "Sentence Transformers", "Groq", "Python"],
    relatedProjectSlugs: ["e-commerce-rag-chatbot", "movie-rag-system", "ai-chatbot-rasa-langchain"],
    order: 3,
  },
  {
    index: "04",
    slug: "computer-vision-ml",
    title: "Computer Vision & ML",
    description: "Applied machine learning systems for recognizing patterns, predicting outcomes, and making visual data useful.",
    intro: "Applied machine learning systems for recognizing patterns, predicting outcomes, and making visual data useful.",
    tags: ["CNNs", "Vision Transformers", "PyTorch"],
    includes: ["Image classification", "CNN pipelines", "Vision Transformer experiments", "Regression models", "Data preprocessing", "Model evaluation"],
    stack: ["Python", "PyTorch", "CNNs", "Vision Transformers", "NumPy", "Pandas"],
    relatedProjectSlugs: ["handwritten-digit-recognizer", "traffic-sign-recognition", "emotion-sense-ai", "student-score-prediction"],
    order: 4,
  },
];

const projects = [
  {
    slug: "ajlal-international",
    title: "AJLAL International",
    client: "Cosmetics Brand",
    year: "SELECTED WORK",
    category: "Web Development",
    description: "MERN e-commerce storefront and admin panel for a cosmetics brand.",
    detail: "Built a complete commerce experience with customer-facing shopping flows and an admin panel for product and order operations.",
    bullets: ["Product, order, and review management", "JWT authentication", "Cloudinary image uploads", "Cash on delivery and Stripe integration"],
    tags: ["MERN", "JWT", "Stripe", "Cloudinary"],
    serviceSlugs: ["web-development"],
    featured: true,
    order: 1,
  },
  {
    slug: "everlion-international",
    title: "Everlion International",
    client: "Apparel Manufacturer",
    year: "SELECTED WORK",
    category: "Web Development",
    description: "MERN business and catalog website for an apparel manufacturer.",
    detail: "Created a catalog and inquiry experience with protected administration and an email-based contact workflow.",
    bullets: ["Business catalog experience", "JWT-protected admin area", "Nodemailer contact system", "Inquiry-focused information architecture"],
    tags: ["MERN", "JWT", "Nodemailer"],
    serviceSlugs: ["web-development"],
    featured: true,
    order: 2,
  },
  {
    slug: "habitron",
    title: "Habitron",
    client: "Personal Product",
    year: "SELECTED WORK",
    category: "Web Development",
    description: "React 19 and Vite habit tracker with streaks, analytics, and JSON import/export.",
    detail: "A focused productivity product that turns daily habits into visible streaks and useful progress analytics.",
    bullets: ["Habit creation and tracking", "Streak calculations", "Analytics dashboard", "JSON import and export"],
    tags: ["React 19", "Vite", "Analytics"],
    serviceSlugs: ["web-development"],
    featured: true,
    order: 3,
  },
  {
    slug: "e-commerce-rag-chatbot",
    title: "E-commerce RAG Chatbot",
    client: "AI Product",
    year: "AI / RAG",
    category: "AI / RAG",
    description: "RAG-powered shopping assistant using FAISS, Sentence Transformers, Groq LLaMA 3.3 70B, and Gradio.",
    detail: "Designed a shopping assistant that retrieves relevant product information before generating a response.",
    bullets: ["Retrieval-augmented product answers", "FAISS vector search", "Sentence Transformers embeddings", "Gradio interface"],
    tags: ["FAISS", "RAG", "Groq", "Gradio"],
    serviceSlugs: ["ai-product-development", "llm-rag-systems"],
    featured: true,
    order: 4,
  },
  {
    slug: "voice-chatbot",
    title: "Voice Chatbot",
    client: "AI Automation",
    year: "AI / AUTOMATION",
    category: "AI / ML",
    description: "AI-driven voice bot for sales and customer support call automation.",
    detail: "An AI voice workflow focused on automating repetitive sales and customer support conversations.",
    bullets: ["Voice-based interaction flow", "Sales support automation", "Customer support automation", "AI product workflow design"],
    tags: ["Voice AI", "Automation", "Python"],
    serviceSlugs: ["ai-product-development"],
    featured: true,
    order: 5,
  },
  {
    slug: "ai-chatbot-rasa-langchain",
    title: "AI Chatbot — Rasa/LangChain",
    client: "Conversational AI",
    year: "AI / NLP",
    category: "AI / ML",
    description: "Intent-based chatbot resolving customer queries and reducing agent workload by 40%.",
    detail: "Built a conversational system around intent recognition and language-model-assisted responses.",
    bullets: ["Intent-based query handling", "Customer support conversation flows", "Rasa integration", "LangChain integration"],
    tags: ["Rasa", "LangChain", "NLP"],
    serviceSlugs: ["ai-product-development", "llm-rag-systems"],
    order: 6,
  },
  {
    slug: "movie-rag-system",
    title: "Movie RAG System",
    client: "AI Product",
    year: "AI / RAG",
    category: "AI / RAG",
    description: "RAG chatbot delivering grounded movie recommendations and Q&A.",
    detail: "A retrieval-based movie assistant designed to answer questions using relevant movie information.",
    bullets: ["Grounded movie recommendations", "Retrieval-based Q&A", "Conversational interface", "Prompt refinement"],
    tags: ["RAG", "Recommendations", "Python"],
    serviceSlugs: ["llm-rag-systems"],
    order: 7,
  },
  {
    slug: "handwritten-digit-recognizer",
    title: "Handwritten Digit Recognizer",
    client: "Machine Learning",
    year: "COMPUTER VISION",
    category: "Computer Vision",
    description: "CNN model recognizing handwritten digits with 97% test accuracy.",
    detail: "A computer-vision classification model trained to recognize handwritten digits.",
    bullets: ["Image preprocessing", "CNN model training", "Classification evaluation", "97% stated test accuracy"],
    tags: ["CNN", "PyTorch", "Classification"],
    serviceSlugs: ["computer-vision-ml"],
    order: 8,
  },
  {
    slug: "traffic-sign-recognition",
    title: "Traffic Sign Recognition",
    client: "Computer Vision",
    year: "COMPUTER VISION",
    category: "Computer Vision",
    description: "CNN-based classifier for real-time traffic sign detection.",
    detail: "A vision model focused on recognizing traffic-sign patterns for real-time use cases.",
    bullets: ["Image classification", "CNN architecture", "Traffic-sign categories", "Real-time recognition direction"],
    tags: ["CNN", "PyTorch", "Real Time"],
    serviceSlugs: ["computer-vision-ml"],
    order: 9,
  },
  {
    slug: "emotion-sense-ai",
    title: "Emotion Sense AI",
    client: "Deep Learning",
    year: "COMPUTER VISION",
    category: "Computer Vision",
    description: "Deep-learning model for real-time emotion recognition.",
    detail: "An applied deep-learning project exploring real-time emotion recognition from visual input.",
    bullets: ["Visual input processing", "Emotion classes", "Deep-learning workflow", "Real-time recognition direction"],
    tags: ["Deep Learning", "Vision", "Python"],
    serviceSlugs: ["computer-vision-ml", "ai-product-development"],
    order: 10,
  },
  {
    slug: "student-score-prediction",
    title: "Student Score Prediction",
    client: "Machine Learning",
    year: "MACHINE LEARNING",
    category: "AI / ML",
    description: "Regression model forecasting academic performance with 85% stated prediction confidence.",
    detail: "A regression-based project exploring academic performance forecasting.",
    bullets: ["Data preparation", "Regression modeling", "Academic performance forecasting", "85% stated prediction confidence"],
    tags: ["Regression", "Python", "Pandas"],
    serviceSlugs: ["computer-vision-ml"],
    order: 11,
  },
  {
    slug: "effihyvit-v2",
    title: "EffiHyViT-v2 Research Paper",
    client: "Research",
    year: "RESEARCH",
    category: "Research",
    description: "Comparative study of CNN, ViT, and hybrid architectures for pneumonia detection on chest X-rays.",
    detail: "Co-authored research comparing convolutional, transformer, and hybrid architectures for medical-image classification.",
    bullets: ["CNN benchmarking", "Vision Transformer comparison", "Hybrid architecture analysis", "Chest X-ray pneumonia detection"],
    tags: ["CNN", "ViT", "Medical AI"],
    serviceSlugs: ["computer-vision-ml"],
    order: 12,
  },
];

const importData = async () => {
  try {
    await connectDB();
    await Service.deleteMany();
    await Project.deleteMany();
    await Service.insertMany(services);
    await Project.insertMany(projects);
    console.log("Portfolio data imported successfully");
    process.exit(0);
  } catch (error) {
    console.error(`Error importing data: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await Service.deleteMany();
    await Project.deleteMany();
    console.log("Portfolio data destroyed successfully");
    process.exit(0);
  } catch (error) {
    console.error(`Error destroying data: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}