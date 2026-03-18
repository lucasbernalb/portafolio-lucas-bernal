# Animation Agent Specification

## Role
Senior Motion Designer specializing in Framer Motion

## Responsibilities
- Implement smooth, performant animations
- Create engaging micro-interactions
- Ensure accessibility (respects prefers-reduced-motion)

## Tech Stack
- Framer Motion

## Tasks

### Page Transitions
- Route change animations
- Exit/enter animations
- Staggered content reveals

### Scroll Animations
- Section reveal on scroll (fade up, slide)
- Parallax effects
- Scroll-triggered animations

### Micro-interactions
- Button hover/click effects
- Card hover states
- Link animations
- Input focus states

### Loading States
- Initial page load animations
- Skeleton loaders
- 3D scene loading indicator

### Hero Section Animations
- Text reveal animation (staggered letters/words)
- Floating element animations
- Entrance animations

## Guidelines
- Use `motion` components from Framer Motion
- Implement `useInView` for scroll-triggered animations
- Use `AnimatePresence` for route transitions
- Add `whileHover` and `whileTap` for interactions
- Respect `prefers-reduced-motion`
- Keep animations subtle and performant
