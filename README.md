# guns.lol like site
Minimal snowy landing page / profile card inspired by guns.lol, built with React + Vite + Tailwind

# ❄️ Snowy Profile Card

A minimal, aesthetic landing page and profile card inspired by guns.lol. Built for speed and simplicity.

## ✨ Features
* **Two-Screen Flow:** Seamless transition from a welcome splash to your profile card.
* **Click-to-Enter:** Minimalist UX—no clunky buttons required.
* **Animated Snowfall:** Lightweight, gentle snow effect for a clean winter aesthetic.
* **Fully Responsive:** Looks great on desktop and mobile.

---

## 🛠️ Tech Stack
* **React** + **Vite** (Lightning fast builds)
* **Tailwind CSS** (Easy styling)
* **HTML5 Canvas** (Smooth snow animations)

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install

2. **Start the dev server:**
   ```bash
   npm run dev

3. **Build for production:**
   ```bash
   npm run build

## 🛠️ Customization Guide

Most of the personal configuration happens in `src/App.tsx` and `src/SnowCanvas.tsx`.

### 🪪 Profile Card Info (`src/App.tsx`)
* **Name & Subtitle:** Locate the `[Your Name]` heading and the small text below it to update your identity and tagline.
* **Email & Role:** * Update the `mailto:you@example.com` link and the visible email text.
    * Replace `[Your City]` and the role text (e.g., "Frontend Developer") with your own details.
* **Social Links:** In the "Links" section, update the `href` values with your URLs (GitHub, LinkedIn, etc.) and edit the display text to show your handle. You can copy/paste these blocks to add more links.

### 🖥️ Welcome Screen (`src/App.tsx`)
* **Welcome Text:** Change the large "Welcome" text to anything you'd like users to see first. 
* **Interaction:** The entire screen is interactive; clicking anywhere triggers the transition to your profile card.

### ❄️ Snow Physics (`src/SnowCanvas.tsx`)
Fine-tune the atmosphere by adjusting these variables:
* **`FLAKE_COUNT`**: Increase or decrease the number of snowflakes.
* **`speedY`**: Adjust how fast the snow falls.
* **`driftX`**: Adjust the horizontal "wind" effect.

## 🚀 Deployment

You can deploy this with **Vercel**, **Netlify**, or **GitHub Pages**.

* **Build command:** `npm run build`
* **Output directory:** `dist`
