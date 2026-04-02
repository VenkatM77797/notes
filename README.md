# 📝 Notes App (Full Stack)

A simple full-stack Notes application built using:

* **Frontend:** React (TypeScript)
* **Backend:** NestJS
* **Database:** PostgreSQL
* **ORM:** Prisma

---

## 🚀 Features

* ✅ Create notes
* ✅ View notes
* ✅ Update notes
* ✅ Delete notes
* ✅ Simple and clean UI

---

## 🧱 Tech Stack

### Frontend

* React (CRA)
* Axios

### Backend

* NestJS
* Prisma ORM

### Database

* PostgreSQL

---

## 📁 Project Structure

```
NOTES/
├── backend/
│   ├── src/
│   ├── prisma/
│   └── ...
├── frontend/
│   ├── src/
│   └── ...
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/notes-app.git
cd notes-app
```

---

## 🔧 Backend Setup

```
cd backend
npm install
```

### Configure environment

Create `.env` file:

```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/notes_db"
```

### Run Prisma

```
npx prisma migrate dev
```

### Start backend

```
npm run start:dev
```

Backend runs on:

```
http://localhost:3001
```

---

## 💻 Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /notes     | Get all notes |
| POST   | /notes     | Create note   |
| PATCH  | /notes/:id | Update note   |
| DELETE | /notes/:id | Delete note   |

---

## ⚠️ Important Notes

* Make sure backend is running on **port 3001**
* Enable CORS in backend:

```
app.enableCors();
```


## 🧑‍💻 Author
Venkat Mandarapu

---

## ⭐ Future Improvements

* Add authentication (JWT)
* Add search functionality
* Improve UI (Tailwind CSS)
* Add categories/tags

---

## 📄 License

This project is open-source and free to use.
