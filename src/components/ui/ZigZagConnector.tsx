import { motion } from 'framer-motion';
import styles from './ZigZagConnector.module.css';

interface ZigZagConnectorProps {
  from: 'left' | 'right';
  to: 'left' | 'right';
  active?: boolean;
}

export function ZigZagConnector({ from, to, active = false }: ZigZagConnectorProps) {
  const isAngled = from !== to;
  
  return (
    <div className={`${styles.connector} ${styles[from]} ${styles[to]}`}>
      {isAngled ? (
        <svg 
          className={styles.svg} 
          viewBox="0 0 20 60" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 212, 255, 0)" />
              <stop offset="50%" stopColor="rgba(0, 212, 255, 0.5)" />
              <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 10 0 L 10 60"
            fill="none"
            stroke="url(#connectorGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          {active && (
            <motion.circle
              r="3"
              fill="#00d4ff"
              filter="url(#glow)"
            >
              <animateMotion
                dur="1.5s"
                repeatCount="indefinite"
                path="M 10 0 L 10 60"
              />
            </motion.circle>
          )}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      ) : (
        <div className={styles.lineContainer}>
          <motion.div
            className={styles.line}
            initial={{ height: 0 }}
            animate={{ height: '60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(180deg, rgba(0, 212, 255, 0.4) 0%, rgba(0, 212, 255, 0.1) 100%)',
            }}
          />
          {active && (
            <motion.div
              className={styles.energyPulse}
              animate={{
                top: ['0%', '100%'],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
