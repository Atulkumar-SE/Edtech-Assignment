# 🎓 Edutech Course Directory – Frontlines Media Assessment

A modern, high-performance React application built to showcase a seamless course browsing experience. This project was developed as part of the technical assessment for the **Frontend Developer** role at **Frontlines Media**.

## 🚀 Live Demo
**https://atulkumar-se.github.io/Edtech-Assignment/**

---

## 🛠️ Tech Stack
*   **Framework:** React.js (Vite)
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **State Management:** React Hooks (`useState`, `useMemo`, `useEffect`)
*   **Deployment:** Vercel / Netlify

## ✨ Key Features
*   **Dynamic Course Grid:** A clean, responsive UI displaying course cards with details like instructor, duration, and ratings.
*   **Real-time Search:** Users can filter courses instantly by name via a search input.
*   **Advanced Filtering:** Dropdown filters to categorize courses by **Category** (Development, Design, Business).
*   **Dynamic Sorting:** A sorting feature to organize courses by **Rating** or **Name**.
*   **UX Optimization:** 
    *   Loading states with an animated spinner for simulated data fetching.
    *   "No Results" feedback when filters return empty.
    *   Responsive design optimized for Mobile, Tablet, and Desktop.

## 📂 Project Structure
```text
src/
 ├── components/     # UI Components (CourseCard, FilterBar, Navbar)
 ├── data/           # Mock API JSON data
 ├── App.jsx         # Main logic and state management
 ├── index.css       # Tailwind & Global styles
 └── main.jsx        # Entry point
