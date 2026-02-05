# Wolf-Pak Innovations LLC Website

This is a modern, high-performance IT services website built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. It features a custom "Arkham Knight" / Dark Tech aesthetic designed for a mission-critical infrastructure firm.

## Features

-   **Dark Tech Aesthetic**: Custom "glitch", "scan", and "HUD" animations using pure CSS and Tailwind.
-   **Industry Solutions**: Dedicated section for showcasing deployed software (e.g., Home Health Care demo).
-   **Mission Briefing**: "About Us" section styled as a tactical capabilities manifest.
-   **Service Showcase**: Interactive cards detailing firm capabilities (Cyber Defense, Network Infrastructure, etc.).
-   **Secure Contact**: Styled contact form and directory.
-   **Responsive Design**: Fully mobile-optimized navigation and layout.

## Tech Stack

-   **Framework**: Next.js 16 (App Router)
-   **Library**: React 19
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS v4
-   **Icons**: Lucide React

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

3.  **Open the application:**

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `src/app/page.tsx`: Main landing page assembling all sections.
-   `src/components/`:
    -   `Hero.tsx`: Main entry point with visual impact.
    -   `IndustrySolutions.tsx`: Showcase for live demos and sectoral deployments.
    -   `About.tsx`: Company mission and capabilities checklist.
    -   `Services.tsx`: Core service offerings.
    -   `Contact.tsx`: Secure communication form.
    -   `TechOverlay.tsx` & `GlowingEyes.tsx`: Atmospheric background effects.
-   `src/app/globals.css`: Global styles, custom animations (blink, scan, glitch), and theme variables.

## Deployment

The project is configured for deployment on **Vercel**.
-   Push changes to the `main` branch to trigger an automatic deployment.
````