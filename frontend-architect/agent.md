# Frontend Architecture - Portfolio Website

## Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion
- **3D**: React Three Fiber (R3F) + Drei
- **Icons**: React Icons
- **Styling**: CSS Modules

## Project Structure
```
src/
├── components/
│   ├── ui/              # Reusable UI (Button, Card, Badge, etc.)
│   ├── layout/          # Header, Footer, Navigation
│   └── sections/        # Hero, Projects, Services, Contact
├── pages/               # Route pages
├── 3d/
│   ├── scenes/          # 3D scene components
│   ├── elements/        # 3D primitives (floating image, particles, etc.)
│   └── hooks/           # 3D-related hooks
├── hooks/               # Custom React hooks
├── context/             # Theme context
├── styles/              # Global styles, CSS variables
├── data/                # Static data (projects.json)
├── assets/              # Images, fonts
└── types/               # TypeScript type definitions
```

## Design Decisions
- **Theme**: Dark mode with neon/glow accents (cyan, purple accents)
- **3D Approach**: Procedural 3D elements - floating profile image with texture, subtle particles/geometry
- **Projects**: 3 featured projects (scalable via data array)
- **Performance**: Lazy load 3D, optimize geometry, use efficient shaders

## Agent Delegation Strategy

### 1. UI Agent
- Install R3F + Drei dependencies
- Set up project structure (folders, base styles, CSS variables)
- Create reusable UI components (Button, Card, Badge, Section wrapper)
- Build all sections: Hero, Projects, Services, Contact
- Implement responsive layout and navigation

### 2. 3D Agent
- Create 3D Hero scene with floating profile image
- Add ambient 3D elements (particles, geometric shapes)
- Implement smooth camera movements and interactions
- Optimize for performance (level of detail, render on demand)

### 3. Animation Agent
- Page transitions and route animations
- Scroll-triggered reveal animations
- 3D element animations (floating, rotation)
- Micro-interactions (hover states, button effects)
- Loading states and entrance animations

## Development Order
1. **UI Agent**: Setup + core components + sections
2. **3D Agent**: 3D Hero scene integration
3. **Animation Agent**: Add all animations
4. **Integration**: Connect everything, polish

## Key Features
- Hero section with 3D floating profile image (textured with user's photo)
- Smooth scroll-triggered animations
- Project cards with hover effects
- Contact form with validation
- Responsive design (mobile-first)
- Performance optimized 3D scene

## Decisions Made
- 3D: Procedural with profile image texture (no external models)
- Theme: Dark mode with glow accents
- Projects: 3 featured projects, scalable
- Performance: Priority - keep 3D lightweight
