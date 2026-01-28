# 📝 Task Management System (JSON-based CRUD)

## 📌 Project Overview

This project is a simple **Task Management System** that allows users to:

- View all tasks
- Add a new task with description
- Delete tasks using a delete button
- Delete tasks by entering task ID

The project is divided into **Frontend** and **Backend**, where the backend stores data in a JSON file instead of using a database.

---

## 🧠 How I Thought

I approached this project by first simplifying the problem into basic CRUD operations (Create, Read, Delete).

Since a database was not required, I decided to use a **JSON file** as the storage medium. To make deletion efficient, I stored tasks in a **key–value (map-like) structure** instead of an array. Each task is stored using an auto-generated unique ID.

I separated frontend and backend logic so that:
- The frontend focuses only on UI and user interaction.
- The backend handles data storage and business logic.

For the frontend, I used **async/await** to make the code easier to understand and readable. After every add or delete operation, the task list is reloaded so the UI updates without refreshing the page.

---

## ⚠️ Challenges Faced

One major challenge was understanding that **JSON files do not support partial updates**. Even though deletion from a map structure is O(1) in memory, the entire JSON file still needs to be read and written again.

Another challenge was handling errors properly without using `.then()`. I solved this by using `try-catch` blocks with async/await and checking response status using `res.ok`.

I also faced issues with showing updated data without refreshing the page. This was fixed by calling the task loading function after every successful add or delete operation.

---

## 🧱 Project Structure

```
project/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── backend/
    ├── index.js
    └── data.json
```

---

## ⚙️ How to Run the Project

### Backend
```bash
cd backend
node index.js
```

Backend runs on:
```
http://localhost:3000
```

### Frontend
- Open `frontend/index.html` directly in the browser  
  **OR**
- Use **Live Server** in VS Code

---

## 📸 Screenshots

### Initial Dashboard
![Initial Dashboard](screenshots/Intial%20Dashboard.png)

### Dashboard with 3 Tasks
![Dashboard list 3 task](screenshots/Dashboard%20list%203%20task.png)

### Task Added Successfully
![Task Added Message](screenshots/Task%20Added%20Message.png)

### Task Deleted Successfully
![Task Delete Successfully](screenshots/Task%20Delete%20Successfully.png)

### Wrong Deletion Error
![Wrong Deletion Error](screenshots/Wrong%20Deletion%20error.png)

---

## ✅ Features Implemented

- Add task with auto-generated ID
- Delete task using delete button
- Delete task using task ID
- JSON file based storage
- Async/await based API handling
- Error handling for failed operations
- UI updates without page refresh

---

## 🧪 Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- JSON file storage

---
