# Support CRM System

A full-stack Customer Support CRM System built using **React**, **Flask**, and **Supabase**. The application allows users to create, manage, search, and update customer support tickets through an intuitive dashboard.

## 🚀 Live Demo

**Frontend:** https://support-crm-0p9r.onrender.com

**Backend API:** https://support-crm-production-00dc.up.railway.app

---

## ✨ Features

- Create new support tickets
- View all tickets
- Search tickets by customer name, email, subject, or ticket ID
- Filter tickets by status
- Update ticket status
- View ticket details
- Add notes to tickets
- Delete tickets
- Duplicate ticket detection
- Email format validation
- Responsive user interface
- PostgreSQL database hosted on Supabase

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Tailwind CSS

### Backend
- Flask
- Flask SQLAlchemy
- Flask CORS
- Gunicorn

### Database
- Supabase PostgreSQL

### Deployment
- Frontend: Render
- Backend: Railway

---

## 📂 Project Structure

```
support-crm/
│
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── database.py
│   ├── models.py
│   ├── routes.py
│   ├── requirements.txt
│   ├── Procfile
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── .gitignore
└── README.md
```

---

## ⚙️ Backend Setup

### Clone Repository

```bash
git clone https://github.com/Vishwakarmanitin/support-crm.git
cd support-crm
```

### Setup Backend

```bash
cd backend
python -m venv venv
```

Activate virtual environment

Windows

```bash
venv\Scripts\activate
```

macOS/Linux

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file inside the backend folder.

Example:

```env
DATABASE_URL=your_supabase_database_url
```

Run the Flask server

```bash
python app.py
```

Backend runs on

```
http://127.0.0.1:5000
```

---

## 💻 Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/tickets` | Get all tickets |
| POST | `/tickets` | Create ticket |
| GET | `/tickets/<id>` | Get ticket details |
| PUT | `/tickets/<id>` | Update ticket status |
| GET | `/tickets/search` | Search tickets |
| GET | `/tickets/filter` | Filter tickets |
| POST | `/tickets/check-duplicate` | Check duplicate tickets |
| POST | `/tickets/<id>/notes` | Add note |
| GET | `/tickets/<id>/notes` | Get notes |

---

## 🌐 Deployment

### Frontend

- Render

### Backend

- Railway

### Database

- Supabase PostgreSQL

---

## 👨‍💻 Author

**Nitin Vishwakarma**

GitHub: https://github.com/Vishwakarmanitin

---
