# Trainify - Complete Fitness Management Platform

<div align="center">

![Trainify Logo](https://img.shields.io/badge/Trainify-Fitness%20Platform-2BC48A?style=for-the-badge&logo=react&logoColor=white)

**A comprehensive fitness and nutrition management platform built with React, TypeScript, and Tailwind CSS**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.12-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

[Features](#key-features) • [Getting Started](#getting-started) • [Project Structure](#project-structure) • [Documentation](#documentation)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [User Roles & Access](#user-roles--access)
- [Pages & Components](#pages--components)
- [Authentication System](#authentication-system)
- [Styling & Design](#styling--design)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Trainify** is a modern, full-featured fitness management platform designed to help users track their fitness journey, manage meal plans, access workout programs, and utilize advanced fitness calculators. The platform serves three main user types:

- **Regular Users**: Access personal dashboards, track workouts and meals, view subscription plans
- **Admins**: Full CRUD operations on meal plans, training programs, and user management
- **Visitors**: Access landing page, fitness calculators, and authentication pages

The platform emphasizes user experience with smooth animations, responsive design, and intuitive navigation, making fitness tracking accessible and engaging for everyone.

---

## Key Features

### Public Features (No Login Required)

- **Landing Page** with hero section, about, services, and contact sections
- **8 Advanced Fitness Calculators**:
  - BMI Calculator (Body Mass Index)
  - BMR Calculator (Basal Metabolic Rate)
  - TDEE Calculator (Total Daily Energy Expenditure)
  - Macro Calculator (Protein, Carbs, Fats distribution)
  - Body Fat Percentage Calculator
  - Ideal Weight Calculator
  - Water Intake Calculator
  - One Rep Max Calculator
- **Responsive Navigation** with mobile menu support
- **Smooth Scrolling** and animated sections

### User Features (Requires Login)

- **Personal Dashboard** with 4 main tabs:
  - **Info Tab**: Personal trainee information display
  - **Workouts Tab**: Assigned training programs with detailed exercise cards
  - **Meals Tab**: Personalized meal plans with nutrition facts
  - **Plan Tab**: Current subscription details (Gold/Platinum/Diamond)
- **Meal Preview Modals** with complete nutrition information
- **Workout Tracking** with exercise details and scheduling
- **Tab-based Navigation** in navbar for quick access
- **Profile Management**

### Admin Features (Admin Dashboard)

- **Overview Dashboard** with key metrics and statistics
- **Meal Plans Management**:
  - View all meal plans in data table
  - Add/Edit/Delete meal plans
  - Preview meal details
  - Search and filter functionality
  - Plan tier assignment (Gold/Platinum/Diamond)
- **Training Programs Management**:
  - CRUD operations for workout programs
  - Difficulty levels (Beginner/Intermediate/Advanced)
  - Duration and frequency settings
- **User Management**:
  - View all registered users
  - Manage user roles and status
  - Track user activity
- **Sidebar Navigation** with collapsible menu
- **Data Tables** with sorting, pagination, and bulk actions

### Design & UX Features

- **Custom Gradient Themes** (#FF6B35 to #2BC48A)
- **Glassmorphism Effects** on cards and modals
- **Smooth Animations**:
  - Fade-in/out effects
  - Scale transformations
  - Hover effects
  - Page transitions
- **Custom Scrollbar** matching brand colors
- **React Icons** integration throughout
- **Responsive Design** for all screen sizes
- **Loading States** and error handling

---

## Tech Stack

### Core Technologies

- **React 19.1.1** - UI library with latest features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.1.7** - Lightning-fast build tool
- **React Router 7.9.4** - Client-side routing

### Styling & UI

- **Tailwind CSS 3.4.12** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Custom CSS Animations** - Fade, scale, float effects
- **React Icons 5.5.0** - Comprehensive icon library

### Form Management

- **Formik 2.4.6** - Form state management
- **Yup 1.7.1** - Schema validation

### Development Tools

- **ESLint 9.36.0** - Code linting
- **TypeScript ESLint 8.45.0** - TypeScript-specific linting
- **Autoprefixer 10.4.21** - CSS vendor prefixing

---

## Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn**
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MohamedTarek889/Trainify_Project.git
   cd Trainify_Project
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

The production build will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## Project Structure

```
Trainify_Project/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images and media
│   │   └── imgs/
│   │       └── landing/         # Landing page images
│   │           ├── hero.jpg
│   │           └── about.jpg
│   │
│   ├── components/              # React components
│   │   ├── common/              # Shared components
│   │   │   ├── Navbar.tsx       # Main navigation with auth
│   │   │   ├── NavbarWrapper.tsx # Navbar container
│   │   │   ├── Footer.tsx       # Site footer
│   │   │   ├── ContactForm.tsx  # Contact form
│   │   │   └── ContactInfo.tsx  # Contact information
│   │   │
│   │   ├── shared/              # Reusable UI components
│   │   │   ├── Logo.tsx         # Trainify logo component
│   │   │   ├── Button.tsx       # Custom button
│   │   │   ├── FormField.tsx    # Form input wrapper
│   │   │   ├── GradientText.tsx # Text with gradient
│   │   │   ├── IconBox.tsx      # Icon container
│   │   │   ├── SectionTitle.tsx # Section heading
│   │   │   ├── SocialLink.tsx   # Social media link
│   │   │   ├── StatCard.tsx     # Statistics card
│   │   │   └── BackgroundDecoration.tsx
│   │   │
│   │   ├── sections/            # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── hero/            # Hero subsections
│   │   │   │   ├── HeroContent.tsx
│   │   │   │   ├── FloatingParticles.tsx
│   │   │   │   └── ScrollIndicator.tsx
│   │   │   ├── about/           # About subsections
│   │   │   │   ├── AboutContent.tsx
│   │   │   │   ├── AboutImage.tsx
│   │   │   │   └── AboutStats.tsx
│   │   │   ├── services/        # Services subsections
│   │   │   │   ├── ServiceCard.tsx
│   │   │   │   ├── servicesData.ts
│   │   │   │   └── types.ts
│   │   │   └── contact/         # Contact subsections
│   │   │       ├── ContactItemCard.tsx
│   │   │       └── contactData.ts
│   │   │
│   │   ├── dashboards/          # Admin dashboard components
│   │   │   ├── Layout/
│   │   │   │   ├── Layout.tsx   # Admin layout wrapper
│   │   │   │   ├── context.ts   # Layout context
│   │   │   │   └── useLayout.ts # Layout hook
│   │   │   ├── Sidebar/
│   │   │   │   └── Sidebar.tsx  # Admin sidebar
│   │   │   ├── Topbar/
│   │   │   │   └── Topbar.tsx   # Admin topbar
│   │   │   ├── DataTable/       # Table component
│   │   │   │   ├── DataTable.tsx
│   │   │   │   ├── Actions.tsx
│   │   │   │   ├── EmptyState.tsx
│   │   │   │   ├── Pagination.tsx
│   │   │   │   └── types.ts
│   │   │   ├── OverviewCards/
│   │   │   │   └── OverviewCards.tsx
│   │   │   ├── AddEditModal/
│   │   │   │   └── AddEditModal.tsx
│   │   │   ├── MealModal/
│   │   │   │   └── MealModal.tsx
│   │   │   ├── MealPreviewModal/
│   │   │   │   └── MealPreviewModal.tsx
│   │   │   └── ConfirmDialog/
│   │   │       └── ConfirmDialog.tsx
│   │   │
│   │   ├── user/                # User dashboard components
│   │   │   ├── UserInfoTab.tsx  # User information display
│   │   │   ├── WorkoutGrid.tsx  # Workout cards grid
│   │   │   ├── WorkoutCard.tsx  # Individual workout card
│   │   │   ├── MealGrid.tsx     # Meal cards grid
│   │   │   ├── MealCard.tsx     # Individual meal card
│   │   │   └── PlanDetails.tsx  # Subscription plan info
│   │   │
│   │   ├── ProtectedRoute.tsx   # Route guard component
│   │   └── index.ts             # Component exports
│   │
│   ├── context/                 # React Context
│   │   └── AuthContext.tsx      # Authentication context
│   │
│   ├── pages/                   # Page components
│   │   ├── LandingPage.tsx      # Public landing page
│   │   ├── LoginPage.tsx        # Login page
│   │   ├── RegisterPage.tsx     # Registration page
│   │   ├── CalculatorPage.tsx   # 8 fitness calculators
│   │   ├── UserDashboard.tsx    # User main dashboard
│   │   ├── DashboardLayout.tsx  # Admin layout wrapper
│   │   ├── dashboard.tsx        # Admin overview
│   │   ├── MealPlansPage.tsx    # Admin meal management
│   │   ├── TrainingProgramsPage.tsx # Admin workout management
│   │   ├── UsersPage.tsx        # Admin user management
│   │   └── index.ts             # Page exports
│   │
│   ├── data/                    # Sample data
│   │   └── sample.tsx           # Mock data for development
│   │
│   ├── App.tsx                  # Main App component
│   ├── main.tsx                 # Application entry point
│   ├── index.css                # Global styles
│   └── App.css                  # App-specific styles
│
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tsconfig.app.json            # App TypeScript config
├── tsconfig.node.json           # Node TypeScript config
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── eslint.config.js             # ESLint configuration
├── AUTH_SYSTEM_README.md        # Auth documentation
├── DASHBOARD_STRUCTURE.md       # Dashboard documentation
├── COMPONENTS_README.md         # Components documentation
└── README.md                    # This file
```

---

## User Roles & Access

### Public Access (No Authentication)

- Landing page with all sections
- Fitness calculators (8 tools)
- Login and registration pages
- Contact form

### User Role (Authenticated)

**Access to:**

- User dashboard (`/user-dashboard`)
- Personal information tab
- Workouts tab (assigned programs)
- Meals tab (meal plans)
- Subscription plan details
- Navbar with quick links to all tabs
- Calculator page
- Logout functionality

**Cannot access:**

- Admin dashboard routes
- Meal/workout management pages
- User management

### Admin Role (Authenticated)

**Access to:**

- Admin dashboard (`/dashboard`)
- Overview with statistics
- Meal plans management (`/dashboard/meals`)
- Training programs management (`/dashboard/training`)
- User management (`/dashboard/users`)
- Full CRUD operations
- Data tables with advanced features
- Calculator page (same as public)

**Cannot access:**

- User dashboard routes (will redirect to admin dashboard)

---

## Pages & Components

### Public Pages

#### Landing Page (`/`)

**Sections:**

- **Hero Section**: Eye-catching hero with animated particles, gradient overlays, and CTA buttons
  - "Try Calculator" button → navigates to `/calculator`
  - "Join Now" button → navigates to `/register`
- **About Section**: Company information with stats and images
- **Services Section**: Three main services (Calculator, Workouts, Recipes)
- **Contact Section**: Contact form and information cards

#### Calculator Page (`/calculator`)

**8 Advanced Calculators:**

1. **BMI Calculator** - Body Mass Index calculation
2. **BMR Calculator** - Basal Metabolic Rate
3. **TDEE Calculator** - Total Daily Energy Expenditure
4. **Macro Calculator** - Macronutrients distribution
5. **Body Fat Calculator** - Navy Method
6. **Ideal Weight Calculator** - Multiple formulas
7. **Water Intake Calculator** - Daily hydration needs
8. **One Rep Max Calculator** - Strength calculation

#### Login Page (`/login`)

- Email and password fields
- Show/hide password toggle
- Form validation with error messages
- Role determination based on email (demo)
- Protected: Redirects to home if already logged in

#### Register Page (`/register`)

- Full name, email, phone, password fields
- Password confirmation
- Role selection (User/Admin)
- Comprehensive form validation
- Protected: Redirects to home if already logged in

### User Pages

#### User Dashboard (`/user-dashboard`)

**Protected Route - Requires User Role**

**Tab Navigation** (in Navbar):

- Info - Personal information
- Workouts - Training programs
- Meals - Meal plans
- Plan - Subscription details

**Tabs controlled via URL query parameters:**

- `/user-dashboard?tab=info` - Default tab
- `/user-dashboard?tab=workouts`
- `/user-dashboard?tab=meals`
- `/user-dashboard?tab=plan`

### Admin Pages

#### Admin Dashboard (`/dashboard`)

**Protected Route - Requires Admin Role**

**Features:**

- Overview cards with statistics
- Quick navigation to management pages
- Search functionality
- Real-time data display

#### Meal Plans Page (`/dashboard/meals`)

**Protected Route - Requires Admin Role**

**Features:**

- DataTable with all meals
- Search and filter functionality
- Sorting by columns
- Pagination
- CRUD operations (Add/Edit/Delete/Preview)

#### Training Programs Page (`/dashboard/training`)

**Protected Route - Requires Admin Role**

**Similar to Meal Plans with:**

- DataTable for workout programs
- CRUD operations
- Level-based filtering

#### Users Page (`/dashboard/users`)

**Protected Route - Requires Admin Role**

**Features:**

- DataTable with all users
- User management actions
- Search by name or email
- Filter by role/status

---

## Authentication System

### Implementation Details

**Context-based Authentication:**

- `AuthContext.tsx` provides global auth state
- `useAuth()` hook for components
- Local storage persistence

**User Object:**

```typescript
interface User {
  email: string;
  name: string;
  role: "admin" | "user";
}
```

**Auth Methods:**

- `login(email, password, role)` - Authenticates user
- `logout()` - Clears auth state
- `isAuthenticated` - Boolean flag
- `isLoading` - Loading state during initialization

**Protected Routes:**

- `ProtectedRoute` component wraps protected pages
- Checks authentication status
- Verifies user role
- Redirects unauthenticated users to login

**Demo Login:**

- Emails containing "admin" → Admin role
- Other emails → User role
- No backend validation (demo purposes)

---

## Styling & Design

### Design System

**Color Palette:**

- **Primary Gradient**: `#FF6B35` → `#2BC48A`
- **Text Colors**: Gray scale (50-900)
- **Success**: Green shades
- **Warning**: Yellow/Orange shades
- **Error**: Red shades
- **Info**: Blue shades

**Typography:**

- **Font Family**: System fonts (sans-serif stack)
- **Headings**: Bold (600-900 weight)
- **Body**: Regular (400 weight)
- **Sizes**: Responsive (text-sm to text-8xl)

### Animation System

**CSS Keyframes:**

```css
@keyframes fade-in-up
@keyframes fade-in-down
@keyframes fade-in-left
@keyframes fade-in-right
@keyframes scale-in
@keyframes float
@keyframes blob;
```

**Tailwind Custom Animations:**

```javascript
animation: {
  blob: "blob 7s infinite",
  "blob-delay-2000": "blob 7s infinite 2s",
  "blob-delay-4000": "blob 7s infinite 4s",
}
```

### Custom Components

**Glassmorphism:**

```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
```

**Gradient Buttons:**

```tsx
className="bg-gradient-to-r from-[#FF6B35] to-[#2BC48A]
  hover:from-[#e55a2b] hover:to-[#25a877]"
```

**Custom Scrollbar:**

```css
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ff6b35 0%, #2bc48a 100%);
}
```

### Responsive Design

**Breakpoints:**

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Mobile-First Approach:**

- Base styles for mobile
- Progressive enhancement for larger screens
- Hamburger menu on mobile
- Collapsible sidebar on tablets
- Full sidebar on desktop

---

## Available Scripts

### Development

```bash
# Start development server with hot reload
npm run dev

# Access at http://localhost:5173
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint -- --fix
```

### Type Checking

```bash
# Run TypeScript compiler check
npx tsc --noEmit
```

---

## Contributing

We welcome contributions to Trainify! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Make your changes
4. Commit with conventional commits
   ```bash
   git commit -m "feat: Add amazing feature"
   ```
5. Push to your branch
   ```bash
   git push origin feature/AmazingFeature
   ```
6. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Build process or auxiliary tool changes

---

## Additional Documentation

- **[AUTH_SYSTEM_README.md](AUTH_SYSTEM_README.md)** - Detailed authentication system documentation
- **[DASHBOARD_STRUCTURE.md](DASHBOARD_STRUCTURE.md)** - Admin dashboard architecture
- **[COMPONENTS_README.md](src/components/COMPONENTS_README.md)** - Component library guide

---

## Roadmap

### Phase 1 (Current)

- [x] Landing page with all sections
- [x] Authentication system
- [x] User dashboard with tabs
- [x] Admin dashboard with CRUD
- [x] 8 Fitness calculators
- [x] Responsive design
- [x] Custom animations

### Phase 2 (Upcoming)

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Payment integration for subscriptions
- [ ] Workout video library
- [ ] Progress tracking charts
- [ ] Social features (share achievements)

### Phase 3 (Future)

- [ ] AI-powered meal recommendations
- [ ] Virtual trainer chat
- [ ] Community forums
- [ ] Wearable device integration
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

---

## Known Issues

- **Demo Mode**: Authentication is simulated (no backend)
- **Sample Data**: All data is hardcoded for demonstration
- **Image Loading**: Some images use placeholder URLs

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **React Team** for the amazing library
- **Tailwind CSS** for the utility-first framework
- **Vite** for the blazing-fast build tool
- **React Icons** for the comprehensive icon library
- **DEPI Program** for the learning opportunity

---

<div align="center">

**GitHub Repository**

[![GitHub](https://img.shields.io/badge/GitHub-MohamedTarek889-181717?style=flat&logo=github)](https://github.com/MohamedTarek889)

**Trainify - Transform Your Body & Mind**

</div>
