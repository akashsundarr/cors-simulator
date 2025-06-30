# 🛡️ CORS Simulator Web App

A simple interactive tool to help you understand and test **Cross-Origin Resource Sharing (CORS)** behavior in real-time.

This app allows you to edit both **frontend React code** and **backend Flask code**, and simulate CORS-enabled and CORS-disabled scenarios — perfect for beginners and frontend/backend devs debugging CORS issues.

---

## 🔗 Live Demo

🌐 Frontend (React + Vite on Vercel):  
👉 [https://cors-simulator.vercel.app](https://cors-simulator.vercel.app)

---

## 🔌 Backend APIs (Flask)

- ✅ CORS-Enabled API:  
  [`https://cors-simulator.onrender.com`](https://cors-simulator.onrender.com)

- ❌ CORS-Disabled API:  
  [`https://cors-disabled.onrender.com`](https://cors-disabled.onrender.com)

These backends are hosted on Render and respond to `/data`.

---

## 🧰 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Flask + Flask-CORS (for one variant)
- **Deployment**:  
  - Frontend: Vercel  
  - Backend: Render  
  - Editor: VS Code + Replit (for simulation)

---

## 🚀 Features

- Two editable backend endpoints:
  - One with CORS enabled
  - One with CORS disabled (to simulate real CORS errors)
- Frontend detects backend CORS logic and switches URLs accordingly
- Displays results of API calls
- Educates developers about CORS mechanisms

---

## 📦 How to Run Locally

```bash
git clone https://github.com/akashsundarr/cors-simulator.git
cd cors-simulator

# 1. Clone the repo
git clone https://github.com/akashsundarr/cors-simulator.git
cd cors-simulator

# 2. Set up the frontend
cd frontend
npm install

# Create a .env file in the frontend folder with:
# VITE_API_CORS_ENABLED=https://cors-simulator.onrender.com/data
# VITE_API_CORS_DISABLED=https://cors-disabled.onrender.com/data

npm run dev

# 3. To run a backend locally (CORS enabled)
cd ../backend/cors-enabled
pip install -r requirements.txt
python main.py

# Or, to test without CORS
cd ../cors-disabled
pip install -r requirements.txt
python main.py

## 📁 Folder Structure

cors-simulator/
├── backend/
│   ├── cors-enabled/
│   │   ├── main.py               # Flask backend with CORS enabled
│   │   └── requirements.txt
│   └── cors-disabled/
│       ├── main.py               # Flask backend with CORS disabled
│       └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── .env                      # Environment variables (API URLs)
│   ├── vite.config.js
│   ├── src/
│   │   ├── App.jsx               # Main React component
│   │   ├── App.css
│   │   ├── main.jsx              # Entry point
│   │   ├── components/
│   │   │   ├── EditorBlock.jsx
│   │   │   └── ResultDisplay.jsx
│   │   └── utils/
│   │       └── corsCheck.js     # Function to detect CORS usage in code
├── README.md

