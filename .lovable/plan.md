

## Student Portfolio Website for MADHUMITA C

A single-page dark-themed portfolio with glassmorphism, glow effects, and smooth animations.

### Design
- **Theme**: Near-black background (#050505), glassmorphic cards, electric indigo (#6366F1) and cyan (#22D3EE) accents
- **Fonts**: Outfit for headings, Inter for body text
- **Effects**: Backdrop blur cards, glow rings, hover lift animations, scroll-reveal transitions

### Sections (in order)
1. **Navbar** — Sticky with blur. TAP Academy logo (left), nav links + "Download Resume" button (right). Mobile hamburger menu.
2. **Hero** — Split layout. Left: typing animation cycling "Developer", tagline "Passion in Every Project". Right: profile picture with pulsing indigo glow ring.
3. **About** — Two-column layout with short intro and detailed bio in glassmorphic card.
4. **Skills** — Categorized skill pills (Frontend, Backend, Databases, Tools, AI Tools) with hover glow effects.
5. **Projects** — Filterable grid with pill-shaped category buttons. Glassmorphic cards showing title, description, tech stack, and GitHub links for Smart To-Do and My Journal App.
6. **Education** — Timeline/card for B.Sc. IT at KPR College (Expected 2027).
7. **Certifications** — Card for Full Stack Development cert from Intern Infobyte with verification link.
8. **CTA** — "Open for opportunities" banner with "Let's work together!" message and contact button.
9. **Contact Form** — Name, email, message fields with validation (mailto-based, no backend).
10. **Footer** — MADHUMITA C name, social links (LinkedIn, GitHub, HackerRank), copyright.

### Technical Approach
- Single Index page with component-based architecture (separate components per section)
- Intersection Observer for scroll-reveal animations
- CSS keyframe typing animation
- Smooth scroll navigation
- Fully responsive with mobile-first breakpoints

