# ⚡ IDEATION '26 — IETE Idea Presentation Competition Website

Official web application for **IDEATION '26**, organized by the **Institution of Electronics and Telecommunication Engineers (IETE) Student Forum**.

---

## 👥 Team Member Quickstart Guide

Follow these simple steps to run and edit the project on your local machine:

### 1. Prerequisites
Make sure you have **Node.js** (v18 or higher) and **Git** installed on your computer.

---

### 2. Setup & Installation

Open your terminal or command prompt and run:

```bash
# Clone the repository to your computer
git clone https://github.com/Crtzz02/Ideation_iete.git

# Navigate into the project directory
cd Ideation_iete

# Install required dependencies
npm install
```

---

### 3. Running the Website Locally

To start the local development server:

```bash
npm run dev
```

- Open your browser and go to: **`http://localhost:3000/`** (or the URL printed in your terminal).
- The website will automatically update in real-time as you make changes!

---

### 4. 📝 How to Update Event Details (Google Form Link, Dates, Prizes, Contacts)

All event content is stored in **one single file**:
📍 **`src/config/eventConfig.js`**

When the committee head provides the final details, open `src/config/eventConfig.js` and edit:
- **Google Form Link**: Change `googleFormLink: "https://forms.google.com/..."`
- **Form Mode**: Set `useExternalGoogleForm: true` to direct users to Google Form, or `false` to use the interactive in-site form.
- **Countdown Target**: Set `countdownTarget: "2026-10-24T09:00:00+05:30"` (ISO format).
- **Tracks & Prizes**: Update track descriptions, prize amounts, and special awards.
- **Rules & FAQs**: Modify competition guidelines or add/remove FAQ questions.
- **Coordinator Contacts**: Edit phone numbers, email addresses, and WhatsApp links.

---

### 5. Building for Production

To test the final production build before deploying:

```bash
# Build the production bundle into dist/
npm run build

# Preview the production build locally
npm run preview
```

---

### 6. 🔄 Git Workflow for Teammates

Before starting work, always pull the latest changes:
```bash
git pull origin main
```

After making updates, save and push your work to GitHub:
```bash
git add .
git commit -m "docs: updated event details"
git push origin main
```
