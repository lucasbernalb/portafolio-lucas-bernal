import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollY } = useScroll();
  
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'rgba(255, 255, 255, 0.05)',
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #00d4ff 0%, #7c3aed 50%, #00d4ff 100%)',
          boxShadow: '0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(124, 58, 237, 0.3)',
          borderRadius: '0 2px 2px 0',
          scaleX: scrollY,
          originX: 0,
        }}
      />
    </motion.div>
  );
}
