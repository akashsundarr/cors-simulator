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

### Clone the repo:
```bash
git clone https://github.com/akashsundarr/cors-simulator.git
cd cors-simulator
