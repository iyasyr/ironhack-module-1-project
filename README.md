# Circle Agency – Responsive Website

## Welcome!
This is a fully responsive, multi-page website built as part of the Ironhack Module 1 Project. It reflects a real-world development process—from interpreting design specs, coding responsive layouts, and validating forms, to collaborating with version control and launching a production-ready site.

---

## 🚀 Live Demo
**View on Netlify**  
*(Add your link here)*

---

## 📚 Table of Contents
- [Features](#✨-features)
- [Project Structure](#🗂-project-structure)
- [Technical Overview](#⚙️-technical-overview)
- [How to Run Locally](#🏁-how-to-run-locally)
- [Deployment](#🚢-deployment)
- [Credits](#🙏-credits)
- [License](#📝-license)

---

## ✨ Features

- **Responsive Layout:** Adapts seamlessly to mobile, tablet, and desktop using Flexbox, CSS custom properties, and mobile-first design.
- **Reusable Components:** Navigation bar, footer, contact form, and sections with projects are modular and built with Web Components (custom elements).
- **Dynamic Content:**
  - The home page displays three random project cards, fetched live from a remote API each time the page loads.
  - The project page showcases one main (featured) project and three additional random project cards, always excluding the currently featured project.
- **Accessible Navigation:**
  - Includes keyboard-friendly and ARIA-labeled burger menu for small screens.
  - Active link highlighting as you scroll.
  - Scroll-to-top button for improved navigation on long pages.
- **Client-side Form Validation:**
  - Contact form is fully validated in JavaScript (required fields, email/phone format, “Ironhack” check, and more).
  - Form modals and error messages are reusable and styled.
- **404 Page:** Custom 404 error page for improved user experience.
- **Modern UI:** Replicates Figma designs with careful attention to color, typography, spacing, and UI details.

---

## 🗂 Project Structure

```
/assets/                # Images, SVGs, and icons
/contact/               # Contact form page
/css/                   # All CSS files
/js/                    # Modular JS files and Web Components
/projects/              # Project detail pages (e.g., 1.html — named as required in the task)
index.html              # Home page
404.html                # Custom 404 page
README.md
```

---

## ⚙️ Technical Overview

- **HTML5** with semantic tags for accessibility and SEO.
- **CSS3** using custom properties (variables), Flexbox, and media queries.
- **JavaScript (ES6+):**
  - Uses fetch and Promises (with proper error handling and `.finally`).
  - All UI components are modular, DRY, and KISS.
  - Array and DOM methods are chained for clean logic.
  - No code duplication between HTML, CSS, and JS.
- **Git:**
  - Repo includes a clear commit history, with daily commits.
  - Separate branches for features and deployment.
- **Deployment:**
  - Hosted and continuously deployed via Netlify.

---

## 🏁 How to Run Locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/iyasyr/ironhack-module-1-project
   ```
2. **Open `index.html` in your browser** (no backend required).

**Or:**
- Use Live Server in VS Code for auto-reloading.

---

## 🚢 Deployment

- The project is deployed on **Netlify**.
- Any push to the production branch triggers an automatic redeploy on Netlify.
- See [Netlify Docs](https://docs.netlify.com/) for more info.

---

## 🙏 Credits

- Ironhack for the assignment and Figma design.
- All API and image assets provided in the course materials.
- Special thanks to [Jarko Garrido](https://github.com/CarlosGalo), our instructor, who explained every concept in an accessible, engaging, and motivating way.

---

## 📝 License

This project is for educational purposes only.
