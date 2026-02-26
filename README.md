# Jenish Vekariya – Angular Portfolio

A professional portfolio built with **Angular 17**, **Angular Material**, and **SCSS**.

## 🏗️ Project Structure

```
src/app/
├── app.component.ts          # Root component
├── app.config.ts             # Application config (standalone)
├── app.routes.ts             # Lazy-loaded routes
│
├── core/
│   ├── models/
│   │   └── portfolio.model.ts        # TypeScript interfaces
│   ├── services/
│   │   └── portfolio.service.ts      # All portfolio data
│   └── navbar/
│       ├── navbar.component.ts
│       ├── navbar.component.html
│       └── navbar.component.scss
│
├── shared/
│   └── directives/
│       └── reveal.directive.ts       # IntersectionObserver scroll reveal
│
└── features/
    ├── home/          # Hero section + stats bar
    ├── about/         # Bio, quick facts, social links
    ├── experience/    # Timeline with NgRx/Bootstrap work
    ├── skills/        # 6-column skill grid with tags
    ├── projects/      # Vidyalaya + Supermarket cards
    ├── education/     # Education + certificates
    └── contact/       # Contact form + social links + footer
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
ng serve

# 3. Open browser
# http://localhost:4200
```

### Build for Production

```bash
ng build --configuration production
```

## 🎨 Tech Stack

| Layer        | Technology                  |
|--------------|-----------------------------|
| Framework    | Angular 17 (Standalone APIs)|
| UI Library   | Angular Material 17          |
| Styling      | SCSS + CSS Custom Properties |
| Routing      | Angular Router (lazy-loaded) |
| State        | Component signals + services |
| Animations   | IntersectionObserver reveal  |

## 📁 Routes

| Path          | Component         |
|---------------|-------------------|
| `/`           | HomeComponent     |
| `/about`      | AboutComponent    |
| `/experience` | ExperienceComponent|
| `/skills`     | SkillsComponent   |
| `/projects`   | ProjectsComponent |
| `/education`  | EducationComponent|
| `/contact`    | ContactComponent  |

## 🔧 Customization

All portfolio data lives in one place:
**`src/app/core/services/portfolio.service.ts`**

Edit `getProfile()`, `getExperiences()`, `getProjects()`, etc. to update content.
