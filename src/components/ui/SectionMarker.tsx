import { motion } from 'framer-motion';
import styles from './SectionMarker.module.css';

interface SectionMarkerProps {
  active: boolean;
  isPast?: boolean;
  position?: 'left' | 'right';
}

export function SectionMarker({ active, isPast = false, position = 'left' }: SectionMarkerProps) {
  return (
    <div className={`${styles.marker} ${styles[position]}`}>
      <motion.div
        className={styles.outer}
        animate={{
          scale: active ? 1.3 : 1,
          opacity: active ? 1 : isPast ? 0.7 : 0.4,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <motion.div
          className={styles.inner}
          animate={{
            scale: active ? 1 : 0.7,
            backgroundColor: active ? 'rgba(0, 212, 255, 1)' : isPast ? 'rgba(0, 212, 255, 0.6)' : 'rgba(0, 212, 255, 0.3)',
            borderColor: active ? 'rgba(0, 212, 255, 1)' : isPast ? 'rgba(0, 212, 255, 0.7)' : 'rgba(0, 212, 255, 0.4)',
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className={styles.glow}
          animate={{
            opacity: active ? 0.9 : isPast ? 0.5 : 0.2,
            scale: active ? 1.6 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
        {active && (
          <motion.div
            className={styles.pulse}
            animate={{
              scale: [1, 2, 2.5],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
