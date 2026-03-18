import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaPalette, FaLightbulb, FaWrench } from 'react-icons/fa';
import { SectionMarker } from '../ui/SectionMarker';
import styles from './Services.module.css';
import skills from '../../data/skills.json';

const icons: Record<string, React.ReactNode> = {
  code: <FaCode />,
  palette: <FaPalette />,
  lightbulb: <FaLightbulb />,
  tools: <FaWrench />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.services} id="services" ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.headerWithMarker}>
            <SectionMarker active={isInView} position="left" />
            <div>
              <span className={styles.label}>Services</span>
              <h2 className={styles.title}>What I Do</h2>
              <p className={styles.subtitle}>
                Delivering comprehensive solutions tailored to your needs
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.services.map((service) => (
            <motion.div 
              key={service.title}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.iconWrapper}>
                {icons[service.icon]}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.skillsSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className={styles.skillsTitle}>Technologies I Work With</h3>
          <div className={styles.skillCategories}>
            {skills.skills.map((category) => (
              <div key={category.category} className={styles.skillCategory}>
                <h4 className={styles.categoryTitle}>{category.category}</h4>
                <div className={styles.skillTags}>
                  {category.items.map((item) => (
                    <span key={item} className={styles.skillTag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
