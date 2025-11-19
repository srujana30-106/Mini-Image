#  Mini Image Gallery – Full Stack Assignment

A simple and responsive full-stack image gallery application where users can upload images one at a time, view them in a grid, and delete them.  
This project was built as part of an internship assignment for **Markopolo.ai**.

---

##  Tech Stack

### **Frontend**
- React (Vite)
- Axios
- Modern CSS

### **Backend**
- Node.js
- Express.js
- Multer

---

## Features

- ✔ Upload one image at a time  
- ✔ JPEG/PNG support  
- ✔ Max file size: 3MB  
- ✔ Live upload progress  
- ✔ Auto-refresh gallery  
- ✔ Delete image  
- ✔ Fully responsive UI  
- ✔ Glassmorphism design + Animations  
- ✔ Backend images stored in memory only  

---

##  Project Structure

```
Mini-Image/
│── backend/
│   ├── server.js
│   ├── memoryStore.js
│   └── package.json
│
│── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│        ├── App.jsx
│        ├── App.css
│        ├── main.jsx
│        └── components/
│             ├── ImageUploader.jsx
│             └── Gallery.jsx
│
└── README.md
```

---

#  How to Run the Project

##  1. Backend Setup (Node + Express)

### Step 1 — Go to backend folder
```
cd backend
```

### Step 2 — Install dependencies
```
npm install
```

### Step 3 — Start server
```
node server.js
```

Backend runs at: **http://localhost:5000**

---

##  2. Frontend Setup (React + Vite)

### Step 1 — Go to frontend folder
```
cd frontend
```

### Step 2 — Install dependencies
```
npm install
```

### Step 3 — Install axios
```
npm install axios
```

### Step 4 — Start frontend
```
npm run dev
```

Frontend runs at: **http://localhost:5173**

---

#  How the App Works

###  Upload Image
- Click **Choose Image** (custom animated button)
- Select a JPG/PNG file
- Upload progress displays
- Image appears instantly in gallery

###  Delete Image
- Click **Delete** under any image
- Image removed from in-memory storage

###  In-Memory Backend
- All images stored in backend array  
- When server restarts, images reset (as required)

---

#  Design Choices

### **Why Node.js + Express?**
- Lightweight and fast  
- Easy file uploads via Multer  
- Perfect for a small demo assignment  

### **Why React with Vite?**
- Faster than CRA  
- Modern build tool  
- Great for responsive UI  

### **Why In-Memory Storage?**
- Matches assignment requirement  
- Simplest design, no persistence  

### **UI Enhancements**
- Glassmorphism card design  
- Animated glowing title  
- Centered layout  
- Hover & scale animations  
- Custom styled upload button  

---

#  Bonus Tasks Completed

- ✔ Responsive UI  
- ✔ Modern animations  
- ✔ Improved UX + clean layout  

---

#  Author

**Lakshmi Srujana Sanaka**  
 Email: **sanakalakshmisrujana@gmail.com**  
 Phone: **+91 9705804902**

