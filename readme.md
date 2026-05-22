# We Speak – IIT Bombay Club Website

A full-stack club website developed for **We Speak**, the public speaking and debate club of IIT Bombay.  
The website showcases club information, upcoming events, gallery, contact details, and includes a Join Us form connected with a backend database.

---

# Club Selected

**We Speak – IIT Bombay**

Official Club Page:  
https://gymkhana.iitb.ac.in/instiapp/org/we-speak

---

# Live Deployment

## Frontend (Vercel)

https://we-speak-git-main-th14idofclashofclan-3483s-projects.vercel.app/

## Backend (Render)

Backend API is deployed on Render and connected with MongoDB Atlas.

https://wespeak.onrender.com/


---


# Features Implemented

- Responsive landing 
- Modern dark-themed UI
- Navbar with smooth scrolling
- Hero section
- About section
- Events section with cards
- Gallery section
- Join Us form
- Contact section
- Footer section
- Backend API integration
- MongoDB database connection
- Form submission stored in database
- Clean folder structure

---

# Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

# Folder Structure

## Frontend

```bash
frontend/
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Container.jsx
│   │   ├── Events.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── JoinForm.jsx
│   │   └── Navbar.jsx
│   │
│   ├── data/
│   │   ├── events.js
│   │   └── gallery.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── JoinUs.jsx
│   │
│   ├── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## Backend

```bash
backend/
│
├── controllers/
│   └── joinController.js
│
├── models/
│   └── JoinRequest.js
│
├── routes/
│   └── join.js
│
├── server.js
├── .env
├── package.json
└── package-lock.json
```

---

# API Endpoint

## Submit Join Form

```http
POST /api/join
```

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "department": "CSE"
}
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

# Steps to Run Locally

## 1. Clone Repository

```bash
git clone <your-github-repo-link>
```

---

## 2. Setup Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173/5176
```

---

# Deployment

## Frontend

Deployed using **Vercel**

## Backend

Deployed using **Render**

---

# Screens / Sections Included

- Home Section
- About Section
- Events Section
- Gallery Section
- Join Us Form
- Contact Section
- Footer

---

# Future Improvements

- Admin dashboard
- Authentication system
- Event registration system
- Dynamic event management
- Better animations and responsiveness

---

# Author

**Parv Goyal**