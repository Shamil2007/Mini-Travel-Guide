# 🌍 Mini Travel Guide

A simple and interactive 3-page travel-themed website created as an individual frontend project. Each page is built and styled by a different team member using HTML, CSS, and JavaScript.

---

## 🚀 Project Overview

**Mini Travel Guide** introduces users to a collection of popular destinations and helpful travel tips. It also includes a packing checklist with interactive features. This project is designed to be fun, visually appealing, and beginner-friendly.

---

## 📄 Pages & Responsibilities

### 1. `First Page` – **Intro Page**  
**Created by Zahra Zeynalova**

- Welcome message  
- Two navigation buttons:
  - “Explore Destinations” → `destinations.html`
  - “Travel Tips” → `tips.html`

---

### 2. `Destinations Page` – **Popular Destinations**  
**Created by Orkhan Guliyev**

- Cards for 6 travel destinations  
- Each card includes:
  - Image
  - Destination name
  - Short description
  - “Learn More” button → saves destination to localStorage  
- Button to return to Home

---

### 3. `Tips Page` – **Travel Tips & Checklist**  
**Created by Sadig Turabov**

- A short list of travel tips  
- Packing checklist with checkboxes  
- “Mark All” button to check all items  
- Dynamic greeting: Shows last selected destination (from Page 2)

---

### 4. `Js Files and main.css` – **JavaScript Functionality**  
**Created by Shamil Sharifzade**

- Stores selected destination in `localStorage`  
- Displays selected destination on `tips.html`  
- “Mark All” button checks all checklist items  
- Saves checklist state in `localStorage`

---

## 🗂️ Folder Structure

MINI-TRAVEL-GUIDE-WEBSITE/
│
├── destination-page/
│   ├── destinations.html
│   ├── destinations.css
│   └── destinations.js
│
├── first-page/
│   ├── index.html
│   └── index.css
│
├── tips-page/
│   ├── tips.html
│   ├── tips.css
│   └── tips.js
│
├── images/
│   ├── paris.jpg
│   ├── tokyo.jpg
│   └── ...
