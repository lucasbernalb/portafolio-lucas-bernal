import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export function ScrollLine() {
  const { scrollY } = useScroll();
  const [height, setHeight] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.max(0, latest / maxScroll);
    setHeight(progress * 100);
  });

  return (
    <div
      style={{
        position: 'fixed',
        left: '20px',
        top: 0,
        bottom: 0,
        width: '2px',
        zIndex: 9998,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: `${height}%`,
          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.1) 5%, rgba(0, 212, 255, 0.6) 50%, rgba(0, 212, 255, 0.1) 95%, transparent 100%)',
          boxShadow: '0 0 8px rgba(0, 212, 255, 0.4)',
          borderRadius: '2px',
          opacity: height > 5 ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  );
}
