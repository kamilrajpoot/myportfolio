# Muhammad Kamil Toor Portfolio Website

## 🛠️ Tech Stack

### Frontend

- **React.js** (Vite) — Client-side rendering and UI
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **React Router DOM** — Client-side routing

### Backend

- **Node.js** — Backend JavaScript runtime
- **Express.js** — RESTful API framework
- **MongoDB & Mongoose** — NoSQL Database and object modeling

---

## 📂 Project Structure

```text
Portfolio/
│
├── backend/                  # Server-side code (Node.js + Express)
│   ├── config/               # Database and environment configurations
│   │   └── db.js             # MongoDB connection setup
│   ├── controllers/          # Route controller functions (Logic)
│   │   ├── contactController.js
│   │   ├── projectController.js
│   │   └── serviceController.js
│   ├── middleware/           # Custom Express middlewares
│   │   └── errorMiddleware.js
│   ├── models/               # Mongoose DB Schemas
│   │   ├── Contact.js
│   │   ├── Project.js
│   │   └── Service.js
│   ├── routes/               # API endpoint routes
│   │   ├── contactRoutes.js
│   │   ├── projectRoutes.js
│   │   └── serviceRoutes.js
│   ├── .env.example          # Example environment variables
│   ├── app.js                # Express app setup
│   ├── seed.js               # Script to seed sample data to MongoDB
│   └── server.js             # Main server entry point
│
└── frontend/                 # Client-side code (React + Vite + Tailwind)
    ├── public/               # Static assets
    ├── src/
    │   ├── components/       # Reusable React components
    │   │   ├── Footer.jsx
    │   │   ├── GiantCTA.jsx
    │   │   ├── Marquee.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── ProjectCard.jsx
    │   │   ├── ScrollIndicator.jsx
    │   │   ├── ScrollToTop.jsx
    │   │   └── ServiceCard.jsx
    │   ├── data/             # Fallback static data
    │   ├── pages/            # Page components for routing
    │   │   ├── About.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Home.jsx
    │   │   ├── NotFound.jsx
    │   │   ├── ProjectDetail.jsx
    │   │   ├── Projects.jsx
    │   │   ├── ServiceDetail.jsx
    │   │   └── Services.jsx
    │   ├── api.js            # Axios configuration and API calls
    │   ├── App.jsx           # Main React component
    │   ├── index.css         # Global CSS and Tailwind directives
    │   └── main.jsx          # React DOM rendering entry point
    ├── .env.example          # Example frontend environment variables
    ├── tailwind.config.js    # Tailwind theme and custom configurations
    └── vite.config.js        # Vite build tool config
```

## 🗺️ Pages Overview

| Page               | Route           | Description                                                                            |
| :----------------- | :-------------- | :------------------------------------------------------------------------------------- |
| **Home**           | `/`             | Typographic hero, scroll indicator, skewed marquee, service previews, and a giant CTA. |
| **About**          | `/about`        | Studio introduction, moving marquee, and values list.                                  |
| **Services**       | `/services`     | Full vertical list of offered services (fetched from `/api/services`).                 |
| **Service Detail** | `/services/:id` | Detailed view for a specific service.                                                  |
| **Projects**       | `/projects`     | Showcase project grid (fetched from `/api/projects`).                                  |
| **Project Detail** | `/projects/:id` | Detailed view for a specific project.                                                  |
| **Contact**        | `/contact`      | Contact form that sends POST requests to `/api/contact`.                               |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed locally or a MongoDB Atlas URI

### 1. Setup the Backend

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env
# Edit .env and set MONGO_URI to your MongoDB connection string (e.g., mongodb://localhost:27017/kinetic)

# Populate database with sample Projects and Services
npm run seed

# Start the development server (runs on http://localhost:5000)
npm run dev
```

### 2. Setup the Frontend

```bash
# Open a new terminal and navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env
# By default, Vite proxies /api to http://localhost:5000

# Start the Vite development server (runs on http://localhost:5173)
npm run dev
```

> **Note:** The Vite dev server proxies `/api` requests to `http://localhost:5000`, so no CORS setup is needed during development. For production, set `VITE_API_URL` to your deployed API endpoint.

---

## 📡 API Endpoints Reference

### **Contact**

- `POST /api/contact` — Submit a contact message `{ name, email, subject?, message }`
- `GET /api/contact` — List all messages
- `GET /api/contact/:id` — Get a specific message
- `PATCH /api/contact/:id` — Update message status (`new` | `read` | `archived`)
- `DELETE /api/contact/:id` — Delete a message

### **Services**

- `GET /api/services` — List all services
- `GET /api/services/:id` — Get a specific service
- `POST /api/services` — Create a new service
- `PUT /api/services/:id` — Update a service
- `DELETE /api/services/:id` — Delete a service

### **Projects**

- `GET /api/projects` — List all projects (Query params: `?category=` and `?featured=true`)
- `GET /api/projects/:id` — Get a specific project
- `POST /api/projects` — Create a new project
- `PUT /api/projects/:id` — Update a project
- `DELETE /api/projects/:id` — Delete a project

### **Health Check**

- `GET /api/health` — Check if the API is running

---

## 📝 Additional Notes

- **Authentication:** The `GET`, `POST`, `PUT`, and `DELETE` endpoints for Services and Projects are currently unauthenticated. It is highly recommended to add authentication middleware (e.g., JWT) before deploying to production to secure admin operations.
- **Fallback Data:** The frontend gracefully falls back to static hardcoded data if the API backend is unreachable. This ensures the UI remains inspectable even without a running database.
- **Typography:** Custom fonts (Archivo Black, Space Mono, and Inter) are integrated via Google Fonts in `frontend/index.html`.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge&logo=mongodb)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
