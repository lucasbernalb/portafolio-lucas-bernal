import { motion } from 'framer-motion';
import { HeroScene } from '../../3d/scenes/HeroScene';
import styles from './Hero.module.css';

const heroContent = {
  name: 'Berny',
  title: 'Full Stack Developer',
  subtitle: 'Building digital experiences with passion and precision. I craft modern, performant web applications that deliver exceptional user experiences.',
  cta: 'View My Work',
  socialLinks: [
    { label: 'GitHub', url: '#' },
    { label: 'LinkedIn', url: '#' },
    { label: 'Twitter', url: '#' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.greeting} variants={itemVariants}>
            Hello, I&apos;m
          </motion.p>
          
          <motion.h1 className={styles.name} variants={itemVariants}>
            {heroContent.name}
          </motion.h1>
          
          <motion.h2 className={styles.title} variants={itemVariants}>
            {heroContent.title}
          </motion.h2>
          
          <motion.p className={styles.subtitle} variants={itemVariants}>
            {heroContent.subtitle}
          </motion.p>
          
          <motion.div className={styles.cta} variants={itemVariants}>
            <a href="#projects" className={styles.ctaButton}>
              {heroContent.cta}
            </a>
          </motion.div>
          
          <motion.div className={styles.social} variants={itemVariants}>
            {heroContent.socialLinks.map((link) => (
              <a key={link.label} href={link.url} className={styles.socialLink}>
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          className={styles.scene}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <HeroScene />
        </motion.div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={styles.scrollMouse}
        />
      </div>
    </section>
  );
}
