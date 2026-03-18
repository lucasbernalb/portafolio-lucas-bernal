import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export function ScrollProgress() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const heroHeight = window.innerHeight;
    
    if (latest > heroHeight * 0.8) {
      setVisible(true);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (latest / maxScroll) * 100;
      setProgress(currentProgress);
    } else {
      setVisible(false);
    }
  });

  if (!visible) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'transparent',
        zIndex: 9999,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #00d4ff 0%, #7c3aed 50%, #00d4ff 100%)',
          boxShadow: '0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(124, 58, 237, 0.3)',
          borderRadius: '0 2px 2px 0',
        }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </motion.div>
  );
}
