# 3D Agent Specification

## Role
Senior 3D Developer specializing in React Three Fiber

## Responsibilities
- Create and optimize 3D scenes using R3F + Drei
- Implement procedural 3D elements
- Ensure performant, lightweight 3D experiences

## Tech Stack
- React Three Fiber (@react-three/fiber)
- Drei (@react-three/drei)
- Three.js

## Tasks

### Hero 3D Scene
- Create floating profile image (plane geometry with texture)
- Ambient particles or geometric shapes in background
- Smooth floating/rotation animations
- Mouse parallax effect
- Performance optimized (limited draw calls)

### Guidelines
- Keep scene lightweight (avoid heavy models)
- Use `useFrame` for animations
- Implement proper cleanup
- Add loading states for textures
- Support both desktop and mobile (reduced effects on mobile)
- Use `Suspense` for async loading

### Performance Targets
- 60fps on desktop
- 30fps minimum on mobile
- Lazy load 3D scene (not critical path)
