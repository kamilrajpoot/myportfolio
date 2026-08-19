# Muhammad Kamil Toor Portfolio Backend

This backend is an Express/MongoDB API for the portfolio frontend.

## Setup

Run these commands inside the backend folder:

```powershell
npm install
copy .env.example .env
```

Update `.env` with a working MongoDB connection:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/muhammad_kamil_portfolio
CLIENT_URL=http://localhost:5173
```

For MongoDB Atlas, replace `MONGO_URI` with the Atlas connection string. The MongoDB server must be running before seeding or starting the API.

## Seed portfolio data

The seed script deletes existing services and projects and inserts the real portfolio data from Muhammad Kamil Toor’s CV:

```powershell
npm run seed
```

Do not run `npm run seed` after adding custom database records unless you intend to replace the existing services and projects.

## Start the API

Development mode:

```powershell
npm run dev
```

Production-style start:

```powershell
npm start
```

The API runs on:

```text
http://localhost:5000
```

Health check:

```text
GET http://localhost:5000/api/health
```

## Public API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/services` | Return all portfolio services ordered by `order` |
| GET | `/api/services/slug/web-development` | Return one service by slug |
| GET | `/api/projects` | Return all projects |
| GET | `/api/projects?featured=true` | Return featured projects |
| GET | `/api/projects?category=Web%20Development` | Filter projects by category |
| GET | `/api/projects?service=web-development` | Filter projects related to a service |
| GET | `/api/projects/slug/ajlal-international` | Return one project by slug |
| POST | `/api/contact` | Save a contact inquiry |

## Contact payload

```json
{
  "name": "Muhammad",
  "email": "visitor@example.com",
  "subject": "Project inquiry — Web Development",
  "service": "web-development",
  "message": "I would like to discuss a web application."
}
```

The contact endpoint validates the name, email, subject, service, and message. Validation errors return HTTP `400` with an `errors` array. A successful submission returns HTTP `201` and the saved contact record.

## Frontend API URL

In the frontend `.env` file, use:

```env
VITE_API_URL=http://localhost:5000/api
```

The frontend can then call:

```js
getServices();
getProjects({ featured: true });
getServiceBySlug("web-development");
getProjectBySlug("ajlal-international");
submitContact(payload);
```

The current frontend can continue using local fallback data while API integration is being completed. After the backend is verified, replace the local service/project reads with these endpoints and retain fallback behavior for API outages.

## Security note

The existing collection-management routes for creating, editing, deleting, and reading contact records are still present, but authentication has not yet been added. Do not expose those administrative routes publicly in production until an admin authentication layer is implemented.
