# IDEATION '26 — IETE Idea Presentation Competition Website

This repository contains the complete source code for **IDEATION '26**, a national-level Idea Presentation Competition organized by the **Institution of Electronics and Telecommunication Engineers (IETE) Student Forum**.

Built with **Vite, React, Lucide Icons, Canvas 2D Neural Network Graphics, and Vanilla CSS Glassmorphism**.

---

## 🚀 Features

- **01 Hero Landing**: Bold futuristic headline, tagline, date/time/venue pills, and primary CTAs.
- **02 Live Countdown Timer**: Live counter showing Days : Hours : Minutes : Seconds counting down to registration target.
- **03 About The Event**: 3-pillar breakdown and official IETE chapter background.
- **04 Themes & Problem Tracks**: 6 problem domains (*Healthcare AI*, *EdTech*, *AI for Social Good*, *Robotics/IoT*, *Smart Cities*, *FinTech*) with interactive search & filter.
- **05 Timeline**: Step-by-step milestone schedule from abstract submission to Grand Finale pitch day.
- **06 Prizes Podium**: 3D Podium for Top 3 winners (1st ₹25,000, 2nd ₹15,000, 3rd ₹10,000 + trophies + incubation) + Special Category awards & e-certificates.
- **07 Official Rulebook**: Tabbed guide detailing Team size (1–4 members), Eligibility, Originality, Submission Abstract requirements, and Judging Rubric.
- **08 Interactive Registration Form**: Multi-step form with live validation, team member fields, track dropdown, confetti celebration, and external Google Form toggle.
- **09 FAQ Accordion**: Expandable Q&A covering common participant questions.
- **10 Contact & Coordinators**: Direct phone, email, WhatsApp quick-chat links, social handles, and responsive footer.

---

## ⚡ How Committee Head / Web Team Can Update Event Details

All temporary event details are centralized in a single configuration file:
📍 `src/config/eventConfig.js`

To update dates, prizes, Google Form link, rules, FAQs, or coordinator contact details:
1. Open `src/config/eventConfig.js`.
2. Modify the corresponding values (e.g. `googleFormLink`, `countdownTarget`, `prizes`, `coordinators`).
3. Save the file — changes automatically reflect across the entire website!

---

## 🛠️ Project Setup & Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Dev Server
```bash
npm run dev
```
Open `http://localhost:3000/` in your browser.

### 3. Build Production Bundle
```bash
npm run build
```
The optimized production files will be output to the `dist/` directory, ready for deployment on GitHub Pages, Vercel, Netlify, or any static web server.
