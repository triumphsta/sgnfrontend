# 🎮 Sui Gaming Nigeria — Frontend

The frontend codebase for **Sui Gaming Nigeria**, a modern gaming and esports platform focused on tournaments, community engagement, and the Sui blockchain gaming ecosystem.

This project emphasizes **performance, modular structure, and clean UI**, using **HTMX and Alpine.js** to deliver app-like interactions without heavy JavaScript frameworks.

---

## 🚀 Project Goals

- Build a fast, responsive esports platform UI
- Enable tournament discovery and hosting
- Provide dashboards for players, hosts, and admins
- Maintain a clean and scalable frontend architecture
- Keep JavaScript minimal and purposeful

---

## 🧠 Tech Stack

### Core Technologies
- **HTML5** – Semantic, accessible markup
- **CSS3** – Custom design system & responsive layout
- **JavaScript** – Progressive enhancement only

### Libraries & Tools
- **HTMX** – Server-driven UI updates (no SPA overhead)
- **Alpine.js** – Lightweight interactivity
- **Tailwind CDN** – Utility classes for rapid styling
- **Custom CSS** – Design system & component styling

---

## 📁 Project Structure

```txt
.
├── accounts/                  # Authentication pages
│   ├── login.html
│   ├── register.html
│   └── profile.html
│
├── core/                      # Public-facing pages
│   ├── index.html             # Landing page
│   ├── about.html
│   ├── contact.html
│   └── app.py                 # Backend entry / routing (WIP)
│
├── dashboard/                 # Host dashboard
│   └── host_dashboard.html
│
├── tournaments/               # Tournament system
│   ├── list.html              # All tournaments
│   ├── details.html           # Single tournament view
│   └── create.html            # Host tournament
│
├── SUPERUSER/                 # Admin access
│   ├── LOGIN.html
│   └── ADMIN_DASHBOARD.html
│
├── partials/                  # Reusable UI components
│   ├── header.html
│   ├── footer.html
│   └── layout.js              # Layout logic & dynamic loading
│
├── static/
│   ├── css/
│   │   ├── styles.css         # Global styles & design tokens
│   │   ├── responsive_css.css # Mobile & tablet rules
│   │   └── loader.css         # Loading animations
│   │
│   ├── script/
│   │   ├── htmx.min.js
│   │   ├── alpine.js
│   │   ├── loader.js
│   │   └── tailwind.cdn.js
│   │
│   └── images/                # Logos, banners, assets
│
├── templates/
│   └── base/
│       └── base.html          # Main layout template
│
└── build/                     # Build artifacts (ignored in prod)
