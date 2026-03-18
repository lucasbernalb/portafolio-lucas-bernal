import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionMarker } from '../ui/SectionMarker';
import styles from './About.module.css';

const aboutContent = {
  title: 'About Me',
  description: `I'm a passionate Full Stack Developer with expertise in building modern web applications. 
  With several years of experience in the field, I specialize in creating performant, scalable, 
  and user-friendly solutions.

  My journey started with curiosity for how things work on the web, and it evolved into a career 
  where I get to build products that make a difference. I love tackling complex problems and 
  turning ideas into reality through code.

  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
  projects, or sharing knowledge with the developer community.`,
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face'
};

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Vue.js', level: 80 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'AWS / DevOps', level: 70 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className={styles.headerWithMarker}>
            <SectionMarker active={isInView} position="left" />
            <div>
              <motion.span className={styles.label} variants={itemVariants}>About</motion.span>
              <motion.h2 className={styles.title} variants={itemVariants}>{aboutContent.title}</motion.h2>
            </div>
          </div>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageGlow} />
            <img src={aboutContent.image} alt="Berny" className={styles.image} />
          </motion.div>

          <motion.div 
            className={styles.text}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className={styles.description}>{aboutContent.description}</p>

            <div className={styles.skills}>
              <h3 className={styles.skillsTitle}>Tech Stack</h3>
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className={styles.skillBar}
                  initial={{ opacity: 0, width: 0 }}
                  animate={isInView ? { opacity: 1, width: '100%' } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className={styles.skillInfo}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={styles.skillTrack}>
                    <motion.div 
                      className={styles.skillFill}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
