import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ZigZagTimeline.module.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export function ZigZagTimeline() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = sections.findIndex(s => s.id === activeSection);

  return (
    <div className={styles.timeline}>
      {sections.map((section, index) => {
        const isLeft = index % 2 === 0;
        const isActive = activeSection === section.id;
        const isPast = index < activeIndex;

        return (
          <div
            key={section.id}
            className={`${styles.node} ${isLeft ? styles.left : styles.right} ${isActive ? styles.active : ''}`}
          >
            <motion.button
              className={styles.nodeButton}
              onClick={() => handleClick(section.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.nodeInner} />
              <motion.span 
                className={styles.nodeGlow}
                animate={{
                  opacity: isActive ? 0.9 : 0.4,
                  scale: isActive ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.span 
              className={styles.label}
              initial={{ opacity: 0, x: isLeft ? 15 : -15 }}
              animate={{ 
                opacity: isActive ? 1 : 0.6,
                x: 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {section.label}
            </motion.span>

            {index < sections.length - 1 && (
              <div 
                className={styles.connector}
                style={{
                  background: isPast || isActive 
                    ? 'linear-gradient(180deg, rgba(0, 212, 255, 0.9) 0%, rgba(0, 212, 255, 0.3) 100%)'
                    : 'linear-gradient(180deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0.05) 100%)',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
