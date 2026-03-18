import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import styles from './Contact.module.css';

const contactContent = {
  title: 'Get In Touch',
  subtitle: "Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.",
  email: 'hello@berny.dev',
  social: [
    { label: 'GitHub', url: '#', icon: 'FaGithub' },
    { label: 'LinkedIn', url: '#', icon: 'FaLinkedin' },
    { label: 'Twitter', url: '#', icon: 'FaTwitter' },
    { label: 'Email', url: 'mailto:hello@berny.dev', icon: 'FaEnvelope' },
  ],
};

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub />,
  FaLinkedin: <FaLinkedin />,
  FaTwitter: <FaTwitter />,
  FaEnvelope: <FaEnvelope />,
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Contact</span>
          <h2 className={styles.title}>{contactContent.title}</h2>
          <p className={styles.subtitle}>{contactContent.subtitle}</p>

          <a href={`mailto:${contactContent.email}`} className={styles.emailLink}>
            <span>{contactContent.email}</span>
            <FaArrowRight className={styles.arrow} />
          </a>

          <div className={styles.social}>
            {contactContent.social.map((item) => (
              <a 
                key={item.label}
                href={item.url}
                className={styles.socialLink}
                aria-label={item.label}
              >
                {iconMap[item.icon]}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} Berny. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
